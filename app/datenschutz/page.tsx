import type { Metadata } from 'next';
import { BUSINESS_INFO, SEO_CONFIG } from '@/lib/constants';

// ============================================
// METADATA
// ============================================

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Meine Auszeit Kosmetikstudio - Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  robots: {
    index: false,
    follow: true,
  },
};

// ============================================
// DATENSCHUTZ PAGE
// ============================================

export default function DatenschutzPage() {
  return (
    <main className="pt-32 pb-20 bg-cream-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-neutral mb-4">
              Datenschutzerklärung
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-sage-400 to-cream-400" />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-sage max-w-none font-body text-neutral/80">
            {/* Einleitung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Allgemeine Hinweise
              </h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
                Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                identifiziert werden können.
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Datenerfassung auf dieser Website
              </h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                Dessen Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
                Stelle&ldquo; in dieser Datenschutzerklärung entnehmen.
              </p>
              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
                dieser Daten zu verlangen.
              </p>
            </section>

            {/* Verantwortliche Stelle */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                2. Hosting
              </h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p>
                <strong>Externes Hosting</strong>
                <br />
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
                dieser Website erfasst werden, werden auf den Servern des Hosters
                gespeichert.
              </p>
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
                unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO)
                und im Interesse einer sicheren, schnellen und effizienten Bereitstellung
                unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
                1 lit. f DSGVO).
              </p>
            </section>

            {/* Allgemeine Hinweise */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Datenschutz
              </h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
                sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                {BUSINESS_INFO.owner.firstName} {BUSINESS_INFO.owner.lastName}
                <br />
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.zip} {BUSINESS_INFO.address.city}
                <br />
                <br />
                Telefon: {BUSINESS_INFO.contact.phoneDisplay}
                <br />
                E-Mail: {BUSINESS_INFO.contact.email}
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Speicherdauer
              </h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
                uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
                Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                jederzeit widerrufen.
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Die zuständige
                Aufsichtsbehörde in Österreich ist die Österreichische Datenschutzbehörde.
              </p>
            </section>

            {/* Datenerfassung */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Kontaktformular
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
                Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.
              </p>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Anfrage per E-Mail oder Telefon
              </h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
                zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert.
              </p>
            </section>

            {/* Plugins und Tools */}
            <section className="mb-10">
              <h2 className="font-display text-2xl text-neutral mb-4">
                5. Plugins und Tools
              </h2>

              <h3 className="font-display text-xl text-neutral mt-6 mb-3">
                Google Fonts (lokales Hosting)
              </h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
                genannte Google Fonts, die von Google bereitgestellt werden. Die Google
                Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet
                dabei nicht statt.
              </p>
            </section>

            {/* Stand */}
            <section className="mt-12 pt-8 border-t border-cream-200">
              <p className="text-sm text-neutral/60">
                Stand: Februar 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
