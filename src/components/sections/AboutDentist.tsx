import { about } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutDentist() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-y border-slate-100 bg-gradient-to-b from-white via-brand-50/40 to-white py-16 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              titleId="about-heading"
              eyebrow="Meet your dentist"
              title="Credentials that inspire confidence."
              subtitle={about.yearsExperience}
              action={
                <Button href="#booking" variant="outline" className="hidden lg:inline-flex">
                  Schedule a consult
                </Button>
              }
            />
            <div className="space-y-4 text-slate-600">
              {about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {about.credentials.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-medium text-slate-800"
                >
                  <span
                    className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-mint-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#booking" variant="outline" className="mt-8 lg:hidden">
              Schedule a consult
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200 to-mint-100 opacity-70 blur-2xl motion-reduce:opacity-40" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl">
                <img
                  src={about.portraitSrc}
                  alt={about.portraitAlt}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="border-t border-slate-100 bg-white p-6">
                  <p className="font-display text-2xl text-slate-900">{about.name}</p>
                  <p className="text-sm text-brand-700">{about.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
