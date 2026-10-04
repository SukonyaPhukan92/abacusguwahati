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
      <div className="section relative grid items-center gap-10 md:grid-cols-2 !py-14 md:!py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">{t('hero.eyebrow')}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.headingStart')} <span className="text-amber-300">{t('hero.headingBrand')}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            {t('hero.description')}
          </p>
          {centre.googleRating && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
              <span aria-hidden="true" className="text-amber-500">★</span>
              {t('hero.rating', { rating: centre.googleRating.value, count: centre.googleRating.count })}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <EnquireLink className="btn btn-primary" />
            <a href="#location" className="btn border-2 border-white/80 bg-white/10 text-white hover:bg-white/20">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              {t('common.seeMaps')}
            </a>
          </div>
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

      <div className="section relative !pt-0 !pb-12 md:!pb-16">
        <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-sm md:p-8">
          <dl className="grid gap-6 text-center sm:grid-cols-2">
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-lg font-bold uppercase tracking-wide text-white/90 sm:text-xl">{t('hero.yearsLabel')}</dt>
              <dd className="text-6xl font-extrabold leading-none sm:text-7xl">{t('hero.yearsNumber')}</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-lg font-bold uppercase tracking-wide text-white/90 sm:text-xl">{t('hero.studentsLabel')}</dt>
              <dd className="text-6xl font-extrabold leading-none text-amber-300 sm:text-7xl">{t('hero.studentsNumber')}</dd>
            </div>
          </dl>
          <p className="mt-5 text-center text-sm text-white/80">{t('hero.nationalNote')}</p>
        </div>
      </div>
    </section>
  )
}
