import { certifications } from "@/content/data";

export const metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Certifications
      </h1>

      <div className="space-y-6">
        {certifications.map((cert, i) => (
          <div key={i} className="card rounded-xl p-6 space-y-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  {cert.title}
                </h2>
                <p className="text-indigo-500">{cert.issuer}</p>
              </div>
              <span className="text-sm text-slate-400">
                Issued {cert.issued}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              {cert.expires && <span>Expires {cert.expires}</span>}
              {cert.credentialId && (
                <span>
                  Credential ID:{" "}
                  <span className="font-mono text-slate-600">
                    {cert.credentialId}
                  </span>
                </span>
              )}
            </div>

            {cert.verifyLink && (
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 ring-1 ring-indigo-200 transition-all hover:bg-indigo-100 hover:ring-indigo-300"
              >
                Verify Credential ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
