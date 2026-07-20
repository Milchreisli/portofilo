export default function AboutSection() {
  return (
    <div className="mb-16">
      <h2
        className="font-display font-black leading-none mb-4"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text)" }}
      >
        What Foundation Labs Was
      </h2>
      <div className="section-rule mb-6" />

      <p
        className="text-base leading-[1.8] font-mono font-light"
        style={{ color: "var(--text-muted)" }}
      >
        Foundation Labs was a German SCP:SL community project focused on creating a strong
        identity, clear expectations, and a more polished player experience. My role centered
        around the human side of the project: rules, standards, and the culture that shaped how
        people interacted within the community.
      </p>
    </div>
  );
}
