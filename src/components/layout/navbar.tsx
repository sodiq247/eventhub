"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-strong shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-foreground">
                Event<span className="text-primary">it</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:left-4 group-hover:w-[calc(100%-2rem)]" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Register
              </Link>
              <Button variant="gradient" size="sm">
                Create Event
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-accent cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-card border-l border-border shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-bold font-heading">
                    Event<span className="text-primary">it</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile menu links */}
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center px-6 py-3 text-base font-medium text-muted hover:text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="md"
                    className="flex-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Button>
                </div>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Event
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
