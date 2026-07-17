"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const testimonials = [
  {
    quote:
      "Four years in and the top button still sits flush. It's the only shirt I've bought where the collar hasn't given up first.",
    name: "R. Iyer",
    role: "Wearer since 2022",
    location: "Basavanagudi, Bangalore",
  },
  {
    quote:
      "The linen one softens with every wash rather than wearing thin. I stopped ironing it after the second month.",
    name: "A. Fernandes",
    role: "Wearer since 2023",
    location: "Frazer Town, Bangalore",
  },
  {
    quote:
      "Ordered the wrong size once and the exchange note back was handwritten. Small thing, but it's why I keep ordering.",
    name: "S. Karthik",
    role: "Wearer since 2021",
    location: "Indiranagar, Bangalore",
  },
  {
    quote:
      "I've never owned a shirt that travels as well as this. Unpack, hang, wear—no wrinkles, no fuss.",
    name: "M. Reddy",
    role: "Wearer since 2023",
    location: "Koramangala, Bangalore",
  },
  {
    quote:
      "The cuff buttons are shell, not plastic. That level of detail makes you notice things you never did before.",
    name: "P. Nair",
    role: "Wearer since 2022",
    location: "Jayanagar, Bangalore",
  },
  {
    quote:
      "My father wore bespoke shirts his entire life. This is the first modern shirt he actually complimented.",
    name: "V. Srinivasan",
    role: "Wearer since 2024",
    location: "Malleswaram, Bangalore",
  },
  {
    quote:
      "I wash it cold, hang it dry, and it looks better than anything I've ever sent to the dry cleaner.",
    name: "D. Menon",
    role: "Wearer since 2021",
    location: "Whitefield, Bangalore",
  },
  {
    quote:
      "The collar stays are metal, not plastic. Small thing. But once you know, you can't go back.",
    name: "K. Rao",
    role: "Wearer since 2023",
    location: "Sadashivanagar, Bangalore",
  },
  {
    quote:
      "Three summers in Bangalore and the fabric hasn't yellowed. I don't know how they do it.",
    name: "L. Venkatesh",
    role: "Wearer since 2022",
    location: "Rajajinagar, Bangalore",
  },
  {
    quote:
      "I bought one for myself and one for my brother. He's worn it to every family gathering since.",
    name: "S. Bhat",
    role: "Wearer since 2023",
    location: "Vijayanagar, Bangalore",
  },
  {
    quote:
      "The fit is impeccable. I'm 5'8\" and nothing ever fits off the rack. This did. First time.",
    name: "R. Krishnan",
    role: "Wearer since 2024",
    location: "Electronic City, Bangalore",
  },
  {
    quote:
      "I've worn it to board meetings and to the market. It does both without pretending to be something else.",
    name: "A. Shah",
    role: "Wearer since 2021",
    location: "Richmond Town, Bangalore",
  },
  {
    quote:
      "The packaging alone was a statement. Cloth bag, tissue paper, a note. It felt like receiving a gift.",
    name: "N. Desai",
    role: "Wearer since 2023",
    location: "JP Nagar, Bangalore",
  },
  {
    quote:
      "I've washed mine over forty times now. The stitching is still perfect. Not a single loose thread.",
    name: "J. Mathew",
    role: "Wearer since 2022",
    location: "HSR Layout, Bangalore",
  },
  {
    quote:
      "The colour is deeper than the photos suggest. It's a muted green that works with everything I own.",
    name: "T. Sharma",
    role: "Wearer since 2024",
    location: "MG Road, Bangalore",
  },
  {
    quote:
      "I rarely write reviews. But I've worn this shirt to two weddings, three interviews, and a funeral. It held dignity in all of them.",
    name: "G. Patil",
    role: "Wearer since 2021",
    location: "Banashankari, Bangalore",
  },
  {
    quote:
      "The drape is different from any cotton shirt I own. It doesn't sag, it settles. There's a difference.",
    name: "S. Banerjee",
    role: "Wearer since 2023",
    location: "Ulsoor, Bangalore",
  },
  {
    quote:
      "I bought the linen version for the humid Bangalore weather. It breathes in ways synthetic blends never could.",
    name: "M. George",
    role: "Wearer since 2022",
    location: "Brigade Road, Bangalore",
  },
  {
    quote:
      "The sleeves are cut longer than most modern shirts. I can actually move without the cuffs riding up.",
    name: "H. Singh",
    role: "Wearer since 2024",
    location: "Kammanahalli, Bangalore",
  },
  {
    quote:
      "I've been wearing the same three Greengrand shirts on rotation for two years. They still look new. That's not normal.",
    name: "P. Rajan",
    role: "Wearer since 2022",
    location: "Bannerghatta Road, Bangalore",
  },
];

// Split testimonials into two rows for the marquee
const firstRow = testimonials.slice(0, 10);
const secondRow = testimonials.slice(10, 20);

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-forest-950/20 px-6 py-20 md:px-16 md:py-28">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.025] mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise-testimonials">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-testimonials)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.15, 1] }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass-500/70">
              The Wearers
            </p>
            <h2 className={`${playfair.className} mt-3 max-w-lg text-balance text-3xl italic text-ivory md:text-4xl`}>
              Notes from Bangalore.
            </h2>
            <p className={`${inter.className} mt-2 text-sm font-light text-sage/60`}>
              20 wearers, 20 unedited reflections
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brass-500/40">
              <span className="inline-block h-1 w-1 rounded-full bg-brass-500/30" />
              <span>Edition 001</span>
              <span className="inline-block h-1 w-1 rounded-full bg-brass-500/30" />
            </div>
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div className="mt-8 space-y-6 overflow-hidden">
          {/* Row 1 */}
          <MarqueeRow testimonials={firstRow} direction="left" speed={0.9} />
          {/* Row 2 */}
          <MarqueeRow testimonials={secondRow} direction="right" speed={0.7} />
        </div>
      </div>
    </section>
  );
}

interface MarqueeRowProps {
  testimonials: typeof testimonials;
  direction: "left" | "right";
  speed?: number;
}

function MarqueeRow({ testimonials, direction, speed = 0.8 }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless looping
  const duplicatedItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brass-500/8 bg-gradient-to-r from-forest-950/60 via-forest-950/40 to-forest-950/60 backdrop-blur-sm">
      <motion.div
        ref={rowRef}
        className="flex gap-6 py-5 md:py-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 40 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="min-w-[320px] max-w-[400px] flex-shrink-0 px-1 md:min-w-[380px]"
          >
            <div className="flex h-full flex-col">
              <blockquote
                className={`${playfair.className} text-[15px] italic leading-relaxed text-ivory/90 md:text-[16px]`}
              >
                “{item.quote}”
              </blockquote>
              <div className="mt-4 flex items-center justify-between border-t border-brass-500/8 pt-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass-500/10 text-[10px] font-medium text-brass-400">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className={`${inter.className} text-[11px] font-medium uppercase tracking-wide text-ivory`}>
                      {item.name}
                    </p>
                    <p className={`${inter.className} text-[10px] font-light text-sage/50`}>
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`${inter.className} text-[9px] uppercase tracking-wider text-brass-500/40`}>
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Gradient Fades for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-forest-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-forest-950/80 to-transparent" />
    </div>
  );
}