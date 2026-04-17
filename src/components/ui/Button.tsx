import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants = {
  primary:
    'bg-brand-900 text-white shadow-md shadow-brand-900/20 motion-safe:hover:bg-brand-800 motion-safe:hover:shadow-brand-900/30',
  outline:
    'border border-brand-200 bg-white text-brand-900 motion-safe:hover:border-brand-400 motion-safe:hover:bg-brand-50',
  ghost: 'bg-transparent text-brand-900 motion-safe:hover:bg-brand-50',
} as const

type Common = {
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, ...rest } = props
  const classes = cn(base, variants[variant], className)

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
