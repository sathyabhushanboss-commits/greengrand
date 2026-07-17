"use client";

import { ShirtMark } from "./ShirtMark";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// 30 Premium Shirts Collection
const products = [
  // Oxford Collection (1-5)
  {
    id: 1,
    name: "The Forest Oxford",
    fabric: "120s cotton, deep forest",
    category: "Oxford",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "Classic Oxford weave in a deep forest hue. Perfect for all seasons.",
  },
  {
    id: 2,
    name: "The Ivory Oxford",
    fabric: "120s cotton, natural ivory",
    category: "Oxford",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Crisp ivory Oxford that pairs with everything in your wardrobe.",
  },
  {
    id: 3,
    name: "The Slate Oxford",
    fabric: "120s cotton, charcoal slate",
    category: "Oxford",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Dark charcoal Oxford for a refined, understated look.",
  },
  {
    id: 4,
    name: "The Navy Oxford",
    fabric: "120s cotton, deep navy",
    category: "Oxford",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Navy Oxford that transitions from work to evening seamlessly.",
  },
  {
    id: 5,
    name: "The Sage Oxford",
    fabric: "120s cotton, muted sage",
    category: "Oxford",
    card: "bg-forest-800",
    tone: "brass" as const,
    description: "A subtle sage that brings a quiet confidence to any setting.",
  },

  // Linen Collection (6-10)
  {
    id: 6,
    name: "Moss Linen",
    fabric: "190gsm Belgian linen",
    category: "Linen",
    card: "bg-forest-700",
    tone: "sage" as const,
    description: "Breathable Belgian linen in a rich moss tone.",
  },
  {
    id: 7,
    name: "Sand Linen",
    fabric: "190gsm Belgian linen",
    category: "Linen",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "Warm sand linen that softens beautifully with every wash.",
  },
  {
    id: 8,
    name: "Indigo Linen",
    fabric: "190gsm Belgian linen",
    category: "Linen",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Deep indigo linen with a subtle, lived-in character.",
  },
  {
    id: 9,
    name: "Natural Linen",
    fabric: "190gsm Belgian linen",
    category: "Linen",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Pure, unbleached linen in its most honest form.",
  },
  {
    id: 10,
    name: "Charcoal Linen",
    fabric: "190gsm Belgian linen",
    category: "Linen",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Charcoal linen that drapes like no other.",
  },

  // Stripe Collection (11-15)
  {
    id: 11,
    name: "Bengal Stripe",
    fabric: "Cotton, forest on ivory",
    category: "Stripe",
    card: "bg-forest-800",
    tone: "brass" as const,
    description: "Classic Bengal stripe in forest on ivory.",
  },
  {
    id: 12,
    name: "Navy Bengal Stripe",
    fabric: "Cotton, navy on cream",
    category: "Stripe",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Timeless navy Bengal stripe on a cream base.",
  },
  {
    id: 13,
    name: "Sage Bengal Stripe",
    fabric: "Cotton, sage on ivory",
    category: "Stripe",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Subtle sage stripe for a quiet, confident statement.",
  },
  {
    id: 14,
    name: "Charcoal Bengal Stripe",
    fabric: "Cotton, charcoal on cream",
    category: "Stripe",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Dark charcoal stripe that works in any setting.",
  },
  {
    id: 15,
    name: "Crimson Bengal Stripe",
    fabric: "Cotton, crimson on ivory",
    category: "Stripe",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "A bold crimson stripe for the adventurous dresser.",
  },

  // Camp Collar Collection (16-20)
  {
    id: 16,
    name: "Signature Camp Collar",
    fabric: "Cotton poplin, open weave",
    category: "Camp Collar",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Relaxed camp collar in a breathable open weave.",
  },
  {
    id: 17,
    name: "Forest Camp Collar",
    fabric: "Cotton poplin, open weave",
    category: "Camp Collar",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Deep forest camp collar for effortless elegance.",
  },
  {
    id: 18,
    name: "Ivory Camp Collar",
    fabric: "Cotton poplin, open weave",
    category: "Camp Collar",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Crisp ivory camp collar that breathes style.",
  },
  {
    id: 19,
    name: "Navy Camp Collar",
    fabric: "Cotton poplin, open weave",
    category: "Camp Collar",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "Navy camp collar for relaxed sophistication.",
  },
  {
    id: 20,
    name: "Sand Camp Collar",
    fabric: "Cotton poplin, open weave",
    category: "Camp Collar",
    card: "bg-forest-700",
    tone: "sage" as const,
    description: "Warm sand camp collar with a vintage feel.",
  },

  // Premium Collection (21-25)
  {
    id: 21,
    name: "Herringbone Forest",
    fabric: "Premium cotton herringbone",
    category: "Premium",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "Luxurious herringbone weave in deep forest.",
  },
  {
    id: 22,
    name: "Herringbone Ivory",
    fabric: "Premium cotton herringbone",
    category: "Premium",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Crisp ivory herringbone for the discerning eye.",
  },
  {
    id: 23,
    name: "Herringbone Charcoal",
    fabric: "Premium cotton herringbone",
    category: "Premium",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Dark charcoal herringbone with depth and texture.",
  },
  {
    id: 24,
    name: "Herringbone Navy",
    fabric: "Premium cotton herringbone",
    category: "Premium",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Navy herringbone that commands attention.",
  },
  {
    id: 25,
    name: "Herringbone Sage",
    fabric: "Premium cotton herringbone",
    category: "Premium",
    card: "bg-forest-800",
    tone: "brass" as const,
    description: "Muted sage herringbone with quiet sophistication.",
  },

  // Chambray Collection (26-30)
  {
    id: 26,
    name: "Forest Chambray",
    fabric: "Lightweight chambray",
    category: "Chambray",
    card: "bg-forest-700",
    tone: "sage" as const,
    description: "Airy forest chambray for warm days.",
  },
  {
    id: 27,
    name: "Ivory Chambray",
    fabric: "Lightweight chambray",
    category: "Chambray",
    card: "bg-forest-800",
    tone: "ivory" as const,
    description: "Crisp ivory chambray with a soft hand.",
  },
  {
    id: 28,
    name: "Navy Chambray",
    fabric: "Lightweight chambray",
    category: "Chambray",
    card: "bg-forest-700",
    tone: "brass" as const,
    description: "Deep navy chambray for effortless layering.",
  },
  {
    id: 29,
    name: "Slate Chambray",
    fabric: "Lightweight chambray",
    category: "Chambray",
    card: "bg-forest-800",
    tone: "sage" as const,
    description: "Cool slate chambray with understated elegance.",
  },
  {
    id: 30,
    name: "Sand Chambray",
    fabric: "Lightweight chambray",
    category: "Chambray",
    card: "bg-forest-700",
    tone: "ivory" as const,
    description: "Warm sand chambray for a relaxed look.",
  },
];

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

export function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleSelectSize = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setSelectedSize("");
    setIsModalOpen(true);
  };

  const handleConfirmSize = () => {
    if (selectedSize && selectedProduct) {
      console.log(`Size selected: ${selectedProduct.name} - ${selectedSize}`);
      setIsModalOpen(false);
      setSelectedProduct(null);
      setSelectedSize("");
    }
  };

  // Fix: Convert Set to array using Array.from() to avoid downlevelIteration issue
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="relative overflow-hidden px-6 py-20 md:px-16 md:py-28">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02] mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise-collection">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-collection)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.15, 1] }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass-500/70">
              The Collection
            </p>
            <h2 className={`${playfair.className} mt-4 max-w-lg text-balance text-3xl italic text-ivory md:text-4xl`}>
              Thirty shirts. One philosophy.
            </h2>
          </div>
          <p className={`${inter.className} max-w-xs text-[13px] font-light text-sage/60`}>
            Each shirt ships with a spare corozo button, sewn into the inside seam.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2 border-b border-brass-500/10 pb-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-1.5 text-[11px] uppercase tracking-wider transition ${
                activeCategory === category
                  ? "bg-brass-500/20 text-brass-400"
                  : "text-sage/50 hover:bg-brass-500/5 hover:text-ivory/70"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <div className="mt-4 flex justify-end">
          <p className={`${inter.className} text-[11px] text-sage/40`}>
            {filteredProducts.length} styles
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              className={`group card-seam rounded-sm ${product.card} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brass-500/5`}
            >
              <div className="flex h-56 items-center justify-center">
                <ShirtMark
                  tone={product.tone}
                  className="h-48 w-auto transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className={`${playfair.className} mt-4 text-lg text-ivory`}>
                {product.name}
              </h3>
              <p className={`${inter.className} mt-1 text-[11px] uppercase tracking-wide text-sage/60`}>
                {product.fabric}
              </p>
              <p className={`${inter.className} mt-2 text-[12px] leading-relaxed text-sage/50`}>
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-brass-500/10 pt-4">
                <span className={`${inter.className} text-[10px] uppercase tracking-wider text-brass-400/50`}>
                  {product.category}
                </span>
                <button
                  onClick={() => handleSelectSize(product)}
                  className={`${inter.className} text-[12px] uppercase tracking-wide text-ivory underline decoration-brass-500/30 underline-offset-4 transition hover:decoration-brass-400 hover:text-brass-400`}
                >
                  Select Size
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Size Selection Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 px-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg rounded-2xl border border-brass-500/20 bg-forest-900 p-8 shadow-2xl"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              {/* Close Button - Custom SVG X Icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-sage/40 transition hover:bg-brass-500/10 hover:text-ivory"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Product Info */}
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-sm ${selectedProduct.card}`}
                >
                  <ShirtMark tone={selectedProduct.tone} className="h-14 w-auto" />
                </div>
                <div>
                  <h3 className={`${playfair.className} text-xl text-ivory`}>
                    {selectedProduct.name}
                  </h3>
                  <p className={`${inter.className} text-[12px] text-sage/60`}>
                    {selectedProduct.fabric}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className={`${inter.className} mb-3 text-[11px] uppercase tracking-wider text-sage/60`}>
                  Select your size
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-sm border px-3 py-2 text-center text-sm transition ${
                        selectedSize === size
                          ? "border-brass-400 bg-brass-500/20 text-brass-400"
                          : "border-brass-500/20 text-ivory/50 hover:border-brass-500/40 hover:bg-brass-500/5 hover:text-ivory"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Guide */}
              <div className="mb-6 flex justify-center">
                <button className="text-[11px] text-brass-500/40 underline decoration-brass-500/20 underline-offset-4 transition hover:text-brass-400">
                  Size Guide
                </button>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirmSize}
                disabled={!selectedSize}
                className={`${inter.className} w-full rounded-full px-6 py-3 text-sm font-medium transition ${
                  selectedSize
                    ? "bg-brass-500 text-forest-950 hover:bg-brass-400"
                    : "cursor-not-allowed bg-brass-500/10 text-forest-950/30"
                }`}
              >
                {selectedSize ? `Confirm ${selectedSize}` : "Select a size"}
              </button>

              {/* Note */}
              <p className={`${inter.className} mt-4 text-center text-[10px] text-sage/30`}>
                Hand-finished in Bangalore · Free shipping across India
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}