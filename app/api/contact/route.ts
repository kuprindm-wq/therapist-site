import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      phone,
      format,
      message,
    } = await request.json();

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Контакт не указан",
        },
        {
          status: 400,
        }
      );
    }

    const result = await resend.emails.send({
      from: "Website <onboarding@resend.dev>",

      to: ["kuprindm@gmail.com"],

      subject: "Новая заявка с сайта",

      text: `
Новая заявка

Имя:
${name || "Не указано"}

Контакт:
${phone}

Формат:
${format}

Сообщение:
${message || "Не указано"}
      `,
    });

    console.log("===== RESEND RESULT =====");
    console.dir(result, { depth: null });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log("==================================");
    console.log("API CONTACT ERROR");
    console.log(err);
    console.log("==================================");

    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : String(err),
      },
      {
        status: 500,
      }
    );
  }
}