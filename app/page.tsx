import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';

// ============================================
// HOMEPAGE
// ============================================

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <Services />

      {/* About Teaser */}
      <About />

      {/* Stats with Reviews */}
      <Stats />

      {/* Call to Action */}
      <CTA />
    </>
  );
}
