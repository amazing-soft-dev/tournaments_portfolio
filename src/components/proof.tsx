import { CountUp } from "@/components/count-up";
import { SectionRail } from "@/components/section-rail";

const quote =
  "Working together was smooth from start to finish. The process was clear and focused. Design decisions were thoughtful, feedback was taken seriously, and the final Framer build felt polished and easy to manage.";

const stats = [
  {
    value: 24,
    suffix: "+",
    label: "Websites designed and built",
    image: "/images/stat-sites.jpg",
    alt: "Laptop with a website wireframe",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of experience in web design",
    image: "/images/stat-years.jpg",
    alt: "Phones on ice",
  },
  {
    value: 10,
    suffix: "+",
    label: "Happy clients",
    image: "/images/stat-clients.jpg",
    alt: "Phone on a metal surface",
  },
];

export function Proof() {
  return (
    <>
      <section id="testimonials">
        <SectionRail index="06" total="08" label="Testimonials" />
        <div className="mx-auto grid max-w-[1200px] items-end gap-8 px-5 py-14 md:px-8 xl:grid-cols-[0.7fr_1.3fr]">
          <img src="/images/testimonial.jpg" alt="Clara Jensen" className="aspect-[4/5] w-full object-cover" />
          <figure>
            <blockquote className="display text-[32px] tracking-[-1.2px] md:text-[40px] xl:text-[44px] xl:tracking-[-1.76px]">
              {quote}
            </blockquote>
            <figcaption className="mt-8">
              <p className="label text-ink">Clara Jensen</p>
              <p className="micro mt-1 text-muted">CEO of Vela Studio</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="stats">
        <SectionRail index="07" total="08" label="Stats" />
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          {stats.map((stat) => (
            <article key={stat.label}>
              <img src={stat.image} alt={stat.alt} className="aspect-[4/3] w-full object-cover" />
              <p className="display mt-5 text-[64px] tracking-[-2.5px] xl:text-[88px]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 max-w-[16rem] text-lg leading-7 text-body">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
