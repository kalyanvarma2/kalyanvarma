import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Microscope, Sprout, BarChart3 } from "lucide-react";

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

            {/* Highlight boxes after heading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg text-left">
                {t.about.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
