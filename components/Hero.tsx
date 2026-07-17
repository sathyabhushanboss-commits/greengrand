"use client";

import { ShirtMark } from "./ShirtMark";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter, Cormorant_Garamond, Cinzel } from "next/font/google";
import { useEffect, useRef, useState } from "react";

// Premium Fonts
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

// Banner media — mix of images and video.
// To use a real video, drop an .mp4 into /public/videos and point videoUrl at it
// (e.g. "/videos/greengrand-loop.mp4"), or swap in a hosted CDN URL.
type BannerItem = {
  id: number;
  type: "image" | "video";
  url: string;
  videoUrl?: string;
  poster?: string;
  title: string;
  description: string;
};

const bannerImages: BannerItem[] = [
  {
    id: 1,
    type: "video",
    url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1600&q=80",
    videoUrl: "/videos/greengrand-loop.mp4",
    poster: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1600&q=80",
    title: "Autumn Collection",
    description: "Warm tones for cooler days",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1600&q=80",
    title: "Linen Series",
    description: "Breathable elegance",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=1600&q=80",
    title: "Oxford Collection",
    description: "Timeless craftsmanship",
  },
  {
    id: 4,
    type: "image",
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1600&q=80",
    title: "Premium Finish",
    description: "Details that matter",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=1600&q=80",
    title: "Summer Run",
    description: "Lightweight sophistication",
  },
];

// Stagger animation config
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: [0.25, 0.1, 0.15, 1],
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.15, 1] },
  },
};

// Letter-by-letter reveal for the gold headline text
const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.6,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 14, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.15, 1] },
  },
};

export function GoldLetters({ text }: { text: string }) {
  return (
    <motion.span
      variants={letterContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative inline-block"
      style={{ perspective: 400 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="relative inline-block font-bold bg-gradient-to-b from-[#F3DE8A] via-brass-400 to-[#8A6A22] bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 18px rgba(184,151,62,0.35)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Sweeping shine pass over the finished letters */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        style={{
          mixBlendMode: "overlay",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black, transparent)",
        }}
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 3.2,
          ease: "easeInOut",
          delay: 2.2,
        }}
      />
    </motion.span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-300, 300], [6, -6]);
  const rotateY = useTransform(xSpring, [-300, 300], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const goToSlide = (index: number) => {
    if (index === currentImageIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 1000);
  };

  const current = bannerImages[currentImageIndex];

  // WhatsApp contact
  const whatsappNumber = "917090967411";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#0a0d0c",
      }}
    >
      {/* --- Background Media with Cinematic Zoom (image or video) --- */}
      <AnimatePresence mode="wait">
        {current.type === "video" ? (
          <motion.video
            key={currentImageIndex}
            autoPlay
            muted
            loop
            playsInline
            poster={current.poster ?? current.url}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            exit={{ scale: 1.15, opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.15, 1] }}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          >
            <source src={current.videoUrl} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.div
            key={currentImageIndex}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            exit={{ scale: 1.15, opacity: 0 }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.1, 0.15, 1],
            }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${current.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </AnimatePresence>

      {/* --- Gradient Overlay --- */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-950/95 via-forest-950/85 to-forest-950/95" />

      {/* --- Gold Dust Particles --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brass-400/25"
            style={{
              height: i % 5 === 0 ? "2px" : "1px",
              width: i % 5 === 0 ? "2px" : "1px",
              boxShadow: i % 5 === 0 ? "0 0 6px 1px rgba(201,168,76,0.5)" : undefined,
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: ["0%", "-100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 18,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* --- The "Linen" Texture --- */}
      <div className="absolute inset-0 z-0 opacity-[0.025] mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* --- Premium Gold Glow Orb --- */}
      <motion.div
        className="pointer-events-none absolute -inset-1/2 z-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(184, 151, 62, 0.06), transparent 60%)",
          rotateX,
          rotateY,
          translateX: "-25%",
          translateY: "-25%",
        }}
      />

      {/* --- WhatsApp Floating Button --- */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.5,
          ease: [0.25, 0.1, 0.15, 1],
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] md:bottom-8 md:right-8 md:px-5"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className={`${inter.className} hidden text-base font-bold text-white md:inline`}>
          Chat with us
        </span>
        <span className={`${inter.className} text-sm font-bold text-white md:hidden`}>
          WhatsApp
        </span>
      </motion.a>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-16 md:py-28">
        <div className="grid w-full items-center gap-16 md:grid-cols-2">
          {/* --- LEFT: CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {/* Sub-heading */}
            <motion.p
              variants={itemVariants}
              className={`${cinzel.className} text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
            >
              Premium Men's Shirts, Made in Bengaluru
            </motion.p>

            {/* Main Heading with animated Gold Letters */}
            <motion.h1
              variants={itemVariants}
              className={`${playfair.className} text-balance text-[54px] italic font-bold leading-[1.08] text-white md:text-[72px] lg:text-[90px]`}
            >
              Shirts designed for
              <br />
              <GoldLetters text="quiet confidence." />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`${cormorant.className} max-w-md text-[24px] font-bold leading-relaxed text-white`}
            >
              Greengrand creates one timeless men's shirt in three refined styles,
              presented in a rich forest-inspired colour palette. Each shirt is
              crafted from premium long-staple cotton and washed linen, carefully
              cut in Bengaluru and finished by hand.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`${cormorant.className} max-w-md text-[23px] font-bold leading-relaxed text-white/90`}
            >
              Produced in limited runs of just sixty pieces, every Greengrand shirt
              is made with attention to fabric, fit and fine detailing.
              <span className="text-brass-400"> No fast fashion. No unnecessary trends.</span>
              Just premium shirts designed to be worn season after season.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                href="#collection"
                className="group relative overflow-hidden rounded-full px-8 py-3.5 text-[21px] font-bold transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #B8973E, #C9A84C, #B8973E)",
                  backgroundSize: "200% 200%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "100% 100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "0% 0%";
                }}
              >
                <span className="relative z-10 text-forest-950">
                  View the Collection
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="absolute inset-0 rounded-full border border-white/20" />
              </a>
              <a
                href="#craft"
                className={`${inter.className} group relative text-[21px] font-bold text-brass-400 transition-all duration-300 hover:text-white`}
              >
                Discover How They're Made
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brass-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>

            {/* --- STATS --- */}
            <motion.dl
              variants={itemVariants}
              className="grid max-w-sm grid-cols-3 gap-4 border-t border-brass-500/15 pt-6"
            >
              {[
                { label: "Limited Runs Per Year", value: "4" },
                { label: "Shirts Per Run", value: "60" },
                { label: "Stitches Per Inch", value: "14" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt
                    className={`${cinzel.className} text-[12px] font-bold uppercase tracking-[0.25em] text-white/70`}
                  >
                    {stat.label}
                  </dt>
                  <dd
                    className={`${playfair.className} mt-1 text-[36px] font-bold text-brass-400`}
                  >
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* --- EXCLUSIVITY MARKER --- */}
            <motion.div
              variants={itemVariants}
              className={`${cinzel.className} flex flex-wrap items-center gap-2 pt-2 text-[12px] font-bold tracking-[0.25em] text-brass-400`}
            >
              <span className="text-brass-400">✦</span>
              Edition of 60 · Certificate of Authenticity
              <span className="text-brass-400">✦</span>
            </motion.div>

            {/* --- Contact Info --- */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-brass-400/20 px-4 py-2 transition-all hover:border-brass-400/50 hover:bg-brass-500/5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span
                  className={`${cinzel.className} text-[15px] font-bold uppercase tracking-[0.15em] text-white/80 transition group-hover:text-white`}
                >
                  +91 70909 67411
                </span>
              </a>
              <span className="h-4 w-px bg-brass-500/20" />
              <a
                href="mailto:info@Greengrand.in"
                className={`${cinzel.className} text-[14px] font-bold uppercase tracking-[0.15em] text-white/60 transition hover:text-white`}
              >
                info@Greengrand.in
              </a>
            </motion.div>

            {/* --- SEO Keywords --- */}
            <motion.div
              variants={itemVariants}
              className={`${cinzel.className} flex flex-wrap gap-3 pt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brass-400/40`}
            >
              <span>Premium Men's Shirts in Bengaluru</span>
              <span className="text-brass-400/40">·</span>
              <span>Limited-Edition Shirts</span>
              <span className="text-brass-400/40">·</span>
              <span>Long-Staple Cotton Shirts</span>
              <span className="text-brass-400/40">·</span>
              <span>Washed Linen Shirts</span>
              <span className="text-brass-400/40">·</span>
              <span>Hand-Finished Menswear</span>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: BANNER SLIDER (image or video) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.1, 0.15, 1],
              delay: 0.5,
            }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
              {/* Gold Frame */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brass-400/30 via-brass-400/10 to-brass-400/30 opacity-50" />

              {/* Banner Media Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-forest-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: [0.25, 0.1, 0.15, 1],
                    }}
                    className="absolute inset-0"
                  >
                    {current.type === "video" ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={current.poster ?? current.url}
                        className="h-full w-full object-cover"
                      >
                        <source src={current.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={current.url}
                        alt={current.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Banner Content Overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${currentImageIndex}`}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.25, 0.1, 0.15, 1],
                    }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <h3
                      className={`${cormorant.className} text-[36px] font-bold italic text-white`}
                    >
                      {current.title}
                    </h3>
                    <p
                      className={`${cinzel.className} mt-1 text-[15px] font-bold uppercase tracking-[0.2em] text-brass-400`}
                    >
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Gold Accent Corners */}
                <div className="absolute left-3 top-3 h-6 w-6 border-l border-t border-brass-400/20" />
                <div className="absolute right-3 top-3 h-6 w-6 border-r border-t border-brass-400/20" />
                <div className="absolute bottom-3 left-3 h-6 w-6 border-l border-b border-brass-400/20" />
                <div className="absolute bottom-3 right-3 h-6 w-6 border-r border-b border-brass-400/20" />
              </div>

              {/* --- Slider Controls --- */}
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-[2px] rounded-full transition-all duration-700 ${
                      index === currentImageIndex
                        ? "w-10 bg-brass-400"
                        : "w-4 bg-brass-500/20 hover:bg-brass-500/40"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  goToSlide(
                    (currentImageIndex - 1 + bannerImages.length) %
                      bannerImages.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-forest-950/70 p-2 text-brass-400/60 backdrop-blur-sm transition hover:bg-forest-950/90 hover:text-brass-400"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() =>
                  goToSlide((currentImageIndex + 1) % bannerImages.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-forest-950/70 p-2 text-brass-400/60 backdrop-blur-sm transition hover:bg-forest-950/90 hover:text-brass-400"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* --- Slide Counter --- */}
            <div className="mt-8 text-center">
              <p
                className={`${cinzel.className} text-[15px] font-bold tracking-[0.4em] text-brass-400/70`}
              >
                {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
                {String(bannerImages.length).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Craft / Tailoring gallery images ---
const craftImages = [
  {
    url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
    title: "Hand Tailoring",
    detail: "Every seam checked and finished by hand.",
  },
  {
    url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
    title: "Precision Cutting",
    detail: "Fabric cut to exact pattern lines for a clean fit.",
  },
  {
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80",
    title: "Fine Stitching",
    detail: "Fourteen stitches per inch for lasting strength.",
  },
  {
    url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    title: "Fabric Selection",
    detail: "Long-staple cotton and washed linen, sourced with care.",
  },
];

const promisePoints = [
  {
    title: "Premium Quality",
    detail: "Carefully sourced fabrics and superior craftsmanship.",
  },
  {
    title: "Timeless Design",
    detail: "Modern essentials that never go out of style.",
  },
  {
    title: "Perfect Comfort",
    detail: "Tailored for effortless movement and all-day wear.",
  },
  {
    title: "Exceptional Value",
    detail: "Luxury fashion designed to be worn and enjoyed for years.",
  },
];

// --- Scrolling gold "tape" marquee banner ---
function MarqueeTape({
  text = "WELCOME TO GREEN GRAND",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const items = Array(10).fill(text);
  return (
    <div
      className={`relative w-[110%] -translate-x-[5%] select-none overflow-hidden shadow-[0_10px_40px_rgba(184,151,62,0.35)] ${className}`}
      style={{ transform: "rotate(-2deg)" }}
    >
      {/* Gold gradient tape body */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8A6A22] via-brass-400 to-[#8A6A22]" />
      {/* Subtle sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/20" />
      {/* Torn/serrated tape edges */}
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(10,13,12,0.35) 0 6px, transparent 6px 12px)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(10,13,12,0.35) 0 6px, transparent 6px 12px)",
        }}
      />

      <motion.div
        className="relative flex whitespace-nowrap py-3 md:py-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className={`${cinzel.className} mx-4 flex shrink-0 items-center gap-4 text-[20px] font-bold uppercase tracking-[0.2em] text-forest-950 md:text-[24px]`}
          >
            {label}
            <span className="text-forest-950/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#0a0d0c" }}
    >
      {/* Base gradient to match Hero */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-forest-950 via-forest-900/60 to-forest-950" />

      {/* Diagonal fabric-weave pattern for texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(184,151,62,0.5) 0px, rgba(184,151,62,0.5) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, rgba(184,151,62,0.5) 0px, rgba(184,151,62,0.5) 1px, transparent 1px, transparent 26px)",
        }}
      />

      {/* Fine grain noise */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="about-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#about-noise)" />
        </svg>
      </div>

      {/* Layered gold glow orbs */}
      <motion.div
        className="pointer-events-none absolute -left-1/4 -top-1/4 z-0 h-[70%] w-[70%] opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(184, 151, 62, 0.12), transparent 65%)",
        }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 z-0 h-[70%] w-[70%] opacity-30 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(184, 151, 62, 0.1), transparent 65%)",
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Vignette to keep edges dark and content readable */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,13,12,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-14"
        >
          {/* --- Header --- */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-brass-400/50" />
              <p
                className={`${cinzel.className} text-[14px] font-bold uppercase tracking-[0.4em] text-brass-400`}
              >
                About Green Grand
              </p>
              <div className="h-px w-8 bg-brass-400/50" />
            </div>
            <h2
              className={`${playfair.className} text-balance text-[45px] italic font-bold leading-tight text-white md:text-[54px] lg:text-[72px]`}
            >
              <GoldLetters text="Crafted for Men Who" />
              <br />
              <GoldLetters text="Value Timeless Style" />
            </h2>
          </motion.div>

          {/* --- Intro --- */}
          <motion.div variants={itemVariants} className="space-y-5 text-center">
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[26px] font-bold leading-relaxed text-white`}
            >
              Founded in 2020 in Bengaluru, Karnataka, Green Grand was born from a
              simple belief—premium fashion should combine exceptional
              craftsmanship, effortless style, and everyday comfort.
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              We design menswear for the modern gentleman who appreciates refined
              details, superior fabrics, and clothing that remains relevant beyond
              seasonal trends. Every Green Grand piece is thoughtfully created to
              deliver confidence, versatility, and lasting quality.
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              Whether you're dressing for work, a weekend getaway, or an evening
              out, our collections are designed to complement every moment with
              understated elegance.
            </p>
          </motion.div>

          {/* --- Craft / Tailoring Gallery --- */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 border-t border-brass-500/15 pt-12"
          >
            <p
              className={`${cinzel.className} text-center text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
            >
              The Craft Behind Every Shirt
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {craftImages.map((img) => (
                <div
                  key={img.title}
                  className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-brass-400/20"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p
                      className={`${playfair.className} text-[18px] font-bold italic text-white`}
                    >
                      {img.title}
                    </p>
                    <p
                      className={`${cormorant.className} mt-1 text-[13px] font-bold leading-snug text-brass-400`}
                    >
                      {img.detail}
                    </p>
                  </div>
                  <div className="absolute left-2 top-2 h-4 w-4 border-l border-t border-brass-400/50" />
                  <div className="absolute right-2 top-2 h-4 w-4 border-r border-t border-brass-400/50" />
                  <div className="absolute bottom-2 left-2 h-4 w-4 border-l border-b border-brass-400/50" />
                  <div className="absolute bottom-2 right-2 h-4 w-4 border-r border-b border-brass-400/50" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Philosophy --- */}
          <motion.div
            variants={itemVariants}
            className="space-y-5 border-t border-brass-500/15 pt-12 text-center"
          >
            <p
              className={`${cinzel.className} text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
            >
              Our Philosophy
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[26px] font-bold italic leading-relaxed text-white`}
            >
              At Green Grand, we believe true luxury lies in the details.
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              From carefully selected fabrics to precision tailoring and
              meticulous finishing, every garment reflects our commitment to
              excellence. We focus on timeless silhouettes rather than fleeting
              trends, creating wardrobes that stand the test of time.
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              Our goal is simple: to help every man look sharp, feel confident,
              and express his individuality with effortless sophistication.
            </p>
          </motion.div>

          {/* --- Designed in Bengaluru --- */}
          <motion.div
            variants={itemVariants}
            className="space-y-5 border-t border-brass-500/15 pt-12 text-center"
          >
            <p
              className={`${cinzel.className} text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
            >
              Designed in Bengaluru
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              Inspired by the vibrant spirit of Bengaluru and crafted for today's
              global lifestyle, Green Grand blends contemporary aesthetics with
              enduring craftsmanship. We continuously innovate while staying true
              to our core values of quality, authenticity, and attention to
              detail.
            </p>
          </motion.div>

          {/* --- Our Promise --- */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 border-t border-brass-500/15 pt-12 text-center"
          >
            <div className="space-y-2">
              <p
                className={`${cinzel.className} text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
              >
                Our Promise
              </p>
              <p
                className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
              >
                Every Green Grand garment is built around four principles:
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {promisePoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-xl border border-brass-500/15 bg-brass-500/5 p-6 text-left transition-all hover:border-brass-400/40 hover:bg-brass-500/10"
                >
                  <p
                    className={`${playfair.className} text-[27px] italic font-bold text-brass-400`}
                  >
                    {point.title}
                  </p>
                  <p
                    className={`${cormorant.className} mt-2 text-[23px] font-bold leading-relaxed text-white/90`}
                  >
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- More Than Fashion --- */}
          <motion.div
            variants={itemVariants}
            className="space-y-5 border-t border-brass-500/15 pt-12 text-center"
          >
            <p
              className={`${cinzel.className} text-[17px] font-bold uppercase tracking-[0.3em] text-brass-400`}
            >
              More Than Fashion
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              Green Grand is more than a clothing brand—it's a reflection of
              confidence, ambition, and refined living.
            </p>
            <p
              className={`${cormorant.className} mx-auto max-w-2xl text-[24px] font-bold leading-relaxed text-white/90`}
            >
              As we continue our journey from Bengaluru to wardrobes across
              India, our commitment remains unchanged: creating premium menswear
              that empowers men to dress with purpose and distinction.
            </p>
            <div className="pt-8">
              <MarqueeTape />
            </div>
            <p
              className={`${playfair.className} mx-auto max-w-2xl pt-8 text-[26px] font-bold italic text-white`}
            >
              <span className="bg-gradient-to-r from-brass-300 via-brass-400 to-brass-300 bg-clip-text text-transparent">
                Where timeless style meets modern confidence.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}