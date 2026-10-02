import { centre, programmes, officialSiteUrl, aboutImage } from '../config.js'
import Photo from './Photo.jsx'
import EnquireLink from './EnquireLink.jsx'

export function About() {
  return (
    <section id="about" className="section reveal">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">About the centre</p>
          <h2 className="h2">Your local SIP Abacus centre in {centre.locality}</h2>
          <p className="mt-4 text-lg text-ink/80">
            {centre.name} is the SIP Abacus centre serving families in {centre.locality}, {centre.city}. SIP Abacus is a
            national brand for children's abacus and mental arithmetic learning; this website is for the Lakhra centre only.
          </p>
          <p className="mt-4 text-lg text-ink/80">
            The approach is simple: children practise on the abacus with a teacher, then gradually learn to picture the
            beads and calculate in their heads, with games and activities to keep practice enjoyable.
          </p>
          <p className="mt-4 text-sm text-ink/60">
            Reference for the national brand:{' '}
            <a className="font-semibold underline" href={officialSiteUrl} target="_blank" rel="noopener noreferrer">sipabacus.com/in<span className="sr-only"> (opens in a new tab)</span></a>
          </p>
        </div>
        <figure className="overflow-hidden rounded-3xl bg-white shadow-card">
          <Photo item={aboutImage} sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-5 py-3 text-sm font-semibold text-ink/70">{aboutImage.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export function Programmes() {
  return (
    <section id="programmes" className="bg-white">
      <div className="section reveal">
        <p className="eyebrow">Programmes</p>
        <h2 className="h2">What SIP Abacus offers</h2>
        <p className="mt-3 max-w-2xl text-ink/70">Programme names follow the national SIP Abacus brand. Which ones run at Lakhra, and for which ages and levels, must be confirmed with the centre.</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {programmes.map((p, i) => (
            <li key={p.id} className="card border-2 border-brand-100 transition hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-2xl font-extrabold text-brand-600" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold">{p.name}</h3>
              <p className="mt-2 text-ink/75">{p.description}</p>
              {p.localNote && <p className="mt-4 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900">{p.localNote}</p>}
              <p className="mt-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">{p.localNote ? 'Ages, levels & fees' : 'Availability, ages & fees'}: confirm with centre</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const benefits = [
  ['Concentration', 'Moving beads and following steps asks children to focus on one task at a time.'],
  ['Memory', 'Picturing the abacus in the mind gives regular practice in visual memory.'],
  ['Confidence', 'Steady progress with numbers can help children feel more comfortable with maths.'],
  ['Number fluency', 'Regular practice aims to make everyday addition and subtraction feel more natural.'],
]

export function Benefits() {
  return (
    <section id="benefits" className="section reveal">
      <p className="eyebrow">Learning benefits</p>
      <h2 className="h2">What regular practice aims to build</h2>
      <p className="mt-3 max-w-2xl text-ink/70">These are learning aims, not guarantees. Every child learns at their own pace, and results vary.</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([t, d]) => (
          <li key={t} className="card"><h3 className="text-lg font-extrabold text-brand-600">{t}</h3><p className="mt-2 text-ink/75">{d}</p></li>
        ))}
      </ul>
    </section>
  )
}

const steps = [
  ['Send an enquiry', 'Share your name and contact number using the form below.'],
  ['Discuss suitable classes', 'The centre can talk you through programmes, timings and fees.'],
  ['Arrange a visit or demo', 'Subject to availability at the centre.'],
]

export function GetStarted() {
  return (
    <section className="bg-ink text-white">
      <div className="section reveal">
        <h2 className="h2 !mt-0">How to get started</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-white/10 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-xl font-extrabold" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-white/80">{d}</p>
            </li>
          ))}
        </ol>
        <EnquireLink className="btn btn-primary mt-10" />
      </div>
    </section>
  )
}
