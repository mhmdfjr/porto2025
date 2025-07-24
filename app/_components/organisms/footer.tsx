"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bodoni-moda font-bold mb-2">
              <span className="font-imperial-script bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                M
              </span>
              hmdfjr
            </h3>
            <p className="text-gray-400">Frontend Web Developer</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Developed by</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mohamad Fajar
            </span>
            <Heart size={16} className="text-secondary-color" />
            <span>© 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
