"use client";

import Image from "next/image";
import { EVENT_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { ArrowUpRight } from "lucide-react";

export function EventCategories() {
  // Show first 8 categories on the main grid
  const displayCategories = EVENT_CATEGORIES.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Categories"
          title="Explore Event Categories"
          subtitle="From intimate gatherings to grand festivals, find the perfect category for your next unforgettable event."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          staggerDelay={0.08}
        >
          {displayCategories.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.id}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-secondary">
                  {/* Background Image */}
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60`}
                  />

                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        {category.eventCount.toLocaleString()} events
                      </p>
                    </div>
                  </div>

                  {/* Hover shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View all link */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group cursor-pointer">
            View all {EVENT_CATEGORIES.length} categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
