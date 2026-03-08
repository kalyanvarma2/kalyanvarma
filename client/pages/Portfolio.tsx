import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Portfolio() {
  return (
    <Layout>
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
    </Layout>
  );
}
