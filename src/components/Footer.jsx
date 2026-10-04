import { centre } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import { telHref, waBase } from '../lib/contact.js'

function IconPhone() {
  return <svg className="inline h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
}

function IconWhatsApp() {
  return <svg className="inline h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.891 1.242c-1.5.821-2.823 2.018-3.848 3.435C2.6 10.232 2 12.091 2 14.057c0 1.069.178 2.12.526 3.1L2 22l3.952-1.302c.955.514 2.06.821 3.215.821 5.824 0 10.554-4.751 10.554-10.592 0-2.828-1.117-5.501-3.149-7.52C17.039 2.36 14.134 1.08 10.943 1.08z" /></svg>
}

function IconMaps() {
  return <svg className="inline h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
}

function IconShield() {
  return <svg className="inline h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
}

function IconInstagram() {
  return <svg className="inline h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
}

function IconFacebook() {
  return <svg className="inline h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}

export default function Footer() {
  const { t } = useLanguage()
  const social = Object.entries(centre.social)

  const iconMap = {
    instagram: IconInstagram,
    facebook: IconFacebook,
  }

  return (
    <footer className="bg-ink pb-24 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-xl font-extrabold text-white">{centre.name}</p>
          <p className="mt-2">{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region} {centre.postalCode}</p>
          <p className="mt-3 text-sm">{t('footer.independent')}</p>
        </div>
        <div className="space-y-1">
          {telHref && <p><a className="underline inline-flex items-center" href={telHref}><IconPhone/>{centre.phoneDisplay || centre.phone}</a></p>}
          {waBase && <p><a className="underline inline-flex items-center" href={waBase} target="_blank" rel="noopener noreferrer"><IconWhatsApp/>{t('footer.whatsapp')}</a></p>}
          <p><a className="underline inline-flex items-center" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer"><IconMaps/>{t('footer.viewMaps')}</a></p>
          <p><a className="underline inline-flex items-center" href="#privacy"><IconShield/>{t('footer.privacyLink')}</a></p>
          {social.map(([n, u]) => {
            const Icon = iconMap[n]
            return <p key={n}><a className="capitalize underline inline-flex items-center" href={u} target="_blank" rel="noopener noreferrer">{Icon && <Icon/>}{n}</a></p>
          })}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm">
        <p className="text-white/60">{t('footer.copyright', { year: 2026 })}</p>
      </div>
    </footer>
  )
}
