import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <InsightsSection />
      <ContactSection />
    </Layout>
  );
}
