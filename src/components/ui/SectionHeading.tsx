import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  /** For `aria-labelledby` on parent `<section>` */
  titleId?: string
  action?: ReactNode
  /** Use on dark section backgrounds */
  variant?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleId,
  action,
  variant = 'light',
}: SectionHeadingProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4 sm:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        action ? 'lg:flex-row lg:items-end lg:justify-between' : undefined,
      )}
    >
      <div className={cn('max-w-3xl space-y-3', align === 'center' && 'mx-auto')}>
        {eyebrow ? (
          <p
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.2em]',
              isDark ? 'text-brand-200' : 'text-brand-600',
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={titleId}
          className={cn(
            'font-display text-3xl sm:text-4xl',
            isDark ? 'text-white' : 'text-slate-900',
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={cn(
              'text-base sm:text-lg',
              isDark ? 'text-slate-300' : 'text-slate-600',
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
