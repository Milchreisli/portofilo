export default function ImpactSection() {
  return (
    <div className="mb-16">
      <h2
        className="font-display font-black leading-none mb-4"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text)" }}
      >
        Impact
      </h2>
      <div className="section-rule mb-6" />

      <p
        className="text-base leading-[1.8] font-mono font-light"
        style={{ color: "var(--text-muted)" }}
      >
        Even though the project is archived, it was an important experience in helping me grow
        as a collaborator and contributor. It taught me how to work with structure, responsibility,
        and a long-term community mindset.
      </p>
    </div>
  );
}
