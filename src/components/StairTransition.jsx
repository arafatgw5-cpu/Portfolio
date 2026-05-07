"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        
        {/* Stair Animation Overlay */}
        <div className="fixed inset-0 z-40 flex pointer-events-none">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;