import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/15 text-primary hover:bg-primary/25 shadow-[0_0_10px_rgba(21,123,200,0.2)]",
        secondary:
          "border-[rgba(95,121,153,0.25)] bg-[rgba(13,24,41,0.7)] text-on-surface hover:border-primary/50 hover:bg-[rgba(21,123,200,0.12)]",
        destructive:
          "border-error/30 bg-error/15 text-error hover:bg-error/25",
        outline:
          "border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-primary/40",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

