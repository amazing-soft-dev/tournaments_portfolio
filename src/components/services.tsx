"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import { SectionRail } from "@/components/section-rail";
import { services } from "@/content/services";

export function Services() {
  const [active, setActive] = useState(0);
  const items = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        const index = items.current.findIndex((node) => node === visible?.target);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
    );
    for (const node of items.current) {
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services">
      <SectionRail index="03" total="08" label="Services" />
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8">
        <h2 className="display max-w-[16ch] text-[60px] tracking-[-2px] md:text-[72px] xl:text-[88px] xl:tracking-[-4.4px]">
          Design that works in practice, not just on screen.
        </h2>
        <div className="mt-12 xl:grid xl:grid-cols-2 xl:gap-16">
          <div className="hidden xl:block">
            <div className="sticky top-6">
              <div className="relative aspect-[4/5] bg-line">
                {services.map((service, index) => (
                  <Photo
                    key={service.id}
                    src={service.image}
                    alt={index === active ? service.alt : ""}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      index === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            {services.map((service, index) => (
              <article
                key={service.id}
                ref={(node) => {
                  items.current[index] = node;
                }}
                className="border-t border-line py-12 xl:min-h-[720px]"
              >
                <Photo
                  src={service.image}
                  alt={service.alt}
                  className="mb-8 aspect-[4/5] w-full object-cover xl:hidden"
                />
                <p className="micro text-muted">{service.id}</p>
                <h3 className="display mt-3 text-[40px] tracking-[-1.6px] xl:text-[44px]">{service.title}</h3>
                <p className="mt-4 max-w-xl text-xl leading-[27.5px] text-body">{service.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.pills.map((pill) => (
                    <li key={pill} className="label border border-line px-3 py-2 text-ink">
                      {pill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
