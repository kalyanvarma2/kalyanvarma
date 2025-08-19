import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Microscope, Sprout, BarChart3, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Master's at University of Hohenheim, Germany",
    },
    {
      icon: Microscope,
      title: "Research Focus",
      description: "Field trials, molecular techniques, and data analysis",
    },
    {
      icon: Sprout,
      title: "Sustainable Solutions",
      description: "Eco-friendly crop protection strategies",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Statistical analytics and market analysis",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* About heading and content at the top */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              {t.about.title}
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              {Array.isArray(t.about.content) ? (
                t.about.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg text-left">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed text-lg text-left">
                  {t.about.content}
                </p>
              )}
            </div>

            {/* Social Media Connections */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Connect with me
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/kalyan-varma-447721135" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/kalyan-varma" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2 text-gray-700 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-pink-50 hover:border-pink-200 transition-all duration-300"
                  asChild
                >
                  <a href="https://www.instagram.com/imkv_clickz_?igsh=ZXFlZ3M0YnRpNzhw" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-2 text-pink-600 group-hover:scale-110 transition-transform" />
                    Instagram
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-red-50 hover:border-red-200 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:varmakalyan2@gmail.com">
                    <Mail className="h-5 w-5 mr-2 text-red-600 group-hover:scale-110 transition-transform" />
                    Gmail
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
