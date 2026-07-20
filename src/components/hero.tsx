export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-12">
      <p
        className="text-xs tracking-[0.585em] uppercase font-mono mb-6"
        style={{ color: "var(--text)" }}
      >
        2D-Designer · Mini-Pixel-Artist · UI · Policy & Document Management
      </p>

      <h1
        className="font-display font-black leading-[0.85] tracking-tight mb-8"
        style={{
          fontSize: "clamp(2rem, 11.5vw, 15rem)",
          color: "var(--text)",
        }}
      >
        Milchreisli
      </h1>

      <div className="section-rule mb-8" />

      <div className="flex flex-col md:flex-row items-start gap-4 max-w-3xl">
        <div className="flex items-start gap-3 flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/emojis/kuromi_hey.gif"
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain flex-shrink-0 mt-1"
          />
          <p
            className="text-base md:text-lg leading-[1.75] font-mono font-light"
            style={{ color: "var(--text-muted)" }}
          >
            I'm a policy specialist and 2D designer with a passion for creating engaging digital experiences.
            <br /> Currently working on {""}
            <span style={{ color: "var(--accent)" }}>CuteCraft</span>.
            <br /> Company {""}
            <span style={{ color: "var(--accent)" }}>Jeongwon MSE</span>.
          </p>
        </div>

        <div className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mc-heads.net/avatar/Milchreisli/120"
            alt="Milchreisli Minecraft avatar"
            className="w-20 h-20 rounded-sm object-cover"
            style={{ border: "1px solid var(--border)" }}
          />
        </div>
      </div>
    </div>
  );
}
