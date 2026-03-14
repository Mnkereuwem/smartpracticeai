import Link from "next/link";
import { ArrowRight, Sparkles, LineChart } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-slate-950 shadow-lg shadow-brand-500/40">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-100">
              SmartPractice AI
            </span>
            <span className="text-xs text-slate-400">
              Intelligent revenue recovery for practices
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <span className="cursor-default text-slate-400">
            Product · Integrations · Pricing
          </span>
          <Link
            href="/dashboard"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-100 transition hover:border-brand-400 hover:bg-brand-500/10"
          >
            Open dashboard
          </Link>
        </nav>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-6 pb-16 pt-4 text-center lg:px-8 lg:pt-10">
        <div className="pill-badge mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live preview · Dashboard powered by mock data
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Turn{" "}
            <span className="bg-gradient-to-r from-brand-200 via-emerald-200 to-brand-400 bg-clip-text text-transparent">
              missed revenue
            </span>{" "}
            into growth in days.
          </h1>
          <p className="text-balance text-sm text-slate-300 sm:text-base">
            SmartPractice AI connects to your existing tools, surfaces hidden
            opportunities, and helps your team recover revenue you&apos;ve
            already earned—without disrupting workflows.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:brightness-110"
          >
            Launch demo dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-brand-400/80 hover:bg-brand-500/5"
          >
            <LineChart className="h-4 w-4 text-brand-300" />
            See how it pays for itself
          </button>
        </div>

        <div className="mt-6 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          <div className="glass-panel flex flex-col items-start gap-3 p-4 text-left">
            <span className="text-xs font-medium uppercase tracking-wide text-brand-300">
              Found revenue
            </span>
            <p className="text-2xl font-semibold text-slate-50">$128,400</p>
            <p className="text-xs text-slate-400">
              Simulated amount of revenue surfaced from your data across
              appointments, billing, and communication gaps.
            </p>
          </div>
          <div className="glass-panel flex flex-col items-start gap-3 p-4 text-left">
            <span className="text-xs font-medium uppercase tracking-wide text-emerald-300">
              Time to value
            </span>
            <p className="text-2xl font-semibold text-slate-50">14 days</p>
            <p className="text-xs text-slate-400">
              Connect your tools and start seeing missed revenue opportunities
              in weeks—not quarters.
            </p>
          </div>
          <div className="glass-panel flex flex-col items-start gap-3 p-4 text-left">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-300">
              Works with
            </span>
            <p className="text-sm font-medium text-slate-100">
              IDEXX · Weave · Epic · athenahealth
            </p>
            <p className="text-xs text-slate-400">
              Built to layer on top of the tools you already rely on—without
              ripping or replacing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

