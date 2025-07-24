"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface OrganizationCardProps {
  organization: {
    id: number;
    name: string;
    role: string[];
    year: string[];
    location: string;
    image: string;
  };
  index: number;
  delay?: number;
}

export function OrganizationCard({
  organization: org,
  index,
  delay = 0,
}: OrganizationCardProps) {
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
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
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
        <div className="relative z-10 flex items-start gap-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <Image
              src={org.image || "/placeholder.svg"}
              alt={org.name}
              width={60}
              height={60}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-bodoni-moda text-white mb-1 group-hover:text-red-100 transition-colors duration-300">
              {org.name}
            </h3>
            {org.role.map((role, roleIndex) => (
              <div
                key={roleIndex}
                className="flex flex-col md:flex-row md:items-center justify-start md:gap-4"
              >
                <div className="flex items-center gap-1 mb-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <Calendar size={14} />
                  {org.year[roleIndex]}
                </div>
                <p className="text-secondary-color font-medium mb-2 group-hover:text-secondary-color transition-colors duration-300">
                  {role}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {org.location}
              </div>
            </div>
            <p className="text-white leading-relaxed group-hover:text-red-100 transition-colors duration-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
