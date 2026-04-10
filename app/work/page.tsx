import { workHistory } from "@/content/data";

export const metadata = { title: "Work History — Jerry Wang" };

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Work History
        </h1>
        <p className="mt-4 text-slate-400">
          A timeline of my professional experience and contributions.
        </p>
      </div>

      <div className="space-y-8 ml-1">
        {workHistory.map((job, i) => (
          <div
            key={i}
            className={`timeline-item animate-fade-up delay-${i + 1}`}
          >
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {job.role}
                  </h2>
                  <p className="font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {job.company}
                  </p>
                </div>
                <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400">
                  {job.period}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">{job.description}</p>
              <ul className="space-y-2 text-sm text-slate-400">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2">
                    <svg className="h-5 w-5 shrink-0 text-indigo-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
