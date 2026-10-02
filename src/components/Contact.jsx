import { useRef, useState } from 'react'
import { centre } from '../config.js'
import { telHref, waBase, validate, buildMessage } from '../lib/contact.js'

const TBC = <span className="rounded bg-amber-100 px-2 py-0.5 text-sm font-semibold text-amber-900">To be confirmed</span>

export default function Contact() {
  const [vals, setVals] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const refs = { name: useRef(), phone: useRef(), message: useRef() }
  const set = (k) => (e) => setVals({ ...vals, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(vals)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) { refs[first].current?.focus(); setResult(null); return }
    const text = buildMessage(vals)
    if (waBase) {
      window.open(`${waBase}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
      setResult({ kind: 'info', text: 'WhatsApp should now be open with your message ready. Please press Send there – your enquiry has not been sent until you do.' })
    } else if (centre.email) {
      window.location.href = `mailto:${centre.email}?subject=${encodeURIComponent('Demo enquiry')}&body=${encodeURIComponent(text)}`
      setResult({ kind: 'info', text: 'Your email app should now open with the message ready. Please press Send there – your enquiry has not been sent until you do.' })
    } else {
      setResult({ kind: 'pending', text })
    }
  }

  const copy = () => navigator.clipboard?.writeText(result.text)

  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm font-semibold text-red-700">{errors[k]}</p>
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <section id="contact" className="section reveal">
      <p className="eyebrow">Contact &amp; enquiry</p>
      <h2 className="h2">Talk to the {centre.locality} centre</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card flex flex-col gap-5">
          <h3 className="text-xl font-extrabold">{centre.name}</h3>
          <dl className="space-y-4">
            <div><dt className="font-bold">Address</dt><dd>{centre.streetAddress ? <>{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region}{centre.postalCode ? ' ' + centre.postalCode : ''}{centre.plusCode && <span className="block text-sm text-ink/60">Plus Code: {centre.plusCode}</span>}</> : <>{TBC} <span className="text-ink/70">— see the Google Maps listing below</span></>}</dd></div>
            <div><dt className="font-bold">Phone</dt><dd>{telHref ? <a className="font-semibold underline" href={telHref}>{centre.phoneDisplay}</a> : TBC}</dd></div>
            <div><dt className="font-bold">Opening hours</dt><dd>{centre.hours ? centre.hours.map((h) => <div key={h}>{h}</div>) : TBC}</dd></div>
          </dl>
          <div className="flex flex-wrap gap-3">
            {telHref && <a href={telHref} className="btn btn-primary">Call the centre</a>}
          </div>
          {centre.mapEmbedUrl && (
            <figure id="location" className="flex min-h-[18rem] flex-1 flex-col overflow-hidden rounded-2xl border-2 border-ink/10">
              <iframe
                title={`Google Map showing the location of ${centre.name}`}
                src={centre.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block min-h-[16rem] w-full flex-1 border-0"
              />
              <figcaption className="flex justify-end bg-brand-50 px-4 py-2 text-sm">
                <a className="font-semibold text-brand-600 underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          )}
        </div>

        <form onSubmit={submit} noValidate className="card space-y-5" aria-labelledby="enq-h">
          <h3 id="enq-h" className="text-xl font-extrabold">Enquire About a Demo</h3>
          <div>
            <label htmlFor="name" className="font-bold">Parent / guardian name</label>
            <input id="name" ref={refs.name} className="field" autoComplete="name" value={vals.name} onChange={set('name')} required {...a11y('name')} />
            {err('name')}
          </div>
          <div>
            <label htmlFor="phone" className="font-bold">Contact number</label>
            <input id="phone" ref={refs.phone} className="field" type="tel" inputMode="tel" autoComplete="tel" value={vals.phone} onChange={set('phone')} required {...a11y('phone')} />
            {err('phone')}
          </div>
          <div>
            <label htmlFor="message" className="font-bold">Message <span className="font-normal text-ink/60">(optional)</span></label>
            <textarea id="message" ref={refs.message} rows="4" className="field" value={vals.message} onChange={set('message')} {...a11y('message')} />
            {err('message')}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            {waBase ? 'Continue in WhatsApp' : centre.email ? 'Continue in email' : 'Prepare my enquiry'}
          </button>
          <p className="text-sm text-ink/60">
            We only ask for your name, number and optional message. Please don't include your child's personal details.
            {waBase ? ' Your details are passed to WhatsApp, and nothing is sent until you press Send.' : ''}
          </p>
          <div aria-live="polite">
            {result?.kind === 'info' && <p className="rounded-2xl bg-brand-50 p-4 border-2 border-brand-200 font-semibold">{result.text}</p>}
            {result?.kind === 'pending' && (
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="font-bold text-amber-900">Nothing has been sent yet.</p>
                <p className="mt-1 text-sm">Online enquiries aren't connected to the centre yet. Please {telHref ? <>call the centre on <a className="font-semibold underline" href={telHref}>{centre.phoneDisplay}</a>, or </> : ''}copy the message below to share with the centre.</p>
                <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-white p-3 text-sm">{result.text}</pre>
                <button type="button" onClick={copy} className="btn btn-secondary mt-3 !py-2">Copy message</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
