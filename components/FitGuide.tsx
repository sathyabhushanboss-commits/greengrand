"use client";

import { motion, type Variants } from "framer-motion";
import { Playfair_Display, Inter, Cormorant_Garamond, Cinzel } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const rows = [
  { size: "S", chest: "38–40", length: "28.5", sleeve: "24.5" },
  { size: "M", chest: "40–42", length: "29.5", sleeve: "25" },
  { size: "L", chest: "42–44", length: "30.5", sleeve: "25.5" },
  { size: "XL", chest: "44–46", length: "31.5", sleeve: "26" },
  { size: "XXL", chest: "46–48", length: "32.5", sleeve: "26.5" },
  { size: "XXXL", chest: "48–50", length: "33.5", sleeve: "27" },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const tableRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function FitGuide() {
  return (
    <section id="fit" className="relative overflow-hidden px-6 py-20 md:px-16 md:py-28">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02] mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise-fit">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-fit)" />
        </svg>
      </div>

      {/* Gold Accent Glow */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brass-500/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brass-500/5 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Left Column */}
        <motion.div variants={itemVariants}>
          {/* Gold Accent Line */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-brass-400/50" />
            <p className={`${cinzel.className} text-[9px] uppercase tracking-[0.4em] text-brass-400/70`}>
              Fit Guide
            </p>
          </div>

          <motion.h2
            variants={itemVariants}
            className={`${playfair.className} mt-4 text-balance text-3xl italic text-ivory md:text-4xl`}
          >
            Cut for a shirt worn untucked, tucked, and layered under wool.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`${cormorant.className} mt-5 max-w-md text-[15px] font-light leading-relaxed text-sage/80`}
          >
            The block is unchanged since our first run: a slightly dropped
            shoulder, a straight body, and a hem long enough to stay put.
            Measurements below are body measurements in inches — chest is
            taken at the fullest point.
          </motion.p>

          {/* Size Range Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => (
                <div
                  key={size}
                  className={`h-1 w-4 rounded-full ${
                    index < 6
                      ? "bg-brass-400/60"
                      : "bg-brass-400/20"
                  }`}
                />
              ))}
            </div>
            <span className={`${cinzel.className} text-[8px] uppercase tracking-[0.2em] text-sage/40`}>
              S–XXXL
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column - Table */}
        <motion.div variants={itemVariants} className="overflow-x-auto">
          {/* Table Container with Gold Border */}
          <div className="overflow-hidden rounded-xl border border-brass-500/10 bg-forest-900/50 backdrop-blur-sm">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-brass-500/20 bg-brass-500/5">
                  <th
                    className={`${cinzel.className} py-4 pl-6 pr-4 text-[10px] font-medium uppercase tracking-[0.3em] text-brass-400/70`}
                  >
                    Size
                  </th>
                  <th
                    className={`${cinzel.className} py-4 pr-4 text-[10px] font-medium uppercase tracking-[0.3em] text-brass-400/70`}
                  >
                    Chest (in)
                  </th>
                  <th
                    className={`${cinzel.className} py-4 pr-4 text-[10px] font-medium uppercase tracking-[0.3em] text-brass-400/70`}
                  >
                    Length (in)
                  </th>
                  <th
                    className={`${cinzel.className} py-4 pr-6 text-[10px] font-medium uppercase tracking-[0.3em] text-brass-400/70`}
                  >
                    Sleeve (in)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, index) => (
                  <motion.tr
                    key={r.size}
                    variants={tableRowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`border-b border-brass-500/5 transition-colors hover:bg-brass-500/5 ${
                      r.size === "XXL" || r.size === "XXXL"
                        ? "bg-brass-500/5"
                        : ""
                    }`}
                  >
                    <td className="py-4 pl-6 pr-4">
                      <span
                        className={`${playfair.className} text-base font-medium ${
                          r.size === "XXL" || r.size === "XXXL"
                            ? "text-brass-400"
                            : "text-ivory"
                        }`}
                      >
                        {r.size}
                        {(r.size === "XXL" || r.size === "XXXL") && (
                          <span className="ml-2 text-[8px] uppercase tracking-wider text-brass-400/50">
                            NEW
                          </span>
                        )}
                      </span>
                    </td>
                    <td className={`${inter.className} py-4 pr-4 text-ivory/80`}>
                      {r.chest}
                    </td>
                    <td className={`${inter.className} py-4 pr-4 text-ivory/80`}>
                      {r.length}
                    </td>
                    <td className={`${inter.className} py-4 pr-6 text-ivory/80`}>
                      {r.sleeve}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}