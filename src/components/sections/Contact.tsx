import { clinic } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-slate-900 py-16 text-slate-100 sm:py-24"
    >
      <Container>
        <SectionHeading
          variant="dark"
          titleId="contact-heading"
          eyebrow="Visit us"
          title="We’re easy to find in Sector 62."
          subtitle="Complimentary parking for patients. If you’re commuting from Delhi, we’re minutes from the expressway."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                Address
              </p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-slate-200">
                {clinic.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                  Phone
                </p>
                <a
                  className="mt-2 block text-lg font-semibold text-white hover:underline"
                  href={`tel:${clinic.phoneTel}`}
                >
                  {clinic.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                  WhatsApp
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-mint-200 hover:underline"
                  href={clinic.whatsAppBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5 text-mint-300" />
                  Message to book
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                  Email
                </p>
                <a
                  className="mt-2 block text-sm font-medium text-brand-100 hover:underline"
                  href={`mailto:${clinic.email}`}
                >
                  {clinic.email}
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                Hours
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-200">
                {clinic.hours.map((h) => (
                  <li key={h.days}>
                    <span className="font-medium text-white">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="#booking" className="w-full justify-center sm:w-auto">
              Book appointment
            </Button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <iframe
              title="SmileCare Dental on Google Maps"
              src={clinic.mapEmbedSrc}
              className="aspect-square h-full min-h-[320px] w-full sm:aspect-auto sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
