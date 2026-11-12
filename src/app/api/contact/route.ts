import { NextResponse } from "next/server";

export const runtime = "nodejs";

const budgets = new Set(["under-5000", "5000-10000", "10000-15000", "over-15000"]);

type Payload = {
  name?: unknown;
  email?: unknown;
  url?: unknown;
  budget?: unknown;
  details?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Send the form as JSON." }, { status: 400 });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const url = text(payload.url);
  const budget = text(payload.budget);
  const details = text(payload.details);

  if (!name || !email.includes("@") || !url || !details || !budgets.has(budget)) {
    return NextResponse.json(
      { error: "Name, email, website, budget, and project details are required." },
      { status: 400 },
    );
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Email is not configured yet. Add a Resend API key to send this form." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Hammet <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? "team@example.com",
      reply_to: email,
      subject: `Project inquiry from ${name}`,
      text: `${name}\n${email}\n${url}\n${budget}\n\n${details}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "The message could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
