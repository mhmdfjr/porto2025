"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";

const organizations = [
  {
    name: "I-Secret ILKOM UNNES",
    position: "Staff of Computer Networking Division",
    duration: "2023",
    description:
      "Active member in computer networking division, contributing to technical projects and knowledge sharing.",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Technology Community NEPAL",
    position: "Member of Programming Division",
    duration: "2018",
    description:
      "Participated in programming activities and community development projects.",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "UKM RIPTEK UNNES",
    position: "Staff of Information Technology Development Division",
    duration: "2024",
    description:
      "Contributing to IT development initiatives and supporting technology advancement in the university.",
    logo: "/placeholder.svg?height=60&width=60",
  },
];

export function OrganizationSection() {
  return (
    <section id="organization" className="py-20 relative">
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
                O
              </GradientText>
              rganizations
            </p>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={org.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {org.name}
                    </h3>
                    <p className="text-red-400 font-medium mb-2">
                      {org.position}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {org.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        Organization
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {org.description}
                    </p>
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
