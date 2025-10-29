"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectCard } from "@/app/_components/molecules/project-card";
import { getProjects } from "@/lib/database";
import type { Project } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const router = useRouter();

  // Detect screen width for responsive slide count
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1); // mobile
      else if (window.innerWidth < 1024) setItemsPerSlide(2); // tablet
      else setItemsPerSlide(3); // desktop
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));

  const startIndex = currentIndex * itemsPerSlide;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  if (loading) {
    return (
      <section id="project" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bodoni-moda">
            <span className="font-imperial-script font-bold overflow-visible bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              P
            </span>
            rojects
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-10 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              className="flex gap-6 justify-center p-2 md:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`flex-shrink-0 ${
                    itemsPerSlide === 1
                      ? "w-full"
                      : itemsPerSlide === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === i
                  ? "bg-red-600 scale-110"
                  : "bg-white/30 hover:bg-white/50"
              } cursor-pointer transition-all`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700
                       text-white font-semibold px-8 py-3 rounded-full"
            onClick={() => router.push("/projects")}
          >
            See All Projects
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
