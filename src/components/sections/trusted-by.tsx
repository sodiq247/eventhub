"use client";

import { TRUSTED_LOGOS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function TrustedBy() {
  // Double the logos for seamless marquee
  const doubled = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="py-16 lg:py-20 border-b border-border overflow-hidden bg-accent/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <ScrollReveal>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted">
            Trusted by leading organizations worldwide
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-accent/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-accent/50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border opacity-50 hover:opacity-100 transition-all duration-300 hover:border-primary/20 hover:shadow-lg group cursor-default">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold text-sm group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  {logo[0]}
                </div>
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
