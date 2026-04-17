import { useEffect, useId, useRef, useState } from 'react'
import { clinic, navLinks } from '../../data/siteContent'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    queueMicrotask(() => firstLinkRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a href="#top" className="group flex items-center gap-2" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-sm font-bold text-white shadow-md shadow-brand-600/30">
            SC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-slate-900 transition group-hover:text-brand-800">
              {clinic.name}
            </span>
            <span className="text-xs font-medium text-slate-500">Noida</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition motion-safe:hover:text-brand-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            href={`tel:${clinic.phoneTel}`}
            className="px-3 py-2 text-xs font-semibold uppercase tracking-wide xl:px-4"
          >
            Call
          </Button>
          <Button
            variant="outline"
            href={clinic.whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-1.5 px-3 py-2 text-xs font-semibold text-mint-800 xl:px-4"
            aria-label="Chat on WhatsApp to book"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </Button>
          <Button href="#booking" className="px-4 py-2 text-sm xl:px-5">
            Book
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button href="#booking" variant="outline" className="px-3 py-2 text-xs sm:text-sm">
            Book
          </Button>
          <Button
            variant="outline"
            href={clinic.whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-2 text-mint-800"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            href={`tel:${clinic.phoneTel}`}
            className="px-3 py-2 text-xs"
            aria-label={`Call ${clinic.phoneDisplay}`}
          >
            Call
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition motion-safe:hover:border-brand-300 motion-safe:hover:text-brand-800"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path
                  fill="currentColor"
                  d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
                />
              ) : (
                <path fill="currentColor" d="M4 8h16v2H4Zm0 5h16v2H4Zm0 5h16v2H4Z" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id={panelId}
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/40 transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
        onClick={close}
      />

      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-[min(100%,20rem)] border-l border-slate-200 bg-white shadow-2xl transition-transform duration-200 ease-out lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <p className="font-display text-lg text-slate-900">Menu</p>
            <button
              type="button"
              className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600"
              onClick={close}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 text-base font-medium text-slate-700">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                className="rounded-xl px-3 py-3 transition motion-safe:hover:bg-brand-50"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="outline"
            href={clinic.whatsAppBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 w-full justify-center gap-2 border-mint-200 bg-mint-50 text-mint-900"
            onClick={close}
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp to book
          </Button>
          <Button href="#booking" className="w-full justify-center" onClick={close}>
            Book appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
