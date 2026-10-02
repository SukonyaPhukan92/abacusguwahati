import { useRef, useState } from 'react'
import { centre } from '../config.js'
import { telHref, waBase, validate, buildMessage } from '../lib/contact.js'
import { useLanguage } from '../i18n.jsx'

export default function Contact() {
  const { language, t } = useLanguage()
  const [vals, setVals] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const refs = { name: useRef(), phone: useRef(), message: useRef() }
  const set = (k) => (e) => setVals({ ...vals, [k]: e.target.value })
  const mapUrl = centre.mapEmbedUrl ? new URL(centre.mapEmbedUrl) : null
  if (mapUrl) mapUrl.searchParams.set('hl', language)

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(vals, t)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) { refs[first].current?.focus(); setResult(null); return }
    const text = buildMessage(vals, t)
    if (waBase) {
      window.open(`${waBase}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
      setResult({ kind: 'info', text: t('contact.whatsappReady') })
    } else if (centre.email) {
      window.location.href = `mailto:${centre.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}&body=${encodeURIComponent(text)}`
      setResult({ kind: 'info', text: t('contact.emailReady') })
    } else {
      setResult({ kind: 'pending', text })
    }
  }

  const copy = () => navigator.clipboard?.writeText(result.text)

  const tbc = <span className="rounded bg-amber-100 px-2 py-0.5 text-sm font-semibold text-amber-900">{t('common.toConfirm')}</span>
  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm font-semibold text-red-700">{errors[k]}</p>
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <section id="contact" className="section reveal">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h2 className="h2">{t('contact.heading')}</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card flex flex-col gap-5">
          <h3 className="text-xl font-extrabold">{centre.name}</h3>
          <dl className="space-y-4">
            <div><dt className="font-bold">{t('contact.address')}</dt><dd>{centre.streetAddress ? <>{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region}{centre.postalCode ? ' ' + centre.postalCode : ''}{centre.plusCode && <span className="block text-sm text-ink/60">{t('contact.plusCode')} {centre.plusCode}</span>}</> : <>{tbc} <span className="text-ink/70">{t('contact.seeMaps')}</span></>}</dd></div>
            <div><dt className="font-bold">{t('contact.phone')}</dt><dd>{telHref ? <a className="font-semibold underline" href={telHref}>{centre.phoneDisplay}</a> : tbc}</dd></div>
            <div><dt className="font-bold">{t('contact.hours')}</dt><dd>{centre.hours ? centre.hours.map((h) => <div key={h}>{h}</div>) : tbc}</dd></div>
          </dl>
          <div className="flex flex-wrap gap-3">
            {telHref && <a href={telHref} className="btn btn-primary">{t('contact.callCentre')}</a>}
          </div>
          {centre.mapEmbedUrl && (
            <figure id="location" className="flex min-h-[18rem] flex-1 flex-col overflow-hidden rounded-2xl border-2 border-ink/10">
              <iframe
                title={t('contact.mapTitle')}
                src={mapUrl.toString()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block min-h-[16rem] w-full flex-1 border-0"
              />
              <figcaption className="flex justify-end bg-brand-50 px-4 py-2 text-sm">
                <a className="font-semibold text-brand-600 underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {t('contact.openMaps')}<span className="sr-only">{t('common.opensNewTab')}</span>
                </a>
              </figcaption>
            </figure>
          )}
        </div>

        <form onSubmit={submit} noValidate className="card space-y-5" aria-labelledby="enq-h">
          <h3 id="enq-h" className="text-xl font-extrabold">{t('contact.formTitle')}</h3>
          <div>
            <label htmlFor="name" className="font-bold">{t('contact.parentName')}</label>
            <input id="name" ref={refs.name} className="field" autoComplete="name" value={vals.name} onChange={set('name')} required {...a11y('name')} />
            {err('name')}
          </div>
          <div>
            <label htmlFor="phone" className="font-bold">{t('contact.contactNumber')}</label>
            <input id="phone" ref={refs.phone} className="field" type="tel" inputMode="tel" autoComplete="tel" value={vals.phone} onChange={set('phone')} required {...a11y('phone')} />
            {err('phone')}
          </div>
          <div>
            <label htmlFor="message" className="font-bold">{t('contact.message')} <span className="font-normal text-ink/60">{t('contact.optional')}</span></label>
            <textarea id="message" ref={refs.message} rows="4" className="field" value={vals.message} onChange={set('message')} {...a11y('message')} />
            {err('message')}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            {waBase ? t('contact.continueWhatsApp') : centre.email ? t('contact.continueEmail') : t('contact.prepareEnquiry')}
          </button>
          <p className="text-sm text-ink/60">
            {t('contact.privacyForm')}
            {waBase ? t('contact.whatsappNote') : ''}
          </p>
          <div aria-live="polite">
            {result?.kind === 'info' && <p className="rounded-2xl bg-brand-50 p-4 border-2 border-brand-200 font-semibold">{result.text}</p>}
            {result?.kind === 'pending' && (
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="font-bold text-amber-900">{t('contact.nothingSent')}</p>
                <p className="mt-1 text-sm">{t('contact.emailNotConnected')}{telHref ? <>{t('contact.callOn')} <a className="font-semibold underline" href={telHref}>{centre.phoneDisplay}</a>, </> : ''}{t('contact.copyBelow')}</p>
                <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-white p-3 text-sm">{result.text}</pre>
                <button type="button" onClick={copy} className="btn btn-secondary mt-3 !py-2">{t('contact.copyMessage')}</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
