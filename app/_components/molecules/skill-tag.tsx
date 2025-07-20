"use client"

import { motion } from "framer-motion"

interface SkillTagProps {
  skill: string
  delay?: number
}

export function SkillTag({ skill, delay = 0 }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 
                 border border-red-500/30 text-red-300 font-medium cursor-default
                 hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300"
    >
      {skill}
    </motion.div>
  )
}
