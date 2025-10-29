"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  MessageCircle,
  BookOpen,
  MapPin,
} from "lucide-react";
import { AnimatedIcon } from "@/app/_components/atoms/animated-icon";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamadfajarnurkhasani/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/mhmdfjr", label: "GitHub" },
  {
    icon: Instagram,
    href: "https://instagram.com/holy.jar_",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://x.com/mohfajarnk", label: "Twitter" },
  {
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send/?phone=6285700072350&text=Hello%20Fajar,%20are%20you%20available%20to%20talk?&type=phone_number&app_absent=0",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:moh.fajar1304@gmail.com?subject=Hello&body=Hi%20Fajar,%0A%0AHow%20are%20you?",
    label: "Email",
  },
  {
    icon: BookOpen,
    href: "https://mhmdfjr.wordpress.com/",
    label: "WordPress",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative gap-10 select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 container mx-auto px-4 text-center lg:text-left relative z-10"
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="pr-4 font-bodoni-moda italic bg-gradient-to-r bg-clip-text text-transparent overflow-visible from-primary to-secondary">
            MOHAMAD FAJAR
          </span>
          <br />
          <span className="font-bodoni-moda">nur khasani</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl xl:text-3xl mx-auto font-bodoni-moda font-bold lg:bg-gradient-to-r lg:bg-clip-text lg:text-transparent lg:overflow-visible lg:from-primary lg:to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          FULL STACK WEB DEVELOPER
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 container mx-auto px-4 text-center lg:text-right relative z-10"
      >
        <motion.div
          className="flex flex-col items-center lg:items-end gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-1">
            <MapPin size={24} />
            Semarang, Indonesia
          </div>
          <p className="">Let's build something amazing together!</p>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end gap-2 sm:gap-4 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                         hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <AnimatedIcon
                icon={social.icon}
                size={20}
                className="text-white"
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="pt-8 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700
                       text-white font-semibold px-8 py-3 rounded-full"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See More
            <ArrowDown className="ml-2" size={20} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
