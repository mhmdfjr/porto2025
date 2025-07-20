"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FloatingParticles() {
  const [particles, setParticles] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const largeParticles = [...Array(15)].map((_, i) => (
      <motion.div
        key={`large-${i}`}
        className="absolute w-2 h-2 bg-red-400/20 rounded-full"
        animate={{
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 8 + 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ));

    const mediumParticles = [...Array(25)].map((_, i) => (
      <motion.div
        key={`medium-${i}`}
        className="absolute w-1.5 h-1.5 bg-orange-400/15 rounded-full"
        animate={{
          x: [0, Math.random() * 150 - 75],
          y: [0, Math.random() * 150 - 75],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ));

    const smallParticles = [...Array(40)].map((_, i) => (
      <motion.div
        key={`small-${i}`}
        className="absolute w-1 h-1 bg-red-300/10 rounded-full"
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ));

    const orbs = [...Array(8)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute w-4 h-4 rounded-full"
        style={{
          background: `radial-gradient(circle, ${
            i % 2 === 0 ? "rgba(239, 68, 68, 0.3)" : "rgba(251, 146, 60, 0.3)"
          } 0%, transparent 70%)`,
          filter: "blur(1px)",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 300 - 150],
          y: [0, Math.random() * 300 - 150],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: Math.random() * 12 + 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ));

    setParticles([
      ...largeParticles,
      ...mediumParticles,
      ...smallParticles,
      ...orbs,
    ]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>
  );
}
