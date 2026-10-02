import { cn } from "../../lib/cn";

/** Small pulsing cyan signal — the restrained accent of the system. */
export function SignalDot({ className, label = "active" }: { className?: string; label?: string }) {
  return (
    <span className={cn("relative inline-flex size-[7px] shrink-0", className)} aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:animate-none" />
      <span className="relative inline-flex size-[7px] rounded-full bg-accent" role="img" aria-label={label} />
    </span>
  );
}

/** Engineering micro-label: mono, uppercase, tracked. Inline element — safe inside badges. */
export function MicroLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-tech text-[11px] font-medium uppercase text-muted", className)}>{children}</span>
  );
}

/** Section index marker: "02 / CAPABILITY" with thin rule. */
export function SectionIndex({ no, title, className }: { no: string; title: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden="true">
      <span className="font-tech text-[11px] tracking-[0.14em] text-accent">{no}</span>
      <span className="h-px w-10 bg-border-strong" />
      <span className="font-tech text-[11px] uppercase tracking-[0.18em] text-muted">{title}</span>
    </div>
  );
}

/** Corner ticks frame — precision-instrument annotation. */
export function CornerTicks({ className }: { className?: string }) {
  const tick = "absolute h-3 w-3 border-accent/70";
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <span className={cn(tick, "left-0 top-0 border-l border-t")} />
      <span className={cn(tick, "right-0 top-0 border-r border-t")} />
      <span className={cn(tick, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(tick, "bottom-0 right-0 border-b border-r")} />
    </div>
  );
}

/** Coordinate annotation, e.g. "X.44 — INT-02". */
export function Coord({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-tech hidden text-[10px] tracking-[0.12em] text-tick md:inline", className)}>
      {children}
    </span>
  );
}
