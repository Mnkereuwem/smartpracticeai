"use client";

import React from "react";
import { CircleDollarSign } from "lucide-react";

interface FoundRevenueCounterProps {
  target: number;
  label?: string;
}

export function FoundRevenueCounter({
  target,
  label = "Found revenue (last 90 days)"
}: FoundRevenueCounterProps) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let frameId: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [target]);

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);

  return (
    <section className="glass-panel flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
            <CircleDollarSign className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Found revenue
            </p>
            <p className="text-[11px] text-slate-400">
              Simulated total across all connected systems.
            </p>
          </div>
        </div>
        <span className="pill-badge hidden text-[10px] sm:inline-flex">
          Auto-prioritized by likelihood to recover
        </span>
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          {formatted}
        </p>
        <div className="flex flex-col items-end gap-1 text-right">
          <p className="text-xs font-medium text-slate-300">{label}</p>
          <p className="text-[11px] text-emerald-200/80">
            +18.4% vs. previous 90-day window
          </p>
        </div>
      </div>
    </section>
  );
}

