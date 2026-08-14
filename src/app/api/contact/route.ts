import { NextResponse } from "next/server";

/**
 * Stub handler — validates the payload and logs it server-side. Wire up a
 * real email provider (e.g. Resend) using CONTACT_FORM_API_KEY (see
 * .env.example) before relying on this in production.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.project !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.project.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  console.log("Contact form submission:", {
    name: body.name,
    email: body.email,
    project: body.project,
  });

  return NextResponse.json({ ok: true });
}
