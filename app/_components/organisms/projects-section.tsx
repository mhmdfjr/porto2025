"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { ProjectCard } from "@/app/_components/molecules/project-card";

const projects = [
  {
    title: "Technology Simple Timer",
    description:
      "This timer was created for a personal project. I created this timer using HTML, CSS, and Javascript.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Hospital Management Integration System",
    description:
      "SIMRS is an information of System Integration that manages all information and data in a hospital.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Simple Online Shop",
    description:
      "This simple shop website was one of my first projects. I created this website using HTML, CSS, and Javascript.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PPMH Web Profile",
    description:
      "This web profile was created to be an information media for the PPMH organization.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sekola Online Landing Page",
    description:
      "An online school landing page is a website that provides information about online education services.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Web Portfolio",
    description:
      "This portfolio website is a showcase that displays my skills, projects, and professional experience.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
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
            <p>
              <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
                P
              </GradientText>
              rojects
            </p>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
