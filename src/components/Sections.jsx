import { programmes, officialSiteUrl, aboutImage } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import Photo from './Photo.jsx'
import EnquireLink from './EnquireLink.jsx'

export function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="section reveal">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="h2">{t('about.heading')}</h2>
          <p className="mt-4 text-lg text-ink/80">{t('about.paragraph1')}</p>
          <p className="mt-4 text-lg text-ink/80">{t('about.paragraph2')}</p>
          <p className="mt-4 text-sm text-ink/60">
            {t('about.reference')}{' '}
            <a className="font-semibold underline" href={officialSiteUrl} target="_blank" rel="noopener noreferrer">sipabacus.com/in<span className="sr-only"> (opens in a new tab)</span></a>
          </p>
        </div>
        <figure className="overflow-hidden rounded-3xl bg-white shadow-card">
          <Photo item={{ ...aboutImage, alt: t('gallery.practiceAlt'), caption: t('gallery.practiceCaption') }} sizes="(min-width: 768px) 45vw, 90vw" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="px-5 py-3 text-sm font-semibold text-ink/70">{t('gallery.practiceCaption')}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export function Programmes() {
  const { t } = useLanguage()
  const details = {
    abacus: ['abacus', 'abacusDescription', 'abacusNote', 'agesLevelsFees'],
    'brain-gym': ['brainGym', 'brainGymDescription', null, 'availability'],
    'speed-writing': ['speedWriting', 'speedWritingDescription', null, 'availability'],
  }
  return (
    <section id="programmes" className="bg-white">
      <div className="section reveal">
        <p className="eyebrow">{t('programmes.eyebrow')}</p>
        <h2 className="h2">{t('programmes.heading')}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">{t('programmes.intro')}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {programmes.map((p, i) => {
            const [name, description, note, availability] = details[p.id]
            return (
              <li key={p.id} className="card border-2 border-brand-100 transition hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-2xl font-extrabold text-brand-600" aria-hidden="true">{i + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{t(`programmes.${name}`)}</h3>
                <p className="mt-2 text-ink/75">{t(`programmes.${description}`)}</p>
                {note && <p className="mt-4 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900">{t(`programmes.${note}`)}</p>}
                <p className="mt-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900">{t(`programmes.${availability}`)}: {t('programmes.confirmWithCentre')}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const benefits = ['concentration', 'memory', 'confidence', 'fluency']

export function Benefits() {
  const { t } = useLanguage()
  return (
    <section id="benefits" className="section reveal">
      <p className="eyebrow">{t('benefits.eyebrow')}</p>
      <h2 className="h2">{t('benefits.heading')}</h2>
      <p className="mt-3 max-w-2xl text-ink/70">{t('benefits.intro')}</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((key) => (
          <li key={key} className="card"><h3 className="text-lg font-extrabold text-brand-600">{t(`benefits.${key}`)}</h3><p className="mt-2 text-ink/75">{t(`benefits.${key}Description`)}</p></li>
        ))}
      </ul>
    </section>
  )
}

const steps = ['enquiry', 'discuss', 'visit']

export function GetStarted() {
  const { t } = useLanguage()
  return (
    <section className="bg-ink text-white">
      <div className="section reveal">
        <h2 className="h2 !mt-0">{t('steps.heading')}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((key, i) => (
            <li key={key} className="rounded-3xl bg-white/10 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-xl font-extrabold" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{t(`steps.${key}`)}</h3>
              <p className="mt-2 text-white/80">{t(`steps.${key}Description`)}</p>
            </li>
          ))}
        </ol>
        <EnquireLink className="btn btn-primary mt-10">{t('common.enquireDemo')}</EnquireLink>
      </div>
    </section>
  )
}
