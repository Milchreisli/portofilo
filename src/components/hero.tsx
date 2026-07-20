export default function Hero() {
  return (
    <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-24 md:px-12">

      <div className="relative z-10">
        <p
          className="mb-6 text-xs uppercase tracking-[0.585em] font-mono"
          style={{ color: "var(--text)" }}
        >
          2D-Designer · Mini-Pixel-Artist · UI · Policy & Document Management
        </p>

        <h1
          className="mb-8 font-display font-black leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(6rem, 11.5vw, 6rem)",
            color: "var(--text)",
          }}
        >
          Milchreisli
        </h1>

        <div className="section-rule mb-8" />

        <div className="flex max-w-3xl flex-col items-start gap-4 md:flex-row">
          <div className="flex flex-1 items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/emojis/kuromi_hey.gif"
              alt=""
              aria-hidden="true"
              className="mt-1 h-5 w-5 flex-shrink-0 object-contain"
            />
            <p
              className="text-base leading-[1.75] font-mono font-light md:text-lg"
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
              className="h-20 w-20 rounded-sm object-cover"
              style={{ border: "1px solid var(--border)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
