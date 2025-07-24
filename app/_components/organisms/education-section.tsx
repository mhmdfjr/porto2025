"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EducationCard } from "../molecules/education-card";
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
          <div className="text-white">Loading educations...</div>
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
            <EducationCard key={edu.id} education={edu} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
