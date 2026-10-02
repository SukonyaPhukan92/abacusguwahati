import { useState } from 'react'
import { centre, faqs, testimonials } from '../config.js'
import { useLanguage } from '../i18n.jsx'

export function Feedback() {
  const { language, t } = useLanguage()
  if (!testimonials.length) return null // omitted until genuine, attributable reviews exist
  return (
    <section id="feedback" className="section reveal">
      <p className="eyebrow">{t('feedback.eyebrow')}</p>
      <h2 className="h2">{t('feedback.heading')}</h2>
      {centre.googleRating && (
        <p className="mt-3 text-ink/70">
          {t('feedback.rated', { rating: centre.googleRating.value, count: centre.googleRating.count })}{' '}
          <a className="font-semibold underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps<span className="sr-only">{t('common.opensNewTab')}</span></a>{' '}
          {t('feedback.note')}
        </p>
      )}
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((review, index) => (
          <li key={review.name} className="card flex flex-col"><span aria-hidden="true" className="text-5xl font-extrabold leading-none text-brand-400">“</span><blockquote className="mt-2 flex-1 text-ink/85">{t(`feedback.quote${index + 1}`)}</blockquote><p className="mt-3 font-bold">{review.name}</p><p className="text-sm text-ink/60">{t(language === 'as' ? 'feedback.translatedSource' : 'feedback.source')}</p></li>
        ))}
      </ul>
    </section>
  )
}

export function Faqs() {
  const [open, setOpen] = useState(0)
  const { t } = useLanguage()
  return (
    <section id="faqs" className="bg-white">
      <div className="section reveal max-w-3xl">
        <p className="eyebrow">{t('faqs.eyebrow')}</p>
        <h2 className="h2">{t('faqs.heading')}</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((_, i) => (
            <div key={`faq-${i}`} className="rounded-2xl border-2 border-ink/10">
              <h3>
                <button type="button" id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold">
                  {t(`faqs.q${i + 1}`)}<span aria-hidden="true" className="text-2xl text-brand-600">{open === i ? '−' : '+'}</span>
                </button>
              </h3>
              <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={open !== i} className="px-5 pb-5 text-ink/80">{t(`faqs.a${i + 1}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
