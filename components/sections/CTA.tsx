'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// ============================================
// CALL TO ACTION SECTION COMPONENT
// ============================================

export default function CTA() {
  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden texture-hexagon-green">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-sage-200/30 organic-blob"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-cream-300/50 organic-blob-alt"
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 text-4xl text-sage-200"
        >
          ✧
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/4 text-3xl text-cream-400"
        >
          ❋
        </motion.div>
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative Line */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-sage-400 to-cream-400 mx-auto mb-8" />

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral mb-6 leading-tight">
            Bereit für deine{' '}
            <span className="italic text-sage-500">Auszeit?</span>
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-neutral/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Vereinbare jetzt deinen persönlichen Wohlfühl-Termin und lass dich
            von mir verwöhnen. Ich freue mich auf dich!
          </p>

          {/* CTA Buttons - temporarily simplified */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="btn-elegant-primary cursor-default">
              Demnächst verfügbar
            </span>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-cream-200"
          >
            <p className="font-body text-xs tracking-widest uppercase text-neutral/50 mb-4">
              Vertrau auf Qualität
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm text-neutral/60">
                  Professionelle Behandlungen
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm text-neutral/60">
                  Wellness-Expertin
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-sage-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-body text-sm text-neutral/60">
                  Persönliche Betreuung
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
