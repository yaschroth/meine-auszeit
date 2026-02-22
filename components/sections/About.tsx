'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/constants';

// ============================================
// ABOUT TEASER SECTION COMPONENT
// ============================================

export default function About() {
  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden texture-hexagon-green">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cream-300/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft-xl">
              <Image
                src="/emina.jpg"
                alt={`${BUSINESS_INFO.owner.firstName} ${BUSINESS_INFO.owner.lastName} - ${BUSINESS_INFO.owner.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sage-300 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Label */}
            <span className="inline-block font-body text-sm tracking-[0.25em] uppercase text-sage-400 mb-4">
              Willkommen bei {BUSINESS_INFO.name}
            </span>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral mb-6 leading-tight">
              {BUSINESS_INFO.owner.firstName} –{' '}
              <span className="italic text-sage-500">Deine Kosmetikerin</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-sage-400 to-cream-400 mb-6" />

            {/* Description */}
            <div className="space-y-4 font-body text-neutral/80 leading-relaxed mb-8">
              <p>
                Herzlich willkommen bei Meine Auszeit! Ich habe mir einen Traum erfüllt:
                Ein Studio, in dem sich jeder Gast wie zu Hause fühlt und gleichzeitig
                die bestmögliche Behandlung erhält.
              </p>
              <p>
                Als ausgebildete <strong className="text-sage-600">Kosmetikerin und Wellness-Expertin</strong> biete
                ich dir ein breites Spektrum an Behandlungen – von entspannenden
                Gesichtsbehandlungen bis hin zu wohltuenden Körperbehandlungen.
              </p>
              <p>
                Meine Philosophie: Jede Kundin ist einzigartig und verdient eine individuelle,
                liebevolle Behandlung. Lass dich verwöhnen!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '✧', text: 'Individuelle Beratung' },
                { icon: '❋', text: 'Professionelle Produkte' },
                { icon: '✦', text: 'Entspannte Atmosphäre' },
                { icon: '✿', text: 'Persönliche Betreuung' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-sage-400 text-lg">{feature.icon}</span>
                  <span className="font-body text-sm text-neutral/70">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
