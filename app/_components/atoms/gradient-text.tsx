"use client";

import type React from "react";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export function GradientText({
  children,
  className,
  variant = "primary",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent overflow-visible",
        variant === "primary"
          ? "from-red-400 via-orange-400 to-red-600"
          : "from-orange-300 to-red-400",
        className
      )}
    >
      {children}
    </span>
  );
}
