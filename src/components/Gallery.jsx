import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import Photo from './Photo.jsx'

const groups = [
  ['centre', 'centre'],
  ['events', 'events'],
]

const photoKeys = {
  'gallery/class-cards': ['classCardsAlt', 'classCards'],
  'gallery/junior-certificate': ['certificateAlt', 'certificate'],
  'gallery/abacus-practice': ['practiceAlt', 'practiceCaption'],
  'gallery/classroom-mixed-uniforms': ['mixedUniformsAlt', 'mixedUniforms'],
  'gallery/classroom-white-uniforms': ['whiteUniformsAlt', 'whiteUniforms'],
  'gallery/teacher-observing-class': ['observingClassAlt', 'observingClass'],
  'gallery/teacher-guided-learning': ['guidedLearningAlt', 'guidedLearning'],
  'gallery/craft-cards': ['craftAlt', 'craft'],
  'gallery/flag-celebration': ['flagAlt', 'flag'],
  'gallery/activity-time': ['activityAlt', 'activity'],
  'gallery/regional-competition-2024': ['competitionAlt', 'competition'],
  'gallery/competition-day': ['competitionDayAlt', 'competitionDay'],
  'gallery/prize-giving-2024': ['prizeAlt', 'prize'],
  'gallery/volunteers-2024': ['volunteersAlt', 'volunteers'],
  'gallery/volunteer-team': ['teamAlt', 'team'],
  'gallery/annual-awards-2022': ['awardsAlt', 'awards'],
  'gallery/teachers-celebration': ['celebAlt', 'celeb'],
  'gallery/handmade-cards-selfie': ['cardsSelfieAlt', 'cardsSelfie'],
  'gallery/abacus-worksheet-practice': ['worksheetAlt', 'worksheet'],
  'gallery/teachers-in-hall': ['hallAlt', 'hall'],
  'gallery/sboa-school-visit': ['sboaVisitAlt', 'sboaVisit'],
  'gallery/sboa-school-gift': ['sboaGiftAlt', 'sboaGift'],
}

function Viewer({ items, index, onClose, onMove, t }) {
  const ref = useRef(null)
  const item = items[index]
  useEffect(() => {
    const prev = document.activeElement
    ref.current?.focus()
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'Tab') {
        const f = ref.current.closest('[role=dialog]').querySelectorAll('button')
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose, onMove])
  return (
    <div role="dialog" aria-modal="true" aria-label={t('gallery.viewer', { caption: item.caption })} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={`${item.src}-1200.webp`} alt={item.alt} className="mx-auto max-h-[75vh] w-auto rounded-2xl object-contain" />
        <p className="mt-3 text-center text-white" aria-live="polite">{item.caption} <span className="text-white/70">({t('gallery.photoCount', { current: index + 1, total: items.length })})</span></p>
        <div className="mt-3 flex justify-center gap-3">
          <button ref={ref} type="button" className="btn btn-secondary !py-2" onClick={() => onMove(-1)}>{t('gallery.previous')}</button>
          <button type="button" className="btn btn-secondary !py-2" onClick={() => onMove(1)}>{t('gallery.next')}</button>
          <button type="button" className="btn btn-primary !py-2" onClick={onClose}>{t('gallery.close')}</button>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { t } = useLanguage()
  const items = gallery.filter((g) => g.src).map((item) => {
    const [alt, caption] = photoKeys[item.src]
    return { ...item, alt: t(`gallery.${alt}`), caption: t(`gallery.${caption}`) }
  })
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])
  return (
    <section id="gallery" className="section reveal">
      <p className="eyebrow">{t('gallery.eyebrow')}</p>
      <h2 className="h2">{t('gallery.heading')}</h2>
      <p className="mt-3 max-w-2xl text-ink/70">{t('gallery.intro')}</p>
      {groups.map(([key, labelKey]) => {
        const list = items.filter((g) => g.group === key)
        if (!list.length) return null
        return (
          <div key={key} className="mt-10">
            <h3 className="text-xl font-extrabold">{t(`gallery.${labelKey}`)}</h3>
            <ul className={`mt-4 grid grid-cols-2 gap-3 sm:gap-4 ${list.length % 3 === 0 ? "md:grid-cols-3" : "lg:grid-cols-5"}`}>
              {list.map((g) => (
                <li key={g.src}>
                  <button type="button" onClick={() => setOpen(items.indexOf(g))} className="group relative block w-full overflow-hidden rounded-3xl bg-brand-100 shadow-card">
                    <Photo item={g} className="aspect-square w-full object-cover object-[center_30%] transition duration-500 group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-left text-sm font-semibold text-white">{g.caption}</span>
                    <span className="sr-only">{t('gallery.enlarge')}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      {open !== null && <Viewer items={items} index={open} onClose={close} onMove={move} t={t} />}
    </section>
  )
}
