"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const education = [
  {
    institution: "Universitas Negeri Semarang",
    degree: "Computer Science",
    duration: "2022 - Present",
    location: "Semarang, Indonesia",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    institution: "SMK N 1 Pemalang",
    degree: "IT Networking",
    duration: "2019 - 2022",
    location: "Pemalang, Indonesia",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export function EducationSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bonanova-display">
            <p>
              <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
                E
              </GradientText>
              ducations
            </p>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={edu.image || "/placeholder.svg"}
                    alt={edu.institution}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-red-400 font-medium mb-3">{edu.degree}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
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
