/**
 * SINGLE SOURCE OF TRUTH for editable business details.
 *
 * `null` = NOT VERIFIED. The UI shows "to be confirmed" and hides the related action.
 * Fill values in only after confirming them with the Lakhra centre.
 * NEVER paste national headquarters details here.
 */
export const centre = {
  name: 'SIP Abacus, Lakhra',
  brandName: 'SIP Abacus',
  locality: 'Lakhra',
  city: 'Guwahati',
  region: 'Assam',
  country: 'IN',

  // ---- Verified from the centre's Google Maps listing (copied by site owner, 29 Sep 2026) ----
  streetAddress: 'UCO Bank Building, Lokhra Bamunpara',
  addressLocality: 'Lokhra', // spelling used in the listing's address
  postalCode: '781040',
  plusCode: '4P9X+49 Guwahati, Assam',
  geo: { lat: 26.1178433, lng: 91.7484423 }, // from the supplied Maps link
  phone: '+918638669857', // listed as 086386 69857
  phoneDisplay: '086386 69857',
  googleRating: { value: 4.9, count: 104, asOf: '29 Sep 2026' }, // shown with attribution; not used in structured data

  // ---- Still unverified ----
  // WhatsApp enquiries go to the centre's listed mobile (086386 69857), as requested by the site owner.
  // Digits only, with country code. Change here if the centre uses a different WhatsApp number.
  whatsapp: '918638669857',
  email: null, // used for "mailto:" enquiries if set
  hours: null, // not listed on Google Maps yet. e.g. ['Mon–Fri: 4:00 pm – 7:00 pm'] – array of strings
  siteUrl: null, // public URL once launched (used in structured data)

  // Supplied by the site owner (Google Maps listing for this centre)
  mapsUrl:
    'https://www.google.com/maps/place/SIP+ABACUS,+LAKHRA/@26.1178433,91.7103434,8509m/data=!3m1!1e3!4m10!1m2!2m1!1sabacus!3m6!1s0x375a5d997957d77b:0x5c8bf4a7a2a5b9b8!8m2!3d26.1178433!4d91.7484423!15sCgZhYmFjdXMiA4gBAVoIIgZhYmFjdXOSAQ90cmFpbmluZ19jZW50ZXLgAQA!16s%2Fg%2F11k9l71ddb?entry=ttu',
  // Embedded map, pinned at the centre's coordinates from the Maps link above (no API key needed).
  // To show Google's business card instead, replace with the listing's "Share → Embed a map" src URL.
  mapEmbedUrl: 'https://maps.google.com/maps?q=26.1178433,91.7484423&z=17&hl=en&output=embed',

  social: {
    // facebook: 'https://…', instagram: 'https://…'  – only verified centre pages
  },
}

// Logo and photos supplied by the site owner (WhatsApp export, 29 Sep 2026) for use on this site.
export const logo = { src: 'images/sip-abacus-logo.webp', alt: 'SIP Abacus – success assured', width: 480, height: 231 }

export const officialSiteUrl = 'https://sipabacus.com/in/' // national brand reference only

/**
 * Programme names below come from search-result excerpts of the official SIP Abacus India
 * site (the site itself was unreachable). Local availability, levels, ages, fees: TO CONFIRM.
 */
export const programmes = [
  {
    id: 'abacus',
    name: 'Abacus & Mental Arithmetic',
    description:
      'Children learn to work with the abacus and gradually move on to calculating in the mind, in a structured, step-by-step programme.',
    // A centre certificate shows "Junior Level 1 … SIP Abacus Junior programme at SIP Lakhra".
    localNote: 'Offered at Lakhra – a SIP Lakhra certificate shows Junior Level 1 of the SIP Abacus Junior programme.',
  },
  {
    id: 'brain-gym',
    name: 'Brain Gym',
    description:
      'Short, playful activities described by SIP Abacus as part of its programme to support focus and coordination.',
  },
  {
    id: 'speed-writing',
    name: 'Speed Writing',
    description:
      'Handwriting-focused practice that SIP Abacus lists alongside abacus and Brain Gym.',
  },
]

/**
 * Gallery – photos supplied by the site owner. Each `src` is a base path; the site loads
 * `<src>-600.webp` and `<src>-1200.webp`. `group` controls which heading a photo sits under.
 * Captions describe only what is visible or printed in the photo.
 */
export const gallery = [
  { src: 'gallery/class-cards', group: 'centre', alt: 'Smiling children in orange SIP T-shirts holding up cards in class, with an abacus on the desk', caption: 'Proud moments in class' },
  { src: 'gallery/junior-certificate', group: 'centre', alt: 'A boy and a parent holding an SIP Abacus Junior Level certificate issued at SIP Lakhra', caption: 'Junior Level 1 certificate, SIP Lakhra' },
  { src: 'gallery/abacus-practice', group: 'centre', alt: 'Children in orange uniforms practising at their desks with abacus and workbooks', caption: 'Abacus practice' },
  { src: 'gallery/craft-cards', group: 'centre', alt: 'Children holding up colourful handmade cards in the classroom', caption: 'Card-making activity' },
  { src: 'gallery/flag-celebration', group: 'centre', alt: 'Two young children smiling, one holding the Indian national flag', caption: 'Celebrating with the tricolour' },
  { src: 'gallery/activity-time', group: 'centre', alt: 'Children seated at yellow desks with paper gift bags', caption: 'Activity time' },
  { src: 'gallery/regional-competition-2024', group: 'events', alt: 'Large group photo in front of the Regional SIP Abacus Competition banner, Assam, 28 July 2024', caption: 'Regional SIP Abacus Competition, Assam – 28 July 2024' },
  { src: 'gallery/competition-day', group: 'events', alt: 'Children writing at desks in a large hall during a competition', caption: 'Competition day' },
  { src: 'gallery/prize-giving-2024', group: 'events', alt: 'A student in an orange SIP T-shirt receiving a trophy on stage at an abacus competition in 2024', caption: 'Prize-giving, 2024' },
  { src: 'gallery/volunteers-2024', group: 'events', alt: 'Volunteers in blue SIP T-shirts at the Regional SIP Abacus Competition 2024, Assam', caption: 'Volunteers at the regional competition, 2024' },
  { src: 'gallery/volunteer-team', group: 'events', alt: 'A team of volunteers in blue SIP T-shirts standing together at an event venue', caption: 'Event volunteer team' },
  { src: 'gallery/annual-awards-2022', group: 'events', alt: 'Teachers holding certificates on stage at the SIP Assam Annual Awards 2022', caption: 'SIP Assam Annual Awards 2022 (14th Annual Meet, Feb 2023)' },
]

export const heroImage = gallery[0]
export const aboutImage = gallery[2]

/** Parent feedback: add ONLY genuine, attributable, permitted reviews. Empty = section is not rendered. */
// Public Google Maps reviews of this centre, copied from the listing on 29 Sep 2026.
export const testimonials = [
  {
    quote: 'My child has shown great improvement in concentration and mental math after joining the abacus classes. The teacher is supportive, and explains every concept clearly.',
    name: 'Priti Das',
    source: 'Google review',
  },
  {
    quote: 'I found very good improvement in my daughter. And teachers are very nice and kind. They guide my daughter and all the students very sweetly.',
    name: 'Deepika Das',
    source: 'Google review',
  },
  {
    quote: "It's being new and exciting experience for my child. Hope it will be great learning and confidence building for future ahead.",
    name: 'Chatrajit Sinha',
    source: 'Google review',
  },
]

export const faqs = [
  {
    q: 'What is abacus learning?',
    a: 'The abacus is a counting frame. Children learn to move beads to represent numbers, then gradually practise calculating in their minds by picturing the abacus. SIP Abacus presents this as a fun, structured way to build number skills.',
  },
  {
    q: 'What does SIP Abacus teach besides abacus?',
    a: 'The official SIP Abacus programme also mentions Brain Gym and Speed Writing. Please ask the Lakhra centre which of these it currently offers.',
  },
  {
    q: 'What ages and levels are available?',
    a: 'This depends on the programme and the centre. Please contact the Lakhra centre to discuss what suits your child.',
  },
  {
    q: 'What are the fees and batch timings?',
    a: 'We do not list fees or timings here because they must come from the centre. Send an enquiry or call the centre for current details.',
  },
  {
    q: 'Can I visit or attend a demo class?',
    a: 'You can ask the centre about visiting or arranging a demo. Availability is decided by the centre.',
  },
  {
    q: 'Is this the official SIP Abacus website?',
    a: 'This page is about the Lakhra, Guwahati centre. For the national brand, visit the official SIP Abacus India website.',
  },
]
