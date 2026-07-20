import BackHome from "@/components/back-home";

export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
      <p
        className="mb-6 text-xs uppercase tracking-[0.35em] font-mono"
        style={{ color: "var(--text-faint)" }}
      >
        Legal Notice
      </p>

      <h1
        className="mb-8 font-display font-black leading-[0.9] tracking-tight"
        style={{ fontSize: "clamp(3.5rem, 9vw, 6.5rem)", color: "var(--text)" }}
      >
        Imprint.
      </h1>

      <div className="mb-8 h-px w-full" style={{ backgroundColor: "var(--border)" }} />

      <div
        className="rounded-3xl border p-8 sm:p-10 md:p-12"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
      >
        <div className="space-y-5 text-sm leading-8 font-mono md:text-[0.95rem]" style={{ color: "var(--text-muted)" }}>
          <section className="rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
              Information pursuant to § 5 of the German Digital Services Act (DDG)
            </p>
            <div className="space-y-1">
              <p>Fabrice Jimmy Weigel</p>
              <p>Jeongwon MSE</p>
              <p>Eibenstocker Str. 19</p>
              <p>08321 Zschorlau</p>
              <p>Germany</p>
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
              Contact Information
            </p>
            <div className="space-y-1">
              <p>Phone: +49 (0)3771 59 899 79</p>
              <p>Email: hello@koro-manga.de</p>
              <p>
                Website: <a href="/contact" className="underline transition-opacity hover:opacity-70">Contact page</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
              VAT ID
            </p>
            <p>
              Sales tax identification number according to § 27 a of the German Sales Tax Act (Umsatzsteuergesetz):
              <br />
              DE 456910381
            </p>
          </section>

          <section className="rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
              Person responsible for editorial content pursuant to § 18 para. 2 MStV
            </p>
            <div className="space-y-1">
              <p>Fabrice Jimmy Weigel</p>
              <p>Eibenstocker Str. 19</p>
              <p>08321 Zschorlau</p>
              <p>Germany</p>
            </div>
          </section>

          <section className="rounded-2xl border border-[var(--border-subtle)] p-5 md:p-6">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em]" style={{ color: "var(--text)" }}>
              Legal Disclaimer & Notice of Protection
            </p>
            <p>
              The publication of the mandatory contact data within this Imprint is strictly required by German federal law (§ 5 DDG). It does not constitute consent for any form of uninvited communication, physical visitation, or marketing.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="mb-2" style={{ color: "var(--text)" }}>
                  1. Zero-Tolerance Policy for Unsolicited Physical Visits
                </p>
                <p>
                  The physical address provided is a strictly private workspace and residential domicile.
                  <br />
                  <strong>Physical access to these premises is strictly prohibited.</strong>
                  <br />
                  Any uninvited, unsolicited, or unannounced personal visits by individuals, clients, marketers, or companies will be treated as unlawful trespassing (Hausfriedensbruch pursuant to § 123 of the German Criminal Code / StGB).
                  <br />
                  Any individual attempting to breach the privacy of these premises will be expelled immediately, a permanent ban (Hausverbot) will be issued, and <strong>immediate emergency police assistance (Polizeinotruf) will be dispatched to secure the location.</strong>
                </p>
              </div>

              <div>
                <p className="mb-2" style={{ color: "var(--text)" }}>
                  2. Harassment and Stalking Protocols
                </p>
                <p>
                  Any repeated, unwanted, or malicious contact—whether physical, via telephone, or digital—will be documented chronologically and classified as unlawful harassment or stalking (Nachstellung pursuant to § 238 StGB).
                  <br />
                  All such violations will be reported immediately and without prior warning to the <strong>responsible law enforcement agencies (Polizeibehörde) and the public prosecutor's office (Staatsanwaltschaft)</strong> for criminal prosecution.
                  <br />
                  Civil restraining orders and emergency injunctions (Einstweilige Verfügung) under the Protection Against Violence Act (Gewaltschutzgesetz) will be pursued aggressively at the offender's sole expense.
                </p>
              </div>

              <div>
                <p className="mb-2" style={{ color: "var(--text)" }}>
                  3. Prohibition of Unsolicited Mail and Spam
                </p>
                <p>
                  <strong>Postal Mail:</strong> The use of the legal notice address for the transmission of unsolicited advertising, promotional materials, brochures, or samples is explicitly forbidden. Non-compliance will result in immediate legal cease-and-desist orders (Unterlassungsklage).
                  <br />
                  <strong>Telecommunications:</strong> Direct marketing calls, automated robocalls, and spam emails are strictly prohibited under the Act Against Unfair Competition (UWG). Violations will be reported directly to the <strong>Federal Network Agency (Bundesnetzagentur)</strong>, which carries fines of up to €300,000.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-10">
        <BackHome />
      </div>
    </div>
  );
}
