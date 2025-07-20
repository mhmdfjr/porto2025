"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { WorkCard } from "@/app/_components/molecules/work-card";

const workExperience = [
  {
    company: "Freelancer",
    position: "Digital Artist",
    duration: "Jul 2018 - Feb 2022",
    description:
      "Created digital artwork and designs for various clients, focusing on creative visual solutions.",
    logo: "/placeholder.svg?height=48&width=48",
  },
  {
    company: "Ngoding Community",
    position: "Content Writer",
    duration: "Dec 2022 - Present",
    description:
      "Writing technical content and tutorials for the programming community.",
    logo: "/placeholder.svg?height=48&width=48",
  },
  {
    company: "Serpihan Tech Solution",
    position: "Frontend Web Developer",
    duration: "Jul 2024 - Present",
    description:
      "Developing modern web applications using React, Next.js, and other cutting-edge technologies.",
    logo: "/placeholder.svg?height=48&width=48",
  },
  {
    company: "SMK N 1 Pemalang",
    position: "IT Support",
    duration: "Jan 2020 - Mar 2020",
    description:
      "Provided technical support and maintained computer systems and networks.",
    logo: "/placeholder.svg?height=48&width=48",
  },
];

export function WorkSection() {
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
            <p>
              <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
                W
              </GradientText>
              orks
            </p>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((work, index) => (
            <WorkCard
              key={`${work.company}-${work.position}`}
              {...work}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
