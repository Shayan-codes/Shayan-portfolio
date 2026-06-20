"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-mint/30 bg-panel font-display text-base font-bold text-mint"
            style={{ boxShadow: "0 0 18px rgba(94, 234, 212, 0.25)" }}
          >
            S
          </span>
          <span className="font-mono text-sm tracking-wider text-ink">
            SHAYAN
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-panel p-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                active === item.id
                  ? "bg-mint text-bg"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-xs text-muted sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          OPEN TO ROLES
        </div>
      </div>
    </header>
  );
}
