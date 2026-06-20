export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-wider text-ink"
        >
          SHAYAN<span className="text-mint">.</span>LOG
        </a>

        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          <a href="#about" className="transition-colors hover:text-mint">
            01 / About
          </a>
          <a href="#skills" className="transition-colors hover:text-mint">
            02 / Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-mint">
            03 / Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-mint">
            04 / Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint"></span>
          </span>
          OPEN TO ROLES
        </div>
      </div>
    </header>
  );
}
