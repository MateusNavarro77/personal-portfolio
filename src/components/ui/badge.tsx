import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[100px] border-[2.5px] border-ink px-3 py-1 text-xs font-extrabold text-ink shadow-cartoon-xs select-none",
  {
    variants: {
      variant: {
        default: "bg-accent",
        secondary: "bg-secondary",
        destructive: "bg-danger",
        outline: "bg-surface",
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
