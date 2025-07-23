"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "red",
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
        "before:bg-gradient-to-r before:from-red-500/10 before:via-orange-500/10 before:to-red-500/10", // ⬅ reduced opacity here
        "before:mask-composite-subtract before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        className
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 30px ${
          glowColor === "red"
            ? "rgba(239, 68, 68, 0.1)"
            : "rgba(251, 146, 60, 0.1)"
        }`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
