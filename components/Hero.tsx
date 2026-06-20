function TrendLine() {
  return (
    <svg
      viewBox="0 0 900 110"
      fill="none"
      className="h-auto w-full max-w-2xl"
      aria-hidden="true"
    >
      <path
        d="M0,78 C110,88 180,42 280,50 C380,58 430,15 540,22 C650,29 700,68 800,40 C840,29 870,24 900,18"
        stroke="url(#trend-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="draw-line"
      />
      <circle cx="900" cy="18" r="4.5" fill="#5EEAD4">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2.2s"
          repeatCount="indefinite"
          begin="2s"
        />
      </circle>
      <defs>
        <linearGradient id="trend-gradient" x1="0" y1="0" x2="900" y2="0">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#5EEAD4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5EEAD4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <TrendLine />

        <h1 className="mt-6 font-display text-6xl font-bold leading-[1.02] tracking-tight text-mint sm:text-7xl">
          Shayan Shabbir
        </h1>
        <p className="mt-3 font-display text-xl font-medium text-ink sm:text-2xl">
          FinTech Student → Data Analyst
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m a final-year FinTech student at Lahore Business School,
          focused on turning market knowledge into data-driven analysis.
          Skilled in <span className="font-medium text-mint">Python</span>,{" "}
          <span className="font-medium text-mint">SQL</span>, and{" "}
          <span className="font-medium text-mint">Power BI</span>, with
          hands-on experience across financial modeling, behavioral finance,
          and data visualization from real trading simulations.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 border border-mint/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-mint transition-colors hover:bg-mint hover:text-bg"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#skills"
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            View my skills
          </a>
        </div>
      </div>
    </section>
  );
}
