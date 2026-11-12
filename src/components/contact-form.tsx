"use client";

import { useState, type FormEvent } from "react";

const budgets = [
  { value: "under-5000", label: "Under $5,000" },
  { value: "5000-10000", label: "$5,000–$10,000" },
  { value: "10000-15000", label: "$10,000–$15,000" },
  { value: "over-15000", label: "Over $15,000" },
];

export function ContactForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setError("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        url: data.get("url"),
        budget: data.get("budget"),
        details: data.get("details"),
      }),
    });
    setPending(false);
    const body = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(body.error ?? "The message could not be sent.");
      return;
    }
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      {[
        { id: "01", name: "name", label: "Name", type: "text", required: true },
        { id: "02", name: "email", label: "Email", type: "email", required: true },
        { id: "03", name: "url", label: "Website URL", type: "url", required: true },
      ].map((field) => (
        <label key={field.name} className="block border-b border-ink pb-3">
          <span className="micro text-muted">
            {field.id} {field.label}
          </span>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            className="mt-2 w-full bg-transparent text-xl text-ink outline-none"
          />
        </label>
      ))}
      <fieldset className="border-b border-ink pb-4">
        <legend className="micro text-muted">04 Budget</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {budgets.map((budget) => (
            <label key={budget.value} className="label flex items-center gap-2 text-ink">
              <input type="radio" name="budget" value={budget.value} required />
              {budget.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block border-b border-ink pb-3">
        <span className="micro text-muted">05 Project details</span>
        <textarea
          name="details"
          required
          rows={4}
          className="mt-2 w-full resize-y bg-transparent text-xl text-ink outline-none"
        />
      </label>
      <button type="submit" className="label border border-ink px-5 py-3 text-ink" disabled={pending}>
        {pending ? "Sending" : "Send"}
      </button>
      {error ? (
        <p role="alert" className="text-lg text-ink">
          {error}
        </p>
      ) : null}
      {sent ? <p className="text-lg text-ink">Thanks. The note is on its way.</p> : null}
    </form>
  );
}
