import { NextResponse } from "next/server";

import { careerSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = careerSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete all required application fields correctly." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Career application received.",
    data: parsed.data,
  });
}

