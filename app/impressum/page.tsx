import type { Metadata } from 'next';
import { BUSINESS_INFO, SEO_CONFIG } from '@/lib/constants';

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen von Meine Auszeit Kosmetikstudio in Teesdorf.',
  robots: {
    index: false,
    follow: true,
  },
};

// ============================================
// IMPRESSUM PAGE
// ============================================

export default function ImpressumPage() {
  return (
    <main className="pt-32 pb-20 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-neutral mb-4">
              Impressum
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-sage-400 to-cream-400" />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-sage max-w-none font-body text-neutral/80">
            {/* Angaben gemäß ECG */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Angaben gemäß § 5 ECG und § 25 MedienG
              </h2>
              <p>
                {BUSINESS_INFO.owner.firstName} {BUSINESS_INFO.owner.lastName}
                <br />
                {BUSINESS_INFO.fullName}
                <br />
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                <br />
                {BUSINESS_INFO.address.country}
              </p>
            </section>

            {/* Kontakt */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Kontakt
              </h2>
              <p>
                Telefon: {BUSINESS_INFO.contact.phoneDisplay}
                <br />
                E-Mail:{' '}
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="text-sage-500 hover:text-sage-600 transition-colors"
                >
                  {BUSINESS_INFO.contact.email}
                </a>
              </p>
            </section>

            {/* Berufsbezeichnung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p>
                Berufsbezeichnung: Kosmetikerin
                <br />
                Zuständige Kammer: Wirtschaftskammer Niederösterreich
                <br />
                Verliehen in: Österreich
              </p>
            </section>

            {/* Unternehmensgegenstand */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Unternehmensgegenstand
              </h2>
              <p>
                Kosmetikdienstleistungen, Körperpflege und Wellness
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p>
                {BUSINESS_INFO.owner.firstName} {BUSINESS_INFO.owner.lastName}
                <br />
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
              </p>
            </section>

            {/* EU-Streitschlichtung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-500 hover:text-sage-600 transition-colors break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Verbraucherstreitbeilegung
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Haftung für Inhalte
              </h2>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </section>

            {/* Urheberrecht */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
