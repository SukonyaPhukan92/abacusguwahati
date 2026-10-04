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
  googleRating: { value: 4.9, count: 104 }, // not used in structured data

  // ---- Verified from centre (4 Oct 2026) ----
  // WhatsApp enquiries go to the centre's listed mobile (086386 69857), as requested by the site owner.
  // Digits only, with country code. Change here if the centre uses a different WhatsApp number.
  whatsapp: '918638669857',
  email: null, // used for "mailto:" enquiries if set

  // Class schedules verified with centre (4 Oct 2026)
  hours: [
    'Thursday: 5:00 PM',
    'Friday: 5:00 PM',
    'Saturday: 10:00 AM, 4:30 PM',
    'Sunday: 9:00 AM, 11:30 AM, 4:00 PM',
    'Office open every day',
  ],
  siteUrl: null, // public URL once launched (used in structured data)

  // Supplied by the site owner (Google Maps listing for this centre)
  mapsUrl:
    'https://www.google.com/maps/place/SIP+ABACUS,+LAKHRA/@26.1178433,91.7103434,8509m/data=!3m1!1e3!4m10!1m2!2m1!1sabacus!3m6!1s0x375a5d997957d77b:0x5c8bf4a7a2a5b9b8!8m2!3d26.1178433!4d91.7484423!15sCgZhYmFjdXMiA4gBAVoIIgZhYmFjdXOSAQ90cmFpbmluZ19jZW50ZXLgAQA!16s%2Fg%2F11k9l71ddb?entry=ttu',
  // Embedded map, pinned at the centre's coordinates from the Maps link above (no API key needed).
  // To show Google's business card instead, replace with the listing's "Share → Embed a map" src URL.
  mapEmbedUrl: 'https://maps.google.com/maps?q=26.1178433,91.7484423&z=17&hl=en&output=embed',

  social: {
    instagram: 'https://www.instagram.com/sipabacuslokhra?stkn=aDB1bWo2YjZtY2Nt',
    facebook: 'https://www.facebook.com/share/1d14X2pqP7/',
  },
}

// Logo and photos supplied by the site owner (WhatsApp export, 29 Sep 2026) for use on this site.
export const logo = { src: 'images/sip-abacus-logo.webp', alt: 'SIP Abacus – success assured', width: 480, height: 231 }

export const officialSiteUrl = 'https://sipabacus.com/in/' // national brand reference only

/**
 * Programmes offered at SIP Abacus Lakhra (verified 4 Oct 2026)
 * All three programmes are available with structured levels:
 * Admission: Junior 1 (UKG/Class 1), Junior 2 (Class 2), Foundation 1 (Class 3)
 * Progression: Junior (4 levels), Foundation (4 levels), Advance (4 levels), G.M. (3 levels)
 */
export const programmes = [
  {
    id: 'abacus',
    name: 'Abacus & Mental Arithmetic',
    description:
      'The core programme where children learn to operate the abacus, then gradually transition to mental calculation. Through structured, step-by-step practice, students develop number sense, speed, and confidence in arithmetic. Available across all progression levels from Junior 1 through G.M. Level C.',
    // A centre certificate shows "Junior Level 1 … SIP Abacus Junior programme at SIP Lakhra".
    localNote: 'Offered in Lakhra — a SIP Lakhra certificate shows Junior Level 1 of the SIP Abacus Junior programme.',
  },
  {
    id: 'brain-gym',
    name: 'Brain Gym',
    description:
      'Short, engaging activities designed to build focus, concentration, and hand-eye coordination. These playful exercises complement abacus training and support overall cognitive development as part of the integrated SIP Abacus programme.',
  },
  {
    id: 'speed-writing',
    name: 'Speed Writing',
    description:
      'Handwriting practice focusing on speed and neatness. Integrated alongside abacus and Brain Gym, this programme helps develop fine motor control and writing fluency while reinforcing numeracy skills.',
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
  { src: 'gallery/classroom-mixed-uniforms', group: 'centre' },
  { src: 'gallery/classroom-white-uniforms', group: 'centre' },
  { src: 'gallery/teacher-observing-class', group: 'centre' },
  { src: 'gallery/teacher-guided-learning', group: 'centre' },
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
    quote: 'My child has shown great improvement in concentration and mental maths after joining the abacus classes. The teacher is supportive and explains every concept clearly.',
    name: 'Priti Das',
    source: 'Google review',
  },
  {
    quote: 'I have seen very good improvement in my daughter. The teachers are kind and supportive, and they guide my daughter and all the students very gently.',
    name: 'Deepika Das',
    source: 'Google review',
  },
  {
    quote: 'This is a new and exciting experience for my child. I hope it will bring great learning and confidence-building opportunities in the future.',
    name: 'Chatrajit Sinha',
    source: 'Google review',
  },
]

/**
 * Programme levels and admission criteria (verified 4 Oct 2026)
 * Admission levels are based on school class; progression levels depend on the tier
 */
export const admissionLevels = [
  { label: 'Junior 1', criteria: 'Class UKG or Class 1' },
  { label: 'Junior 2', criteria: 'Class 2' },
  { label: 'Foundation 1', criteria: 'Class 3' },
]

export const progressionLevels = {
  junior: ['Junior 1', 'Junior 2', 'Junior 3', 'Junior 4'],
  foundation: ['Foundation 1', 'Foundation 2', 'Foundation 3', 'Foundation 4'],
  advance: ['Advance 1', 'Advance 2', 'Advance 3', 'Advance 4'],
  gm: ['G.M - A', 'G.M - B', 'G.M - C'],
}

/**
 * Fee structure (verified 4 Oct 2026)
 * Monthly fees: ₹1,500 (consistent across levels)
 * Book fees: Charged after every 4 months (after exam), varies by promoted level
 */
export const feeStructure = [
  {
    level: 'Junior 1 & 2',
    registrationFee: 2050,
    monthlyFee: 1500,
    bookFee: 550,
    total: 4100,
    note: 'Initial enrolment total',
  },
  {
    level: 'Foundation Level 1',
    registrationFee: 2050,
    monthlyFee: 1500,
    bookFee: 720,
    total: 4270,
    note: 'Initial enrolment total',
  },
  {
    level: 'Ongoing',
    monthlyFee: 1500,
    bookFee: 'Varies by level (charged after every 4 months post-exam)',
  },
]

export const team = [
  {
    name: 'Mathura Mohan Roy',
    role: 'Principal & Local Centre Leader (LCL)',
    image: 'team/mathura-mohan-roy',
    bio: 'Leading the SIP Abacus Lakhra centre with dedication to educational excellence and student development.',
  },
]

export const faqs = [
  {
    q: 'What is abacus learning?',
    a: 'The abacus is a counting frame. Children learn to move beads to represent numbers, then gradually practise calculating in their minds by picturing the abacus. SIP Abacus presents this as a fun, structured way to build number skills.',
  },
  {
    q: 'What does SIP Abacus teach besides abacus?',
    a: 'The official SIP Abacus programme also includes Brain Gym and Speed Writing. SIP Lakhra offers all three programmes.',
  },
  {
    q: 'What ages and levels are available?',
    a: 'Admission starts at Junior 1 (Class UKG/1), Junior 2 (Class 2), and Foundation 1 (Class 3). Progression continues through Junior (4 levels), Foundation (4 levels), Advance (4 levels), and G.M. (3 levels). Ask the centre about your child\'s eligibility.',
  },
  {
    q: 'What are the fees and batch timings?',
    a: 'Classes run Thursday–Sunday with multiple time slots (morning and evening). Registration fees start at ₹2,050, monthly fees at ₹1,500, with book fees varying by level. Contact the centre for specific batch timings and current fees.',
  },
  {
    q: 'When can my child join?',
    a: 'Classes are scheduled Thursday (5:00 PM), Friday (5:00 PM), Saturday (10:00 AM, 4:30 PM), and Sunday (9:00 AM, 11:30 AM, 4:00 PM). The office is open every day. Call or visit to arrange a demo.',
  },
  {
    q: 'Can I visit or attend a demo class?',
    a: 'You can ask the centre about visiting or arranging a demo. Availability is decided by the centre. Call or message on WhatsApp to book.',
  },
]
