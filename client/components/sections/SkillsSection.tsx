import { useLanguage } from "@/contexts/LanguageContext";
import { FlaskConical, BarChart3, Dna, Code2 } from "lucide-react";

export function SkillsSection() {
  const { language } = useLanguage();

  const skillCategories = [
    {
      icon: FlaskConical,
      title:
        language === "en" ? "Laboratory Techniques" : "ప్రయోగశాల సాంకేతికతలు",
      skills: ["qPCR", "RNA/DNA Extraction"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      icon: BarChart3,
      title:
        language === "en"
          ? "Data Analytics & Visualization"
          : "డేటా విశ్లేషణ & దృశ్యీకరణ",
      skills: ["R", "SAS", "MS Office Suite"],
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      icon: Dna,
      title:
        language === "en"
          ? "Research & Experimentation"
          : "పరిశోధన & ప్రయోగాలు",
      skills: [
        "CRISPR-Cas gene editing",
        "Molecular cloning & Design",
        "GLP-compliant agronomic field trials",
        "Statistical analysis",
      ],
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
  ];

  const title = language === "en" ? "Technical Expertise" : "సాంకేతిక నైపుణ్యం";
  const subtitle =
    language === "en"
      ? "Specialized skills in modern agricultural research and biotechnology"
      : "ఆధునిక వ్యవసాయ పరిశోధన మరియు బయోటెక్నాలజీలో ప్రత్యేక నైపుణ్యాలు";

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              {/* Category Header */}
              <div className={`rounded-t-xl p-6 border-2 ${category.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="bg-card rounded-b-xl border-2 border-t-0 border-border p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-primary/20">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation accent */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            <Code2 className="h-4 w-4" />
            <span>
              {language === "en"
                ? "Advancing agricultural innovation through technology"
                : "సాంకేతికత ద్వారా వ్యవసాయ ఆవిష్కరణలను అభివృద్ధి చేయడం"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
