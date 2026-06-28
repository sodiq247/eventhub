"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Users as UsersIcon, ArrowRight } from "lucide-react";
import { FEATURED_EVENTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const FILTER_TABS = ["All", "This Week", "This Month", "Popular"] as const;

export function FeaturedEvents() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured"
          title="Upcoming Events You&apos;ll Love"
          subtitle="Discover handpicked events happening near you. Register now before seats run out."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {FEATURED_EVENTS.map((event) => {
            const seatsPercent =
              ((event.totalSeats - event.remainingSeats) / event.totalSeats) * 100;

            return (
              <StaggerItem key={event.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    {event.image && (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}

                    {/* Date badge */}
                    <div className="absolute top-4 left-4 bg-white dark:bg-card rounded-xl px-3 py-2 shadow-lg">
                      <p className="text-xs font-bold text-primary leading-none">
                        {event.date.split(",")[0]?.split(" ")[0]}
                      </p>
                      <p className="text-lg font-bold text-foreground leading-none mt-0.5">
                        {event.date.split(",")[0]?.split(" ")[1]}
                      </p>
                    </div>

                    {/* Featured badge */}
                    {event.isFeatured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="premium">Featured</Badge>
                      </div>
                    )}

                    {/* Image zoom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>

                    <h3 className="text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors line-clamp-1">
                      {event.title}
                    </h3>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Seats progress */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-muted flex items-center gap-1">
                          <UsersIcon className="h-3 w-3" />
                          {event.remainingSeats} seats left
                        </span>
                        <span className="text-muted">
                          {Math.round(seatsPercent)}% filled
                        </span>
                      </div>
                      <div className="h-1.5 bg-accent rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500"
                          style={{ width: `${seatsPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted">From</p>
                        <p className="text-xl font-bold text-foreground">
                          {event.currency}
                          {event.price.toLocaleString()}
                        </p>
                      </div>
                      <Button variant="primary" size="sm">
                        Register
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Organizer */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-primary">
                          {event.organizer[0]}
                        </span>
                      </div>
                      <span className="text-xs text-muted">
                        by {event.organizer}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
