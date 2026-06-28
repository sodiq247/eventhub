import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Memberships",
  description: "Become a premium member to get exclusive access to events and discounts.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        title="Eventit Memberships"
        subtitle="Join our community of elite organizers and attendees. Enjoy exclusive perks, early access, and premium features."
      />
      <Pricing />
    </>
  );
}
