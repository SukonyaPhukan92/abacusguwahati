import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AbacusPractice from './components/AbacusPractice.jsx'
import { About, GetStarted } from './components/Sections.jsx'
import { Programmes } from './components/Programmes.jsx'
import Gallery from './components/Gallery.jsx'
import { Faqs, Feedback } from './components/Faqs.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import useReveal from './lib/useReveal.js'
import { centre } from './config.js'
import { useLanguage } from './i18n.jsx'

// Structured data: only verified fields; optional ones are added when filled in config.js. No ratings/reviews.
function jsonLd() {
  const d = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: centre.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: centre.addressLocality || centre.locality,
      addressRegion: centre.region,
      addressCountry: centre.country,
      ...(centre.streetAddress && { streetAddress: centre.streetAddress }),
      ...(centre.postalCode && { postalCode: centre.postalCode }),
    },
    hasMap: centre.mapsUrl,
    ...(centre.geo && { geo: { '@type': 'GeoCoordinates', latitude: centre.geo.lat, longitude: centre.geo.lng } }),
    ...(centre.phone && { telephone: centre.phone }),
    ...(centre.siteUrl && { url: centre.siteUrl }),
  }
  return JSON.stringify(d)
}

export default function App() {
  const { t } = useLanguage()
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useReveal()

  if (hash === '#privacy') {
    return (
      <>
        <Header />
        <main id="main" className="bg-stone-50">
          <section className="section reveal mx-auto max-w-4xl py-12">
            <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-card sm:p-8 md:p-10">
              <a href="/" className="mb-6 inline-flex items-center font-semibold underline underline-offset-4">{t('privacyPage.backHome')}</a>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{t('privacyPage.title')}</p>
              <h1 className="h2 !mt-3 !mb-4">{t('privacyPage.title')}</h1>

              <p className="mt-5 text-lg text-ink/75">{t('privacyPage.intro')}</p>

              <div className="mt-8 space-y-6 text-ink/80">
                <div className="rounded-2xl bg-stone-50 p-5">
                  <h2 className="text-lg font-extrabold text-ink">{t('privacyPage.item1Title')}</h2>
                  <p className="mt-2">{t('privacyPage.item1')}</p>
                </div>

                <div className="rounded-2xl bg-stone-50 p-5">
                  <h2 className="text-lg font-extrabold text-ink">{t('privacyPage.item2Title')}</h2>
                  <p className="mt-2">{t('privacyPage.item2')}</p>
                </div>

                <div className="rounded-2xl bg-stone-50 p-5">
                  <h2 className="text-lg font-extrabold text-ink">{t('privacyPage.item3Title')}</h2>
                  <p className="mt-2">{t('privacyPage.item3')}</p>
                </div>

                <div className="rounded-2xl bg-stone-50 p-5">
                  <h2 className="text-lg font-extrabold text-ink">{t('privacyPage.item4Title')}</h2>
                  <p className="mt-2">{t('privacyPage.item4')}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <MobileBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
      </>
    )
  }

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <AbacusPractice />
        <Programmes />
        <GetStarted />
        <Gallery />
        <Feedback />
        <Team />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
    </>
  )
}
