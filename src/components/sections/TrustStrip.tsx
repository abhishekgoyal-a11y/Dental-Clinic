import { trustStrip } from '../../data/siteContent'
import { Container } from '../ui/Container'

export function TrustStrip() {
  return (
    <section
      aria-label="Clinic trust signals"
      className="border-y border-slate-100 bg-white py-10 sm:py-12"
    >
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item) => (
            <div key={item.title} className="border-l-2 border-mint-500 pl-4">
              <p className="font-display text-lg text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
