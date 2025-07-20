"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { GlowCard } from "@/app/_components/atoms/glow-card"
import Image from "next/image"

interface WorkCardProps {
  company: string
  position: string
  duration: string
  location?: string
  description: string
  logo: string
  delay?: number
}

export function WorkCard({ company, position, duration, location, description, logo, delay = 0 }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlowCard className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/10">
            <Image
              src={logo || "/placeholder.svg"}
              alt={company}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{position}</h3>
            <p className="text-red-400 font-medium mb-2">{company}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {duration}
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {location}
                </div>
              )}
            </div>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}
