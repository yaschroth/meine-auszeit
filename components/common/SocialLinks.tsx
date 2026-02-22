'use client';

import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

// ============================================
// SOCIAL LINKS COMPONENT
// ============================================

interface SocialLinksProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SocialLinks({
  variant = 'light',
  size = 'md',
  className,
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'Instagram',
      href: BUSINESS_INFO.socialMedia.instagram,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5',
  };

  const variantClasses = {
    light:
      'text-cream-100/70 hover:text-cream-50 hover:bg-cream-50/10',
    dark:
      'text-sage-400 hover:text-sage-500 hover:bg-sage-50',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'rounded-full transition-all duration-300',
            sizeClasses[size],
            variantClasses[variant]
          )}
          aria-label={`Besuchen Sie uns auf ${social.name}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
