const materials = [
  {
    mark: "01",
    name: "Long-staple cotton",
    body:
      "120s two-fold poplin, woven in Coimbatore and washed twice before cutting so it arrives soft, not stiffened with sizing.",
  },
  {
    mark: "02",
    name: "Belgian linen",
    body:
      "A heavier 190gsm weave for the warmer half of the year, prone to the honest creasing linen is meant to hold.",
  },
  {
    mark: "03",
    name: "Corozo buttons",
    body:
      "Cut from tagua nut, not resin. Each button carries its own faint grain, so no two shirts close quite the same way.",
  },
];

export function Craft() {
  return (
    <section id="craft" className="px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-xs text-brass-500">The Materials</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl italic text-ivory md:text-4xl">
          Three components, chosen once and left alone.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {materials.map((m) => (
            <div key={m.mark} className="border-t border-brass-500/25 pt-6">
              <span className="font-display text-sm text-brass-500">{m.mark}</span>
              <h3 className="mt-3 font-display text-xl text-ivory">{m.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-sage">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
