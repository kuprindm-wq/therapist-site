import { NextResponse } from "next/server";

export async function GET() {
  const data = "A".repeat(102400);

  return new NextResponse(data, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Content-Length": String(data.length),
    },
  });
}