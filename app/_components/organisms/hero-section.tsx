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
} from "lucide-react";
import { GradientText } from "@/app/_components/atoms/gradient-text";
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
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GradientText className="font-bonanova-display">
              Mohamad Fajar
            </GradientText>
            <br />
            <span className="text-white font-bonanova-display">
              Nur Khasani
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 pt-8"
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
            className="pt-12 transform -translate-x-1/2"
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
      </div>
    </section>
  );
}
