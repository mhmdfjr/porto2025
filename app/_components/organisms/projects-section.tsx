"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { ProjectCard } from "@/app/_components/molecules/project-card";
import { getProjects } from "@/lib/database";
import type { Project } from "@/lib/supabase";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const projectsData = await getProjects();
      console.log("Fetched projects:", projectsData);
      setProjects(projectsData);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative">
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
              P
            </GradientText>
            rojects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
