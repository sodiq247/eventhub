import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { EventCategories } from "@/components/sections/event-categories";
import { FeaturedEvents } from "@/components/sections/featured-events";
import { WhyChoose } from "@/components/sections/why-choose";
import { Pricing } from "@/components/sections/pricing";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Statistics } from "@/components/sections/statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <EventCategories />
      <FeaturedEvents />
      <WhyChoose />
      <HowItWorks />
      <Statistics />
      <Pricing />
    </>
  );
}
