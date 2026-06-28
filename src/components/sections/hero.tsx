"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HERO_SLIDES, HERO_STATS } from "@/lib/constants";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1200px] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-secondary">
                {slide.image && (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-[1]" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-primary/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] right-[15%] w-48 h-48 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] left-[20%] w-24 h-24 rounded-full bg-white/5 blur-2xl"
        />
        {/* Decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[25%] w-40 h-40 rounded-full border border-primary/10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Slide indicator / badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm">
              <Play className="h-3 w-3 fill-primary text-primary" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {HERO_SLIDES[currentSlide]?.subtitle}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]"
          >
            Create, Manage &{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
                Experience
              </span>
            </span>
            <br />
            Extraordinary Events.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed"
          >
            From weddings to concerts, sports tournaments, beach festivals,
            hiking adventures, and corporate gatherings — Eventit makes
            organizing and attending events effortless.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="xl" className="min-w-[180px]">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="min-w-[180px] text-white border-white/20"
            >
              Explore Events
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="absolute bottom-24 left-4 right-4 sm:left-auto sm:right-auto"
        >
          <div className="glass rounded-2xl px-6 py-4 sm:px-10 sm:py-5 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 border border-white/10">
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </span>
                <span className="text-xs sm:text-sm text-white/50 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-24 right-8 z-10 hidden lg:flex flex-col gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide
                ? "w-2 h-6 bg-primary"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
