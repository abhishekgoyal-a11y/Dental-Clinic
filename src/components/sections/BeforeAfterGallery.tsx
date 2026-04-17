import { gallery } from '../../data/siteContent'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function BeforeAfterGallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          titleId="gallery-heading"
          eyebrow="Smile gallery"
          title="Before & after transformations."
          subtitle="Representative outcomes for whitening, alignment, and bonding cases — shown with illustrative stock photography below."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.caption}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
            >
              <div className="grid grid-cols-2 gap-px bg-slate-200">
                <div className="relative aspect-[3/4] bg-white">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Before
                  </span>
                  <img
                    src={item.before}
                    alt={item.beforeAlt}
                    width={500}
                    height={667}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative aspect-[3/4] bg-white">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-mint-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    After
                  </span>
                  <img
                    src={item.after}
                    alt={item.afterAlt}
                    width={500}
                    height={667}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="p-5 text-sm font-medium text-slate-800">{item.caption}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Illustrative photos only — swap in consenting patient shots before launch. Bonding
          close-up from{' '}
          <a
            href="https://unsplash.com/photos/fSXu65m39ac"
            className="font-medium text-mint-700 underline-offset-2 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Unsplash
          </a>
          ; aligner tray, portraits, and whitening example from{' '}
          <a
            href="https://commons.wikimedia.org/"
            className="font-medium text-mint-700 underline-offset-2 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Wikimedia Commons
          </a>{' '}
          (CC BY-SA / CC0 — see each file page for attribution).
        </p>
      </Container>
    </section>
  )
}
