'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================
// SERVICE CARD COMPONENT
// ============================================

interface ServiceCardProps {
  title: string;
  description?: string;
  image: string;
  href?: string;
  icon?: string;
  size?: 'small' | 'large';
  className?: string;
}

// Helper component for card content
function CardContent({
  image,
  title,
  description,
  icon,
  size,
  isHovered,
  showCTA,
}: {
  image: string;
  title: string;
  description?: string;
  icon?: string;
  size: 'small' | 'large';
  isHovered: boolean;
  showCTA: boolean;
}) {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            'object-cover transition-transform duration-700 ease-elegant',
            isHovered && 'scale-110'
          )}
          sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t transition-opacity duration-500',
          'from-sage-900/80 via-sage-900/30 to-transparent',
          isHovered ? 'opacity-90' : 'opacity-70'
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Icon */}
        {icon && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.7, scale: isHovered ? 1.1 : 1 }}
            className="absolute top-6 right-6 text-3xl text-cream-100/50"
          >
            {icon}
          </motion.span>
        )}

        {/* Title */}
        <motion.h3
          className="font-display text-xl md:text-2xl text-cream-50 mb-2"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        {description && (
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="font-body text-sm text-cream-100/80 line-clamp-2"
          >
            {description}
          </motion.p>
        )}

        {/* CTA Arrow */}
        {showCTA && (
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex items-center gap-2 text-cream-50"
          >
            <span className="font-body text-xs tracking-wider uppercase">
              Mehr erfahren
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Border Highlight on Hover */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-cream-100/0"
        animate={{ borderColor: isHovered ? 'rgba(253, 252, 250, 0.3)' : 'rgba(253, 252, 250, 0)' }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}

export function ServiceCard({
  title,
  description,
  image,
  href,
  icon,
  size = 'small',
  className,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'aspect-[4/3]',
    large: 'aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn('group', className)}
    >
      {/* Gradient border wrapper */}
      <div className="relative p-[2px] rounded-xl overflow-hidden">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, #8B9A6B 0%, #C4A77D 50%, #8B9A6B 100%)',
            backgroundSize: '200% 200%',
          }}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {href ? (
          <Link
            href={href}
            className={cn(
              'relative block overflow-hidden rounded-xl bg-sage-900',
              sizeClasses[size]
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent
              image={image}
              title={title}
              description={description}
              icon={icon}
              size={size}
              isHovered={isHovered}
              showCTA={true}
            />
          </Link>
        ) : (
          <div
            className={cn(
              'relative block overflow-hidden rounded-xl bg-sage-900',
              sizeClasses[size]
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent
              image={image}
              title={title}
              description={description}
              icon={icon}
              size={size}
              isHovered={isHovered}
              showCTA={false}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ============================================
// TREATMENT CARD COMPONENT
// ============================================

interface TreatmentCardProps {
  name: string;
  description: string;
  duration?: string;
  price?: string;
  className?: string;
}

export function TreatmentCard({
  name,
  description,
  duration,
  price,
  className,
}: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group p-6 bg-cream-50 rounded-lg border border-cream-200 cursor-pointer',
        'hover:shadow-soft-lg hover:border-sage-300 transition-all duration-300',
        'hover:bg-gradient-to-br hover:from-cream-50 hover:to-sage-50/30',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-display text-lg text-neutral group-hover:text-sage-500 transition-colors mb-2">
            {name}
          </h4>
          <p className="font-body text-sm text-neutral/70 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 flex-shrink-0">
          {duration && (
            <span className="font-body text-xs text-sage-400 whitespace-nowrap">
              {duration}
            </span>
          )}
          {price && (
            <span className="font-display text-lg text-sage-500 whitespace-nowrap">
              {price}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// TESTIMONIAL CARD COMPONENT
// ============================================

interface TestimonialCardProps {
  name: string;
  location?: string;
  text: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  name,
  location,
  text,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative p-5 bg-cream-100 rounded-xl shadow-soft',
        className
      )}
    >
      {/* Quote Mark */}
      <span className="absolute top-3 right-4 font-display text-5xl text-sage-300/30 leading-none select-none">
        &ldquo;
      </span>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex justify-center gap-0.5 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <svg
              key={i}
              className="w-3.5 h-3.5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Text */}
      <blockquote className="relative z-10 font-body text-sm text-neutral leading-relaxed mb-4 italic text-center">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-full bg-sage-400/20 flex items-center justify-center">
          <span className="font-display text-sage-500 text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div className="text-center">
          <p className="font-body font-medium text-neutral text-xs">{name}</p>
          {location && (
            <p className="font-body text-[10px] text-neutral/60">{location}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
