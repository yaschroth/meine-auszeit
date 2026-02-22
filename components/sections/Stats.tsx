'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, BUSINESS_INFO } from '@/lib/constants';
import { TestimonialCard } from '@/components/ui/Card';

// ============================================
// ANIMATED STATS SECTION COMPONENT
// ============================================

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function AnimatedCounter({ value, suffix = '', label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <span className="font-display text-5xl md:text-6xl lg:text-7xl text-cream-50 font-medium">
          {count}
        </span>
        <span className="font-display text-3xl md:text-4xl text-cream-100">
          {suffix}
        </span>
      </div>
      <p className="font-body text-sm md:text-base text-cream-100/70 mt-2">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) next = 0;
      return next;
    });
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const stats = [
    { value: 100, suffix: '+', label: 'Zufriedene Kundinnen' },
    { value: 100, suffix: '%', label: 'Leidenschaft' },
  ];

  return (
    <section className="py-16 md:py-24 bg-sage-500 relative overflow-hidden texture-hexagon">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sage-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sage-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-[0.25em] uppercase text-cream-100/70 mb-4">
            In Zahlen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50">
            Unsere <span className="italic text-cream-100">Erfolgsgeschichte</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 lg:gap-32 mb-16">
          {/* First Stat */}
          <AnimatedCounter
            value={stats[0].value}
            suffix={stats[0].suffix}
            label={stats[0].label}
            delay={0}
          />

          {/* Second Stat */}
          <AnimatedCounter
            value={stats[1].value}
            suffix={stats[1].suffix}
            label={stats[1].label}
            delay={300}
          />
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-soft hover:shadow-soft-lg transition-all hover:scale-105 text-sage-500"
            aria-label="Vorherige Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-soft hover:shadow-soft-lg transition-all hover:scale-105 text-sage-500"
            aria-label="Nächste Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-4 min-h-[220px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <TestimonialCard
                  name={TESTIMONIALS[currentIndex].name}
                  location={TESTIMONIALS[currentIndex].location}
                  text={TESTIMONIALS[currentIndex].text}
                  rating={TESTIMONIALS[currentIndex].rating}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cream-50 w-8'
                    : 'bg-cream-100/30 hover:bg-cream-100/50'
                }`}
                aria-label={`Gehe zu Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
