import { centre, heroImage } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import Abacus from './Abacus.jsx'
import Photo from './Photo.jsx'
import EnquireLink from './EnquireLink.jsx'

const condensed = { fontFamily: "Impact, 'Arial Narrow', 'Roboto Condensed', 'Arial Black', sans-serif" }
const starPath = 'm16 3 3.6 8.6 9.4.8-7.1 6.2 2.2 9.1L16 22.8 7.9 27.7l2.2-9.1L3 12.4l9.4-.8L16 3Z'

function Doodles() {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden text-white/50 sm:block">
      <svg className="absolute left-[2%] top-[8%] h-9 w-9" viewBox="0 0 32 32" {...p}><path d="M16 4a8 8 0 0 0-4 15v3h8v-3a8 8 0 0 0-4-15ZM13 26h6M14 29h4" /></svg>
      <svg className="absolute right-[3%] top-[6%] h-8 w-14" viewBox="0 0 56 32" {...p}><path d="M48 4l6 6-30 18-10 2 2-10L48 4ZM42 6l6 6" /></svg>
      <svg className="absolute left-[47%] top-[10%] h-7 w-7" viewBox="0 0 32 32" {...p}><path d={starPath} /></svg>
      <svg className="absolute bottom-[22%] right-[2%] h-8 w-8" viewBox="0 0 32 32" {...p}><path d={starPath} /></svg>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #3b63b8 0%, #7a4a8f 38%, #d4305a 70%, #f59a23 100%)' }}
    >
      <Doodles />
      <div className="section relative grid items-center gap-10 md:grid-cols-2 !py-8 md:!py-9">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">{t('hero.eyebrow')}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {t('hero.headingStart')} <span className="text-amber-300">{t('hero.headingBrand')}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            {t('hero.description')}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <EnquireLink className="btn btn-primary" />
            <a href="#location" className="btn border-2 border-white/80 bg-white/10 text-white hover:bg-white/20">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              {t('common.seeMaps')}
            </a>
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('programmes.statRating', { count: centre.googleRating.count })}</dt>
              <dd className="text-4xl font-black leading-none sm:text-5xl" style={condensed}><span aria-hidden="true" className="text-amber-300">★</span> {centre.googleRating.value}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('hero.yearsLabel')}</dt>
              <dd className="text-4xl font-black leading-none sm:text-5xl" style={condensed}>{t('hero.yearsNumber')}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('hero.studentsLabel')}</dt>
              <dd className="text-4xl font-black leading-none text-amber-300 sm:text-5xl" style={condensed}>{t('hero.studentsNumber')}</dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto mb-8 w-full max-w-md md:mb-0 md:max-w-none">
          <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-white/20" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-card">
            <Photo item={{ ...heroImage, alt: t('hero.heroAlt') }} eager sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[5/4] w-full object-cover object-[center_75%]" />
            <figcaption className="sr-only">{heroImage.caption}</figcaption>
          </figure>
          <div className="absolute -bottom-8 -left-4 w-32 rounded-3xl bg-white p-2 shadow-card sm:-left-8 sm:w-40 md:hidden lg:block">
            <Abacus className="w-full" />
          </div>
        </div>
      </div>
      <div className="relative bg-white text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2.5 text-center sm:flex-row sm:justify-between sm:text-left md:px-6">
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap bg-orange-logo px-3 py-1 text-lg font-extrabold leading-none text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>SIP Academy</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70 sm:text-[11px] sm:tracking-[0.3em]">Creating Intelligence</span>
          </div>
          <p className="text-xs text-ink/70">{t('hero.nationalNote')}</p>
        </div>
      </div>
    </section>
  )
}
