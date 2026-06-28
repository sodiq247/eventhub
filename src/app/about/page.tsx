import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Statistics } from "@/components/sections/statistics";
import { WhyChoose } from "@/components/sections/why-choose";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Eventit, our mission, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="We build the future of events"
        subtitle="Our mission is to empower creators, organizers, and attendees with tools that make every gathering an unforgettable experience."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Founded in 2024, Eventit was born out of a simple frustration: organizing events was too complex, fragmented, and stressful. We set out to build a single platform that handles everything from ticketing to marketing, so organizers can focus on what matters most — creating incredible experiences.
                </p>
                <p>
                  Today, Eventit powers thousands of events globally, connecting millions of attendees with passions, communities, and memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-secondary border border-border shadow-2xl">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Statistics />
      <WhyChoose />
    </>
  );
}
