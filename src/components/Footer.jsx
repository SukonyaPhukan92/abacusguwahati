import { centre } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import { telHref, waBase } from '../lib/contact.js'

export default function Footer() {
  const { t } = useLanguage()
  const social = Object.entries(centre.social)
  return (
    <footer className="bg-ink pb-24 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-xl font-extrabold text-white">{centre.name}</p>
          <p className="mt-2">{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region} {centre.postalCode}</p>
          <p className="mt-3 text-sm">{t('footer.independent')}</p>
        </div>
        <div className="space-y-1">
          {telHref && <p><a className="underline" href={telHref}>{centre.phoneDisplay || centre.phone}</a></p>}
          {waBase && <p><a className="underline" href={waBase} target="_blank" rel="noopener noreferrer">{t('footer.whatsapp')}</a></p>}
          <p><a className="underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">{t('footer.viewMaps')}</a></p>
          <p><a className="underline" href="#privacy">{t('footer.privacyLink')}</a></p>
          {social.map(([n, u]) => <p key={n}><a className="capitalize underline" href={u} target="_blank" rel="noopener noreferrer">{n}</a></p>)}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm">
        <p className="text-white/60">{t('footer.copyright', { year: 2026 })}</p>
      </div>
    </footer>
  )
}
