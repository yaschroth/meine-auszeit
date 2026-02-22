'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUSINESS_INFO, FOOTER_LINKS, NAVIGATION_ITEMS } from '@/lib/constants';
import { getCurrentYear } from '@/lib/utils';
import SocialLinks from '@/components/common/SocialLinks';

// ============================================
// FOOTER COMPONENT
// ============================================

export default function Footer() {
  const currentYear = getCurrentYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-sage-500 text-cream-50 relative overflow-hidden texture-hexagon">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large organic blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sage-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-sage-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-400/10 rounded-full blur-3xl" />

        {/* Floating decorative symbols */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[20%] text-6xl text-sage-400/10"
        >
          ✧
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-[15%] text-5xl text-sage-400/10"
        >
          ❋
        </motion.div>
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-[10%] text-4xl text-sage-400/10"
        >
          ✿
        </motion.div>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="container-custom relative">
        {/* Top Section with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 border-b border-sage-400/30"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl italic mb-2">
                {BUSINESS_INFO.tagline}
              </h3>
              <p className="font-body text-cream-100/80 text-sm md:text-base">
                Mehr Informationen folgen in Kürze
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-medium tracking-tight">
                MEINE <span className="text-cream-300 italic">Auszeit</span>
              </span>
            </Link>
            <p className="font-body text-sm text-cream-100/80 leading-relaxed mb-6">
              Dein Kosmetikstudio in Teesdorf für professionelle Behandlungen und wohltuende Wellness-Momente.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Column 2: Navigation - temporarily simplified */}
          {/* Navigation and Services columns hidden for now */}

          {/* Column 4: Contact & Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-lg mb-5">Kontakt</h4>
            <address className="not-italic space-y-3 font-body text-sm text-cream-100/80">
              <p>{BUSINESS_INFO.address.street}</p>
              <p>
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
              </p>
              <p className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {BUSINESS_INFO.contact.email}
                </a>
              </p>
            </address>

          </motion.div>

          {/* Column 3: Opening Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display text-lg mb-5">Öffnungszeiten</h4>
            <div className="space-y-2">
              {BUSINESS_INFO.openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center font-body text-sm"
                >
                  <span className="text-cream-100/80">{item.day}</span>
                  <span className="text-cream-50">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-6 border-t border-sage-400/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm"
        >
          <p className="font-body text-cream-100/60">
            &copy; {currentYear} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-cream-100/60 hover:text-cream-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
