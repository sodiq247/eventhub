import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Pricing } from "@/components/sections/pricing";
import { WhyChoose } from "@/components/sections/why-choose";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for event organizers of all sizes.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Plans that scale with you"
        subtitle="Whether you're organizing a small meetup or a massive global conference, we have a plan that fits your needs perfectly."
      />
      <Pricing />
      <WhyChoose />
    </>
  );
}
