"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { WorkCard } from "@/app/_components/molecules/work-card";
import { getWorks } from "@/lib/database";
import type { Work } from "@/lib/supabase";

export function WorkSection() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      const worksData = await getWorks();
      setWorks(worksData);
      setLoading(false);
    }
    fetchWorks();
  }, []);

  if (loading) {
    return (
      <section id="work" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading work experience...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bonanova-display">
            <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
              W
            </GradientText>
            orks
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {works.map((work, index) => (
            <WorkCard
              key={work.id}
              company={work.company}
              position={work.role}
              duration={`${new Date(work.start).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })} - ${
                work.end
                  ? new Date(work.end).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Present"
              }`}
              location={work.location || "Unknown Location"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              logo={work.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
