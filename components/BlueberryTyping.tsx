"use client";

export default function BlueberryTyping() {
  return (
    <svg
      viewBox="10 60 300 210"
      className="w-full max-w-[250px] drop-shadow-2xl"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Keyboard */}
      <rect x="60" y="210" width="180" height="50" rx="8" fill="#1e1b4b" stroke="#312e81" strokeWidth="1.5" />
      {/* Key rows */}
      {/* Row 1 */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={`r1-${i}`} x={75 + i * 20} y={218} width={14} height={10} rx={2} fill="#3730a3" opacity={0.7}>
          <animate attributeName="fill" values="#3730a3;#6366f1;#3730a3" dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
        </rect>
      ))}
      {/* Row 2 */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={`r2-${i}`} x={75 + i * 20} y={232} width={14} height={10} rx={2} fill="#3730a3" opacity={0.7}>
          <animate attributeName="fill" values="#3730a3;#818cf8;#3730a3" dur={`${0.9 + i * 0.12}s`} repeatCount="indefinite" />
        </rect>
      ))}
      {/* Space bar */}
      <rect x="105" y="246" width="90" height="8" rx="3" fill="#3730a3" opacity={0.6} />

      {/* Screen glow on face */}
      <ellipse cx="150" cy="200" rx="80" ry="30" fill="url(#screenGlow)" opacity="0.3" />

      {/* Body - round blueberry */}
      <ellipse cx="150" cy="140" rx="60" ry="55" fill="url(#berryGrad)">
        <animate attributeName="cy" values="140;137;140" dur="2s" repeatCount="indefinite" />
      </ellipse>

      {/* Berry shine */}
      <ellipse cx="130" cy="110" rx="18" ry="12" fill="white" opacity="0.12" transform="rotate(-20 130 110)" />

      {/* Berry top leaves/crown */}
      <g>
        <animate attributeName="opacity" values="1" dur="2s" repeatCount="indefinite" />
        <ellipse cx="140" cy="88" rx="8" ry="14" fill="#4ade80" transform="rotate(-15 140 88)">
          <animate attributeName="transform" type="rotate" values="-15 140 88;-10 140 88;-15 140 88" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="150" cy="85" rx="6" ry="15" fill="#22c55e" transform="rotate(0 150 85)" />
        <ellipse cx="160" cy="88" rx="8" ry="14" fill="#4ade80" transform="rotate(15 160 88)">
          <animate attributeName="transform" type="rotate" values="15 160 88;10 160 88;15 160 88" dur="3s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Face */}
      {/* Sunglasses */}
      <g>
        {/* Bridge */}
        <path d="M140 130 Q150 126 160 130" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Left lens */}
        <rect x="118" y="124" width="24" height="16" rx="4" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Left lens shine */}
        <rect x="121" y="127" width="8" height="3" rx="1.5" fill="white" opacity="0.15" />
        {/* Right lens */}
        <rect x="158" y="124" width="24" height="16" rx="4" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Right lens shine */}
        <rect x="161" y="127" width="8" height="3" rx="1.5" fill="white" opacity="0.15" />
        {/* Left arm of glasses */}
        <path d="M118 130 L108 128" stroke="#222" strokeWidth="2" strokeLinecap="round" />
        {/* Right arm of glasses */}
        <path d="M182 130 L192 128" stroke="#222" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Cute smile */}
      <path d="M140 150 Q150 160 160 150" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Blush cheeks */}
      <ellipse cx="125" cy="148" rx="8" ry="5" fill="#f472b6" opacity="0.25" />
      <ellipse cx="175" cy="148" rx="8" ry="5" fill="#f472b6" opacity="0.25" />

      {/* Left arm - typing */}
      <g>
        <animate attributeName="opacity" values="1" dur="0.3s" repeatCount="indefinite" />
        <path d="M100 165 Q85 190 95 210" stroke="url(#berryGrad)" strokeWidth="10" fill="none" strokeLinecap="round">
          <animate attributeName="d" values="M100 165 Q85 190 95 210;M100 165 Q80 188 100 208;M100 165 Q85 190 95 210" dur="0.4s" repeatCount="indefinite" />
        </path>
        {/* Left hand */}
        <circle cx="95" cy="212" r="6" fill="url(#berryGrad)">
          <animate attributeName="cx" values="95;100;95" dur="0.4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="212;210;212" dur="0.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Right arm - typing */}
      <g>
        <path d="M200 165 Q215 190 205 210" stroke="url(#berryGrad)" strokeWidth="10" fill="none" strokeLinecap="round">
          <animate attributeName="d" values="M200 165 Q215 190 205 210;M200 165 Q220 188 200 208;M200 165 Q215 190 205 210" dur="0.35s" repeatCount="indefinite" begin="0.15s" />
        </path>
        {/* Right hand */}
        <circle cx="205" cy="212" r="6" fill="url(#berryGrad)">
          <animate attributeName="cx" values="205;200;205" dur="0.35s" repeatCount="indefinite" begin="0.15s" />
          <animate attributeName="cy" values="212;210;212" dur="0.35s" repeatCount="indefinite" begin="0.15s" />
        </circle>
      </g>

      {/* ── Falling code symbols ── */}
      {/* Left side falling */}
      <text x="30" y="-10" fill="#818cf8" fontSize="13" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" />
        &lt;/&gt;
      </text>
      <text x="55" y="-10" fill="#a78bfa" fontSize="11" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="5s" repeatCount="indefinite" begin="1.2s" />
        <animate attributeName="opacity" values="0;0.5;0.5;0" dur="5s" repeatCount="indefinite" begin="1.2s" />
        func()
      </text>
      <text x="15" y="-10" fill="#6366f1" fontSize="10" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="4.5s" repeatCount="indefinite" begin="2.5s" />
        <animate attributeName="opacity" values="0;0.4;0.4;0" dur="4.5s" repeatCount="indefinite" begin="2.5s" />
        0x3F
      </text>

      {/* Right side falling */}
      <text x="255" y="-10" fill="#818cf8" fontSize="12" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="3.8s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3.8s" repeatCount="indefinite" begin="0.5s" />
        {"{"}&#125;
      </text>
      <text x="270" y="-10" fill="#a78bfa" fontSize="11" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="4.2s" repeatCount="indefinite" begin="1.8s" />
        <animate attributeName="opacity" values="0;0.45;0.45;0" dur="4.2s" repeatCount="indefinite" begin="1.8s" />
        //
      </text>
      <text x="245" y="-10" fill="#c4b5fd" fontSize="10" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="5.2s" repeatCount="indefinite" begin="3s" />
        <animate attributeName="opacity" values="0;0.4;0.4;0" dur="5.2s" repeatCount="indefinite" begin="3s" />
        sudo
      </text>
      <text x="280" y="-10" fill="#6366f1" fontSize="9" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;290" dur="3.5s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="opacity" values="0;0.35;0.35;0" dur="3.5s" repeatCount="indefinite" begin="0.8s" />
        #!
      </text>

      {/* Center falling */}
      <text x="140" y="-10" fill="#818cf8" fontSize="10" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;70" dur="3s" repeatCount="indefinite" begin="2s" />
        <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3s" repeatCount="indefinite" begin="2s" />
        ==
      </text>
      <text x="170" y="-10" fill="#a78bfa" fontSize="9" fontFamily="monospace" opacity="0">
        <animate attributeName="y" values="-10;65" dur="3.6s" repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="opacity" values="0;0.35;0.35;0" dur="3.6s" repeatCount="indefinite" begin="0.3s" />
        *.py
      </text>

      {/* ── Horizontal code lines (typing out from keyboard) ── */}
      {/* Line 1 - shoots left */}
      <rect x="60" y="195" width="0" height="2" rx="1" fill="#818cf8" opacity="0">
        <animate attributeName="width" values="0;50;50;0" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="x" values="60;10;10;10" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.4;0.4;0" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Line 2 - shoots left, shorter */}
      <rect x="55" y="200" width="0" height="2" rx="1" fill="#a78bfa" opacity="0">
        <animate attributeName="width" values="0;35;35;0" dur="2s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="x" values="55;20;20;20" dur="2s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="2s" repeatCount="indefinite" begin="0.8s" />
      </rect>
      {/* Line 3 - shoots right */}
      <rect x="240" y="195" width="0" height="2" rx="1" fill="#818cf8" opacity="0">
        <animate attributeName="width" values="0;55;55;0" dur="2.2s" repeatCount="indefinite" begin="0.4s" />
        <animate attributeName="opacity" values="0;0.4;0.4;0" dur="2.2s" repeatCount="indefinite" begin="0.4s" />
      </rect>
      {/* Line 4 - shoots right, shorter */}
      <rect x="245" y="200" width="0" height="2" rx="1" fill="#c4b5fd" opacity="0">
        <animate attributeName="width" values="0;40;40;0" dur="1.8s" repeatCount="indefinite" begin="1.3s" />
        <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1.8s" repeatCount="indefinite" begin="1.3s" />
      </rect>
      {/* Line 5 - shoots left, long */}
      <rect x="50" y="190" width="0" height="1.5" rx="1" fill="#6366f1" opacity="0">
        <animate attributeName="width" values="0;45;45;0" dur="3s" repeatCount="indefinite" begin="1.8s" />
        <animate attributeName="x" values="50;5;5;5" dur="3s" repeatCount="indefinite" begin="1.8s" />
        <animate attributeName="opacity" values="0;0.35;0.35;0" dur="3s" repeatCount="indefinite" begin="1.8s" />
      </rect>
      {/* Line 6 - shoots right, long */}
      <rect x="250" y="190" width="0" height="1.5" rx="1" fill="#6366f1" opacity="0">
        <animate attributeName="width" values="0;60;60;0" dur="2.8s" repeatCount="indefinite" begin="2.2s" />
        <animate attributeName="opacity" values="0;0.35;0.35;0" dur="2.8s" repeatCount="indefinite" begin="2.2s" />
      </rect>

      {/* Gradients */}
      <defs>
        <radialGradient id="berryGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#7c6cc4" />
          <stop offset="50%" stopColor="#5b4a9e" />
          <stop offset="100%" stopColor="#3b2d7a" />
        </radialGradient>
        <radialGradient id="screenGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}
