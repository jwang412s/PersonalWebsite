import { research } from "@/content/data";

export const metadata = { title: "Research — Jerry Wang" };

function boldAuthor(text: string) {
  const parts = text.split(/(Wang, J\.)/g);
  return parts.map((part, i) =>
    part === "Wang, J." ? (
      <strong key={i} className="text-white font-semibold">
        Wang, J.
      </strong>
    ) : (
      part
    )
  );
}

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Research
        </h1>
        <p className="mt-4 text-slate-400">
          Published papers and ongoing research projects.
        </p>
      </div>

      <div className="space-y-6">
        {research.map((paper, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-6 space-y-3 animate-fade-up delay-${i + 1}`}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-lg font-bold text-white leading-snug">
                {paper.link ? (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-colors inline-flex items-baseline gap-1.5"
                  >
                    {paper.title}
                    <svg className="h-3.5 w-3.5 shrink-0 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : (
                  paper.title
                )}
              </h2>
              <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-medium text-slate-400 shrink-0">
                {paper.year}
              </span>
            </div>
            {paper.venue && (
              <p className="text-sm font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {paper.venue}
              </p>
            )}
            <p className="text-sm text-slate-400 leading-relaxed">
              {boldAuthor(paper.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
