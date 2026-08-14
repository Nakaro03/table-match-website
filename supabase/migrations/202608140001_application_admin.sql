-- This migration is intentionally idempotent so an interrupted setup can be resumed safely.
create extension if not exists pgcrypto;

do $$
begin
  create type public.opportunity_type as enum (
    'event',
    'internship',
    'company_visit',
    'company_participation'
  );
exception
  when duplicate_object then null;
end
$$;

do $$
begin
  create type public.applicant_type as enum ('student', 'company');
exception
  when duplicate_object then null;
end
$$;

create table if not exists public.people (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  kana text not null,
  email text not null,
  phone text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.student_profiles (
  person_id uuid primary key references public.people(id) on delete cascade,
  school text not null,
  faculty text,
  grade text not null,
  region text,
  under_18 boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  corporate_number text,
  website_url text,
  industry text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.company_contacts (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  department_role text not null,
  email text not null,
  phone text not null,
  preferred_contact text not null check (preferred_contact in ('email', 'phone', 'either')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  type public.opportunity_type not null,
  status text not null default 'preview' check (status in ('open', 'preview', 'closed')),
  title text not null,
  summary text,
  region text not null default 'other' check (region in ('nagano', 'fukuoka', 'other')),
  start_at timestamptz,
  end_at timestamptz,
  location text,
  capacity integer check (capacity is null or capacity >= 0),
  published boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  application_code text not null unique,
  opportunity_id uuid not null references public.opportunities(id) on delete restrict,
  person_id uuid references public.people(id) on delete cascade,
  company_contact_id uuid references public.company_contacts(id) on delete cascade,
  applicant_type public.applicant_type not null,
  application_kind text not null check (
    application_kind in ('event', 'internship', 'company_visit', 'company_participation', 'sponsorship', 'general_contact')
  ),
  status text not null default 'submitted',
  applicant_email_normalized text not null,
  purposes text[] not null default '{}',
  interest_industries text[] not null default '{}',
  desired_companies text,
  desired_students text,
  concern text,
  accommodations text,
  requests text,
  attendees text,
  photo_preference text check (photo_preference is null or photo_preference in ('allowed', 'no_face', 'not_allowed')),
  assigned_admin_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint applicant_reference_check check (
    (applicant_type = 'student' and person_id is not null and company_contact_id is null)
    or
    (applicant_type = 'company' and company_contact_id is not null and person_id is null)
  )
);

create table if not exists public.consent_records (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  consent_type text not null,
  granted boolean not null,
  policy_version text not null,
  source text not null default 'web',
  captured_at timestamptz not null default now()
);

create table if not exists public.attendance_records (
  application_id uuid primary key references public.applications(id) on delete cascade,
  result text check (result is null or result in ('attended', 'no_show')),
  checked_in_at timestamptz,
  group_name text,
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  role text not null check (role in ('staff', 'regional_manager', 'admin')),
  region text not null default 'other' check (region in ('nagano', 'fukuoka', 'other', 'all')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  alter table public.applications
    add constraint applications_assigned_admin_fk
    foreign key (assigned_admin_id) references public.admin_users(user_id) on delete set null;
exception
  when duplicate_object then null;
end
$$;

create table if not exists public.application_notes (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  author_id uuid not null references public.admin_users(user_id) on delete restrict,
  body text not null,
  visibility text not null default 'internal' check (visibility = 'internal'),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_logs (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications(id) on delete cascade,
  admin_user_id uuid references public.admin_users(user_id) on delete set null,
  channel text not null check (channel in ('email', 'phone', 'meeting', 'other')),
  summary text not null,
  contacted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id bigint generated always as identity primary key,
  actor_user_id uuid references public.admin_users(user_id) on delete set null,
  action text not null,
  target_type text not null,
  target_id text not null,
  before_data jsonb,
  after_data jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists applications_opportunity_idx on public.applications(opportunity_id);
create index if not exists applications_status_idx on public.applications(status);
create index if not exists applications_kind_idx on public.applications(application_kind);
create index if not exists applications_email_idx on public.applications(applicant_email_normalized);
create index if not exists applications_submitted_idx on public.applications(submitted_at desc);
create index if not exists consent_records_application_idx on public.consent_records(application_id);
create index if not exists audit_logs_created_idx on public.audit_logs(created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists people_updated_at on public.people;
create trigger people_updated_at before update on public.people
for each row execute function public.set_updated_at();
drop trigger if exists student_profiles_updated_at on public.student_profiles;
create trigger student_profiles_updated_at before update on public.student_profiles
for each row execute function public.set_updated_at();
drop trigger if exists organizations_updated_at on public.organizations;
create trigger organizations_updated_at before update on public.organizations
for each row execute function public.set_updated_at();
drop trigger if exists company_contacts_updated_at on public.company_contacts;
create trigger company_contacts_updated_at before update on public.company_contacts
for each row execute function public.set_updated_at();
drop trigger if exists opportunities_updated_at on public.opportunities;
create trigger opportunities_updated_at before update on public.opportunities
for each row execute function public.set_updated_at();
drop trigger if exists applications_updated_at on public.applications;
create trigger applications_updated_at before update on public.applications
for each row execute function public.set_updated_at();

insert into public.opportunities (id, slug, type, status, title, summary, region, location, capacity, published)
values
  (
    '00000000-0000-4000-8000-000000000006',
    'table-match-fukuoka-6',
    'event',
    'preview',
    '第6回 Table Match 福岡',
    '学生と地域企業の経営者が少人数のテーブルで本音を交わす交流イベント',
    'fukuoka',
    '福岡市内（予定）',
    30,
    true
  ),
  (
    '00000000-0000-4000-8000-000000001001',
    'regional-startup-internship',
    'internship',
    'open',
    '地域企業スタートアップ型インターン',
    '地域企業の事業課題に企画から実行まで取り組む実践型インターン',
    'other',
    '長野・福岡 / 一部オンライン',
    null,
    true
  ),
  (
    '00000000-0000-4000-8000-000000002001',
    'company-visit-dialogue',
    'company_visit',
    'open',
    '地域企業の仕事場を訪ねる会社見学',
    '職場の空気や仕事の面白さを現地で見て聞く少人数見学会',
    'other',
    '長野・福岡の参加企業',
    5,
    true
  ),
  (
    '00000000-0000-4000-8000-000000003001',
    'company-participation',
    'company_participation',
    'open',
    'Table Match 企業出展・協賛相談',
    'イベント出展、インターン募集、会社見学、若者との共創相談',
    'other',
    'オンライン',
    null,
    true
  )
on conflict (id) do update set
  slug = excluded.slug,
  type = excluded.type,
  status = excluded.status,
  title = excluded.title,
  summary = excluded.summary,
  region = excluded.region,
  location = excluded.location,
  capacity = excluded.capacity,
  published = excluded.published;

alter table public.people enable row level security;
alter table public.student_profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.company_contacts enable row level security;
alter table public.opportunities enable row level security;
alter table public.applications enable row level security;
alter table public.consent_records enable row level security;
alter table public.attendance_records enable row level security;
alter table public.admin_users enable row level security;
alter table public.application_notes enable row level security;
alter table public.contact_logs enable row level security;
alter table public.audit_logs enable row level security;

-- The web application accesses these tables only from trusted Server Actions.
-- The service-role key must remain server-side. No anon/authenticated table grants
-- are added here, so direct Data API reads and writes fail closed by default.
