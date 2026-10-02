import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { About, Programmes, Benefits, GetStarted } from './components/Sections.jsx'
import Gallery from './components/Gallery.jsx'
import { Faqs, Feedback } from './components/Faqs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import useReveal from './lib/useReveal.js'
import { centre } from './config.js'

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
  useReveal()
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Programmes />
        <Benefits />
        <GetStarted />
        <Gallery />
        <Feedback />
        <Faqs />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
    </>
  )
}
