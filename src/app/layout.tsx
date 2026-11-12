import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hammet - Digital Product Designer & Web Experiences",
  description:
    "Designing thoughtful websites and digital products focused on clarity, usability, and conversion.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
