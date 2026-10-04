import { centre, heroImage } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import Abacus from './Abacus.jsx'
import Photo from './Photo.jsx'
import EnquireLink from './EnquireLink.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #3b63b8 0%, #7a4a8f 38%, #d4305a 70%, #f59a23 100%)' }}
    >
      <div className="section relative grid items-center gap-10 md:grid-cols-2 !py-10 md:!py-12">
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
          <dl className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('programmes.statRating', { count: centre.googleRating.count })}</dt>
              <dd className="text-3xl font-extrabold leading-none sm:text-4xl"><span aria-hidden="true" className="text-amber-300">★</span> {centre.googleRating.value}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('hero.yearsLabel')}</dt>
              <dd className="text-3xl font-extrabold leading-none sm:text-4xl">{t('hero.yearsNumber')}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-xs">{t('hero.studentsLabel')}</dt>
              <dd className="text-3xl font-extrabold leading-none text-amber-300 sm:text-4xl">{t('hero.studentsNumber')}</dd>
            </div>
          </dl>
          <p className="mt-2 text-xs text-white/75">{t('hero.nationalNote')}</p>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-white/20" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-card">
            <Photo item={{ ...heroImage, alt: t('hero.heroAlt') }} eager sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[5/4] w-full object-cover object-[center_75%]" />
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
