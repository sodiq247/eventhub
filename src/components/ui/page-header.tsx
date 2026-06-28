"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary/5" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto text-balance"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
