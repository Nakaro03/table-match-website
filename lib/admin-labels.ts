export const statusLabels: Record<string, string> = {
  submitted: "新規受付",
  reviewing: "確認中",
  contacted: "連絡済み",
  confirmed: "参加確定",
  waitlisted: "キャンセル待ち",
  completed: "完了",
  cancelled: "キャンセル",
  withdrawn: "辞退",
}

export const statusOptions = Object.entries(statusLabels)

export const kindLabels: Record<string, string> = {
  event: "イベント",
  internship: "インターン",
  company_visit: "会社見学",
  company_participation: "企業参加",
  sponsorship: "協賛",
  general_contact: "相談",
}

export function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value))
}
