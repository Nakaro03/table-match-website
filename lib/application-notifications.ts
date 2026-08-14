import "server-only"

type NotificationInput = {
  applicantEmail: string
  applicantName: string
  applicationCode: string
  opportunityTitle: string
  applicationKind: string
}

async function sendEmail(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.APPLICATION_FROM_EMAIL
  if (!apiKey || !from) return
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text }),
  })
  if (!response.ok) throw new Error(`notification email failed: ${response.status}`)
}

export async function notifyNewApplication(input: NotificationInput) {
  const applicantText = `${input.applicantName} 様\n\nTable Matchへのお申し込みを受け付けました。\n\n対象: ${input.opportunityTitle}\n受付番号: ${input.applicationCode}\n\n内容を確認後、運営よりご連絡します。受付番号はお問い合わせの際に必要です。\n\nTable Match運営`
  const tasks = [sendEmail(input.applicantEmail, `【Table Match】申込受付 ${input.applicationCode}`, applicantText)]
  const operationsEmail = process.env.OPERATIONS_NOTIFICATION_EMAIL
  if (operationsEmail) {
    tasks.push(sendEmail(operationsEmail, `【新規申込】${input.opportunityTitle}`, `新しい申込がありました。\n受付番号: ${input.applicationCode}\n申込者: ${input.applicantName}\n種別: ${input.applicationKind}\n\n管理画面で内容を確認してください。`))
  }
  const results = await Promise.allSettled(tasks)
  results.forEach((result) => { if (result.status === "rejected") console.error(result.reason) })
}
