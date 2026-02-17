import { NextResponse } from 'next/server'

const NOTIFY_EMAIL = 'abdulrahman.0523001@gmail.com'

type ConsultationPayload = {
  name: string
  email: string
  phone: string
  company?: string
  legalArea: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}

function validatePayload(body: any): { ok: false; error: string } | { ok: true; data: ConsultationPayload } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' }
  }

  const required = ['name', 'email', 'phone', 'legalArea']
  for (const field of required) {
    if (!body[field] || typeof body[field] !== 'string') {
      return { ok: false, error: `Missing or invalid field: ${field}` }
    }
  }

  return {
    ok: true,
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || '',
      legalArea: body.legalArea,
      preferredDate: body.preferredDate || '',
      preferredTime: body.preferredTime || '',
      message: body.message || '',
    },
  }
}

async function sendViaResend(payload: ConsultationPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      sent: false,
      reason: 'RESEND_API_KEY not configured – email not actually sent (demo mode).',
    }
  }

  const subject = `New Consultation Booking from ${payload.name}`

  const html = `
    <h2>New Consultation Booking</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Company:</strong> ${payload.company || 'N/A'}</p>
    <p><strong>Legal Area:</strong> ${payload.legalArea}</p>
    <p><strong>Preferred Date:</strong> ${payload.preferredDate || 'N/A'}</p>
    <p><strong>Preferred Time:</strong> ${payload.preferredTime || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message || 'N/A'}</p>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Serafy & Partners <no-reply@elserafylawfirm.com>',
      to: [NOTIFY_EMAIL],
      subject,
      html,
      reply_to: payload.email,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Resend error: ${res.status} ${text}`)
  }

  return { sent: true }
}

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => null)
    const validation = validatePayload(json)

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    const payload = validation.data

    // Try to send email; if RESEND_API_KEY missing, we stay in demo mode but still return success
    let sent = false
    let note: string | undefined

    try {
      const result = await sendViaResend(payload)
      sent = result.sent
      if (!result.sent && 'reason' in result) {
        note = result.reason
      }
    } catch (err) {
      console.error('Consultation email send error:', err)
      note = 'Failed to send email via Resend. Check RESEND_API_KEY and configuration.'
    }

    // Always log to server console for debugging
    console.log('[Consultation] New booking:', {
      ...payload,
      notifyEmail: NOTIFY_EMAIL,
      emailSent: sent,
    })

    return NextResponse.json(
      {
        success: true,
        emailSent: sent,
        note,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Consultation submit error:', error)
    return NextResponse.json({ error: 'Failed to submit consultation request' }, { status: 500 })
  }
}

