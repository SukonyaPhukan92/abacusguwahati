import { centre, logo } from '../config.js'
import { useLanguage } from '../i18n.jsx'
import EnquireLink from './EnquireLink.jsx'

const condensed = { fontFamily: "Impact, 'Arial Narrow', 'Roboto Condensed', 'Arial Black', sans-serif" }

function Doodles() {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const star = 'm16 3 3.6 8.6 9.4.8-7.1 6.2 2.2 9.1L16 22.8 7.9 27.7l2.2-9.1L3 12.4l9.4-.8L16 3Z'
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/60">
      <svg className="absolute left-[4%] top-[6%] h-9 w-9" viewBox="0 0 32 32" {...common}><path d="M16 4a8 8 0 0 0-4 15v3h8v-3a8 8 0 0 0-4-15ZM13 26h6M14 29h4" /></svg>
      <svg className="absolute right-[5%] top-[6%] h-9 w-14" viewBox="0 0 56 32" {...common}><path d="M48 4l6 6-30 18-10 2 2-10L48 4ZM42 6l6 6" /></svg>
      <svg className="absolute left-[8%] top-[34%] h-8 w-8" viewBox="0 0 32 32" {...common}><path d={star} /></svg>
      <svg className="absolute right-[8%] top-[46%] h-8 w-8" viewBox="0 0 32 32" {...common}><path d={star} /></svg>
    </div>
  )
}

function People() {
  const limb = { stroke: '#fff', strokeLinecap: 'round', fill: 'none' }
  return (
    <svg viewBox="0 0 520 300" className="relative mx-auto -mt-[4.5rem] block w-full max-w-[460px]" aria-hidden="true">
      <g {...limb}>
        <circle cx="62" cy="72" r="18" fill="#fff" stroke="none" />
        <path d="M62 100v90" strokeWidth="36" />
        <path d="M52 190 48 292M72 190l4 102" strokeWidth="17" />
        <path d="M74 108 112 56 140 22" strokeWidth="14" />
        <path d="M48 112 34 168" strokeWidth="14" />
      </g>
      <g {...limb}>
        <circle cx="458" cy="66" r="17" fill="#fff" stroke="none" />
        <path d="M458 92v58" strokeWidth="30" />
        <path d="M458 140 424 232h68l-34-92Z" fill="#fff" strokeWidth="6" strokeLinejoin="round" />
        <path d="M444 232l-2 60M474 232l2 60" strokeWidth="14" />
        <path d="M446 104 408 54 380 22" strokeWidth="13" />
        <path d="M470 108l14 52" strokeWidth="13" />
      </g>
      {[196, 262, 328].map((x, i) => {
        const y = [152, 138, 152][i]
        return (
          <g key={x} {...limb}>
            <circle cx={x} cy={y} r="13" fill="#fff" stroke="none" />
            <path d={`M${x} ${y + 20}v52`} strokeWidth="26" />
            <path d={`M${x - 5} ${y + 72}l-2 ${300 - y - 76}M${x + 5} ${y + 72}l2 ${300 - y - 76}`} strokeWidth="12" />
            <path d={`M${x - 9} ${y + 28} ${x - 22} ${y - 14}M${x + 9} ${y + 28} ${x + 22} ${y - 14}`} strokeWidth="10" />
          </g>
        )
      })}
    </svg>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const gradientText = { backgroundImage: 'linear-gradient(90deg, #3b63b8, #d4305a 60%, #f59a23)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }
  return (
    <section id="top" className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(165deg, #3b63b8 0%, #6f4b97 32%, #d4305a 68%, #f59a23 100%)' }}>
      <Doodles />
      <h1 className="sr-only">{t('hero.headingStart')} {t('hero.headingBrand')}</h1>

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 pt-8 text-center md:grid-cols-2 md:gap-10 md:px-6 md:pt-6">
        <div className="flex flex-col items-center">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-14 w-auto rounded-xl bg-white px-3 py-1.5 sm:h-16" />
          <p className="mt-4 text-[7.5rem] font-black leading-[0.9] sm:text-[9.5rem]" style={condensed}>{t('hero.yearsNumber')}</p>
          <p className="mt-2 max-w-xs text-3xl font-black uppercase leading-tight tracking-wide sm:text-4xl" style={condensed}>{t('hero.yearsLabel')}</p>
        </div>

        <div className="relative">
          <div className="mx-auto flex aspect-square w-[min(70vw,290px)] flex-col items-center justify-center rounded-full bg-white text-center shadow-card">
            <p className="text-5xl font-black leading-none sm:text-6xl" style={{ ...condensed, ...gradientText }}>{t('hero.studentsNumber')}</p>
            <p className="mt-2 text-2xl font-black leading-none sm:text-3xl" style={{ ...condensed, ...gradientText }}>{t('hero.studentsLabel')}</p>
          </div>
          <People />
        </div>
      </div>

      <div className="relative bg-white text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 text-center md:flex-row md:justify-between md:px-6 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="inline-block bg-orange-logo px-4 py-1 text-xl font-extrabold text-white" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>SIP Academy</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">Creating Intelligence</p>
          </div>
          <div className="text-sm">
            <p className="font-bold">{t('hero.eyebrow')}</p>
            <p className="text-ink/70"><span aria-hidden="true" className="text-amber-500">★</span> {t('hero.rating', { rating: centre.googleRating.value, count: centre.googleRating.count })}</p>
            <p className="text-xs text-ink/60">{t('hero.nationalNote')}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <EnquireLink className="btn btn-primary" />
            <a href="#location" className="btn btn-secondary">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              {t('common.seeMaps')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
