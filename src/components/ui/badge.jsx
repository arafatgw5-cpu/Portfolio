import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-lightSky/30 bg-lightSky/10 text-lightSky hover:bg-lightSky hover:text-black",
        secondary:
          "border-white/10 bg-white/10 text-white/80 hover:bg-lightSky/10 hover:text-lightSky hover:border-lightSky/30",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white",
        outline:
          "border-lightSky/30 text-lightSky hover:bg-lightSky/10 hover:border-lightSky",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };