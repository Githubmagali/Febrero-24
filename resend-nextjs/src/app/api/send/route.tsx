//import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_VCdGtck6_3Z6J4bbs4vRpX9b5ZvMqBePs');

export async function POST(request) {
  try {
    const { fullName, email, message } = await request.json(); // Obtener datos del cuerpo JSON

    const data = await resend.emails.send({
      from:'onboarding@resend.dev',
      to: ['magalivictoria85068@gmail.com'], 
      subject: ` ${fullName} ${email}`,
      react: message
    });

    //console.log(data);

    return NextResponse.json({ message: "email sent" }, {
      status: 200
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: "Error" }, {
      status: 500
    });
  }
}
