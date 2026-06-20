"use client";

import { useEffect, useState } from "react";

type Line = { prompt: string; command: string; output: string[] };

const LINES: Line[] = [
  {
    prompt: "shayan@portfolio",
    command: "whoami",
    output: ["Final-year FinTech student, Lahore Business School."],
  },
  {
    prompt: "shayan@portfolio",
    command: "cat focus.txt",
    output: ["Financial markets + machine learning -> data analytics."],
  },
  {
    prompt: "shayan@portfolio",
    command: "echo $STATUS",
    output: ["Open to data analyst & FinTech-adjacent roles."],
  },
  {
    prompt: "shayan@portfolio",
    command: "whereami",
    output: ["Lahore, Pakistan."],
  },
];

const TYPE_SPEED = 28;
const LINE_PAUSE = 380;

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState<boolean[]>(
    Array(LINES.length).fill(false)
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIndex].command;
    if (typed.length < current.length) {
      const t = setTimeout(
        () => setTyped(current.slice(0, typed.length + 1)),
        TYPE_SPEED
      );
      return () => clearTimeout(t);
    }
    const reveal = setTimeout(() => {
      setShowOutput((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
    }, 150);
    const advance = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setTyped("");
    }, LINE_PAUSE + 250);
    return () => {
      clearTimeout(reveal);
      clearTimeout(advance);
    };
  }, [typed, lineIndex]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="overflow-hidden border border-line bg-panel">
          <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-down/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
            <span className="ml-3 font-mono text-[11px] text-faint">
              session — shayan-portfolio
            </span>
          </div>

          <div className="space-y-3 px-5 py-7 font-mono text-sm leading-relaxed sm:text-base">
            {LINES.map((line, i) => {
              if (i > lineIndex) return null;
              const isCurrent = i === lineIndex;
              const command = isCurrent ? typed : line.command;
              return (
                <div key={line.command}>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-mint">{line.prompt}</span>
                    <span className="text-faint">$</span>
                    <span className="text-ink">{command}</span>
                    {isCurrent && !done && (
                      <span className="inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-mint" />
                    )}
                  </div>
                  {(showOutput[i] || i < lineIndex) && (
                    <div className="pl-0 text-muted">
                      {line.output.map((o) => (
                        <p key={o}>{o}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {done && (
              <div className="flex gap-2 pt-1">
                <span className="text-mint">shayan@portfolio</span>
                <span className="text-faint">$</span>
                <span className="inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-mint" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Shayan
            <span className="block text-2xl font-medium text-muted sm:text-3xl">
              Building toward data, from a finance foundation.
            </span>
          </h1>
          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-2 border border-mint/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-mint transition-colors hover:bg-mint hover:text-bg"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
