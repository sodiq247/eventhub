"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your needs. Upgrade or downgrade anytime."
        />

        {/* Toggle */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-14">
            <span
              className={`text-sm font-medium transition-colors ${
                !isYearly ? "text-foreground" : "text-muted"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-primary/20 transition-colors cursor-pointer"
              aria-label="Toggle yearly billing"
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-primary shadow-lg"
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                isYearly ? "text-foreground" : "text-muted"
              }`}
            >
              Yearly
              <Badge variant="success" className="ml-2">
                Save 17%
              </Badge>
            </span>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? "/year" : "/month";

            return (
              <ScrollReveal
                key={plan.name}
                delay={index * 0.15}
                animation="scale"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`relative h-full flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-card border-primary shadow-2xl shadow-primary/10 scale-[1.02] z-10"
                      : "bg-card border-border hover:border-primary/20 hover:shadow-xl"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="premium" className="gap-1 px-4 py-1.5">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-heading text-foreground">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      {price === 0 ? (
                        <span className="text-4xl lg:text-5xl font-bold text-foreground font-heading">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="text-sm text-muted">
                            {plan.currency}
                          </span>
                          <span className="text-4xl lg:text-5xl font-bold text-foreground font-heading">
                            {price.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted">{period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted/30 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-foreground"
                              : "text-muted/50"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.isPopular ? "gradient" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
