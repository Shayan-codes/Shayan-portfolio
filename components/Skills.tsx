import Reveal from "./Reveal";

type Skill = { name: string; level: number };
type Category = { title: string; id: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    title: "Data & ML",
    id: "DAT",
    skills: [
      { name: "Python", level: 3 },
      { name: "SQL", level: 3 },
      { name: "Pandas / NumPy", level: 3 },
      { name: "Machine Learning (sklearn)", level: 2 },
      { name: "Statistics", level: 3 },
    ],
  },
  {
    title: "FinTech & Markets",
    id: "FIN",
    skills: [
      { name: "Financial Modeling", level: 4 },
      { name: "Equity & FX Markets", level: 3 },
      { name: "Behavioral Finance", level: 4 },
      { name: "Valuation", level: 3 },
    ],
  },
  {
    title: "Tools & Platforms",
    id: "TLS",
    skills: [
      { name: "Excel", level: 4 },
      { name: "Power BI", level: 3 },
      { name: "Tableau", level: 2 },
      { name: "Git", level: 2 },
    ],
  },
];

function Bars({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`w-[5px] ${
            i < level ? "bg-mint" : "bg-line"
          }`}
          style={{ height: `${6 + i * 3}px` }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-panel/30 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            02 / Skills
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.title} delay={120 + ci * 90}>
              <div className="h-full border border-line bg-panel">
                <div className="flex items-center justify-between border-b border-line bg-panel2 px-4 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    {cat.id}
                  </span>
                  <span className="font-display text-sm font-medium text-ink">
                    {cat.title}
                  </span>
                </div>
                <ul className="divide-y divide-line">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-4 px-4 py-3.5"
                    >
                      <span className="text-sm text-muted">{s.name}</span>
                      <Bars level={s.level} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420}>
          <p className="mt-6 font-mono text-[11px] text-faint">
            // levels are self-rated, not benchmarked
          </p>
        </Reveal>
      </div>
    </section>
  );
}
