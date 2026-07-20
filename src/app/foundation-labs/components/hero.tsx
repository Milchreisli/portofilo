export default function HeroSection() {
  return (
    <div className="mb-16">
      <p
        className="text-xs tracking-[0.3em] uppercase font-mono mb-6"
        style={{ color: "var(--text-faint)" }}
      >
        SCP:SL Community · Policy & Ethics
      </p>

      <h1
        className="font-display font-black leading-[0.85] tracking-tight mb-8"
        style={{ fontSize: "clamp(4rem, 14vw, 10rem)", color: "var(--text)" }}
      >
        Foundation Labs.
      </h1>

      <div className="section-rule mb-8" />

      <p
        className="text-base md:text-lg leading-[1.75] font-mono font-light max-w-2xl mb-8"
        style={{ color: "var(--text-muted)" }}
      >
        A German SCP:SL server project where I contributed as Chief Policy & Ethics Manager,
        helping shape standards, community expectations, and a more structured environment.
      </p>

      <div className="inline-flex items-center px-3 py-2 text-xs font-mono uppercase tracking-[0.2em]"
        style={{ color: "var(--accent)", border: "1px solid var(--border)" }}>
        Archived Project
      </div>
    </div>
  );
}
