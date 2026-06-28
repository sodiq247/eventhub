"use client";

import { cn } from "@/lib/utils";
import { motion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

type AnimationType = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const animations: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: ScrollRevealProps) {
  const { hidden, visible } = animations[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Stagger item (must be inside StaggerContainer)
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}

export function StaggerItem({
  children,
  className,
  animation = "slide-up",
}: StaggerItemProps) {
  const { hidden, visible } = animations[animation];

  return (
    <motion.div
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
