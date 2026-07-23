"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 30 images: /public/11g.jpeg ... /public/40g.jpeg
const images = Array.from({ length: 30 }, (_, i) => `/${i + 11}g.jpeg`);

export function Collection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        {/* Images Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (index % 8) * 0.06, ease: [0.25, 0.1, 0.15, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(src)}
              className="group card-seam relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-sm bg-forest-800 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brass-500/10"
            >
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.15, 1] }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain object-center"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 px-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative h-[85vh] w-full max-w-3xl"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="" fill sizes="90vw" className="object-contain" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 rounded-full p-1 text-ivory/70 transition hover:text-ivory"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}