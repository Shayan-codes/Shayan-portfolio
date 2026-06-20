import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/your-name", href: "https://linkedin.com/in/your-name" },
  { label: "GitHub", value: "github.com/your-username", href: "https://github.com/your-username" },
];

export default function Footer() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            04 / Contact
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk data.
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Open to data analyst and FinTech-adjacent roles, internships, and
            anything in between. Reach out directly.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 overflow-hidden border border-line bg-panel">
            <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
              <span className="ml-3 font-mono text-[11px] text-faint">
                contact.sh
              </span>
            </div>
            <ul className="divide-y divide-line">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center justify-between gap-4 px-5 py-4 font-mono text-sm transition-colors hover:bg-panel2"
                  >
                    <span className="text-faint">{l.label}</span>
                    <span className="text-ink group-hover:text-mint">
                      {l.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-16 font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} Shayan. Built with Next.js, deployed
            on Vercel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
