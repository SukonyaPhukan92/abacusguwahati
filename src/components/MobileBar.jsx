import { telHref } from '../lib/contact.js'
import EnquireLink from './EnquireLink.jsx'

export default function MobileBar() {
  const cls = 'flex-1 rounded-full py-3 text-center font-bold'
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink/10 bg-white p-3 lg:hidden">
      {telHref && <a href={telHref} className={`${cls} bg-emerald-700 text-white`}>Call</a>}
      <EnquireLink className={`${cls} inline-flex items-center justify-center gap-1.5 bg-brand-600 text-white`}>Enquire</EnquireLink>
      <a href="#location" className={`${cls} border-2 border-ink/20`}>Map</a>
    </nav>
  )
}
