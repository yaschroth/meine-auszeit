import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

// ============================================
// SERVICES SECTION COMPONENT
// ============================================

export default function Services() {
  const serviceEntries = Object.entries(SERVICES) as [keyof typeof SERVICES, typeof SERVICES[keyof typeof SERVICES]][];

  return (
    <section className="pt-16 md:pt-24 bg-cream-50 texture-hexagon-green">
      <div className="container-custom mb-12 md:mb-16">
        {/* Section Heading */}
        <SectionHeading
          label="Meine Behandlungen"
          title="Entdecke meine Dienstleistungen"
          subtitle="Bei Meine Auszeit in Teesdorf biete ich dir ein breites Spektrum an hochwertigen Schönheitsbehandlungen."
        />
      </div>

      {/* Services - Alternating Layout */}
      <div className="space-y-0">
        {serviceEntries.map(([key, service], index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={key}
              className="grid lg:grid-cols-2"
            >
              {/* Image Side - Beige Background */}
              <div
                className={`relative bg-cream-200 min-h-[300px] lg:min-h-[500px] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-cream-100/10" />
              </div>

              {/* Content Side - Green Background */}
              <div
                className={`bg-sage-500 text-cream-50 p-8 md:p-12 lg:p-16 relative overflow-hidden texture-hexagon ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="font-display text-3xl md:text-4xl text-cream-50 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-cream-100/80">
                    {service.subtitle}
                  </p>
                </div>

                {/* Treatments List */}
                <div className="space-y-4">
                  {service.treatments.map((treatment, treatmentIndex) => (
                    <div
                      key={treatmentIndex}
                      className="flex justify-between items-start gap-4 pb-4 border-b border-sage-400/30 last:border-b-0 last:pb-0"
                    >
                      <div className="flex-1">
                        <h4 className="font-display text-base md:text-lg text-cream-50 mb-1">
                          {treatment.name}
                        </h4>
                        {treatment.description && (
                          <p className="font-body text-xs md:text-sm text-cream-100/70">
                            {treatment.description}
                          </p>
                        )}
                        {treatment.duration && (
                          <p className="font-body text-xs text-cream-100/50 mt-1">
                            {treatment.duration}
                          </p>
                        )}
                      </div>
                      <span className="font-display text-lg md:text-xl text-cream-100 whitespace-nowrap">
                        {treatment.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
