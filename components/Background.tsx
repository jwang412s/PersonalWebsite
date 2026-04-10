"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0c0a1d]">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0a1d] via-[#131030] to-[#0e1a2b]" />

      {/* Animated aurora blobs */}
      <div className="absolute -top-[200px] left-[10%] h-[600px] w-[800px] animate-blob rounded-full bg-indigo-600/15 mix-blend-screen blur-[100px]" />
      <div className="absolute top-[20%] -right-[100px] h-[500px] w-[600px] animate-blob animation-delay-2000 rounded-full bg-purple-600/12 mix-blend-screen blur-[100px]" />
      <div className="absolute top-[50%] -left-[200px] h-[400px] w-[500px] animate-blob animation-delay-4000 rounded-full bg-blue-600/10 mix-blend-screen blur-[100px]" />
      <div className="absolute bottom-[10%] right-[20%] h-[350px] w-[450px] animate-blob animation-delay-6000 rounded-full bg-cyan-500/8 mix-blend-screen blur-[100px]" />
      <div className="absolute -bottom-[100px] left-[40%] h-[400px] w-[500px] animate-blob animation-delay-3000 rounded-full bg-violet-600/10 mix-blend-screen blur-[100px]" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(rgba(148,163,184,0.8) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
