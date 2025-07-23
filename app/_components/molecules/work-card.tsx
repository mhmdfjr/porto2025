"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface WorkCardProps {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  logo: string;
  delay?: number;
}

export function WorkCard({
  company,
  position: jobPosition,
  duration,
  location,
  description,
  logo,
  delay = 0,
}: WorkCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 group"
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.05), transparent 40%)`,
          }}
        />

        {/* Border gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.05), transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300">
            <Image
              src={logo || "/placeholder.svg?height=48&width=48"}
              alt={company}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white group-hover:text-red-100 transition-colors duration-300">
              {jobPosition}
            </h3>
            <p className="text-red-400 font-medium mb-2 group-hover:text-red-300 transition-colors duration-300">
              {company}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {duration}
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {location}
                </div>
              )}
            </div>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
