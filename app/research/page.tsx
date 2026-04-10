import { research } from "@/content/data";

export const metadata = { title: "Research" };

function boldAuthor(text: string) {
  const parts = text.split(/(Wang, J\.)/g);
  return parts.map((part, i) =>
    part === "Wang, J." ? (
      <strong key={i} className="text-slate-800 font-semibold">
        Wang, J.
      </strong>
    ) : (
      part
    )
  );
}

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Research
      </h1>

      <div className="space-y-6">
        {research.map((paper, i) => (
          <div key={i} className="card rounded-xl p-6 space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-800">
                {paper.link ? (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {paper.title} ↗
                  </a>
                ) : (
                  paper.title
                )}
              </h2>
              <span className="text-sm text-slate-400 shrink-0">
                {paper.year}
              </span>
            </div>
            {paper.venue && (
              <p className="text-sm font-medium text-indigo-500/70">
                {paper.venue}
              </p>
            )}
            <p className="text-slate-500">{boldAuthor(paper.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
