import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Eventit team for support, sales, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        subtitle="Have a question about our platform or pricing? Our team is here to help you."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Contact Information</h2>
              <p className="text-muted mb-10">
                Fill out the form and our team will get back to you within 24 hours. We're available Monday through Friday, 9am to 6pm EST.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading">Chat to sales</h3>
                    <p className="text-sm text-muted mt-1">Speak to our friendly team.</p>
                    <a href="mailto:sales@eventit.com" className="text-primary hover:underline mt-2 block font-medium">
                      sales@eventit.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading">Visit us</h3>
                    <p className="text-sm text-muted mt-1">Visit our office HQ.</p>
                    <p className="text-foreground mt-2 font-medium">
                      100 Innovation Drive<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading">Call us</h3>
                    <p className="text-sm text-muted mt-1">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+15550000000" className="text-primary hover:underline mt-2 block font-medium">
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border p-8 rounded-3xl shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="First name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 rounded-xl bg-background border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl bg-background border border-border p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Leave us a message..."
                  />
                </div>

                <Button variant="gradient" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
