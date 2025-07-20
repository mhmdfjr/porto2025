"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { GlowCard } from "@/app/_components/atoms/glow-card"
import { AnimatedIcon } from "@/app/_components/atoms/animated-icon"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlowCard className="p-6 h-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20">
            <AnimatedIcon icon={icon} size={32} className="text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </GlowCard>
    </motion.div>
  )
}
