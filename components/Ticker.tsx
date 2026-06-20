const ITEMS = [
  { label: "PYTHON", delta: "+0.4" },
  { label: "SQL", delta: "+0.2" },
  { label: "MACHINE LEARNING", delta: "+0.9" },
  { label: "FINANCIAL MODELING", delta: "+0.3" },
  { label: "POWER BI", delta: "+0.5" },
  { label: "EXCEL", delta: "+0.1" },
  { label: "BEHAVIORAL FINANCE", delta: "+0.6" },
  { label: "DATA VISUALIZATION", delta: "+0.4" },
  { label: "R", delta: "+0.2" },
  { label: "EQUITY MARKETS", delta: "+0.7" },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-6 font-mono text-xs tracking-wider text-muted"
        >
          <span className="text-faint">//</span>
          <span>{item.label}</span>
          <span className="text-mint">{item.delta}</span>
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-line bg-panel py-3">
      <div className="flex w-max animate-ticker">
        <Row />
        <Row />
      </div>
    </div>
  );
}
