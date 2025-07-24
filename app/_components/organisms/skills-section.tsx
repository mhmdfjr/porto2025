"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SkillTag } from "@/app/_components/molecules/skill-tag";
import { getSkills } from "@/lib/database";
import type { Skill } from "@/lib/supabase";

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      const skillsData = await getSkills();
      setSkills(skillsData);
      setLoading(false);
    }
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 relative">
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
              S
            </span>
            kills
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillTag key={skill.id} skill={skill.name} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
