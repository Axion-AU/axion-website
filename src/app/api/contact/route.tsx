
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.FORM_SUBMISSION_EMAIL;
const FROM_EMAIL = 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!TO_EMAIL) {
      console.error('FORM_SUBMISSION_EMAIL environment variable is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const emailBody = `
      New message from your Axion Ventures contact form\n\n
      From: ${name}\n
      Email: ${email}\n\n
      Message:\n
      ${message}
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Contact Form <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `New Message from ${name} via Axion Ventures`,
        text: emailBody,
        reply_to: email,
      }),
    });

    if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
    } else {
        const error = await res.json();
        console.error('Resend API Error:', error);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

  } catch (e: any) {
    console.error('Error in /api/contact:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
