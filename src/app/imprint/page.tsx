import BackHome from "@/components/back-home";

export default function ImprintPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-24">
      <p
        className="text-xs tracking-[0.3em] uppercase font-mono mb-6"
        style={{ color: "var(--text-faint)" }}
      >
        Imprint
      </p>

      <h1
        className="font-display font-black leading-[0.85] tracking-tight mb-8"
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "var(--text)" }}
      >
        Imprint.
      </h1>

      <div className="section-rule mb-8" />

      <div className="space-y-6 text-sm leading-7 font-mono" style={{ color: "var(--text-muted)" }}>
        <p>
          <span className="block mb-2" style={{ color: "var(--text)" }}>
            Responsible for the content
          </span>
          Jeongwon MSE Inh. Fabrice Weigel 
          <p></p>
          Eibenstocker Str. 19
          <p></p>
          08321 Zschorlau
        </p>

        <p>
          <span className="block mb-2" style={{ color: "var(--text)" }}>
            Contact
          </span>
          Email: hello@koro-manga.de
          <br />
          Website: <a href="/contact" className="underline hover:opacity-70">Contact page</a>
        </p>

        <p>
          <span className="block mb-2" style={{ color: "var(--text)" }}>
            Legal note
          </span> Unauthorized use of the content of this website is prohibited. All content is protected by copyright. The content of this website may not be copied, distributed, or otherwise used without the express written consent of the author.
          <p></p>

          <span className="block mb-2" style={{ color: "var(--accent)" }}>
            Unauthorized visitors are prohibited from visiting my residence. Please respect my privacy and do not visit my residence without prior consent. Missuse of this notice will be charged with legal actions.
          </span>
        </p>
      </div>

      <div className="mt-10">
        <BackHome />
      </div>
    </div>
  );
}
