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

const benefits = ['concentration', 'memory', 'confidence', 'fluency']

export function Programmes() {
  const { t } = useLanguage()
  const details = {
    abacus: ['abacus', 'abacusDescription', 'abacusNote'],
    'brain-gym': ['brainGym', 'brainGymDescription', null],
    'speed-writing': ['speedWriting', 'speedWritingDescription', null],
  }

  const classSchedule = [
    { day: 'Thursday', times: ['5:00 PM'] },
    { day: 'Friday', times: ['5:00 PM'] },
    { day: 'Saturday', times: ['10:00 AM', '4:30 PM'] },
    { day: 'Sunday', times: ['9:00 AM', '11:30 AM', '4:00 PM'] },
  ]

  const admissionLevels = [
    { level: 'Junior 1', criteria: 'Class UKG or Class 1' },
    { level: 'Junior 2', criteria: 'Class 2' },
    { level: 'Foundation 1', criteria: 'Class 3' },
  ]

  const progressionLevels = {
    junior: ['Junior 1', 'Junior 2', 'Junior 3', 'Junior 4'],
    foundation: ['Foundation 1', 'Foundation 2', 'Foundation 3', 'Foundation 4'],
    advance: ['Advance 1', 'Advance 2', 'Advance 3', 'Advance 4'],
    gm: ['G.M - A', 'G.M - B', 'G.M - C'],
  }

  const feeStructure = [
    { level: 'Junior 1 & 2', registration: '₹2,050', monthly: '₹1,500', book: '₹550', total: '₹4,100' },
    { level: 'Foundation 1', registration: '₹2,050', monthly: '₹1,500', book: '₹720', total: '₹4,270' },
  ]

  return (
    <section id="programmes" className="bg-white">
      <div className="section reveal">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow">{t('programmes.eyebrow')}</p>
          <h2 className="h2">{t('programmes.heading')}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{t('programmes.intro')}</p>
        </div>

        {/* Class Schedule Highlight */}
        <div className="mb-12 rounded-3xl bg-brand-50 p-8">
          <h3 className="text-xl font-extrabold text-brand-600 mb-6">📅 Class Schedule</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {classSchedule.map((schedule) => (
              <div key={schedule.day} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-bold text-ink">{schedule.day}</p>
                <div className="mt-2 space-y-1">
                  {schedule.times.map((time) => (
                    <p key={time} className="text-sm text-brand-600 font-semibold">{time}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink/60">🏢 Office open every day</p>
        </div>

        {/* Programmes Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-extrabold mb-8 text-ink">Our Programmes</h3>
          <ul className="grid gap-6 md:grid-cols-3">
            {programmes.map((p, i) => {
              const [name, description, note] = details[p.id]
              return (
                <li key={p.id} className="card border-2 border-brand-100 transition hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-2xl font-extrabold text-brand-600" aria-hidden="true">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold">{t(`programmes.${name}`)}</h3>
                  <p className="mt-2 text-ink/75">{t(`programmes.${description}`)}</p>
                  {note && <p className="mt-4 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900">{t(`programmes.${note}`)}</p>}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Admission & Progression Levels */}
        <div className="mb-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-extrabold mb-4 text-ink">Admission Levels</h3>
            <div className="space-y-3">
              {admissionLevels.map((admission) => (
                <div key={admission.level} className="rounded-lg bg-stone-50 p-4 border-l-4 border-brand-400">
                  <p className="font-bold text-ink">{admission.level}</p>
                  <p className="text-sm text-ink/70">{admission.criteria}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold mb-4 text-ink">Progression Levels</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {Object.entries(progressionLevels).map(([tier, levels]) => (
                <div key={tier} className="rounded-lg bg-white border border-ink/10 p-4">
                  <p className="font-bold text-brand-600 mb-2 capitalize">{tier}</p>
                  <ul className="space-y-1 text-sm text-ink/75">
                    {levels.map((level) => (
                      <li key={level} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2"></span>
                        {level}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-12">
          <h3 className="text-lg font-extrabold mb-4 text-ink">Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-brand-200 bg-brand-50">
                  <th className="text-left py-3 px-4 font-bold text-ink">Level</th>
                  <th className="text-right py-3 px-4 font-bold text-ink">Registration</th>
                  <th className="text-right py-3 px-4 font-bold text-ink">Monthly</th>
                  <th className="text-right py-3 px-4 font-bold text-ink">Book Fee</th>
                  <th className="text-right py-3 px-4 font-bold text-brand-600">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, idx) => (
                  <tr key={fee.level} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="py-3 px-4 font-semibold text-ink">{fee.level}</td>
                    <td className="py-3 px-4 text-right text-ink/75">{fee.registration}</td>
                    <td className="py-3 px-4 text-right text-ink/75">{fee.monthly}</td>
                    <td className="py-3 px-4 text-right text-ink/75">{fee.book}</td>
                    <td className="py-3 px-4 text-right font-bold text-brand-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink/60">💡 Ongoing: Monthly fees ₹1,500 + Book fees (charged after every 4 months, varies by level promoted)</p>
        </div>

        {/* Benefits Section */}
        <div className="border-t border-ink/10 pt-16">
          <p className="eyebrow">{t('benefits.eyebrow')}</p>
          <h2 className="h2">{t('benefits.heading')}</h2>
          <p className="mt-3 max-w-2xl text-ink/70">{t('benefits.intro')}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((key) => (
              <li key={key} className="card"><h3 className="text-lg font-extrabold text-brand-600">{t(`benefits.${key}`)}</h3><p className="mt-2 text-ink/75">{t(`benefits.${key}Description`)}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Benefits() {
  return null
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
