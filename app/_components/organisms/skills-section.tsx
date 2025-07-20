"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { SkillTag } from "@/app/_components/molecules/skill-tag";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Others",
    skills: [
      "Git",
      "Figma",
      "Photoshop",
      "Bootstrap",
      "Framer Motion",
      "Prisma",
    ],
  },
];

export function SkillsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bonanova-display">
            <p>
              <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
                S
              </GradientText>
              kills
            </p>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
