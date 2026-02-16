"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroImages } from "@/data/images";

const slides = [
  {
    id: 1,
    title: "World Cup 2026",
    subtitle: "Official National Team Jerseys",
    description: "Get ready for the biggest tournament. Shop authentic jerseys from all qualified nations.",
    cta: "Shop Now",
    ctaSecondary: "All Jerseys",
    href: "/shop/national-teams",
    hrefSecondary: "/shop/jerseys",
    image: heroImages.worldcup,
    overlay: "from-black/70 via-black/40 to-transparent",
  },
  {
    id: 2,
    title: "New Season Kits",
    subtitle: "2024/25 Club Jerseys Are Here",
    description: "Rep your club with the latest official jerseys from the Premier League, La Liga, Serie A and more.",
    cta: "Shop Clubs",
    ctaSecondary: "New Arrivals",
    href: "/shop/clubs",
    hrefSecondary: "/shop/jerseys?sort=newest",
    image: heroImages.stadium,
    overlay: "from-black/70 via-black/40 to-transparent",
  },
  {
    id: 3,
    title: "Up to 40% Off",
    subtitle: "End of Season Sale",
    description: "Score incredible deals on jerseys, footwear, and gear. Limited time only.",
    cta: "Shop Sale",
    ctaSecondary: "All Deals",
    href: "/shop/sale",
    hrefSecondary: "/shop/sale",
    image: heroImages.fans,
    overlay: "from-black/70 via-black/40 to-transparent",
  },
  {
    id: 4,
    title: "Elite Performance",
    subtitle: "Soccer Cleats & Footwear",
    description: "Step onto the pitch with confidence. Nike Mercurial, adidas Predator, Puma Future and more.",
    cta: "Shop Footwear",
    ctaSecondary: "View All",
    href: "/shop/footwear",
    hrefSecondary: "/shop",
    image: heroImages.cleats,
    overlay: "from-black/70 via-black/40 to-transparent",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[480px] sm:h-[540px] md:h-[600px] lg:h-[680px] overflow-hidden bg-black">
      {/* Background images - all preloaded */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div
          className={`max-w-xl transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="inline-block bg-primary/90 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            {slide.subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.05] drop-shadow-lg">
            {slide.title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md leading-relaxed">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={slide.href}
              className="bg-white text-foreground px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {slide.cta}
            </Link>
            <Link
              href={slide.hrefSecondary}
              className="border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
            >
              {slide.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots + progress */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-2.5 rounded-full overflow-hidden transition-all bg-white/30"
            style={{ width: i === current ? 40 : 10 }}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === current && (
              <span className="absolute inset-0 bg-white rounded-full animate-[progress_6s_linear]" />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
