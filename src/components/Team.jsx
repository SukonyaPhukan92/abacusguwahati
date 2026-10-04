import { team } from '../config.js'
import { useLanguage } from '../i18n.jsx'

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="section bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal space-y-3 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{t('team.label')}</p>
          <h2 className="h2">{t('team.title')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-ink/70">{t('team.subtitle')}</p>
        </div>

        <div className="reveal mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-shadow hover:shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-64 overflow-hidden bg-stone-200 md:h-80">
                  <img
                    src={`${member.image}-400.jpg`}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="text-2xl font-extrabold text-ink">{member.name}</h3>
                  <p className="mt-1 text-base font-semibold text-brand-600">{member.role}</p>
                  <p className="mt-4 text-ink/75">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
