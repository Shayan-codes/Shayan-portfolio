import Reveal from "./Reveal";

const PLACEHOLDERS = [
  {
    id: "PROJECT_01",
    title: "Project title goes here",
    blurb:
      "One or two sentences on the problem you looked at, the approach you took, and what came out of it.",
    tags: ["Python", "Pandas"],
  },
  {
    id: "PROJECT_02",
    title: "Project title goes here",
    blurb:
      "Swap this copy out once you publish a project. Link to a write-up, notebook, or dashboard.",
    tags: ["SQL", "Power BI"],
  },
  {
    id: "PROJECT_03",
    title: "Project title goes here",
    blurb:
      "A short case study reads well here: context, method, result, in three or four lines.",
    tags: ["Financial Modeling"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            03 / Projects
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Case studies, coming soon
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            These slots are placeholders — drop in real work as you publish
            it. Each card is sized for a title, a short result-focused
            blurb, and the tools you used.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={p.id} delay={120 + i * 90}>
              <div className="flex h-full flex-col border border-dashed border-line p-5">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-faint">
                  <span>{p.id}</span>
                  <span className="text-amber/80">status: draft</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 font-mono text-xs text-faint">
                  add case study →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
