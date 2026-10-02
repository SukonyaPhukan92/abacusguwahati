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
  const set = (key) => (event) => {
    setVals((current) => ({ ...current, [key]: event.target.value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[key]
      return next
    })
    setResult(null)
  }
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
      try {
        const popup = window.open(`${waBase}?text=${encodeURIComponent(text)}`, '_blank')
        if (!popup) throw new Error('Popup blocked')
        popup.opener = null
        setResult({ kind: 'success', text: t('contact.whatsappReady'), message: text })
      } catch {
        setResult({ kind: 'error', text: t('contact.whatsappBlocked'), message: text })
      }
    } else if (centre.email) {
      window.location.href = `mailto:${centre.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}&body=${encodeURIComponent(text)}`
      setResult({ kind: 'success', text: t('contact.emailReady'), message: text })
    } else {
      setResult({ kind: 'pending', text })
    }
  }

  const copy = async () => {
    const message = result?.message ?? result?.text
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(message)
      setResult({ kind: 'success', text: t('contact.messageCopied'), message })
    } catch {
      setResult({ kind: 'error', text: t('contact.copyFailed'), message })
    }
  }

  const err = (key) => errors[key] && <p id={`${key}-err`} role="alert" className="mt-1 text-sm font-semibold text-red-700">{errors[key]}</p>
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  return (
    <section id="contact" className="section reveal">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h2 className="h2">{t('contact.heading')}</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card flex flex-col gap-5">
          <h3 className="text-xl font-extrabold">{centre.name}</h3>
          <dl className="space-y-4">
            {centre.streetAddress && <div><dt className="font-bold">{t('contact.address')}</dt><dd>{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region}{centre.postalCode ? ' ' + centre.postalCode : ''}{centre.plusCode && <span className="block text-sm text-ink/60">{t('contact.plusCode')} {centre.plusCode}</span>}</dd></div>}
            {telHref && <div><dt className="font-bold">{t('contact.phone')}</dt><dd><a className="font-semibold underline" href={telHref}>{centre.phoneDisplay || centre.phone}</a></dd></div>}
            {centre.hours?.length > 0 && <div><dt className="font-bold">{t('contact.hours')}</dt><dd>{centre.hours.map((hour) => <div key={hour}>{hour}</div>)}</dd></div>}
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
          <div aria-live="polite" aria-atomic="true">
            {result?.kind === 'success' && <p role="status" className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-4 font-semibold">{result.text}</p>}
            {result?.kind === 'error' && <p role="alert" className="rounded-2xl border-2 border-red-200 bg-red-50 p-4 font-semibold text-red-900">{result.text}</p>}
            {(result?.kind === 'pending' || (result?.kind === 'error' && result.message)) && (
              <div className="rounded-2xl bg-amber-50 p-4">
                {result.kind === 'pending' && <p className="font-bold text-amber-900">{t('contact.nothingSent')}</p>}
                <p className="mt-1 text-sm">{result.kind === 'pending' ? <>{t('contact.emailNotConnected')}{telHref ? <>{t('contact.callOn')} <a className="font-semibold underline" href={telHref}>{centre.phoneDisplay || centre.phone}</a>, </> : ''}</> : null}{t('contact.copyBelow')}</p>
                <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-white p-3 text-sm">{result.message ?? result.text}</pre>
                <button type="button" onClick={copy} className="btn btn-secondary mt-3 !py-2">{t('contact.copyMessage')}</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
