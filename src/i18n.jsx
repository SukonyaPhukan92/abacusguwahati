import { createContext, useContext, useEffect, useState } from 'react'

const messages = {
  en: {
    page: {
      title: 'SIP Abacus Lakhra, Guwahati | Abacus & Mental Maths Classes for Children',
      description: 'SIP Abacus Lakhra, Guwahati – abacus and mental arithmetic classes for children. Enquire about a demo, call the centre or get directions.',
    },
    language: { group: 'Choose language', english: 'English', assamese: 'অসমীয়া' },
    location: { locality: 'Lakhra', city: 'Guwahati' },
    common: {
      skip: 'Skip to content', about: 'About', programmes: 'Programmes', benefits: 'Benefits', gallery: 'Gallery', faqs: 'FAQs', contact: 'Contact',
      enquire: 'Enquire', enquireDemo: 'Enquire About a Demo', whatsappNewTab: ' on WhatsApp (opens in a new tab)', opensNewTab: ' (opens in a new tab)',
      toConfirm: 'To be confirmed', seeMaps: 'See Us on the Map', logoAlt: 'SIP Abacus – success assured',
      mainNavigation: 'Main', mobileNavigation: 'Mobile', menuOpen: 'Open menu', menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'SIP Abacus, Lakhra · Guwahati, Assam',
      headingStart: 'Discover the Joy of Numbers at', headingBrand: 'SIP Abacus, Lakhra.',
      description: 'Abacus and mental arithmetic classes for children in Lakhra, Guwahati. Talk to the centre about the programmes, find out what suits your child, and ask about a demo class.',
      rating: '{rating} on Google Maps · {count} reviews',
      heroAlt: 'Smiling children in orange SIP T-shirts holding up cards in class, with an abacus on the desk',
    },
    about: {
      eyebrow: 'About the centre', heading: 'Your local SIP Abacus centre in Lakhra',
      paragraph1: 'SIP Abacus, Lakhra is the SIP Abacus centre serving families in Lakhra, Guwahati. SIP Abacus is a national brand for children\'s abacus and mental arithmetic learning; this website is for the Lakhra centre only.',
      paragraph2: 'The approach is simple: children practise on the abacus with a teacher, then gradually learn to picture the beads and calculate in their heads, with games and activities to keep practice enjoyable.',
      reference: 'Reference for the national brand:',
    },
    practice: {
      eyebrow: 'Interactive practice', heading: 'Try the abacus', intro: 'Make the sum, one bead at a time.', challenge: 'Your challenge', solved: '{count} solved',
      quickHint: 'Quick hint', one: 'one lower bead', four: 'all four lower beads', upperFive: 'Upper bead =',
      placeTenThousands: 'Ten thousands', placeThousands: 'Thousands', placeHundreds: 'Hundreds', placeTens: 'Tens', placeOnes: 'Ones',
      boardLabel: 'Interactive five-column abacus', upperOn: '{place}: move five bead toward the bar', upperOff: '{place}: move five bead away',
      lowerOn: '{place}: add lower bead {number}', lowerOff: '{place}: move lower bead {number}', digit: '{place} digit {digit}',
      total: 'Your number', reset: 'Reset beads', newSum: 'New sum', check: 'Check answer', correct: 'Correct! You solved the sum.',
      tryAgain: 'Not quite yet. Keep moving the beads and try again.',
    },
    programmes: {
      eyebrow: 'Programmes', heading: 'What SIP Abacus offers', intro: 'Programme names follow the national SIP Abacus brand. Which ones run at Lakhra, and for which ages and levels, must be confirmed with the centre.',
      abacus: 'Abacus & Mental Arithmetic', abacusDescription: 'Children learn to work with the abacus and gradually move on to calculating in the mind, in a structured, step-by-step programme.',
      abacusNote: 'Offered at Lakhra – a SIP Lakhra certificate shows Junior Level 1 of the SIP Abacus Junior programme.',
      brainGym: 'Brain Gym', brainGymDescription: 'Short, playful activities described by SIP Abacus as part of its programme to support focus and coordination.',
      speedWriting: 'Speed Writing', speedWritingDescription: 'Handwriting-focused practice that SIP Abacus lists alongside abacus and Brain Gym.',
      agesLevelsFees: 'Ages, levels & fees', availability: 'Availability, ages & fees', confirmWithCentre: 'confirm with centre',
    },
    benefits: {
      eyebrow: 'Learning benefits', heading: 'What regular practice aims to build', intro: 'These are learning aims, not guarantees. Every child learns at their own pace, and results vary.',
      concentration: 'Concentration', concentrationDescription: 'Moving beads and following steps asks children to focus on one task at a time.',
      memory: 'Memory', memoryDescription: 'Picturing the abacus in the mind gives regular practice in visual memory.',
      confidence: 'Confidence', confidenceDescription: 'Steady progress with numbers can help children feel more comfortable with maths.',
      fluency: 'Number fluency', fluencyDescription: 'Regular practice aims to make everyday addition and subtraction feel more natural.',
    },
    steps: {
      heading: 'How to get started',
      enquiry: 'Send an enquiry', enquiryDescription: 'Share your name and contact number using the form below.',
      discuss: 'Discuss suitable classes', discussDescription: 'The centre can talk you through programmes, timings and fees.',
      visit: 'Arrange a visit or demo', visitDescription: 'Subject to availability at the centre.',
    },
    gallery: {
      eyebrow: 'Gallery', heading: 'Life at SIP Abacus', intro: 'Classroom moments from the Lakhra centre, and SIP Abacus competitions and events held in Assam. Select a photo to enlarge it.',
      centre: 'At the centre', events: 'Competitions & events in Assam', viewer: 'Photo viewer: {caption}', photoCount: '{current} of {total}',
      previous: 'Previous', next: 'Next', close: 'Close', enlarge: ' – open larger photo',
      classCardsAlt: 'Smiling children in orange SIP T-shirts holding up cards in class, with an abacus on the desk', classCards: 'Proud moments in class',
      certificateAlt: 'A boy and a parent holding an SIP Abacus Junior Level certificate issued at SIP Lakhra', certificate: 'Junior Level 1 certificate, SIP Lakhra',
      practiceAlt: 'Children in orange uniforms practising at their desks with abacus and workbooks', practiceCaption: 'Abacus practice',
      craftAlt: 'Children holding up colourful handmade cards in the classroom', craft: 'Card-making activity',
      flagAlt: 'Two young children smiling, one holding the Indian national flag', flag: 'Celebrating with the tricolour',
      activityAlt: 'Children seated at yellow desks with paper gift bags', activity: 'Activity time',
      competitionAlt: 'Large group photo in front of the Regional SIP Abacus Competition banner, Assam, 28 July 2024', competition: 'Regional SIP Abacus Competition, Assam – 28 July 2024',
      competitionDayAlt: 'Children writing at desks in a large hall during a competition', competitionDay: 'Competition day',
      prizeAlt: 'A student in an orange SIP T-shirt receiving a trophy on stage at an abacus competition in 2024', prize: 'Prize-giving, 2024',
      volunteersAlt: 'Volunteers in blue SIP T-shirts at the Regional SIP Abacus Competition 2024, Assam', volunteers: 'Volunteers at the regional competition, 2024',
      teamAlt: 'A team of volunteers in blue SIP T-shirts standing together at an event venue', team: 'Event volunteer team',
      awardsAlt: 'Teachers holding certificates on stage at the SIP Assam Annual Awards 2022', awards: 'SIP Assam Annual Awards 2022 (14th Annual Meet, Feb 2023)',
    },
    feedback: {
      eyebrow: 'Parent feedback', heading: 'What parents say on Google', rated: 'Rated {rating} out of 5 from {count} reviews on', note: 'Selected reviews are quoted below as written.', source: 'Google review', translatedSource: 'Google review (Assamese translation)',
      quote1: 'My child has shown great improvement in concentration and mental math after joining the abacus classes. The teacher is supportive, and explains every concept clearly.',
      quote2: 'I found very good improvement in my daughter. And teachers are very nice and kind. They guide my daughter and all the students very sweetly.',
      quote3: 'It\'s being new and exciting experience for my child. Hope it will be great learning and confidence building for future ahead.',
    },
    faqs: {
      eyebrow: 'FAQs', heading: 'Questions parents ask',
      q1: 'What is abacus learning?', a1: 'The abacus is a counting frame. Children learn to move beads to represent numbers, then gradually practise calculating in their minds by picturing the abacus. SIP Abacus presents this as a fun, structured way to build number skills.',
      q2: 'What does SIP Abacus teach besides abacus?', a2: 'The official SIP Abacus programme also mentions Brain Gym and Speed Writing. Please ask the Lakhra centre which of these it currently offers.',
      q3: 'What ages and levels are available?', a3: 'This depends on the programme and the centre. Please contact the Lakhra centre to discuss what suits your child.',
      q4: 'What are the fees and batch timings?', a4: 'We do not list fees or timings here because they must come from the centre. Send an enquiry or call the centre for current details.',
      q5: 'Can I visit or attend a demo class?', a5: 'You can ask the centre about visiting or arranging a demo. Availability is decided by the centre.',
      q6: 'Is this the official SIP Abacus website?', a6: 'This page is about the Lakhra, Guwahati centre. For the national brand, visit the official SIP Abacus India website.',
    },
    contact: {
      eyebrow: 'Contact & enquiry', heading: 'Talk to the Lakhra centre', address: 'Address', phone: 'Phone', hours: 'Opening hours',
      plusCode: 'Plus Code:', seeMaps: '— see the Google Maps listing below', callCentre: 'Call the centre',
      mapTitle: 'Google Map showing the location of SIP Abacus, Lakhra', openMaps: 'Open in Google Maps',
      formTitle: 'Enquire About a Demo', parentName: 'Parent / guardian name', contactNumber: 'Contact number', message: 'Message', optional: '(optional)',
      continueWhatsApp: 'Continue in WhatsApp', continueEmail: 'Continue in email', prepareEnquiry: 'Prepare my enquiry',
      privacyForm: 'We only ask for your name, number and optional message. Please don\'t include your child\'s personal details.',
      whatsappNote: ' Your details are passed to WhatsApp, and nothing is sent until you press Send.',
      whatsappReady: 'WhatsApp should now be open with your message ready. Please press Send there – your enquiry has not been sent until you do.',
      emailReady: 'Your email app should now open with the message ready. Please press Send there – your enquiry has not been sent until you do.',
      prefillGreeting: 'Hello SIP Abacus, I would like to enquire about a demo class for my child.', messageGreeting: 'Hello SIP Abacus, I would like to enquire about a demo.',
      messageParent: 'Parent/guardian: {name}', messagePhone: 'Contact number: {phone}', messageBody: 'Message: {message}', emailSubject: 'Demo enquiry',
      nothingSent: 'Nothing has been sent yet.', emailNotConnected: 'Online enquiries aren\'t connected to the centre yet. Please ',
      callOn: 'call the centre on', copyBelow: 'copy the message below to share with the centre.', copyMessage: 'Copy message',
      errorNameRequired: 'Please enter the parent or guardian name.', errorNameShort: 'Name looks too short.',
      errorPhoneRequired: 'Please enter a contact number.', errorPhoneInvalid: 'Enter a valid 10-digit Indian mobile number.',
      errorMessageLong: 'Please keep the message under 500 characters.',
    },
    footer: {
      aria: 'Footer', independent: 'Independent page for the Lakhra centre of the SIP Abacus programme.', viewMaps: 'View on Google Maps',
      privacy: 'Privacy:', privacyRest: 'the enquiry form collects only your name, contact number and optional message. It does not store or send anything itself; your message is passed to',
      copyOnly: 'you to copy', whatsapp: 'WhatsApp', emailApp: 'your email app', sendNote: 'and reaches the centre only when you send it. The location map is provided by Google, and Google\'s privacy policy applies to it.',
    },
    mobile: { aria: 'Quick actions', call: 'Call', enquire: 'Enquire', map: 'Map' },
  },
  as: {
    page: {
      title: 'SIP Abacus লখৰা, গুৱাহাটী | শিশুৰ বাবে Abacus আৰু মানসিক গণিতৰ শ্ৰেণী',
      description: 'গুৱাহাটীৰ লখৰাত শিশুৰ বাবে SIP Abacus আৰু মানসিক গণিতৰ শ্ৰেণী। ডেমোৰ বাবে যোগাযোগ কৰক, কেন্দ্ৰলৈ ফোন কৰক বা পথ চাওক।',
    },
    language: { group: 'ভাষা বাছনি কৰক', english: 'English', assamese: 'অসমীয়া' },
    location: { locality: 'লখৰা', city: 'গুৱাহাটী' },
    common: {
      skip: 'মূল বিষয়লৈ যাওক', about: 'আমাৰ বিষয়ে', programmes: 'কাৰ্যসূচী', benefits: 'শিকাৰ সুবিধা', gallery: 'ফটোসমূহ', faqs: 'সঘনাই সোধা প্ৰশ্ন', contact: 'যোগাযোগ',
      enquire: 'সোধক', enquireDemo: 'ডেমোৰ বাবে সোধক', whatsappNewTab: ' WhatsApp-ত (নতুন টেবত খোল খাব)', opensNewTab: ' (নতুন টেবত খোল খাব)',
      toConfirm: 'নিশ্চিত কৰিব লাগিব', seeMaps: 'মেপত আমাক চাওক', logoAlt: 'SIP Abacus – সফলতা নিশ্চিত',
      mainNavigation: 'মূল নেভিগেশ্যন', mobileNavigation: 'ম’বাইল নেভিগেশ্যন', menuOpen: 'মেনু খোলক', menuClose: 'মেনু বন্ধ কৰক',
    },
    hero: {
      eyebrow: 'SIP Abacus, লখৰা · গুৱাহাটী, অসম',
      headingStart: 'সংখ্যাৰ আনন্দ আৱিষ্কাৰ কৰক', headingBrand: 'SIP Abacus, লখৰা-ত।',
      description: 'গুৱাহাটীৰ লখৰাত শিশুৰ বাবে Abacus আৰু মানসিক গণিতৰ শ্ৰেণী। কাৰ্যসূচীসমূহৰ বিষয়ে জানিবলৈ, আপোনাৰ শিশুৰ বাবে উপযুক্ত শ্ৰেণী বাছিবলৈ আৰু ডেমো ক্লাছৰ বিষয়ে সুধিবলৈ কেন্দ্ৰৰ সৈতে কথা পাতক।',
      rating: 'Google Maps-ত {rating} · {count}টা পৰ্যালোচনা',
      heroAlt: 'কমলা ৰঙৰ SIP টি-চাৰ্ট পিন্ধা হাঁহিমুখীয়া শিশুৱে শ্ৰেণীত কাৰ্ড দেখুৱাইছে; সন্মুখত এটা এবাকাছ আছে',
    },
    about: {
      eyebrow: 'কেন্দ্ৰৰ বিষয়ে', heading: 'লখৰাৰ আপোনাৰ স্থানীয় SIP Abacus কেন্দ্ৰ',
      paragraph1: 'SIP Abacus, লখৰা হৈছে লখৰা আৰু গুৱাহাটীৰ পৰিয়ালসমূহক সেৱা আগবঢ়োৱা SIP Abacus কেন্দ্ৰ। SIP Abacus হৈছে শিশুৰ এবাকাছ আৰু মানসিক গণিত শিক্ষাৰ এটা ৰাষ্ট্ৰীয় ব্ৰেণ্ড; এই ৱেবছাইটটো কেৱল লখৰা কেন্দ্ৰৰ বাবে।',
      paragraph2: 'পদ্ধতিটো সহজ: শিশুৱে শিক্ষকৰ সৈতে এবাকাছত অনুশীলন কৰে, তাৰ পিছত ক্ৰমান্বয়ে মনতে গুটিৰ ছবি কল্পনা কৰি গণনা কৰিবলৈ শিকে। খেল আৰু কাৰ্যকলাপে অনুশীলন আনন্দদায়ক কৰি ৰাখে।',
      reference: 'ৰাষ্ট্ৰীয় ব্ৰেণ্ডৰ তথ্য:',
    },
    practice: {
      eyebrow: 'ইণ্টাৰেক্টিভ অনুশীলন', heading: 'এবাকাছ চেষ্টা কৰক', intro: 'এটাকৈ গুটি লৈ যোগফলটো উলিয়াওক।', challenge: 'আপোনাৰ প্ৰশ্ন', solved: '{count}টা সমাধান',
      quickHint: 'সহজ ইংগিত', one: 'এটা তলৰ গুটি', four: 'চাৰিওটা তলৰ গুটি', upperFive: 'ওপৰৰ গুটি =',
      placeTenThousands: 'দহ হাজাৰ', placeThousands: 'হাজাৰ', placeHundreds: 'শ', placeTens: 'দহ', placeOnes: 'একক',
      boardLabel: 'পাঁচটা স্তম্ভৰ ইণ্টাৰেক্টিভ এবাকাছ', upperOn: '{place}: পাঁচৰ গুটিটো দণ্ডৰ ওচৰলৈ আনক', upperOff: '{place}: পাঁচৰ গুটিটো দণ্ডৰ পৰা আঁতৰাওক',
      lowerOn: '{place}: তলৰ {number} নম্বৰ গুটিটো যোগ কৰক', lowerOff: '{place}: তলৰ {number} নম্বৰ গুটিটো আঁতৰাওক', digit: '{place}ৰ অংক {digit}',
      total: 'আপোনাৰ সংখ্যা', reset: 'গুটি পুনৰ ছেট কৰক', newSum: 'নতুন যোগফল', check: 'উত্তৰ মিলাওক', correct: 'শুদ্ধ! আপুনি যোগফলটো উলিয়ালে।',
      tryAgain: 'এতিয়াও শুদ্ধ হোৱা নাই। গুটি লৰাই পুনৰ চেষ্টা কৰক।',
    },
    programmes: {
      eyebrow: 'কাৰ্যসূচী', heading: 'SIP Abacus-এ কি শিকায়', intro: 'কাৰ্যসূচীৰ নামসমূহ ৰাষ্ট্ৰীয় SIP Abacus ব্ৰেণ্ড অনুসৰি দিয়া হৈছে। লখৰাত কোনবোৰ কাৰ্যসূচী, বয়স আৰু স্তৰৰ বাবে উপলব্ধ সেয়া কেন্দ্ৰৰ পৰা নিশ্চিত কৰক।',
      abacus: 'এবাকাছ আৰু মানসিক গণিত', abacusDescription: 'শিশুৱে এবাকাছ ব্যৱহাৰ কৰিবলৈ শিকে আৰু ক্ৰমান্বয়ে ধাপে ধাপে মনতে গণনা কৰিবলৈ আগবাঢ়ে।',
      abacusNote: 'লখৰাত উপলব্ধ — SIP লখৰাৰ প্ৰমাণপত্ৰত SIP Abacus Junior কাৰ্যসূচীৰ Junior Level 1 উল্লেখ আছে।',
      brainGym: 'Brain Gym', brainGymDescription: 'মনোযোগ আৰু সমন্বয়ৰ সহায়ৰ বাবে SIP Abacus-ৰ কাৰ্যসূচীত উল্লেখ কৰা চুটি, আনন্দদায়ক কাৰ্যকলাপ।',
      speedWriting: 'Speed Writing', speedWritingDescription: 'হাতৰ আখৰৰ অনুশীলন, যাক SIP Abacus-এ এবাকাছ আৰু Brain Gym-ৰ সৈতে উল্লেখ কৰিছে।',
      agesLevelsFees: 'বয়স, স্তৰ আৰু মাচুল', availability: 'উপলব্ধতা, বয়স আৰু মাচুল', confirmWithCentre: 'কেন্দ্ৰৰ পৰা নিশ্চিত কৰক',
    },
    benefits: {
      eyebrow: 'শিকাৰ সুবিধা', heading: 'নিয়মীয়া অনুশীলনে গঢ়ি তোলাত সহায় কৰে', intro: 'এইবোৰ শিকাৰ লক্ষ্য, নিশ্চয়তা নহয়। প্ৰতিটো শিশুৱে নিজৰ গতিত শিকে আৰু ফলাফল বেলেগ বেলেগ হয়।',
      concentration: 'মনোযোগ', concentrationDescription: 'গুটি লৰোৱা আৰু ধাপসমূহ অনুসৰণ কৰিলে শিশুৱে এটা কামত মনোযোগ দিবলৈ অনুশীলন কৰে।',
      memory: 'স্মৃতিশক্তি', memoryDescription: 'মনত এবাকাছৰ ছবি কল্পনা কৰিলে দৃশ্যগত স্মৃতিশক্তিৰ অনুশীলন হয়।',
      confidence: 'আত্মবিশ্বাস', confidenceDescription: 'সংখ্যাৰ ক্ষেত্ৰত ক্ৰমান্বয়ে উন্নতি কৰিলে শিশুৱে গণিতত অধিক স্বাচ্ছন্দ্য অনুভৱ কৰিব পাৰে।',
      fluency: 'সংখ্যাৰ দক্ষতা', fluencyDescription: 'নিয়মীয়া অনুশীলনে দৈনন্দিন যোগ আৰু বিয়োগ অধিক সহজ কৰি তুলিবলৈ সহায় কৰে।',
    },
    steps: {
      heading: 'আৰম্ভ কৰাৰ উপায়',
      enquiry: 'সোধা-পোছা পঠিয়াওক', enquiryDescription: 'তলৰ ফৰ্মত আপোনাৰ নাম আৰু যোগাযোগ নম্বৰ দিয়ক।',
      discuss: 'উপযুক্ত শ্ৰেণীৰ বিষয়ে কথা পাতক', discussDescription: 'কেন্দ্ৰই কাৰ্যসূচী, সময় আৰু মাচুলৰ বিষয়ে জনাব পাৰিব।',
      visit: 'ভ্ৰমণ বা ডেমোৰ ব্যৱস্থা কৰক', visitDescription: 'কেন্দ্ৰৰ উপলব্ধতাৰ ওপৰত নিৰ্ভৰশীল।',
    },
    gallery: {
      eyebrow: 'ফটোসমূহ', heading: 'SIP Abacus-ৰ জীৱন', intro: 'লখৰা কেন্দ্ৰৰ শ্ৰেণীকোঠাৰ মুহূৰ্ত আৰু অসমত হোৱা SIP Abacus প্ৰতিযোগিতা আৰু অনুষ্ঠানসমূহ। ডাঙৰকৈ চাবলৈ ফটো বাছনি কৰক।',
      centre: 'কেন্দ্ৰত', events: 'অসমৰ প্ৰতিযোগিতা আৰু অনুষ্ঠান', viewer: 'ফটো দৰ্শক: {caption}', photoCount: '{current} / {total}',
      previous: 'আগৰ', next: 'পিছৰ', close: 'বন্ধ কৰক', enlarge: ' – ডাঙৰকৈ ফটো খোলক',
      classCardsAlt: 'কমলা SIP টি-চাৰ্ট পিন্ধা হাঁহিমুখীয়া শিশুৱে শ্ৰেণীত কাৰ্ড দেখুৱাইছে; সন্মুখত এবাকাছ আছে', classCards: 'শ্ৰেণীৰ গৌৰৱৰ মুহূৰ্ত',
      certificateAlt: 'SIP লখৰাৰ SIP Abacus Junior Level প্ৰমাণপত্ৰ লৈ থকা এজন ল’ৰা আৰু অভিভাৱক', certificate: 'SIP লখৰাৰ Junior Level 1 প্ৰমাণপত্ৰ',
      practiceAlt: 'কমলা ইউনিফৰ্ম পিন্ধা শিশুৱে ডেস্কত এবাকাছ আৰু অনুশীলনী বহীৰে অনুশীলন কৰিছে', practiceCaption: 'এবাকাছৰ অনুশীলন',
      craftAlt: 'শ্ৰেণীকোঠাত ৰঙীন হাতেৰে সজা কাৰ্ড দেখুওৱা শিশুসকল', craft: 'কাৰ্ড সজোৱা কাৰ্যকলাপ',
      flagAlt: 'হাঁহিমুখীয়া দুটা সৰু শিশু; এজনে ভাৰতীয় ৰাষ্ট্ৰীয় পতাকা ধৰি আছে', flag: 'ত্ৰিৰঙাৰ সৈতে উদযাপন',
      activityAlt: 'হালধীয়া ডেস্কত কাগজৰ উপহাৰৰ মোনা লৈ বহি থকা শিশুসকল', activity: 'কাৰ্যকলাপৰ সময়',
      competitionAlt: 'অসমত ২৮ জুলাই ২০২৪ তাৰিখে অনুষ্ঠিত Regional SIP Abacus Competition-ৰ বেনাৰৰ সন্মুখত দলীয় ফটো', competition: 'অসমৰ Regional SIP Abacus Competition – ২৮ জুলাই ২০২৪',
      competitionDayAlt: 'প্ৰতিযোগিতাৰ সময়ত ডাঙৰ হলত ডেস্কত বহি লিখি থকা শিশুসকল', competitionDay: 'প্ৰতিযোগিতাৰ দিন',
      prizeAlt: '২০২৪ চনৰ এবাকাছ প্ৰতিযোগিতাৰ মঞ্চত ট্ৰফী গ্ৰহণ কৰি থকা কমলা SIP টি-চাৰ্ট পিন্ধা এজন শিক্ষাৰ্থী', prize: 'বঁটা প্ৰদান, ২০২৪',
      volunteersAlt: 'অসমত ২০২৪ চনৰ Regional SIP Abacus Competition-ত নীলা SIP টি-চাৰ্ট পিন্ধা স্বেচ্ছাসেৱকসকল', volunteers: 'আঞ্চলিক প্ৰতিযোগিতাৰ স্বেচ্ছাসেৱক, ২০২৪',
      teamAlt: 'অনুষ্ঠানস্থলীত একেলগে থিয় হৈ থকা নীলা SIP টি-চাৰ্ট পিন্ধা স্বেচ্ছাসেৱকৰ দল', team: 'অনুষ্ঠানৰ স্বেচ্ছাসেৱকৰ দল',
      awardsAlt: 'মঞ্চত প্ৰমাণপত্ৰ লৈ থকা শিক্ষকসকল, SIP Assam Annual Awards 2022', awards: 'SIP Assam Annual Awards 2022 (১৪তম বাৰ্ষিক মিলন, ফেব্ৰুৱাৰী ২০২৩)',
    },
    feedback: {
      eyebrow: 'অভিভাৱকৰ মতামত', heading: 'Google-ত অভিভাৱকসকলে কি কয়', rated: '{rating}/৫ ৰেটিং, {count}টা পৰ্যালোচনাৰ ভিত্তিত', note: 'নিৰ্বাচিত পৰ্যালোচনাসমূহৰ অসমীয়া অনুবাদ তলত দিয়া হৈছে।', source: 'Google-ৰ পৰ্যালোচনা', translatedSource: 'Google-ৰ পৰ্যালোচনাৰ অসমীয়া অনুবাদ',
      quote1: 'এবাকাছৰ শ্ৰেণীত যোগ দিয়াৰ পিছত মোৰ শিশুৰ মনোযোগ আৰু মানসিক গণিতত বহুত উন্নতি হৈছে। শিক্ষকে সহায় কৰে আৰু প্ৰতিটো ধাৰণা স্পষ্টকৈ বুজাই দিয়ে।',
      quote2: 'মোৰ ছোৱালীৰ বহুত ভাল উন্নতি দেখিছোঁ। শিক্ষক-শিক্ষয়িত্ৰীসকল অতি মৰমিয়াল আৰু দয়ালু। তেওঁলোকে মোৰ ছোৱালী আৰু সকলো শিক্ষাৰ্থীক মৰমেৰে শিকায়।',
      quote3: 'মোৰ শিশুৰ বাবে এয়া নতুন আৰু আনন্দদায়ক অভিজ্ঞতা। আশা কৰোঁ আগলৈ শিকিবলৈ আৰু আত্মবিশ্বাস বঢ়াবলৈ ই সহায় কৰিব।',
    },
    faqs: {
      eyebrow: 'সঘনাই সোধা প্ৰশ্ন', heading: 'অভিভাৱকসকলে সোধা প্ৰশ্ন',
      q1: 'এবাকাছ শিক্ষা কি?', a1: 'এবাকাছ হৈছে গণনাৰ সঁজুলি। শিশুৱে গুটি লৰাই সংখ্যা প্ৰকাশ কৰিবলৈ শিকে, তাৰ পিছত ক্ৰমান্বয়ে মনতে এবাকাছ কল্পনা কৰি গণনা কৰাৰ অনুশীলন কৰে। SIP Abacus-এ ইয়াক সংখ্যা-দক্ষতা গঢ়াৰ আনন্দদায়ক, পৰিকল্পিত উপায় হিচাপে আগবঢ়ায়।',
      q2: 'এবাকাছৰ বাহিৰে SIP Abacus-এ কি শিকায়?', a2: 'SIP Abacus-ৰ ৰাষ্ট্ৰীয় কাৰ্যসূচীত Brain Gym আৰু Speed Writing-ৰ কথাও উল্লেখ আছে। ইয়াৰ কোনটো লখৰা কেন্দ্ৰত বৰ্তমান উপলব্ধ, কেন্দ্ৰক সুধিব।',
      q3: 'কোন বয়স আৰু স্তৰৰ শ্ৰেণী উপলব্ধ?', a3: 'এইটো কাৰ্যসূচী আৰু কেন্দ্ৰৰ ওপৰত নিৰ্ভৰ কৰে। আপোনাৰ শিশুৰ বাবে উপযুক্ত শ্ৰেণীৰ বিষয়ে লখৰা কেন্দ্ৰৰ সৈতে কথা পাতক।',
      q4: 'মাচুল আৰু শ্ৰেণীৰ সময় কিমান?', a4: 'মাচুল আৰু সময়সূচী কেন্দ্ৰৰ পৰা নিশ্চিত কৰিব লাগে বাবে আমি ইয়াত দিয়া নাই। বৰ্তমানৰ তথ্যৰ বাবে সোধা-পোছা পঠিয়াওক বা কেন্দ্ৰলৈ ফোন কৰক।',
      q5: 'মই কেন্দ্ৰলৈ আহিব বা ডেমো ক্লাছত অংশ ল’ব পাৰিমনে?', a5: 'কেন্দ্ৰলৈ অহা বা ডেমোৰ ব্যৱস্থাৰ বিষয়ে সুধিব পাৰে। উপলব্ধতা কেন্দ্ৰই নিৰ্ধাৰণ কৰে।',
      q6: 'এইটো SIP Abacus-ৰ অফিচিয়েল ৱেবছাইট নেকি?', a6: 'এই পৃষ্ঠাটো গুৱাহাটীৰ লখৰা কেন্দ্ৰৰ বিষয়ে। ৰাষ্ট্ৰীয় ব্ৰেণ্ডৰ বাবে SIP Abacus India-ৰ অফিচিয়েল ৱেবছাইট চাওক।',
    },
    contact: {
      eyebrow: 'যোগাযোগ আৰু সোধা-পোছা', heading: 'লখৰা কেন্দ্ৰৰ সৈতে কথা পাতক', address: 'ঠিকনা', phone: 'ফোন', hours: 'খোলাৰ সময়',
      plusCode: 'Plus Code:', seeMaps: '— তলৰ Google Maps তালিকাখন চাওক', callCentre: 'কেন্দ্ৰলৈ ফোন কৰক',
      mapTitle: 'SIP Abacus, লখৰাৰ অৱস্থান দেখুওৱা Google Map', openMaps: 'Google Maps-ত খোলক',
      formTitle: 'ডেমোৰ বিষয়ে সোধক', parentName: 'অভিভাৱকৰ নাম', contactNumber: 'যোগাযোগ নম্বৰ', message: 'বাৰ্তা', optional: '(ঐচ্ছিক)',
      continueWhatsApp: 'WhatsApp-ত আগবাঢ়ক', continueEmail: 'ইমেইলত আগবাঢ়ক', prepareEnquiry: 'সোধা-পোছা প্ৰস্তুত কৰক',
      privacyForm: 'আমি কেৱল আপোনাৰ নাম, নম্বৰ আৰু ঐচ্ছিক বাৰ্তাটো বিচাৰোঁ। অনুগ্ৰহ কৰি শিশুৰ ব্যক্তিগত তথ্য নিদিব।',
      whatsappNote: ' আপোনাৰ তথ্য WhatsApp-লৈ যাব; আপুনি Send টিপাৰ আগলৈকে একো পঠিওৱা নহয়।',
      whatsappReady: 'আপোনাৰ বাৰ্তাটো প্ৰস্তুত হৈ WhatsApp খোল খাব লাগে। তাত Send টিপক — তাৰ আগলৈকে সোধা-পোছা পঠিওৱা নহয়।',
      emailReady: 'আপোনাৰ বাৰ্তাটো প্ৰস্তুত হৈ ইমেইল এপ খোল খাব লাগে। তাত Send টিপক — তাৰ আগলৈকে সোধা-পোছা পঠিওৱা নহয়।',
      prefillGreeting: 'নমস্কাৰ SIP Abacus, মোৰ শিশুৰ বাবে ডেমো ক্লাছৰ বিষয়ে সুধিব বিচাৰোঁ।', messageGreeting: 'নমস্কাৰ SIP Abacus, ডেমোৰ বিষয়ে সুধিব বিচাৰোঁ।',
      messageParent: 'অভিভাৱক: {name}', messagePhone: 'যোগাযোগ নম্বৰ: {phone}', messageBody: 'বাৰ্তা: {message}', emailSubject: 'ডেমোৰ বিষয়ে সোধা-পোছা',
      nothingSent: 'এতিয়ালৈকে একো পঠিওৱা হোৱা নাই।', emailNotConnected: 'অনলাইন সোধা-পোছা এতিয়াও কেন্দ্ৰৰ সৈতে সংযুক্ত নহয়। অনুগ্ৰহ কৰি ',
      callOn: 'এই নম্বৰত কেন্দ্ৰলৈ ফোন কৰক', copyBelow: 'বা তলৰ বাৰ্তাটো কপি কৰি কেন্দ্ৰলৈ পঠিয়াওক।', copyMessage: 'বাৰ্তা কপি কৰক',
      errorNameRequired: 'অনুগ্ৰহ কৰি অভিভাৱকৰ নাম লিখক।', errorNameShort: 'নামটো অলপ চুটি যেন লাগিছে।',
      errorPhoneRequired: 'অনুগ্ৰহ কৰি যোগাযোগ নম্বৰ লিখক।', errorPhoneInvalid: 'ভাৰতৰ বৈধ ১০ অংকৰ ম’বাইল নম্বৰ দিয়ক।',
      errorMessageLong: 'অনুগ্ৰহ কৰি বাৰ্তাটো ৫০০ আখৰৰ ভিতৰত ৰাখক।',
    },
    footer: {
      aria: 'ফুটাৰ', independent: 'SIP Abacus কাৰ্যসূচীৰ লখৰা কেন্দ্ৰৰ স্বতন্ত্ৰ পৃষ্ঠা।', viewMaps: 'Google Maps-ত চাওক',
      privacy: 'গোপনীয়তা:', privacyRest: 'সোধা-পোছাৰ ফৰ্মে কেৱল আপোনাৰ নাম, যোগাযোগ নম্বৰ আৰু ঐচ্ছিক বাৰ্তা সংগ্ৰহ কৰে। ই নিজে একো সংৰক্ষণ বা পঠিয়াই নাথাকে; আপোনাৰ বাৰ্তা যায়',
      copyOnly: 'আপুনি কপি কৰিবলৈ', whatsapp: 'WhatsApp', emailApp: 'আপোনাৰ ইমেইল এপ', sendNote: 'আৰু আপুনি পঠিয়ালেহে কেন্দ্ৰই লাভ কৰে। অৱস্থানৰ মেপ Google-ৰ; ইয়াৰ বাবে Google-ৰ গোপনীয়তা নীতি প্ৰযোজ্য।',
    },
    mobile: { aria: 'দ্ৰুত যোগাযোগ', call: 'ফোন', enquire: 'সোধক', map: 'মেপ' },
  },
}

const LanguageContext = createContext(null)

function getSavedLanguage() {
  try {
    return localStorage.getItem('abacus-language') === 'as' ? 'as' : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = messages[language].page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', messages[language].page.description)
    try {
      localStorage.setItem('abacus-language', language)
    } catch {
      // The selected language still works for this visit when storage is unavailable.
    }
  }, [language])

  function t(key, values = {}) {
    const message = key.split('.').reduce((value, part) => value?.[part], messages[language])
    if (typeof message !== 'string') return key
    return message.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '')
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}