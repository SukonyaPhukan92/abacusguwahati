import { useLanguage } from '../i18n.jsx'
import EnquireLink from './EnquireLink.jsx'

const offers = ['offer1', 'offer2', 'offer3']
const concerns = ['concern1', 'concern2', 'concern3']
const stats = [
  { key: 'franchisees', value: 'statFranchiseesValue' },
  { key: 'teachers', value: 'statTeachersValue' },
  { key: 'partners', value: 'statPartnersValue' },
  { key: 'countries', value: 'statCountriesValue' },
]

function Check() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" strokeWidth="1.8" /><path d="m7.5 12.5 3 3 6-6.5" /></svg>
  )
}

export default function WhyUs() {
  const { t } = useLanguage()
  return (
    <section id="why" className="bg-white">
      <div className="section reveal">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <p className="eyebrow">{t('why.eyebrow')}</p>
            <h2 className="h2">{t('why.heading')}</h2>
            <p className="mt-4 text-lg text-ink/80">{t('why.paragraph1')}</p>
            <p className="mt-4 text-lg text-ink/80">{t('why.paragraph2')}</p>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-ink/60">{t('why.concernsHeading')}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {concerns.map((key) => (
                <li key={key} className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">{t(`why.${key}`)}</li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl bg-brand-50 p-4 text-ink/80">{t('why.modulesNote')}</p>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-3xl p-6 text-white shadow-card md:p-8"
              style={{ background: 'linear-gradient(150deg, #3b63b8 0%, #7a4a8f 40%, #d4305a 75%, #f59a23 100%)' }}
            >
              <h3 className="text-xl font-extrabold">{t('why.statsHeading')}</h3>
              <p className="mt-1 text-sm text-white/85">{t('why.statsSub')}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {stats.map(({ key, value }) => (
                  <div key={key} className="flex flex-col-reverse rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
                    <dt className="mt-1 text-xs font-bold uppercase tracking-wide text-white/90">{t(`why.stat_${key}`)}</dt>
                    <dd className="text-3xl font-black leading-none sm:text-4xl">{t(`why.${value}`)}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-white/80">{t('why.statsNote')}</p>
            </div>

            <div className="rounded-3xl border border-ink/10 p-6 shadow-card">
              <h3 className="text-lg font-extrabold">{t('why.offersHeading')}</h3>
              <ul className="mt-4 space-y-3">
                {offers.map((key) => (
                  <li key={key} className="flex gap-3 text-ink/80"><Check />{t(`why.${key}`)}</li>
                ))}
              </ul>
              <EnquireLink className="btn btn-primary mt-6">{t('common.enquireDemo')}</EnquireLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
