"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]",
        secondary:
          "bg-secondary text-white dark:bg-white dark:text-secondary hover:opacity-90 shadow-lg active:scale-[0.98]",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
        ghost:
          "text-foreground hover:bg-accent active:scale-[0.98]",
        gradient:
          "gradient-primary text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] hover:brightness-110",
        glass:
          "glass text-foreground hover:bg-white/80 dark:hover:bg-white/10 active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
