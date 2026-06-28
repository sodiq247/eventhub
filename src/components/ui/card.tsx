import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
  gradientBorder?: boolean;
}

export function Card({
  className,
  glass,
  hover,
  gradientBorder,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground",
        glass && "glass",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20",
        gradientBorder && "gradient-border",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
}
