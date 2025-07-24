"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import { Calendar, MapPin } from "lucide-react";
import { formatDateRange } from "@/lib/database";
import type { Education } from "@/lib/supabase";
import Image from "next/image";

interface EducationCardProps {
  education: Education;
  delay?: number;
}

export function EducationCard({
  education: edu,
  delay = 0,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlowCard className="p-6 h-full">
        {/* Horizontal layout with smaller image */}
        <div className="flex items-start gap-4">
          {/* Smaller image on the left */}
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={edu.image || "/placeholder.svg?height=80&width=80"}
              alt={edu.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content on the right */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-bodoni-moda text-white mb-2">
              {edu.name}
            </h3>
            <p className="text-secondary-color font-medium mb-3">
              {edu.major} {edu.major && `in ${edu.name}`}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                {formatDateRange(edu.start, edu.end)}
              </div>
              {edu.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {edu.location}
                </div>
              )}
            </div>
            <p className="text-white text-sm mt-3 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
