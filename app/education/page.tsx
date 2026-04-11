import { education } from "@/content/data";

export const metadata = { title: "Education — Jerry Wang" };

export default function EducationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Education
        </h1>
        <p className="mt-4 text-slate-400">
          Academic background and achievements.
        </p>
      </div>

      <div className="space-y-8 ml-1">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`timeline-item animate-fade-up delay-${i + 1}`}
          >
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h2>
                  <p className="font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {edu.school}
                  </p>
                </div>
                <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400">
                  {edu.period}
                </span>
              </div>
              {edu.awards && edu.awards.length > 0 && (
                <ul className="space-y-2 text-sm text-slate-400">
                  {edu.awards.map((award, j) => (
                    <li key={j} className="flex gap-2">
                      <svg className="h-5 w-5 shrink-0 text-yellow-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 11h-.5A3.375 3.375 0 009 14.25v4.5m3.75-9V3.75m0 0h3.375a1.125 1.125 0 010 2.25H12.75m0-2.25H9.375a1.125 1.125 0 000 2.25H12.75" />
                      </svg>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
