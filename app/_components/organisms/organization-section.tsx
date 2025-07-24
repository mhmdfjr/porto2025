"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OrganizationCard } from "../molecules/organization-card";
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
          <div className="text-white">Loading organizations...</div>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bodoni-moda">
            <span className="font-imperial-script font-bold overflow-visible bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              O
            </span>
            rganizations
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {organizations.map((org, index) => (
            <OrganizationCard
              key={org.id}
              organization={org}
              index={index}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
