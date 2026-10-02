import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery } from '../config.js'
import Photo from './Photo.jsx'

const groups = [
  ['centre', 'At the centre'],
  ['events', 'Competitions & events in Assam'],
]

function Viewer({ items, index, onClose, onMove }) {
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
    <div role="dialog" aria-modal="true" aria-label={`Photo viewer: ${item.caption}`} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={`${item.src}-1200.webp`} alt={item.alt} className="mx-auto max-h-[75vh] w-auto rounded-2xl object-contain" />
        <p className="mt-3 text-center text-white" aria-live="polite">{item.caption} <span className="text-white/70">({index + 1} of {items.length})</span></p>
        <div className="mt-3 flex justify-center gap-3">
          <button ref={ref} type="button" className="btn btn-secondary !py-2" onClick={() => onMove(-1)}>Previous</button>
          <button type="button" className="btn btn-secondary !py-2" onClick={() => onMove(1)}>Next</button>
          <button type="button" className="btn btn-primary !py-2" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const items = gallery.filter((g) => g.src)
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])
  return (
    <section id="gallery" className="section reveal">
      <p className="eyebrow">Gallery</p>
      <h2 className="h2">Life at SIP Abacus</h2>
      <p className="mt-3 max-w-2xl text-ink/70">Classroom moments from the Lakhra centre, and SIP Abacus competitions and events held in Assam. Select a photo to enlarge it.</p>
      {groups.map(([key, label]) => {
        const list = items.filter((g) => g.group === key)
        if (!list.length) return null
        return (
          <div key={key} className="mt-10">
            <h3 className="text-xl font-extrabold">{label}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {list.map((g) => (
                <li key={g.src}>
                  <button type="button" onClick={() => setOpen(items.indexOf(g))} className="group relative block w-full overflow-hidden rounded-3xl bg-brand-100 shadow-card">
                    <Photo item={g} className="aspect-square w-full object-cover object-[center_30%] transition duration-500 group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-left text-sm font-semibold text-white">{g.caption}</span>
                    <span className="sr-only"> – open larger photo</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      {open !== null && <Viewer items={items} index={open} onClose={close} onMove={move} />}
    </section>
  )
}
