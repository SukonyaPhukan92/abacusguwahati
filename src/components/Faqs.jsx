import { useState } from 'react'
import { centre, faqs, testimonials } from '../config.js'

export function Feedback() {
  if (!testimonials.length) return null // omitted until genuine, attributable reviews exist
  return (
    <section id="feedback" className="section reveal">
      <p className="eyebrow">Parent feedback</p>
      <h2 className="h2">What parents say on Google</h2>
      {centre.googleRating && (
        <p className="mt-3 text-ink/70">
          Rated <strong className="text-ink">{centre.googleRating.value} out of 5</strong> from {centre.googleRating.count} reviews on{' '}
          <a className="font-semibold underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps<span className="sr-only"> (opens in a new tab)</span></a>{' '}
          (as of {centre.googleRating.asOf}). Selected reviews are quoted below as written.
        </p>
      )}
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="card flex flex-col"><span aria-hidden="true" className="text-5xl font-extrabold leading-none text-brand-400">“</span><blockquote className="mt-2 flex-1 text-ink/85">{t.quote}</blockquote><p className="mt-3 font-bold">{t.name}</p><p className="text-sm text-ink/60">{t.source}</p></li>
        ))}
      </ul>
    </section>
  )
}

export function Faqs() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="bg-white">
      <div className="section reveal max-w-3xl">
        <p className="eyebrow">FAQs</p>
        <h2 className="h2">Questions parents ask</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border-2 border-ink/10">
              <h3>
                <button type="button" id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-bold">
                  {f.q}<span aria-hidden="true" className="text-2xl text-brand-600">{open === i ? '−' : '+'}</span>
                </button>
              </h3>
              <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} hidden={open !== i} className="px-5 pb-5 text-ink/80">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
