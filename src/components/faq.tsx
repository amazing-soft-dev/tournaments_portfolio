"use client";

import { useState } from "react";
import { SectionRail } from "@/components/section-rail";
import { faqs } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq">
      <SectionRail index="08" total="08" label="FAQ" />
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <h2 className="display text-[60px] tracking-[-2px] md:text-[72px] xl:text-[88px]">FAQ</h2>
        <div className="mt-10 border-t border-line">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className={isOpen ? "bg-ink text-white" : "bg-paper text-ink"}>
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-6 px-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="relative inline-block h-2.5 w-2.5 overflow-hidden" aria-hidden="true">
                      <svg
                        viewBox="0 0 10 10"
                        className="absolute top-0 left-[-10px] h-2.5 w-2.5 transition-all duration-300 group-hover:left-0"
                      >
                        <path d="M1 5h8M6 2l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </span>
                    <span className="label">{item.question}</span>
                  </span>
                  <span className="label" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="max-w-3xl px-4 pb-6 text-lg leading-7">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
