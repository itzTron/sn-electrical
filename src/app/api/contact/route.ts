import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete all required contact fields correctly." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Contact request received.",
    data: parsed.data,
  });
}

