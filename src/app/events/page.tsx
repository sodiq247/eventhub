import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { EventCategories } from "@/components/sections/event-categories";
import { FeaturedEvents } from "@/components/sections/featured-events";

export const metadata: Metadata = {
  title: "Discover Events",
  description: "Find the best upcoming events, conferences, concerts, and more.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Discover Extraordinary Events"
        subtitle="Explore thousands of events happening around the world. Filter by category, location, and date."
      />
      <EventCategories />
      <FeaturedEvents />
    </>
  );
}
