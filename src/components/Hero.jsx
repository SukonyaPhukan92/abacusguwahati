import { centre, heroImage } from '../config.js'
import Abacus, { NumberMotifs } from './Abacus.jsx'
import Photo from './Photo.jsx'
import EnquireLink from './EnquireLink.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-brand-50">
      <NumberMotifs />
      <div className="section relative grid items-center gap-10 md:grid-cols-2 !py-14 md:!py-24">
        <div>
          <p className="eyebrow">{centre.name} · {centre.city}, {centre.region}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Discover the Joy of Numbers at <span className="text-orange-deep">SIP Abacus, Lakhra.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/80">
            Abacus and mental arithmetic classes for children in Lakhra, Guwahati. Talk to the centre about the programmes,
            find out what suits your child, and ask about a demo class.
          </p>
          {centre.googleRating && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-card">
              <span aria-hidden="true" className="text-amber-500">★</span>
              {centre.googleRating.value} on Google Maps · {centre.googleRating.count} reviews
              <span className="font-normal text-ink/60">(as of {centre.googleRating.asOf})</span>
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <EnquireLink className="btn btn-primary" />
            <a href="#location" className="btn btn-secondary">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              See Us on the Map
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-brand-400/30" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-card">
            <Photo item={heroImage} eager sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[5/4] w-full object-cover object-[center_75%]" />
            <figcaption className="sr-only">{heroImage.caption}</figcaption>
          </figure>
          <div className="absolute -bottom-8 -left-4 w-32 rounded-3xl bg-white p-2 shadow-card sm:-left-8 sm:w-40">
            <Abacus className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
