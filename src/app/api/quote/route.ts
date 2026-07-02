import { NextResponse } from "next/server";

import { quoteSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = quoteSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete all required quote fields correctly." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Quote request received.",
    data: parsed.data,
  });
}

