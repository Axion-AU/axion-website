import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CollaborateFormEmail } from '@/emails/collaborate-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FORM_SUBMISSION_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, expertise, message } = await request.json();
    console.log("Collaborate API route hit. Body:", { name, email, expertise, message });

     if (!toEmail) {
      console.error("FORM_SUBMISSION_EMAIL environment variable is not set.");
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }
    
    console.log(`Attempting to send email to ${toEmail}`);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Collaboration Inquiry from ${name}`,
      reply_to: email,
      react: <CollaborateFormEmail name={name} email={email} expertise={expertise} message={message} />,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully via Resend:", data);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (e: any) {
    console.error("Error processing request:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
