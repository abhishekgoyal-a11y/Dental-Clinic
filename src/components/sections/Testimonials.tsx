import { clinic, testimonials } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

function Stars({ count }: { count: number }) {
  return (
    <p className="flex gap-1 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </p>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-gradient-to-b from-mint-50/50 via-white to-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          titleId="testimonials-heading"
          eyebrow="Patient stories"
          title="Trusted by families and professionals across Noida."
          subtitle="Stories below are sample copy for this demo — pair them with a live Google profile link so visitors can verify social proof."
        />
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-100 bg-brand-50/60 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-display text-xl text-slate-900">See our latest Google reviews</p>
            <p className="mt-1 max-w-xl text-sm text-slate-600">
              When you go live, link directly to your Business Profile so new patients can read
              verified feedback in one tap.
            </p>
          </div>
          <Button
            variant="outline"
            href={clinic.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white"
          >
            Open Google profile
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{t.name}</span>
                <span className="block text-xs uppercase tracking-wide text-slate-500">
                  {t.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
