"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Get Started in 5 Simple Steps"
          subtitle="From idea to execution — launch your event in minutes, not days."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={step.step}
                delay={index * 0.15}
                animation={isEven ? "slide-right" : "slide-left"}
              >
                <div
                  className={`relative flex items-start gap-6 lg:gap-0 mb-12 last:mb-0 ${
                    isEven
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <motion.div
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 ring-4 ring-background"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 lg:w-[calc(50%-3rem)] ${
                      isEven
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 ${
                        isEven ? "lg:ml-0" : "lg:mr-0"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
