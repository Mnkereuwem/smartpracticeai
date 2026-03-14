"use client";

import { Activity, Plug2, Stethoscope } from "lucide-react";

const integrations = [
  {
    name: "IDEXX",
    description: "Diagnostics & lab data",
    status: "Connected",
    accent: "from-emerald-400/20 to-emerald-500/5"
  },
  {
    name: "Weave",
    description: "Client communication",
    status: "In review",
    accent: "from-brand-400/20 to-brand-500/5"
  },
  {
    name: "Epic",
    description: "EHR & visit history",
    status: "Coming soon",
    accent: "from-sky-400/20 to-sky-500/5"
  },
  {
    name: "athenahealth",
    description: "Billing & scheduling",
    status: "Coming soon",
    accent: "from-violet-400/20 to-violet-500/5"
  }
];

export function IntegrationsSidebar() {
  return (
    <aside className="glass-panel flex h-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            Integrations
          </p>
          <p className="mt-0.5 text-xs text-slate-400">
            Connect the tools you already use.
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-300">
          <Plug2 className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-3"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${integration.accent}`}
            />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-100">
                  {integration.name}
                </p>
                <p className="text-[11px] text-slate-400">
                  {integration.description}
                </p>
              </div>
              <span className="pill-badge whitespace-nowrap text-[10px]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    integration.status === "Connected"
                      ? "bg-emerald-400"
                      : integration.status === "In review"
                      ? "bg-amber-300"
                      : "bg-slate-400"
                  }`}
                />
                {integration.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-start gap-2 rounded-lg border border-dashed border-emerald-400/40 bg-emerald-500/5 p-3">
        <Activity className="mt-0.5 h-3.5 w-3.5 text-emerald-300" />
        <div>
          <p className="text-xs font-medium text-emerald-100">
            Revenue insights refresh nightly
          </p>
          <p className="text-[11px] text-emerald-200/80">
            SmartPractice AI continuously scans connected systems for new
            opportunities.
          </p>
        </div>
      </div>
    </aside>
  );
}

