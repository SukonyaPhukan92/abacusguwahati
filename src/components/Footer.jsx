import { centre } from '../config.js'
import { telHref, waBase } from '../lib/contact.js'

const nav = [['About', '#about'], ['Programmes', '#programmes'], ['Benefits', '#benefits'], ['Gallery', '#gallery'], ['FAQs', '#faqs'], ['Contact', '#contact']]

export default function Footer() {
  const social = Object.entries(centre.social)
  return (
    <footer className="bg-ink pb-24 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold text-white">{centre.name}</p>
          <p className="mt-2">{centre.streetAddress}, {centre.addressLocality}, {centre.city}, {centre.region} {centre.postalCode}</p>
          <p className="mt-3 text-sm">Independent page for the Lakhra centre of the SIP Abacus programme.</p>
        </div>
        <nav aria-label="Footer"><ul className="space-y-1">{nav.map(([l, h]) => <li key={h}><a className="underline-offset-4 hover:underline" href={h}>{l}</a></li>)}</ul></nav>
        <div className="space-y-1">
          {telHref && <p><a className="underline" href={telHref}>{centre.phoneDisplay}</a></p>}
          {waBase && <p><a className="underline" href={waBase} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>}
          <p><a className="underline" href={centre.mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          {social.map(([n, u]) => <p key={n}><a className="capitalize underline" href={u} target="_blank" rel="noopener noreferrer">{n}</a></p>)}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm">
        <p><strong>Privacy:</strong> the enquiry form collects only your name, contact number and optional message. It does not store or send anything itself; your message is passed to {waBase ? 'WhatsApp' : centre.email ? 'your email app' : 'you to copy'} and reaches the centre only when you send it. The location map is provided by Google, and Google's privacy policy applies to it.</p>
      </div>
    </footer>
  )
}
