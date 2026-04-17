import { useEffect, useState } from 'react'
import { clinic } from '../../data/siteContent'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 380)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/90 bg-white/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,76,129,0.08)] backdrop-blur-md transition-transform duration-200 lg:hidden',
        visible
          ? 'pointer-events-auto translate-y-0'
          : 'pointer-events-none translate-y-full',
      )}
      role="region"
      aria-label="Quick booking actions"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-center gap-2">
        <Button href="#booking" className="min-w-0 flex-1 px-2 py-2.5 text-xs sm:text-sm">
          Book
        </Button>
        <Button
          variant="outline"
          href={`tel:${clinic.phoneTel}`}
          className="min-w-0 flex-1 px-2 py-2.5 text-xs sm:text-sm"
        >
          Call
        </Button>
        <a
          href={clinic.whatsAppBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-mint-200 bg-mint-50 px-2 py-2.5 text-xs font-semibold text-mint-900 transition motion-safe:hover:bg-mint-100 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          <span className="truncate sm:hidden">WA</span>
          <span className="hidden truncate sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
