"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { GlowCard } from "@/app/_components/atoms/glow-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <GlowCard className="overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {liveUrl && (
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Github size={16} className="mr-1" />
                Code
              </Button>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}
