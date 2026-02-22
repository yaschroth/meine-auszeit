'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================
// SECTION HEADING COMPONENT
// ============================================

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
  animated?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  variant = 'light',
  className,
  titleClassName,
  animated = true,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const variantClasses = {
    light: {
      label: 'text-sage-400',
      title: 'text-neutral',
      subtitle: 'text-neutral/70',
      line: 'from-sage-400 to-cream-400',
    },
    dark: {
      label: 'text-cream-300',
      title: 'text-cream-50',
      subtitle: 'text-cream-100/80',
      line: 'from-cream-300 to-cream-400',
    },
  };

  const Wrapper = animated ? motion.div : 'div';
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};

  return (
    <Wrapper
      className={cn(
        'flex flex-col max-w-3xl mb-12 md:mb-16',
        alignmentClasses[align],
        className
      )}
      {...animationProps}
    >
      {/* Label */}
      {label && (
        <span
          className={cn(
            'font-body text-sm font-medium tracking-[0.25em] uppercase mb-4',
            variantClasses[variant].label
          )}
        >
          {label}
        </span>
      )}

      {/* Decorative Line - Before Title */}
      {align === 'center' && (
        <div
          className={cn(
            'w-16 h-0.5 mb-6 bg-gradient-to-r',
            variantClasses[variant].line
          )}
        />
      )}

      {/* Title */}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl leading-tight',
          variantClasses[variant].title,
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-4 font-body text-lg leading-relaxed max-w-2xl',
            variantClasses[variant].subtitle,
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
