import React from "react";

// Step data (without images)
const steps = [
  {
    mark: "01",
    name: "Choosing the Fabric",
    body: "Premium fabrics are selected for exceptional comfort, breathability, and long-lasting elegance.",
  },
  {
    mark: "02",
    name: "Precision Cutting",
    body: "Every panel is cut with accuracy to ensure a perfect fit and minimal variation.",
  },
  {
    mark: "03",
    name: "Tailored Stitching",
    body: "Skilled craftsmen stitch each shirt with precision for durability and refined detailing.",
  },
  {
    mark: "04",
    name: "Detailing",
    body: "Collars, cuffs, plackets, and buttons are carefully finished to achieve a timeless appearance.",
  },
  {
    mark: "05",
    name: "Quality Assurance",
    body: "Every stitch, seam, and finish is inspected before the shirt moves to the next stage.",
  },
  {
    mark: "06",
    name: "Pressed & Ready",
    body: "The completed shirt is professionally pressed, folded, and packaged to preserve its premium presentation.",
  },
];

// Materials data from your original component
const materials = [
  {
    mark: "01",
    name: "Long-staple cotton",
    body: "120s two-fold poplin, woven in Coimbatore and washed twice before cutting so it arrives soft, not stiffened with sizing.",
  },
  {
    mark: "02",
    name: "Belgian linen",
    body: "A heavier 190gsm weave for the warmer half of the year, prone to the honest creasing linen is meant to hold.",
  },
  {
    mark: "03",
    name: "Corozo buttons",
    body: "Cut from tagua nut, not resin. Each button carries its own faint grain, so no two shirts close quite the same way.",
  },
];

export function Craft() {
  return (
    <section id="craft" className="px-6 py-20 md:px-16 md:py-28 bg-stone-950">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow and title */}
        <p className="text-xs tracking-widest uppercase text-amber-600 font-medium">
          The Process
        </p>
        <h2 className="mt-4 max-w-lg font-serif text-3xl italic text-stone-100 md:text-4xl">
          Six steps, each one visible.
        </h2>

        {/* Steps with animated ball markers — loop animation */}
        <div className="mt-14 space-y-10">
          {steps.map((step, index) => (
            <div
              key={step.mark}
              className="flex items-start gap-6 group"
              style={{
                animation: `fadeSlide 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Left: Animated ball marker with number */}
              <div className="flex flex-col items-center min-w-[64px]">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-serif font-semibold text-lg text-stone-900 shadow-lg relative
                             bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600
                             before:absolute before:inset-0 before:rounded-full before:border-2 before:border-amber-400/40
                             after:absolute after:inset-[-4px] after:rounded-full after:border after:border-amber-500/20
                             animate-pulse-soft"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "2.8s",
                  }}
                >
                  <span className="relative z-10 drop-shadow-sm">{step.mark}</span>
                </div>
                {/* Connector line with pulse animation */}
                {index < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 min-h-6 bg-gradient-to-b from-amber-500/60 to-transparent relative
                               after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-amber-400/40
                               animate-line-pulse"
                    style={{ animationDelay: `${index * 0.25}s` }}
                  />
                )}
              </div>

              {/* Right: Text content with staggered animation */}
              <div
                className="flex-1 min-w-[200px] space-y-2 pt-1
                           transition-all duration-500 ease-out
                           group-hover:translate-x-2"
              >
                <h3
                  className="font-serif text-xl text-stone-100 transition-colors duration-300
                             group-hover:text-amber-400"
                >
                  {step.name}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400 max-w-lg">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Materials section with animation */}
        <div
          className="mt-20 pt-12 border-t border-amber-800/30"
          style={{
            animation: "fadeSlide 0.8s ease-out 0.9s both",
          }}
        >
          <p className="text-xs tracking-widest uppercase text-amber-600 font-medium">
            The Materials
          </p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl italic text-stone-100 md:text-4xl">
            Three components, chosen once and left alone.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {materials.map((m, index) => (
              <div
                key={m.mark}
                className="border-t border-amber-800/30 pt-6 transition-all duration-500 hover:border-amber-600/40
                           hover:translate-y-[-4px]"
                style={{
                  animation: `fadeSlide 0.6s ease-out ${1.0 + index * 0.15}s both`,
                }}
              >
                <span className="font-serif text-sm text-amber-600">{m.mark}</span>
                <h3 className="mt-3 font-serif text-xl text-stone-100 transition-colors duration-300 hover:text-amber-400">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.3), 0 8px 24px rgba(0,0,0,0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(251, 191, 36, 0), 0 8px 32px rgba(0,0,0,0.6);
            transform: scale(1.02);
          }
        }

        @keyframes line-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.08);
          }
        }

        /* Custom utility classes for animations */
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        .animate-line-pulse {
          animation: line-pulse 2.8s ease-in-out infinite;
        }

        /* Hover glow effect on balls */
        .group:hover .animate-pulse-soft {
          animation-duration: 1.8s;
        }
      `}</style>
    </section>
  );
}

export default Craft;