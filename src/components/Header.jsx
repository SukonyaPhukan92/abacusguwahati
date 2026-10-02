import { useEffect, useRef, useState } from 'react'
import { centre, logo } from '../config.js'
import EnquireLink from './EnquireLink.jsx'

const links = [['About', '#about'], ['Programmes', '#programmes'], ['Benefits', '#benefits'], ['Gallery', '#gallery'], ['FAQs', '#faqs'], ['Contact', '#contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const btn = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3 leading-tight">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-10 w-auto sm:h-12" />
          <span className="border-l-2 border-brand-200 pl-3 text-xs font-bold uppercase tracking-widest text-ink/80">
            {centre.locality}<span className="block font-semibold text-ink/60">{centre.city}</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-6 font-semibold">
            {links.map(([l, h]) => <li key={h}><a className="rounded px-1 py-1 hover:text-brand-600" href={h}>{l}</a></li>)}
          </ul>
        </nav>
        <EnquireLink className="btn btn-primary hidden shrink-0 !px-5 !py-2 lg:inline-flex">
          <span className="xl:hidden">Enquire</span><span className="hidden xl:inline">Enquire About a Demo</span>
        </EnquireLink>
        <button
          ref={btn}
          type="button"
          className="rounded-xl border-2 border-ink/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink/10 bg-white px-4 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {links.map(([l, h]) => (
              <li key={h}><a onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-lg font-semibold" href={h}>{l}</a></li>
            ))}
          </ul>
          <EnquireLink onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full" />
        </nav>
      )}
    </header>
  )
}
