import Image from "next/image";
import { certifications } from "@/content/data";

export const metadata = { title: "Certifications — Jerry Wang" };

export default function CertificationsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="section-header text-3xl font-extrabold tracking-tight text-white">
          Certifications
        </h1>
        <p className="mt-4 text-slate-400">
          Verified industry credentials and professional certifications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className={`glass-card flex flex-col rounded-2xl p-6 space-y-4 animate-fade-up delay-${i + 1}`}
          >
            {/* Vendor logo */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] p-2">
              {cert.logo ? (
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <h2 className="text-base font-bold text-white leading-snug">
                {cert.title}
              </h2>
              <p className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {cert.issuer}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-500">
              <p>Issued {cert.issued}</p>
              {cert.expires && <p>Expires {cert.expires}</p>}
              {cert.credentialId && (
                <p>
                  ID:{" "}
                  <span className="font-mono text-slate-400">
                    {cert.credentialId}
                  </span>
                </p>
              )}
            </div>

            {cert.verifyLink && (
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-indigo-400"
              >
                Verify Credential
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
