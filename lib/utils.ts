import { clsx, type ClassValue } from 'clsx';

// ============================================
// MEINE AUSZEIT - UTILITY FUNCTIONS
// ============================================

/**
 * Combines class names using clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+43)(\d{4})(\d+)/, '$1 $2 $3');
}

/**
 * Format phone number for tel: link
 */
export function phoneToLink(phone: string): string {
  return phone.replace(/\s/g, '');
}

/**
 * Generate structured data for LocalBusiness
 */
export function generateLocalBusinessSchema(data: {
  name: string;
  description: string;
  image: string;
  telephone: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  openingHours: Array<{ day: string; hours: string }>;
  url: string;
}) {
  const dayMap: Record<string, string> = {
    Montag: 'Monday',
    Dienstag: 'Tuesday',
    Mittwoch: 'Wednesday',
    Donnerstag: 'Thursday',
    Freitag: 'Friday',
    Samstag: 'Saturday',
    Sonntag: 'Sunday',
  };

  const openingHoursSpec = data.openingHours
    .filter((item) => item.hours !== 'Geschlossen' && item.hours !== 'Nach Vereinbarung')
    .map((item) => {
      const match = item.hours.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
      if (match) {
        return {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: dayMap[item.day] || item.day,
          opens: match[1],
          closes: match[2],
        };
      }
      return null;
    })
    .filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: data.name,
    description: data.description,
    image: data.image,
    '@id': data.url,
    url: data.url,
    telephone: data.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      postalCode: data.address.zip,
      addressCountry: data.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.lat,
      longitude: data.geo.lng,
    },
    openingHoursSpecification: openingHoursSpec,
    priceRange: '€€',
  };
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(elementId: string, offset = 100): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function executedFunction(...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement, offset = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Generate a random ID
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Austrian phone number
 */
export function isValidAustrianPhone(phone: string): boolean {
  const phoneRegex = /^(\+43|0043|0)?[\s]?(\d{3,5})[\s\-]?(\d{4,10})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Get current year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
