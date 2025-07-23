"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/app/_components/atoms/gradient-text";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { getOrganizations } from "@/lib/database";
import type { Organization } from "@/lib/supabase";

export function OrganizationSection() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrganizations() {
      const organizationsData = await getOrganizations();
      setOrganizations(organizationsData);
      setLoading(false);
    }
    fetchOrganizations();
  }, []);

  if (loading) {
    return (
      <section id="project" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">Loading project experience...</div>
        </div>
      </section>
    );
  }

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
            <GradientText className="font-imperial-script text-5xl md:text-6xl font-bold overflow-visible">
              O
            </GradientText>
            rganizations
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
                      src={org.image || "/placeholder.svg"}
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
                    {org.role.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="flex items-center justify-start gap-4"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <Calendar size={14} />
                          {org.year[roleIndex]}
                        </div>
                        <p className="text-red-400 font-medium mb-2">{role}</p>
                      </div>
                    ))}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {org.location}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
