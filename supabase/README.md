# Supabase setup

1. Create a Supabase project.
2. Run `supabase/migrations/202608140001_application_admin.sql` in the SQL editor or with the Supabase CLI.
3. Add these variables to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

4. In Supabase Auth, create the first operator account.
5. Copy that account's UUID into `admin_users`:

```sql
insert into public.admin_users (user_id, display_name, role, region)
values ('AUTH_USER_UUID', '管理者名', 'admin', 'all');
```

6. Enable TOTP MFA for every operator account before production use.

The service-role key bypasses RLS. Never expose it with a `NEXT_PUBLIC_` prefix or use it in a Client Component.

## 管理者を追加する

1. Supabase Dashboard の Authentication > Users で運営者を作成します。
2. 作成されたユーザーIDを使って、SQL Editor で次を実行します。

```sql
insert into public.admin_users (user_id, display_name, role, region)
values ('AUTH_USER_UUID', '運営者名', 'admin', 'all');
```

`role` は `staff` / `regional_manager` / `admin`、`region` は `nagano` / `fukuoka` / `other` / `all` です。
本番ではAuthenticationのMFAを有効化し、運営者ごとに別アカウントを発行してください。

## 通知メール

Resendを利用する場合は、`.env.local` に `RESEND_API_KEY`、`APPLICATION_FROM_EMAIL`、`OPERATIONS_NOTIFICATION_EMAIL` を設定します。未設定でも申込は保存されますが、受付・運営通知メールは送信されません。
