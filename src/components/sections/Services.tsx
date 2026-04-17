import { services } from '../../data/siteContent'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          titleId="services-heading"
          eyebrow="Treatments"
          title="Comprehensive care for every stage of your smile."
          subtitle="Whether you are maintaining health or transforming aesthetics, our clinicians collaborate across disciplines so plans stay cohesive."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/60 shadow-sm transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:border-brand-200 motion-safe:hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 transition motion-safe:group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                <h3 className="font-display text-xl text-slate-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                <a
                  href="#booking"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition motion-safe:hover:gap-3"
                >
                  Request this service
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
