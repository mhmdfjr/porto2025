import type React from "react";
import type { Metadata } from "next";
import { Inter, Imperial_Script, Bodoni_Moda_SC } from "next/font/google";
import "./globals.css";
import { FloatingParticles } from "@/app/_components/atoms/floating-particles";
import { SplineBackground } from "@/app/_components/atoms/spline-background";
import { Header } from "./_components/organisms/header";
import { Footer } from "./_components/organisms/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-imperial-script",
});

const bodoniModa = Bodoni_Moda_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bodoni",
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
        className={`${inter.variable} ${imperialScript.variable} ${bodoniModa.variable}`}
      >
        {/* <SplineBackground /> */}
        <FloatingParticles />
        <div className="min-h-screen relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
