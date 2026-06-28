"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Footer() {
  return (
    <footer className="relative bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter section */}
        <ScrollReveal>
          <div className="border-b border-white/10 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold font-heading">
                  Stay in the loop
                </h3>
                <p className="mt-2 text-white/60 max-w-md">
                  Get the latest event trends, tips, and platform updates
                  delivered to your inbox.
                </p>
              </div>
              <div className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <Button variant="gradient" size="lg" className="shrink-0">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Links grid */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading">
                Event<span className="text-primary">it</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-xs">
              The premium event management platform for creating, managing, and
              experiencing extraordinary events.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">
                    {social.label[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Eventit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
