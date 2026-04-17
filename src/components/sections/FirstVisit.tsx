import { clinic, firstVisit } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function FirstVisit() {
  return (
    <section
      id="first-visit"
      aria-labelledby="first-visit-heading"
      className="scroll-mt-24 border-y border-slate-100 bg-white py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              titleId="first-visit-heading"
              eyebrow="New patients"
              title={firstVisit.title}
              subtitle={firstVisit.subtitle}
            />
            <ol className="mt-8 space-y-6">
              {firstVisit.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-100 font-display text-lg font-semibold text-brand-900"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-2xl border border-mint-100 bg-mint-50/80 p-4 text-sm text-slate-700">
              {firstVisit.reassurance}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-[2rem] border border-slate-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-inner">
            <p className="font-display text-2xl text-slate-900">Ready when you are.</p>
            <p className="text-sm text-slate-600">
              Prefer typing to calling? WhatsApp us a photo of your concern or simply say
              &quot;new patient&quot; — we reply faster than you think.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#booking" className="justify-center sm:flex-1">
                Book online
              </Button>
              <Button
                variant="outline"
                href={clinic.whatsAppBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center gap-2 border-mint-200 bg-mint-50/50 text-mint-900 sm:flex-1"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-mint-600" />
                WhatsApp us
              </Button>
            </div>
            <a
              href={`tel:${clinic.phoneTel}`}
              className="text-center text-sm font-semibold text-brand-800 underline-offset-4 hover:underline"
            >
              Or call {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
