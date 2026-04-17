import { whyChooseUs } from '../../data/siteContent'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [
  <path key="shield" d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5Zm0 2.2 6 2.4v4.4c0 3.8-2.4 7.4-6 8.8-3.6-1.4-6-5-6-8.8V6.6Z" />,
  <path key="chip" d="M8 7h8v10H8Zm2 2v6h4V9Zm8-4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 14H6V7h12Z" />,
  <path key="doc" d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 16h10V9h-4V5H7Zm2-8h6v2H9Zm0 4h6v2H9Z" />,
  <path key="heart" d="M12 20s-7-4.7-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.3-7 10-7 10Z" />,
] as const

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          titleId="why-heading"
          eyebrow="Why SmileCare"
          title="Designed around what premium patients expect."
          subtitle="We obsess over the details that make visits feel effortless — from ambient suites to proactive follow-ups."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-brand-50/60 p-6 shadow-sm transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-inner shadow-brand-100">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                  {icons[index]}
                </svg>
              </div>
              <h3 className="font-display text-xl text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
