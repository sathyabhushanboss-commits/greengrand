export function StitchDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 px-6 md:px-16">
      <svg width="100%" height="2" className="flex-1 overflow-visible">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#C9A24B"
          strokeOpacity="0.4"
          strokeWidth="1"
          className="stitch-spine"
        />
      </svg>
      {label && (
        <span className="eyebrow shrink-0 text-[11px] uppercase text-brass-500">
          {label}
        </span>
      )}
    </div>
  );
}
