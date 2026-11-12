import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Hammet",
  description: "Have an idea or project in mind? Let’s talk and see if we’re a good fit.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:px-8 xl:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="micro text-muted">Contact</p>
        <h1 className="display mt-4 text-[64px] tracking-[-2px] md:text-[88px]">
          Have an idea or project in mind?
        </h1>
        <p className="mt-6 text-xl leading-[27.5px] text-body">Let’s talk and see if we’re a good fit.</p>
        <img
          src="/images/portrait-contact.jpg"
          alt="Portrait of Hammet"
          className="mt-10 aspect-[4/5] w-full object-cover"
        />
      </div>
      <ContactForm />
    </main>
  );
}
