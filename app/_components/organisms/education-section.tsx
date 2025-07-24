"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import { Calendar, MapPin } from "lucide-react";
import { getEducations, formatDateRange } from "@/lib/database";
import type { Education } from "@/lib/supabase";
import Image from "next/image";

export function EducationSection() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducations() {
      const educationsData = await getEducations();
      setEducations(educationsData);
      setLoading(false);
    }
    fetchEducations();
  }, []);

  if (loading) {
    return (
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading education...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bodoni-moda">
            <span className="font-imperial-script font-bold overflow-visible bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              E
            </span>
            ducations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                      {edu.major} {edu.name && `in ${edu.name}`}
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
                    {/* {edu.description && <p className="text-gray-300 text-sm mt-3 leading-relaxed">{edu.description}</p>} */}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
