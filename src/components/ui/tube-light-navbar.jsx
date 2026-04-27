"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavBar({ items = [], className }) {
  const pathname = usePathname();

  if (!items.length) return null;

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-1/2 z-[200] w-[94%] max-w-md -translate-x-1/2",
        "md:top-5 md:bottom-auto md:w-auto md:max-w-none",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-1 rounded-full",
          "border border-white/20 bg-white/70 px-2 py-2 shadow-xl backdrop-blur-xl",
          "dark:border-white/10 dark:bg-neutral-950/70",
          "md:justify-center md:gap-2 md:px-3"
        )}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.url ||
            (item.url !== "/" && pathname.startsWith(item.url));

          return (
            <Link
              key={item.name}
              href={item.url}
              aria-label={item.name}
              className={cn(
                "relative flex items-center justify-center gap-2 overflow-hidden rounded-full",
                "px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                "text-neutral-600 hover:text-neutral-950",
                "dark:text-neutral-300 dark:hover:text-white",
                "md:px-5",
                isActive && "text-white dark:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-full bg-neutral-950 dark:bg-white/15"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                  }}
                />
              )}

              {Icon && (
                <Icon
                  size={18}
                  strokeWidth={2.4}
                  className={cn(
                    "shrink-0",
                    isActive && "text-white dark:text-white"
                  )}
                />
              )}

              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}