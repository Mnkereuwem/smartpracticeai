"use client";

import React from "react";
import { ArrowRight, CheckCircle2, History } from "lucide-react";

type Opportunity = {
  id: number;
  title: string;
  category: string;
  estimatedValue: number;
  impact: "High" | "Medium" | "Low";
  source: string;
};

const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: 1,
    title: "Overdue wellness visit follow-ups",
    category: "Appointments",
    estimatedValue: 18250,
    impact: "High",
    source: "IDEXX + schedule gaps"
  },
  {
    id: 2,
    title: "Missed post-procedure check-ins",
    category: "Care plans",
    estimatedValue: 12400,
    impact: "Medium",
    source: "EHR + messaging"
  },
  {
    id: 3,
    title: "Unsent outstanding balance nudges",
    category: "Billing",
    estimatedValue: 9630,
    impact: "High",
    source: "athenahealth + Weave"
  },
  {
    id: 4,
    title: "Cancelled appointments without rebooking",
    category: "Retention",
    estimatedValue: 7210,
    impact: "Medium",
    source: "Schedule + communication"
  }
];

export function MissedOpportunitiesList() {
  const [recoveredIds, setRecoveredIds] = React.useState<number[]>([]);

  const handleRecover = (id: number) => {
    setRecoveredIds((prev) =>
      prev.includes(id) ? prev : [...prev, id].slice(0, MOCK_OPPORTUNITIES.length)
    );
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);

  return (
    <section className="glass-panel flex flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Missed revenue opportunities
          </p>
          <p className="text-[11px] text-slate-400">
            Auto-ranked by financial impact and likelihood to recover.
          </p>
        </div>
        <span className="pill-badge text-[10px]">
          <History className="h-3 w-3" />
          Last refreshed · 2h ago
        </span>
      </div>

      <div className="space-y-3">
        {MOCK_OPPORTUNITIES.map((opportunity) => {
          const isRecovered = recoveredIds.includes(opportunity.id);
          return (
            <article
              key={opportunity.id}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-3.5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-medium text-slate-100">
                    {opportunity.title}
                  </h3>
                  <span className="rounded-full bg-brand-500/10 px-2 py-0.5 text-[10px] font-medium text-brand-200">
                    {opportunity.category}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      opportunity.impact === "High"
                        ? "bg-emerald-500/10 text-emerald-200"
                        : opportunity.impact === "Medium"
                        ? "bg-amber-500/10 text-amber-200"
                        : "bg-slate-500/10 text-slate-200"
                    }`}
                  >
                    {opportunity.impact} impact
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Source: {opportunity.source}
                </p>
              </div>

              <div className="flex items-end justify-between gap-3 sm:flex-col sm:items-end">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Estimated recoverable</p>
                  <p className="text-sm font-semibold text-slate-50">
                    {formatCurrency(opportunity.estimatedValue)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRecover(opportunity.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    isRecovered
                      ? "bg-emerald-500/10 text-emerald-200"
                      : "bg-brand-500 text-slate-950 shadow-sm shadow-brand-500/40 hover:brightness-110"
                  }`}
                >
                  {isRecovered ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Recovered
                    </>
                  ) : (
                    <>
                      Recover
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

