import { clinic, hero } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-16 pt-10 sm:pb-20 sm:pt-14 scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-mint-100/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
              {hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              {hero.title}
            </h1>
            <p className="text-lg text-slate-600">{hero.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="#booking">Book appointment</Button>
              <Button variant="outline" href={`tel:${clinic.phoneTel}`}>
                Call {clinic.phoneDisplay}
              </Button>
              <Button
                variant="outline"
                href={clinic.whatsAppBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-mint-200 bg-mint-50/80 text-mint-900 motion-safe:hover:bg-mint-100"
              >
                WhatsApp
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Typical reply on WhatsApp in under 30 minutes during clinic hours.
            </p>
            <dl className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Same-week consults
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">
                  Priority slots for new patients
                </dd>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Google rating
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">4.9 ★ from 180+ reviews</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand-200/60 via-white to-mint-100/70 blur-2xl motion-reduce:blur-none" />
            <figure className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-brand-900/10">
              <img
                src={hero.imageSrc}
                alt={hero.imageAlt}
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-sm text-white">
                <span className="font-semibold">{clinic.name}</span> — calm lighting, noise-aware
                suites, and digital records from check-in to checkout.
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
