import { useState } from 'react'
import {
  bookingServices,
  bookingTimePreferences,
  clinic,
  patientTypes,
} from '../../data/siteContent'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'

type FormState = {
  name: string
  phone: string
  date: string
  preferredTime: string
  patientType: string
  service: string
  notes: string
}

const initial: FormState = {
  name: '',
  phone: '',
  date: '',
  preferredTime: '',
  patientType: '',
  service: '',
  notes: '',
}

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10) errors.phone = 'Enter a valid phone number (at least 10 digits).'
  if (!values.date) errors.date = 'Choose a preferred date.'
  if (!values.preferredTime) errors.preferredTime = 'Select a preferred time window.'
  if (!values.patientType) errors.patientType = 'Let us know if you are new or returning.'
  if (!values.service) errors.service = 'Select a service.'
  return errors
}

export function BookingForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
    setValues(initial)
  }

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-100 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200'

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="scroll-mt-24 border-y border-slate-100 bg-gradient-to-br from-brand-50 via-white to-mint-50/40 py-16 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              titleId="booking-heading"
              eyebrow="Appointments"
              title="Tell us how we can help — we’ll confirm shortly."
              subtitle="Share a few details and our care team will reach out with available slots. This demo form does not send data anywhere."
            />
            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="text-brand-600" aria-hidden>
                  ●
                </span>
                Average first response under 2 business hours on weekdays.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600" aria-hidden>
                  ●
                </span>
                Need urgent care? Call{' '}
                <a className="font-semibold text-brand-800" href={`tel:${clinic.phoneTel}`}>
                  {clinic.phoneDisplay}
                </a>{' '}
                or{' '}
                <a
                  className="inline-flex items-center gap-1 font-semibold text-mint-800 hover:underline"
                  href={clinic.whatsAppBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-brand-900/5 backdrop-blur sm:p-8">
            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-mint-200 bg-mint-50 p-6 text-sm text-mint-900"
              >
                <p className="font-semibold">Request received (demo)</p>
                <p className="mt-2 text-mint-800">
                  Thank you — in a live deployment this would notify the clinic inbox or CRM. For
                  now, nothing was transmitted.
                </p>
              </div>
            ) : null}
            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div>
                <label htmlFor="booking-name" className="text-sm font-medium text-slate-800">
                  Full name
                </label>
                <input
                  id="booking-name"
                  name="name"
                  autoComplete="name"
                  className={cn(fieldClass, errors.name && 'border-red-300 focus:ring-red-100')}
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                />
                {errors.name ? (
                  <p className="mt-1 text-xs text-red-600" role="alert">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="booking-phone" className="text-sm font-medium text-slate-800">
                  Phone
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 ..."
                  className={cn(fieldClass, errors.phone && 'border-red-300 focus:ring-red-100')}
                  value={values.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                />
                {errors.phone ? (
                  <p className="mt-1 text-xs text-red-600" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div>
                <span className="text-sm font-medium text-slate-800">Patient type</span>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  {patientTypes.map((label) => (
                    <label
                      key={label}
                      className={cn(
                        'flex cursor-pointer items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition',
                        values.patientType === label
                          ? 'border-brand-500 bg-brand-50 text-brand-900'
                          : 'border-slate-200 bg-white hover:border-brand-200',
                      )}
                    >
                      <input
                        type="radio"
                        name="patientType"
                        value={label}
                        checked={values.patientType === label}
                        onChange={() => setValues((v) => ({ ...v, patientType: label }))}
                        className="h-4 w-4 border-slate-300 text-brand-700 focus:ring-brand-500"
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.patientType ? (
                  <p className="mt-1 text-xs text-red-600" role="alert">
                    {errors.patientType}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-date" className="text-sm font-medium text-slate-800">
                    Preferred date
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    className={cn(fieldClass, errors.date && 'border-red-300 focus:ring-red-100')}
                    value={values.date}
                    onChange={(e) => setValues((v) => ({ ...v, date: e.target.value }))}
                  />
                  {errors.date ? (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.date}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="booking-time" className="text-sm font-medium text-slate-800">
                    Preferred time
                  </label>
                  <select
                    id="booking-time"
                    name="preferredTime"
                    className={cn(
                      fieldClass,
                      errors.preferredTime && 'border-red-300 focus:ring-red-100',
                    )}
                    value={values.preferredTime}
                    onChange={(e) => setValues((v) => ({ ...v, preferredTime: e.target.value }))}
                  >
                    <option value="">Select…</option>
                    {bookingTimePreferences.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime ? (
                    <p className="mt-1 text-xs text-red-600" role="alert">
                      {errors.preferredTime}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="booking-service" className="text-sm font-medium text-slate-800">
                  Service
                </label>
                <select
                  id="booking-service"
                  name="service"
                  className={cn(
                    fieldClass,
                    errors.service && 'border-red-300 focus:ring-red-100',
                  )}
                  value={values.service}
                  onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
                >
                  <option value="">Select…</option>
                  {bookingServices.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p className="mt-1 text-xs text-red-600" role="alert">
                    {errors.service}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="booking-notes" className="text-sm font-medium text-slate-800">
                  Notes <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="booking-notes"
                  name="notes"
                  rows={3}
                  placeholder="Pain level, previous treatment, preferred language, or anything we should know."
                  className={cn(fieldClass, 'resize-y')}
                  value={values.notes}
                  onChange={(e) => setValues((v) => ({ ...v, notes: e.target.value }))}
                />
              </div>
              <Button type="submit" className="w-full justify-center sm:w-auto">
                Submit request
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
