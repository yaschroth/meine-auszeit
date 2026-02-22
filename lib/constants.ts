// ============================================
// MEINE AUSZEIT - BUSINESS CONSTANTS
// ============================================

export const BUSINESS_INFO = {
  name: 'Meine Auszeit',
  fullName: 'Meine Auszeit – Kosmetikstudio',
  tagline: 'DEINE AUSZEIT!',
  description: 'Dein Kosmetikstudio in Teesdorf für professionelle Gesichtsbehandlungen, Körperbehandlungen, Maniküre & Pediküre und dauerhafte Haarentfernung.',

  owner: {
    firstName: 'Emina',
    lastName: 'Cvijetinovic',
    title: 'Kosmetikerin & Wellness-Expertin',
  },

  contact: {
    phone: '+436641234567',
    phoneDisplay: '0664 / 123 45 67',
    email: 'info@meine-auszeit.at',
    website: 'https://www.meine-auszeit.at',
  },

  address: {
    street: 'Dr.-Erhard-Zwerinastraße 13',
    zip: '2524',
    city: 'Teesdorf',
    region: 'Niederösterreich',
    country: 'Österreich',
    nearbyCity: 'Baden',
    fullAddress: 'Dr.-Erhard-Zwerinastraße 13, 2524 Teesdorf',
  },

  location: {
    lat: 47.9489,
    lng: 16.2833,
  },

  socialMedia: {
    instagram: 'https://www.instagram.com/kosmetikstudio.meineauszeit/',
  },

  openingHours: [
    { day: 'Termine', hours: 'Nach Vereinbarung' },
  ],

  partners: [],
} as const;

export const NAVIGATION_ITEMS = [
  // { label: 'Home', href: '/' },
  // { label: 'Behandlungen', href: '/behandlungen' },
  // { label: 'Über mich', href: '/ueber-mich' },
  // { label: 'Gutscheine', href: '/gutscheine' },
  // { label: 'Kontakt', href: '/kontakt' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: 'Gesichtsbehandlungen', href: '/behandlungen#gesicht' },
    { label: 'Körperbehandlungen', href: '/behandlungen#koerper' },
    { label: 'Maniküre & Pediküre', href: '/behandlungen#manikuere' },
    { label: 'Dauerhafte Haarentfernung', href: '/behandlungen#haarentfernung' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const;

export const SERVICES = {
  gesichtsbehandlungen: {
    title: 'Gesichtsbehandlungen',
    subtitle: 'Gönn deiner Haut eine Auszeit',
    description: 'Genieße entspannende und effektive Gesichtsbehandlungen, die auf deinen Hauttyp abgestimmt sind. Von der Tiefenreinigung bis zur Anti-Aging-Behandlung bieten wir alles für eine strahlende Haut.',
    image: '/face.webp',
    treatments: [
      {
        name: 'Classic Facial',
        description: 'Klassische Gesichtsbehandlung mit Reinigung, Peeling und Pflege.',
        duration: 'ca. 60 Min.',
        price: 'ab 65 €',
      },
      {
        name: 'Anti-Aging Deluxe',
        description: 'Intensive Anti-Aging-Behandlung für straffe, jugendliche Haut.',
        duration: 'ca. 75 Min.',
        price: 'ab 89 €',
      },
      {
        name: 'Hydra Boost',
        description: 'Intensive Feuchtigkeitsbehandlung für trockene Haut.',
        duration: 'ca. 60 Min.',
        price: 'ab 75 €',
      },
      {
        name: 'Clear Skin',
        description: 'Spezialbehandlung für unreine Haut und Akne.',
        duration: 'ca. 45 Min.',
        price: 'ab 55 €',
      },
      {
        name: 'Express Glow',
        description: 'Schnelle Auffrischung für strahlende Haut.',
        duration: 'ca. 30 Min.',
        price: 'ab 39 €',
      },
      {
        name: 'Microdermabrasion',
        description: 'Sanftes Peeling für ein ebenmäßiges Hautbild.',
        duration: 'ca. 45 Min.',
        price: 'ab 69 €',
      },
    ],
  },

  koerperbehandlungen: {
    title: 'Körperbehandlungen',
    subtitle: 'Wellness für Körper und Seele',
    description: 'Entspanne bei wohltuenden Körperbehandlungen und lass dich von Kopf bis Fuß verwöhnen.',
    image: '/kopfmassage.webp',
    treatments: [
      {
        name: 'Entspannungsmassage',
        description: 'Wohltuende Ganzkörpermassage zur Entspannung.',
        duration: 'ca. 60 Min.',
        price: 'ab 69 €',
      },
      {
        name: 'Rückenmassage',
        description: 'Gezielte Massage für den Rücken- und Nackenbereich.',
        duration: 'ca. 30 Min.',
        price: 'ab 39 €',
      },
      {
        name: 'Körperpeeling',
        description: 'Sanftes Ganzkörperpeeling für seidig weiche Haut.',
        duration: 'ca. 45 Min.',
        price: 'ab 55 €',
      },
      {
        name: 'Body Wrap',
        description: 'Entschlackende Körperpackung mit hochwertigen Wirkstoffen.',
        duration: 'ca. 60 Min.',
        price: 'ab 79 €',
      },
    ],
  },

  manikuere: {
    title: 'Maniküre & Pediküre',
    subtitle: 'Gepflegte Hände und Füße',
    description: 'Perfekt gepflegte Hände und Füße sind ein Zeichen von Schönheit und Wohlbefinden. Wir bieten dir professionelle Maniküre und Pediküre mit hochwertigen Produkten.',
    image: '/maniküre neu.png',
    treatments: [
      {
        name: 'Klassische Maniküre',
        description: 'Professionelle Handpflege mit Feilen, Kürzen und Pflege.',
        duration: 'ca. 30 Min.',
        price: 'ab 35 €',
      },
      {
        name: 'Spa Maniküre',
        description: 'Luxuriöse Handpflege mit Peeling, Maske und Massage.',
        duration: 'ca. 45 Min.',
        price: 'ab 49 €',
      },
      {
        name: 'Gel-Lack Maniküre',
        description: 'Maniküre mit langhaltendem Gel-Lack.',
        duration: 'ca. 45 Min.',
        price: 'ab 55 €',
      },
      {
        name: 'Klassische Pediküre',
        description: 'Professionelle Fußpflege für gepflegte Füße.',
        duration: 'ca. 45 Min.',
        price: 'ab 45 €',
      },
      {
        name: 'Spa Pediküre',
        description: 'Luxuriöse Fußpflege mit Fußbad, Peeling und Massage.',
        duration: 'ca. 60 Min.',
        price: 'ab 59 €',
      },
      {
        name: 'Gel-Lack Pediküre',
        description: 'Pediküre mit langhaltendem Gel-Lack.',
        duration: 'ca. 60 Min.',
        price: 'ab 65 €',
      },
    ],
  },

  haarentfernung: {
    title: 'Dauerhafte Haarentfernung',
    subtitle: 'Glatte Haut ohne Rasieren',
    description: 'Professionelle dauerhafte Haarentfernung für langanhaltend glatte Haut.',
    image: '/wimpern.png',
    treatments: [
      {
        name: 'Oberlippe',
        description: 'Dauerhafte Haarentfernung Oberlippe.',
        duration: 'ca. 15 Min.',
        price: 'ab 25 €',
      },
      {
        name: 'Kinn',
        description: 'Dauerhafte Haarentfernung Kinn.',
        duration: 'ca. 15 Min.',
        price: 'ab 29 €',
      },
      {
        name: 'Achseln',
        description: 'Dauerhafte Haarentfernung Achselbereich.',
        duration: 'ca. 20 Min.',
        price: 'ab 49 €',
      },
      {
        name: 'Bikinizone',
        description: 'Dauerhafte Haarentfernung Bikinizone.',
        duration: 'ca. 30 Min.',
        price: 'ab 69 €',
      },
      {
        name: 'Unterschenkel',
        description: 'Dauerhafte Haarentfernung Unterschenkel.',
        duration: 'ca. 45 Min.',
        price: 'ab 99 €',
      },
      {
        name: 'Ganzkörper',
        description: 'Individuelle Beratung für Ganzkörperbehandlung.',
        duration: 'nach Vereinbarung',
        price: 'auf Anfrage',
      },
    ],
  },
} as const;

export const SERVICE_CATEGORIES = [
  {
    id: 'gesicht',
    ...SERVICES.gesichtsbehandlungen,
    icon: '✧',
    size: 'large' as const,
  },
  {
    id: 'koerper',
    ...SERVICES.koerperbehandlungen,
    icon: '❋',
    size: 'large' as const,
  },
  {
    id: 'manikuere',
    ...SERVICES.manikuere,
    icon: '✿',
    size: 'small' as const,
  },
  {
    id: 'haarentfernung',
    ...SERVICES.haarentfernung,
    icon: '✦',
    size: 'small' as const,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria S.',
    location: 'Google Rezension',
    text: 'Wunderbares Studio mit entspannter Atmosphäre. Emina ist sehr professionell und nimmt sich Zeit für jeden Kunden.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anna K.',
    location: 'Google Rezension',
    text: 'Die beste Gesichtsbehandlung, die ich je hatte! Meine Haut strahlt seitdem.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sabine M.',
    location: 'Google Rezension',
    text: 'Sehr empfehlenswert! Tolle Beratung und super Ergebnisse bei der Pediküre.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Elisabeth P.',
    location: 'Google Rezension',
    text: 'Endlich ein Kosmetikstudio in der Nähe, das hält was es verspricht. Komme gerne wieder!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Julia R.',
    location: 'Google Rezension',
    text: 'Perfekte Auszeit vom Alltag. Danke Emina!',
    rating: 5,
  },
] as const;

export const SEO_CONFIG = {
  siteName: 'Meine Auszeit',
  siteUrl: 'https://www.meine-auszeit.at',
  defaultTitle: 'Meine Auszeit | Kosmetikstudio in Teesdorf',
  titleTemplate: '%s | Meine Auszeit',
  defaultDescription: 'Dein Kosmetikstudio in Teesdorf bei Baden. Professionelle Gesichtsbehandlungen, Körperbehandlungen, Maniküre & Pediküre von Emina Cvijetinovic.',
  defaultKeywords: [
    'Kosmetikstudio Teesdorf',
    'Kosmetik Baden',
    'Kosmetik Niederösterreich',
    'Gesichtsbehandlung Teesdorf',
    'Maniküre Pediküre Baden',
    'Dauerhafte Haarentfernung',
    'Körperbehandlung',
    'Wellness Niederösterreich',
    'Meine Auszeit',
    'Emina Cvijetinovic',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meine Auszeit Kosmetikstudio',
      },
    ],
  },
} as const;
