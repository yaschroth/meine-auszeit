'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================
// HEADER COMPONENT
// ============================================

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All main pages have hero backgrounds with transparent header
  const hasHeroBackground = ['/', '/behandlungen', '/ueber-mich', '/kontakt', '/gutscheine'].includes(pathname);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-elegant',
          isScrolled || !hasHeroBackground
            ? 'bg-cream-50/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-center">
            {/* Logo - Centered */}
            <Link href="/" className="relative z-50 group">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span
                  className={cn(
                    'font-display text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300',
                    isScrolled || !hasHeroBackground
                      ? 'text-sage-500'
                      : 'text-cream-50'
                  )}
                >
                  MEINE{' '}
                  <span
                    className={cn(
                      'italic transition-colors duration-300',
                      isScrolled || !hasHeroBackground
                        ? 'text-sage-400'
                        : 'text-cream-50'
                    )}
                  >
                    Auszeit
                  </span>
                </span>
                <span
                  className={cn(
                    'font-body text-xs md:text-sm tracking-wide transition-colors duration-300 mt-1',
                    isScrolled || !hasHeroBackground
                      ? 'text-sage-400/80'
                      : 'text-cream-100/80'
                  )}
                >
                  Dein Kosmetikstudio in Teesdorf
                </span>
              </motion.div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
