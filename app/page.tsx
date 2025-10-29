import { Header } from "@/app/_components/organisms/header";
import { HeroSection } from "@/app/_components/organisms/hero-section";
import { AboutSection } from "@/app/_components/organisms/about-section";
import { ProjectsSection } from "@/app/_components/organisms/projects-section";
import { SkillsSection } from "@/app/_components/organisms/skills-section";
import { WorkSection } from "@/app/_components/organisms/work-section";
import { EducationSection } from "@/app/_components/organisms/education-section";
import { OrganizationSection } from "@/app/_components/organisms/organization-section";
import { Footer } from "@/app/_components/organisms/footer";

export default function Home() {
  return (
    // <div className="min-h-screen relative z-10">
    //   <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <WorkSection />
      <EducationSection />
      <OrganizationSection />
    </main>
    //   <Footer />
    // </div>
  );
}
