export function ShirtMark({
  className = "",
  tone = "ivory",
}: {
  className?: string;
  tone?: "ivory" | "brass" | "sage";
}) {
  const stroke =
    tone === "ivory" ? "#F3EFE6" : tone === "brass" ? "#D9B569" : "#8FA795";
  return (
    <svg
      viewBox="0 0 400 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* collar */}
      <path
        d="M140 40 L200 90 L260 40"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* shoulders + sleeves */}
      <path
        d="M140 40 L60 95 L40 190 L85 205 L108 130 L108 420 L292 420 L292 130 L315 205 L360 190 L340 95 L260 40"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* placket */}
      <path d="M200 90 L200 420" stroke={stroke} strokeWidth="1" strokeDasharray="2 6" />
      {/* buttons */}
      {[130, 190, 250, 310, 370].map((y) => (
        <circle key={y} cx="200" cy={y} r="2.4" fill={stroke} />
      ))}
      {/* chest pocket */}
      <path
        d="M225 150 L265 150 L265 190 L225 190 Z"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* basting stitch running along the hem — the signature thread */}
      <path
        d="M108 420 L292 420"
        stroke={stroke}
        strokeWidth="1.4"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
    </svg>
  );
}
