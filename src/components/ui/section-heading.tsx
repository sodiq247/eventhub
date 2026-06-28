"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={cn("max-w-3xl mb-16", alignClass, className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-foreground text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-muted max-w-2xl mx-auto text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
