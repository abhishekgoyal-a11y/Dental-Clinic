import { clinic, navLinks } from '../../data/siteContent'
import { Container } from '../ui/Container'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14">
      <Container className="grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-xl text-slate-900">{clinic.name}</p>
          <p className="text-sm text-slate-600">{clinic.tagline}</p>
          <p className="text-xs text-slate-500">
            SmileCare Dental is a fictional brand for demonstration purposes. Replace
            contact details before publishing.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Visit</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            {clinic.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Quick contact</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a className="font-medium text-brand-800 hover:underline" href={`tel:${clinic.phoneTel}`}>
                {clinic.phoneDisplay}
              </a>
              <a
                className="inline-flex items-center gap-1 font-medium text-mint-700 hover:underline"
                href={clinic.whatsAppBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Hours</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {clinic.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-slate-700">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-brand-800">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
        © {year} {clinic.name}. All rights reserved.
      </Container>
    </footer>
  )
}
