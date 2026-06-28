"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Eventit"
          title="Everything You Need to Succeed"
          subtitle="Powerful tools designed to make your events unforgettable. From planning to execution, we've got you covered."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.08}
        >
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 cursor-default"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-foreground font-heading">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
