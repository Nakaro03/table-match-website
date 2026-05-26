import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, organization, type, message } = body

    // Validate required fields
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      )
    }

    // Map type to Japanese
    const typeLabels: Record<string, string> = {
      student: "学生（イベント参加について）",
      company: "企業様（出展について）",
      other: "その他",
    }

    // Create email content
    const emailContent = `
Table Match ウェブサイトからのお問い合わせ

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お名前】
${name}

【メールアドレス】
${email}

【所属】
${organization || "未入力"}

【お問い合わせ種別】
${typeLabels[type] || type}

【お問い合わせ内容】
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールはTable Matchウェブサイトのお問い合わせフォームから自動送信されています。
    `.trim()

    // Send email using Resend or similar service
    // For now, we'll log to console and return success
    // In production, integrate with an email service
    
    console.log("=== New Contact Form Submission ===")
    console.log("To: tablematch.info@gmail.com")
    console.log("Subject: 【Table Match】ウェブサイトからのお問い合わせ")
    console.log(emailContent)
    console.log("===================================")

    // If RESEND_API_KEY is available, send actual email
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Table Match <noreply@resend.dev>",
          to: ["tablematch.info@gmail.com"],
          reply_to: email,
          subject: `【Table Match】ウェブサイトからのお問い合わせ - ${name}様`,
          text: emailContent,
        }),
      })

      if (!response.ok) {
        throw new Error("Email sending failed")
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "送信に失敗しました" },
      { status: 500 }
    )
  }
}
