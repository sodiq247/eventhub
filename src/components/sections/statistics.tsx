"use client";

import { STATISTICS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function Statistics() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#0B0B0B] to-[#2d0508]" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-[15%] w-56 h-56 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
              Numbers That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
              Join thousands of organizers who trust Eventit for their events.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATISTICS.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1} animation="scale">
              <div className="text-center p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-default">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </p>
                <p className="mt-2 text-sm sm:text-base text-white/50 font-medium group-hover:text-white/70 transition-colors">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
