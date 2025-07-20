import type React from "react";
import type { Metadata } from "next";
import { Inter, Imperial_Script, Bona_Nova } from "next/font/google";
import "./globals.css";
import { FloatingParticles } from "@/app/_components/atoms/floating-particles";
import { SplineBackground } from "@/app/_components/atoms/spline-background";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const bonaNova = Bona_Nova({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-buna-nova",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-imperial-script",
});

export const metadata: Metadata = {
  title: "Mohamad Fajar Nur Khasani - Frontend Developer",
  description:
    "Portfolio website of Mohamad Fajar Nur Khasani, a passionate Frontend Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bonaNova.variable} ${imperialScript.variable}`}
      >
        <SplineBackground />
        <FloatingParticles />
        {children}
      </body>
    </html>
  );
}
