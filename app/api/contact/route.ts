import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 },
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Precision Motorsports <support@precision-motorsports.com>', // You can change this after verifying your domain
      to: process.env.CONTACT_EMAIL || 'support@precision-motorsports.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4a9eff; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Service:</strong> ${service}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #4a9eff; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Service: ${service}

Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      // Check if it's a domain verification error
      if (error.message?.includes('verify a domain')) {
        return NextResponse.json(
          {
            error:
              'Domain verification required. Please verify your domain at resend.com/domains to send emails to any address.',
          },
          { status: 500 },
        )
      }

      return NextResponse.json(
        { error: error.message || 'Failed to send email. Please try again later.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 },
    )
  }
}
