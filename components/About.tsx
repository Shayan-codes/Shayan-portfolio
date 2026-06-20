import Reveal from "./Reveal";

const FACTS = [
  { k: "Based in", v: "Lahore, Pakistan" },
  { k: "Studying", v: "FinTech, Lahore Business School" },
  { k: "Year", v: "Final year" },
  { k: "Direction", v: "Data Analytics → Data Science" },
  { k: "Looking at", v: "FinTech, Banking, Consulting, Tech" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            01 / About
          </p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={80}>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Who I am
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I&apos;m a final-year FinTech student, currently working
                through coursework in financial markets, behavioral finance,
                machine learning, and AI for business. I like the part of
                finance that&apos;s really about reading data — markets,
                pricing, behavior — and I&apos;ve found I enjoy the analytical
                side more than I expected to.
              </p>
              <p>
                That&apos;s pulled me toward data analytics: cleaning and
                modeling data, building dashboards, and turning numbers into
                decisions a non-technical reader can act on. My background in
                financial markets gives me a head start on the
                domain-specific problems FinTech and banking teams actually
                deal with.
              </p>
              <p>
                I&apos;m looking for roles where I can apply that mix —
                FinTech startups, banking, consulting, or analytics teams at
                e-commerce and tech companies — and grow toward a data
                scientist track.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="border border-line bg-panel">
              <div className="border-b border-line bg-panel2 px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-faint">
                profile.json
              </div>
              <dl className="divide-y divide-line">
                {FACTS.map((f) => (
                  <div
                    key={f.k}
                    className="flex items-center justify-between gap-4 px-4 py-3.5 font-mono text-xs sm:text-sm"
                  >
                    <dt className="text-faint">{f.k}</dt>
                    <dd className="text-right text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
