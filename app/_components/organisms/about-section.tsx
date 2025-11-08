"use client";

import { motion } from "framer-motion";
import { Code, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { FeatureCard } from "@/app/_components/molecules/feature-card";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/app/_components/atoms/glow-card";
import ProfilCard from "@/app/_components/molecules/profil-card";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
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
            className="flex flex-col md:flex-row md:justify-between md:items-end md:gap-6"
          >
            <GlowCard className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <ProfilCard
                  imageSrc="https://lgklimjczxflxpmtjsoi.supabase.co/storage/v1/object/public/porto//profil.png"
                  altText="Mohamad Fajar"
                  captionText="Mohamad Fajar"
                  containerHeight="150px"
                  containerWidth="150px"
                  imageHeight="150px"
                  imageWidth="150px"
                  rotateAmplitude={8}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
                <div className="flex flex-col text-center sm:text-left justify-between">
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

            <div className="text-center md:text-right mt-6">
              <div className="flex md:flex-col justify-center items-center md:items-end md:gap-4">
                <p className="font-bodoni-moda text-sm">
                  Tell me your problem,
                </p>
                <p className="font-bodoni-moda text-sm">
                  I will write you a solution.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-center mt-6
                                   text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => router.push("/about")}
              >
                Know Me Better
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 text-center font-bodoni-moda font-semibold md:text-right">
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
