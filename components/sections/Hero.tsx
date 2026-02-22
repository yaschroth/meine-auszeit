'use client';

import { motion } from 'framer-motion';

// ============================================
// HERO SECTION COMPONENT
// ============================================

export default function Hero() {
  return (
    <section className="relative h-[100svh] lg:min-h-screen overflow-hidden bg-sage-400 texture-hexagon [&::before]:opacity-[0.12] [&::before]:z-10">
      {/* Solid Green Background - z-0 */}
      <div className="absolute inset-0 bg-sage-400 z-0" />

      {/* Mobile & Tablet: Centered text container between header and image */}
      <div className="lg:hidden absolute inset-x-0 top-[12%] sm:top-[14%] bottom-[30%] sm:bottom-[40%] flex flex-col items-center justify-center gap-4 sm:gap-6 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="font-display text-[22vw] sm:text-[18vw] leading-[0.85] text-cream-100 whitespace-nowrap font-bold tracking-[-0.02em] text-center">
            <span className="inline-block" style={{ fontWeight: 700 }}>D</span>
            <span className="inline-block" style={{ fontWeight: 500 }}>E</span>
            <span className="inline-block" style={{ fontWeight: 700 }}>I</span>
            <span className="inline-block" style={{ fontWeight: 600 }}>N</span>
            <span className="inline-block" style={{ fontWeight: 500 }}>E</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            className="font-display text-[16vw] sm:text-[14vw] leading-[0.85] whitespace-nowrap font-bold tracking-[-0.02em]"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #EDE7E0',
            }}
          >
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '2.5px' }}>A</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>U</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '2.5px' }}>S</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '2px' }}>Z</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>E</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '2px' }}>I</span>
            <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>T</span>
          </span>
        </motion.div>
      </div>

      {/* Desktop: DEINE - top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="hidden lg:block absolute left-[2%] top-[15%] z-30 pointer-events-none"
      >
        <h1 className="font-display text-[15vw] leading-[0.8] text-cream-100 whitespace-nowrap font-bold tracking-[-0.02em]">
          <span className="inline-block" style={{ fontWeight: 700 }}>D</span>
          <span className="inline-block" style={{ fontWeight: 500 }}>E</span>
          <span className="inline-block" style={{ fontWeight: 700 }}>I</span>
          <span className="inline-block" style={{ fontWeight: 600 }}>N</span>
          <span className="inline-block" style={{ fontWeight: 500 }}>E</span>
        </h1>
      </motion.div>

      {/* Desktop: AUSZEIT - bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block absolute left-[2%] bottom-[10%] z-30 pointer-events-none"
      >
        <span
          className="font-display text-[14vw] leading-[0.8] whitespace-nowrap font-bold tracking-[-0.02em]"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px #EDE7E0',
          }}
        >
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '2.5px' }}>A</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>U</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '2.5px' }}>S</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '2px' }}>Z</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>E</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '2px' }}>I</span>
          <span className="inline-block" style={{ WebkitTextStrokeWidth: '1.5px' }}>T</span>
        </span>
      </motion.div>

      {/* Model Image - Centered, anchored to bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center pl-8 sm:pl-12 lg:pl-0 z-20 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/beauty2.png"
          alt="Beauty"
          className="h-[52svh] sm:h-[60svh] lg:h-[88vh] w-auto object-contain object-bottom drop-shadow-[0_0_35px_rgba(237,231,224,0.4)]"
        />
      </motion.div>

      {/* Scroll Indicator - Bottom Right - Hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hidden lg:flex absolute bottom-8 right-8 z-30 flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-cream-100/60 rotate-90 origin-center translate-x-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-cream-100/60 to-transparent"
        />
      </motion.div>

    </section>
  );
}
