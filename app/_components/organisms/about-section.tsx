"use client";

import { motion } from "framer-motion";
import { Code, Heart, Lightbulb } from "lucide-react";
import { FeatureCard } from "@/app/_components/molecules/feature-card";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import ProfilCard from "@/app/_components/molecules/profil-card";

const features = [
  {
    icon: Code,
    title: "Trained to Understand You",
    description: "Personalized to your tone, interests, and context.",
  },
  {
    icon: Lightbulb,
    title: "Always Up to Speed",
    description: "Real-time web-connected answers (optional feature).",
  },
  {
    icon: Heart,
    title: "Private by Design",
    description: "Your data stays yours and completely secure.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bodoni-moda">
            <span className=" font-imperial-script font-bold overflow-visible bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              A
            </span>
            <span>bout Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <GlowCard className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <ProfilCard
                  imageSrc="https://lgklimjczxflxpmtjsoi.supabase.co/storage/v1/object/public/porto//profil.png"
                  altText="Mohamad Fajar"
                  captionText="Mohamad Fajar"
                  containerHeight="200px"
                  containerWidth="200px"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-bodoni-moda">
                    Hello, Fellas!
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    My name is <strong>Mohamad Fajar Nur Khasani</strong> and
                    I'm 21 years old. I'm a Full Stack Web Developer. I studied
                    Computer Science at University & Computer Networks in High
                    School. I have had a great interest in Technology & Arts
                    since I was a child. I'm so excited to collaborate with you.
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 text-center font-bodoni-moda font-semibold">
                What's the reason for{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  choosing me?
                </span>
              </h3>
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
