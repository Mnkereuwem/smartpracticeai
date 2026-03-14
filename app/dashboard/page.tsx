import { FoundRevenueCounter } from "@/components/FoundRevenueCounter";
import { IntegrationsSidebar } from "@/components/IntegrationsSidebar";
import { MissedOpportunitiesList } from "@/components/MissedOpportunitiesList";
import { ArrowLeft, LineChart, Mic } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-brand-400/70 hover:text-brand-200"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                SmartPractice AI
              </p>
              <p className="text-sm font-medium text-slate-100">
                Revenue Recovery Overview
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/encounters"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-100 transition hover:bg-emerald-500/20"
            >
              <Mic className="h-3.5 w-3.5" />
              Open ambient capture
            </Link>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-100 transition hover:bg-brand-500/20 sm:inline-flex"
            >
              <LineChart className="h-3.5 w-3.5" />
              Export mock report
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 pb-8 pt-4 lg:flex-row lg:px-6">
        <div className="flex flex-1 flex-col gap-4">
          <FoundRevenueCounter target={128400} />
          <MissedOpportunitiesList />
        </div>
        <div className="w-full shrink-0 lg:w-72">
          <IntegrationsSidebar />
        </div>
      </div>
    </main>
  );
}

