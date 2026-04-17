import { team } from '../../data/siteContent'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function TeamStrip() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-24 bg-gradient-to-b from-white to-brand-50/30 py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          titleId="team-heading"
          eyebrow="People you will meet"
          title="A multidisciplinary team — one coordinated plan."
          subtitle="From surgery to hygiene to scheduling, everyone here reads the same chart and follows the same standard of care."
          action={
            <Button href="#booking" variant="outline" className="hidden sm:inline-flex">
              Meet us in person
            </Button>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-white text-center shadow-sm transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-1 px-4 py-5">
                <h3 className="font-display text-lg text-slate-900">{member.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-brand-700">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
