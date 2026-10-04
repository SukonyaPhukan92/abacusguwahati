import { useEffect, useRef, useState } from 'react'
import { logo } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import EnquireLink from './EnquireLink.jsx'

const links = [['about', '#about'], ['programmes', '#programmes'], ['gallery', '#gallery'], ['team', '#team'], ['faqs', '#faqs'], ['contact', '#contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const btn = useRef(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3">{t('common.skip')}</a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3 leading-tight">
          <img src={logo.src} alt={t('common.logoAlt')} width={logo.width} height={logo.height} className="h-10 w-auto sm:h-12" />
          <span className="hidden border-l-2 border-brand-200 pl-3 text-xs font-bold uppercase tracking-widest text-ink/80 sm:block">
            {t('location.locality')}<span className="block font-semibold text-ink/60">{t('location.city')}</span>
          </span>
        </a>
        <nav aria-label={t('common.mainNavigation')} className="hidden lg:block">
          <ul className="flex gap-6 font-semibold">
            {links.map(([key, href]) => <li key={href}><a className="rounded px-1 py-1 hover:text-brand-600" href={href}>{t(`common.${key}`)}</a></li>)}
          </ul>
        </nav>
        <div className="language-switch" role="group" aria-label={t('language.group')}>
          <button type="button" aria-pressed={language === 'en'} aria-label={t('language.english')} onClick={() => setLanguage('en')}>EN</button>
          <button type="button" aria-pressed={language === 'as'} aria-label={t('language.assamese')} onClick={() => setLanguage('as')}>অসমীয়া</button>
        </div>
        <EnquireLink className="btn btn-primary hidden shrink-0 !px-5 !py-2 lg:inline-flex">
          <span className="xl:hidden">{t('common.enquire')}</span><span className="hidden xl:inline">{t('common.enquireDemo')}</span>
        </EnquireLink>
        <button
          ref={btn}
          type="button"
          className="rounded-xl border-2 border-ink/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? t('common.menuClose') : t('common.menuOpen')}</span>
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label={t('common.mobileNavigation')} className="border-t border-ink/10 bg-white px-4 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {links.map(([key, href]) => (
              <li key={href}><a onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-lg font-semibold" href={href}>{t(`common.${key}`)}</a></li>
            ))}
          </ul>
          <EnquireLink onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">{t('common.enquireDemo')}</EnquireLink>
        </nav>
      )}
    </header>
  )
}
