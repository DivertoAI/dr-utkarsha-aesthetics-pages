type Category = "Dental" | "Hair" | "Skin" | "Body";

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="visual-frame" aria-hidden>
    <svg viewBox="0 0 120 120" className="visual-bg">
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff5b6" />
          <stop offset="100%" stopColor="#d9f3cc" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="112" height="112" rx="28" fill="url(#vg)" />
    </svg>
    {children}
  </div>
);

export function JourneyVisual({ index }: { index: number }) {
  const visuals = [
    <svg key="consult" viewBox="0 0 120 120" className="visual-icon">
      <circle cx="60" cy="42" r="18" fill="#7dbc72" />
      <rect x="24" y="66" width="72" height="28" rx="14" fill="#f5d96b" />
      <circle cx="42" cy="42" r="4" fill="#fff" />
      <circle cx="78" cy="42" r="4" fill="#fff" />
      <path d="M48 96 L38 108 L56 103" stroke="#6ea664" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>,
    <svg key="assessment" viewBox="0 0 120 120" className="visual-icon">
      <path
        d="M60 18c14 0 23 9 23 21 0 13-8 20-8 32 0 8-5 13-15 13s-15-5-15-13c0-12-8-19-8-32 0-12 9-21 23-21z"
        fill="#8ccf7a"
      />
      <circle cx="83" cy="83" r="16" fill="#fff3bf" stroke="#7cae71" strokeWidth="4" />
      <path d="M94 94 L106 106" stroke="#7cae71" strokeWidth="5" strokeLinecap="round" />
    </svg>,
    <svg key="plan" viewBox="0 0 120 120" className="visual-icon">
      <rect x="28" y="20" width="64" height="82" rx="10" fill="#ffffff" stroke="#7fb574" strokeWidth="4" />
      <rect x="42" y="14" width="36" height="14" rx="6" fill="#f6d76d" />
      <path d="M38 47 H82 M38 62 H82 M38 77 H82" stroke="#7fb574" strokeWidth="4" />
      <path d="M34 46 L28 52 L22 46 M34 61 L28 67 L22 61 M34 76 L28 82 L22 76" stroke="#f2c14b" strokeWidth="4" fill="none" />
    </svg>,
    <svg key="follow" viewBox="0 0 120 120" className="visual-icon">
      <path d="M60 18 L94 32 V54C94 76 79 94 60 102C41 94 26 76 26 54V32L60 18Z" fill="#82bf72" />
      <path d="M34 59 H48 L56 48 L66 68 L74 59 H86" stroke="#fff7d0" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  ];

  return <Frame>{visuals[index] ?? visuals[0]}</Frame>;
}

export function CategoryVisual({ category }: { category: Category }) {
  const iconByCategory: Record<Category, React.ReactNode> = {
    Dental: (
      <svg viewBox="0 0 120 120" className="visual-icon">
        <path
          d="M60 14c16 0 28 9 28 23 0 17-11 24-11 39 0 8-4 17-10 17s-10-7-10-15c0-8-3-9-7-9s-7 1-7 9c0 8-4 15-10 15s-10-9-10-17c0-15-11-22-11-39 0-14 12-23 28-23 7 0 11 4 17 4s10-4 17-4z"
          fill="#85c576"
        />
      </svg>
    ),
    Hair: (
      <svg viewBox="0 0 120 120" className="visual-icon">
        <path d="M60 20c17 0 30 13 30 30v24H30V50c0-17 13-30 30-30z" fill="#7eb36f" />
        <path d="M34 60c8-8 14-12 26-12s18 4 26 12" stroke="#fff4bd" strokeWidth="4" fill="none" />
        <path d="M60 28v62" stroke="#4f7d49" strokeWidth="5" />
      </svg>
    ),
    Skin: (
      <svg viewBox="0 0 120 120" className="visual-icon">
        <circle cx="60" cy="60" r="30" fill="#87c879" />
        <path d="M60 26 L65 44 L84 44 L68 56 L74 74 L60 64 L46 74 L52 56 L36 44 L55 44 Z" fill="#fff4bf" />
      </svg>
    ),
    Body: (
      <svg viewBox="0 0 120 120" className="visual-icon">
        <circle cx="60" cy="28" r="10" fill="#87c578" />
        <path d="M60 40 C72 40 79 51 78 62 C76 80 70 94 60 102 C50 94 44 80 42 62 C41 51 48 40 60 40 Z" fill="#7db96f" />
        <path d="M48 63 Q60 72 72 63" stroke="#fff7c8" strokeWidth="4" fill="none" />
      </svg>
    )
  };

  return <Frame>{iconByCategory[category]}</Frame>;
}

export function SectionLeadVisual({ type }: { type: "patients" | "business" }) {
  if (type === "patients") {
    return (
      <div className="lead-visual" aria-hidden>
        <svg viewBox="0 0 160 120" className="lead-visual-svg">
          <rect x="22" y="10" width="72" height="102" rx="14" fill="#202f1d" />
          <rect x="30" y="20" width="56" height="80" rx="8" fill="#eef8dc" />
          <path d="M118 34c12 0 20 8 20 18 0 10-8 18-20 18h-6l-10 8v-8c-8-2-14-9-14-18 0-10 8-18 20-18z" fill="#84c675" />
          <path d="M103 52h24" stroke="#fff4bf" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="lead-visual" aria-hidden>
      <svg viewBox="0 0 160 120" className="lead-visual-svg">
        <rect x="18" y="26" width="42" height="76" rx="8" fill="#e9f5db" stroke="#82be73" strokeWidth="3" />
        <rect x="66" y="12" width="36" height="90" rx="8" fill="#dff0ce" stroke="#82be73" strokeWidth="3" />
        <rect x="108" y="34" width="34" height="68" rx="8" fill="#f4f8e8" stroke="#82be73" strokeWidth="3" />
        <path d="M46 70 C62 56 80 56 96 70" stroke="#f4c95e" strokeWidth="5" fill="none" />
        <path d="M96 70 C108 80 118 80 128 70" stroke="#f4c95e" strokeWidth="5" fill="none" />
      </svg>
    </div>
  );
}
