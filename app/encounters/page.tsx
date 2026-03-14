import Link from "next/link";
import { Mic, ArrowLeft, Activity, FileText, Stethoscope } from "lucide-react";

export default function EncountersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-brand-400/70 hover:text-brand-200"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                SmartPractice AI
              </p>
              <p className="text-sm font-medium text-slate-100">
                Ambient Encounter Capture
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 pb-8 pt-4 lg:flex-row lg:px-6">
        <section className="glass-panel flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                <Mic className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Live ambient capture
                </p>
                <p className="text-[11px] text-slate-400">
                  This is a mocked UI showing how SmartPractice listens and codes.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Start capture
            </button>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Encounter transcript (mock)
                </p>
                <span className="pill-badge text-[10px]">
                  <Activity className="h-3 w-3" />
                  Streaming via medical ASR
                </span>
              </div>
              <div className="mt-1 space-y-2 text-xs leading-relaxed text-slate-200">
                <p>
                  <span className="font-semibold text-emerald-200">Doctor · </span>
                  Hi, I&apos;m Dr. Lee. I see you&apos;re here for a follow-up on your
                  Type 2 diabetes and hypertension.
                </p>
                <p>
                  <span className="font-semibold text-sky-200">Patient · </span>
                  Yes, I&apos;ve been more tired lately and my blood sugars have been
                  running high despite the metformin.
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">Doctor · </span>
                  We&apos;ll increase your metformin dose and add a GLP-1 agonist.
                  I&apos;d also like to order a comprehensive metabolic panel and
                  microalbumin test today.
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">Doctor · </span>
                  We spent about 25 minutes today, most of which was counseling on
                  diet, exercise, and medication adherence.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Detected billable events
                </p>
                <span className="pill-badge text-[10px]">
                  <FileText className="h-3 w-3" />
                  Linked to official codes
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-2.5">
                  <p className="flex items-center justify-between gap-2">
                    <span className="font-medium text-emerald-100">
                      Established patient visit, moderate complexity
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-100">
                      CPT 99214
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-100/80">
                    Time and risk inferred from counseling, chronic conditions, and
                    medication management.
                  </p>
                </div>

                <div className="rounded-lg border border-brand-500/40 bg-brand-500/5 p-2.5">
                  <p className="flex items-center justify-between gap-2">
                    <span className="font-medium text-slate-100">
                      Type 2 diabetes mellitus without complications
                    </span>
                    <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] text-brand-50">
                      ICD-10 E11.9
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300/80">
                    Detected from problem list and follow-up context.
                  </p>
                </div>

                <div className="rounded-lg border border-brand-500/40 bg-brand-500/5 p-2.5">
                  <p className="flex items-center justify-between gap-2">
                    <span className="font-medium text-slate-100">
                      Essential (primary) hypertension
                    </span>
                    <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] text-brand-50">
                      ICD-10 I10
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300/80">
                    Captured as a chronic problem contributing to visit complexity.
                  </p>
                </div>

                <div className="rounded-lg border border-sky-500/40 bg-sky-500/5 p-2.5">
                  <p className="flex items-center justify-between gap-2">
                    <span className="font-medium text-slate-100">
                      Lab orders: CMP, urine microalbumin
                    </span>
                    <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-50">
                      CPT 80053, 82043
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300/80">
                    Mapped from ordered tests; can be pushed to athenahealth orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="glass-panel flex w-full max-w-sm flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-200">
              <Stethoscope className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                How the backend works
              </p>
              <p className="text-[11px] text-slate-400">
                High-level AI + integration architecture for ambient coding.
              </p>
            </div>
          </div>

          <ol className="space-y-2.5 text-[11px] text-slate-200">
            <li>
              <span className="font-semibold text-brand-200">1. Audio capture API</span>{" "}
              — browser streams consented audio to a Node/Edge endpoint that buffers
              and forwards to medical ASR.
            </li>
            <li>
              <span className="font-semibold text-brand-200">
                2. Medical speech-to-text
              </span>{" "}
              — integrates with a HIPAA-ready ASR (e.g., AWS HealthScribe, Nuance,
              Deepgram) to get timestamped transcripts.
            </li>
            <li>
              <span className="font-semibold text-brand-200">3. NLP & coding engine</span>{" "}
              — custom service runs NER + rule/LLM prompts to detect conditions,
              procedures, counseling time, then maps to ICD-10/CPT/HCPCS with
              confidence scores.
            </li>
            <li>
              <span className="font-semibold text-brand-200">4. Encounter store</span>{" "}
              — persists encounters, utterances, detected events, and code suggestions
              in a database keyed by patient, provider, and athenahealth IDs.
            </li>
            <li>
              <span className="font-semibold text-brand-200">5. EHR integration</span>{" "}
              — on staff approval, pushes finalized codes and documentation into
              athenahealth via their Marketplace APIs.
            </li>
          </ol>
        </aside>
      </div>
    </main>
  );
}

