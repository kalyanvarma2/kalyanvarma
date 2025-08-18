import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Leaf, Users, Award } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-earth-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Agricultural Researcher
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.hero.name}
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold mb-6">
              {t.hero.title}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="group">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8be6b11ebff64b34aed1f9197290caed%2Faa47cd6c80204bfaa5127bd7b38bdd0f?format=webp&width=800"
                  alt="Kalyan Varma - Crop Sciences Researcher"
                  className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl object-cover object-top border-4 border-primary/20 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Stats Cards */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-2xl text-foreground">
                    8+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-2xl text-foreground">
                    500+
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Farmers Helped</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-lg text-foreground">
                    University of Hohenheim
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Master's in Plant Protection & Nutrition
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
