import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BUSINESS_INFO, SEO_CONFIG } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/utils';

// ============================================
// FONT CONFIGURATION
// ============================================

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-montserrat',
});

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [...SEO_CONFIG.defaultKeywords],
  authors: [{ name: BUSINESS_INFO.owner.firstName + ' ' + BUSINESS_INFO.owner.lastName }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: SEO_CONFIG.openGraph.images.map(img => ({ ...img })),
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#8B9A6B',
};

// ============================================
// STRUCTURED DATA
// ============================================

const structuredData = generateLocalBusinessSchema({
  name: BUSINESS_INFO.fullName,
  description: BUSINESS_INFO.description,
  image: `${SEO_CONFIG.siteUrl}/og-image.jpg`,
  telephone: BUSINESS_INFO.contact.phone,
  address: {
    street: BUSINESS_INFO.address.street,
    city: BUSINESS_INFO.address.city,
    zip: BUSINESS_INFO.address.zip,
    country: 'AT',
  },
  geo: BUSINESS_INFO.location,
  openingHours: [...BUSINESS_INFO.openingHours],
  url: SEO_CONFIG.siteUrl,
});

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-theme="meineauszeit" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Noise Texture Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
