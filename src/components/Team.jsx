import { team } from '../config.js'
import { useLanguage } from '../i18n.jsx'

const cardClass = 'overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-shadow hover:shadow-lg'

function Photo({ member, className }) {
  return (
    <div className={`overflow-hidden bg-stone-200 ${className}`}>
      <img
        src={`${member.image}-400.jpg`}
        alt={member.name}
        className="h-full w-full object-cover"
        style={{ objectPosition: member.imagePosition }}
      />
    </div>
  )
}

function Details({ member, t, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="text-2xl font-extrabold text-ink">{member.name}</h3>
      <p className="mt-1 text-base font-semibold text-brand-600">{t(`team.members.${member.id}.role`)}</p>
      <p className="mt-4 text-ink/75">{t(`team.members.${member.id}.bio`)}</p>
    </div>
  )
}

export default function Team() {
  const { t } = useLanguage()
  const [leader, ...members] = team

  return (
    <section id="team" className="section bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal space-y-3 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{t('team.label')}</p>
          <h2 className="h2">{t('team.title')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-ink/70">{t('team.subtitle')}</p>
        </div>

        <div className={`reveal mt-12 ${cardClass}`}>
          <div className="grid md:grid-cols-2">
            <Photo member={leader} className="h-72 md:h-96" />
            <Details member={leader} t={t} className="justify-center p-6 md:p-10" />
          </div>
        </div>

        <div className="reveal mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.id} className={cardClass}>
              <div className="flex h-full flex-col">
                <Photo member={member} className="h-72" />
                <Details member={member} t={t} className="flex-1 p-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
