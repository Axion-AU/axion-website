
import { NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.FORM_SUBMISSION_EMAIL;
const FROM_EMAIL = 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const { name, email, expertise, message } = await request.json();

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
      New Collaboration Inquiry from Axion Ventures\n\n
      From: ${name}\n
      Email: ${email}\n\n
      Interest / Expertise:\n
      ${expertise}\n\n
      Additional Message:\n
      ${message || 'N/A'}
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Collaborate <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `New Collaboration Inquiry from ${name}`,
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
    console.error('Error in /api/collaborate:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
