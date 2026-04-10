import { workHistory } from "@/content/data";

export const metadata = { title: "Work History" };

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Work History
      </h1>

      <div className="space-y-6">
        {workHistory.map((job, i) => (
          <div key={i} className="card rounded-xl p-6 space-y-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">{job.role}</h2>
                <p className="text-indigo-500">{job.company}</p>
              </div>
              <span className="text-sm text-slate-400">{job.period}</span>
            </div>
            <p className="text-slate-500">{job.description}</p>
            <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1">
              {job.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
