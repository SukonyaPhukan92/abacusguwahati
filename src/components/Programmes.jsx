import { centre, schedule, admissionLevels, progressionLevels, feeStructure } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import EnquireLink from './EnquireLink.jsx'

const benefits = ['concentration', 'memory', 'confidence', 'fluency']
const tiers = [
  ['junior', 'tierJunior'],
  ['foundation', 'tierFoundation'],
  ['advance', 'tierAdvance'],
  ['gm', 'tierGm'],
]
const entryLabels = ['classUkg', 'class2', 'class3']
const money = (n) => `₹${n.toLocaleString('en-IN')}`
const levelCount = Object.values(progressionLevels).reduce((sum, l) => sum + l.length, 0)
const batchCount = schedule.reduce((sum, d) => sum + d.morning.length + d.evening.length, 0)

function Icon({ children, size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const icons = {
  abacus: (
    <Icon>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v16M12 4v16M16 4v16" />
      <circle cx="8" cy="9" r="1.6" fill="currentColor" />
      <circle cx="12" cy="14" r="1.6" fill="currentColor" />
      <circle cx="16" cy="10" r="1.6" fill="currentColor" />
    </Icon>
  ),
  brainGym: (
    <Icon>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </Icon>
  ),
  speedWriting: (
    <Icon>
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" />
    </Icon>
  ),
  check: (
    <Icon size={18}>
      <path d="M5 13l4 4L19 7" strokeWidth="2.6" />
    </Icon>
  ),
  sun: (
    <Icon size={16}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Icon>
  ),
  moon: (
    <Icon size={16}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </Icon>
  ),
}

function Heading({ eyebrow, title, intro, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="h2">{title}</h3>
      {intro && <p className="mt-3 text-lg text-ink/70">{intro}</p>}
    </div>
  )
}

export function Programmes() {
  const { t } = useLanguage()
  const stats = [
    { value: `${centre.googleRating.value}★`, label: t('programmes.statRating', { count: centre.googleRating.count }) },
    { value: levelCount, label: t('programmes.statLevels') },
    { value: batchCount, label: t('programmes.statBatches') },
    { value: 'UKG', label: t('programmes.statEntry') },
  ]
  const fees = [
    { key: 'Junior', data: feeStructure[0], title: t('programmes.feeJunior'), audience: t('programmes.forClassesJunior') },
    { key: 'Foundation', data: feeStructure[1], title: t('programmes.feeFoundation'), audience: t('programmes.forClassesFoundation') },
  ]

  return (
    <section id="programmes" className="bg-white">
      <div className="section reveal space-y-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-brand-100 p-8 shadow-card sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-orange-logo/15" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-brand-600/10" />
          <div className="relative max-w-3xl">
            <p className="eyebrow">{t('programmes.eyebrow')}</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{t('programmes.heading')}</h2>
            <p className="mt-4 text-lg text-ink/75">{t('programmes.intro')}</p>
            <EnquireLink className="btn btn-primary mt-8">{t('common.enquireDemo')}</EnquireLink>
          </div>
          <dl className="relative mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/80 p-4 backdrop-blur">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-brand-600 sm:text-4xl" aria-hidden="true">{s.value}</dd>
                <dd className="mt-1 text-sm font-semibold text-ink/70"><span className="sr-only">{s.value} </span>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <Heading eyebrow={t('programmes.offerEyebrow')} title={t('programmes.offerHeading')} intro={t('programmes.offerIntro')} center />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-card lg:col-span-3">
              <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-orange-logo/25" />
              <span className="relative inline-block rounded-full bg-orange-logo px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">{t('programmes.coreTag')}</span>
              <div className="relative mt-5 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-orange-logo">{icons.abacus}</span>
                <div>
                  <h4 className="text-2xl font-extrabold">{t('programmes.abacus')}</h4>
                  <p className="font-semibold text-orange-logo">{t('programmes.abacusTagline')}</p>
                </div>
              </div>
              <p className="relative mt-5 text-white/85">{t('programmes.abacusDescription')}</p>
              <ul className="relative mt-5 space-y-2">
                {[1, 2, 3].map((n) => (
                  <li key={n} className="flex items-start gap-3 font-semibold">
                    <span className="mt-0.5 text-orange-logo">{icons.check}</span>{t(`programmes.abacusPoint${n}`)}
                  </li>
                ))}
              </ul>
              <p className="relative mt-6 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/85">{t('programmes.abacusNote')}</p>
            </article>

            <div className="grid gap-6 lg:col-span-2">
              {[
                ['brainGym', icons.brainGym],
                ['speedWriting', icons.speedWriting],
              ].map(([key, icon]) => (
                <article key={key} className="rounded-3xl border-2 border-brand-100 bg-white p-6 shadow-card transition hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">{icon}</span>
                    <div>
                      <h4 className="text-xl font-extrabold">{t(`programmes.${key}`)}</h4>
                      <p className="text-sm font-semibold text-brand-600">{t(`programmes.${key}Tagline`)}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-ink/75">{t(`programmes.${key}Description`)}</p>
                  <p className="mt-4 inline-block rounded-full bg-leaf-100 px-3 py-1 text-xs font-bold text-leaf-600">{t('programmes.allLevels')}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Heading eyebrow={t('programmes.journeyEyebrow')} title={t('programmes.journeyHeading')} intro={t('programmes.journeyIntro')} center />

          <div className="mt-10 rounded-3xl bg-brand-50 p-6 sm:p-8">
            <h4 className="text-center text-lg font-extrabold">{t('programmes.entryHeading')}</h4>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {admissionLevels.map((a, i) => (
                <li key={a.label} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wider text-ink/60">{t(`programmes.${entryLabels[i]}`)}</p>
                  <p className="mt-1 text-xs font-semibold text-ink/50">{t('programmes.startsAt')}</p>
                  <p className="mt-1 text-2xl font-extrabold text-brand-600">{a.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {tiers.map(([tier, label], i) => {
              const levels = progressionLevels[tier]
              const entry = admissionLevels.some((a) => levels.includes(a.label))
              return (
                <li key={tier} className={`relative rounded-3xl border-2 bg-white p-5 ${entry ? 'border-brand-400 shadow-card' : 'border-ink/10'}`}>
                  {entry && <span className="absolute -top-3 left-5 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-bold text-white">{t('programmes.startHere')}</span>}
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-white" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h4 className="text-lg font-extrabold">{t(`programmes.${label}`)}</h4>
                      <p className="text-xs font-semibold text-ink/60">{t('programmes.levelsCount', { count: levels.length })}</p>
                    </div>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <li key={level}>
                        <span title={level} className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-brand-100 px-3 text-sm font-extrabold text-brand-600">
                          <span className="sr-only">{level}</span>
                          <span aria-hidden="true">{level.split(' ').pop()}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div>
          <Heading eyebrow={t('programmes.scheduleEyebrow')} title={t('programmes.scheduleHeading')} intro={t('programmes.scheduleIntro')} center />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {schedule.map((d) => (
              <li key={d.day} className="rounded-3xl border-2 border-ink/10 bg-white p-5 shadow-sm transition hover:border-brand-400">
                <h4 className="text-lg font-extrabold">{t(`programmes.${d.day}`)}</h4>
                <div className="mt-4 space-y-3">
                  {d.morning.length > 0 && (
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-deep">{icons.sun}{t('programmes.morning')}</p>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        {d.morning.map((time) => <span key={time} className="rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-orange-deep">{time}</span>)}
                      </div>
                    </div>
                  )}
                  {d.evening.length > 0 && (
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/70">{icons.moon}{t('programmes.evening')}</p>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        {d.evening.map((time) => <span key={time} className="rounded-full bg-ink px-3 py-1 text-sm font-bold text-white">{time}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-semibold text-ink/70">{t('programmes.officeOpen')}</p>
        </div>

        <div>
          <Heading eyebrow={t('programmes.feesEyebrow')} title={t('programmes.feesHeading')} intro={t('programmes.feesIntro')} center />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {fees.map(({ key, data, title, audience }) => (
              <article key={key} className="overflow-hidden rounded-3xl border-2 border-brand-100 bg-white shadow-card">
                <div className="bg-brand-50 px-6 py-5">
                  <h4 className="text-xl font-extrabold">{title}</h4>
                  <p className="text-sm font-semibold text-ink/60">{audience}</p>
                </div>
                <dl className="space-y-3 px-6 py-5">
                  {[
                    ['registration', data.registrationFee],
                    ['monthly', data.monthlyFee],
                    ['bookFee', data.bookFee],
                  ].map(([label, amount]) => (
                    <div key={label} className="flex items-center justify-between border-b border-dashed border-ink/15 pb-3">
                      <dt className="text-ink/75">{t(`programmes.${label}`)}</dt>
                      <dd className="font-bold">{money(amount)}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-1">
                    <dt className="font-extrabold">{t('programmes.totalStart')}</dt>
                    <dd className="text-3xl font-extrabold text-brand-600">{money(data.total)}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-4xl rounded-3xl bg-ink p-6 text-white sm:flex sm:items-center sm:gap-8">
            <div className="shrink-0">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-logo">{t('programmes.afterEnrolment')}</p>
              <p className="mt-1 text-3xl font-extrabold">{money(feeStructure[2].monthlyFee)} <span className="text-base font-semibold text-white/70">{t('programmes.perMonth')}</span></p>
            </div>
            <p className="mt-3 text-white/80 sm:mt-0">{t('programmes.bookNote')}</p>
          </div>
        </div>

        <div>
          <Heading eyebrow={t('benefits.eyebrow')} title={t('benefits.heading')} intro={t('benefits.intro')} center />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((key, i) => (
              <li key={key} className="card border-t-4 border-brand-400">
                <span className="text-sm font-extrabold text-brand-400" aria-hidden="true">0{i + 1}</span>
                <h4 className="mt-1 text-lg font-extrabold text-brand-600">{t(`benefits.${key}`)}</h4>
                <p className="mt-2 text-ink/75">{t(`benefits.${key}Description`)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-brand-600 p-8 text-center text-white shadow-card sm:p-12">
          <h3 className="text-3xl font-extrabold sm:text-4xl">{t('programmes.ctaHeading')}</h3>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">{t('programmes.ctaText')}</p>
          <EnquireLink className="btn mt-8 bg-white text-brand-600 shadow-card hover:bg-brand-50">{t('common.enquireDemo')}</EnquireLink>
        </div>
      </div>
    </section>
  )
}
