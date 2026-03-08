import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, Microscope, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const { language } = useLanguage();

  const title = language === "en" ? "Projects" : "ప్రాజెక్టులు";
  const subtitle =
    language === "en"
      ? "Selected work from field and lab research in sustainable agriculture"
      : "స్థిరమైన వ్యవసాయంలో క్షేత్ర మరియు ప్రయోగశాల పరిశోధనల నుండి ఎంపిక చేసిన పనులు";

  const projects =
    language === "en"
      ? [
          {
            icon: Microscope,
            title: "AMAIZE-P Phosphate Efficiency Study",
            description:
              "Supported phenotypic data collection for genotype-to-phenotype modeling of maize phosphate acquisition and yield traits.",
            tags: ["Maize", "Phenotyping", "Data Collection"],
          },
          {
            icon: Sprout,
            title: "Integrated Pest Advisory Program",
            description:
              "Designed practical crop-protection recommendations by combining field diagnostics, trial observations, and farmer feedback.",
            tags: ["IPM", "Field Trials", "Farmer Outreach"],
          },
        ]
      : [
          {
            icon: Microscope,
            title: "AMAIZE-P ఫాస్ఫేట్ సామర్థ్య అధ్యయనం",
            description:
              "మొక్కజొన్నలో ఫాస్ఫేట్ సేకరణ మరియు దిగుబడి లక్షణాల కోసం జన్యురూప-నుండి-వర్ణోత్పత్తి మోడలింగ్‌కు అవసరమైన డేటా సేకరణకు మద్దతు.",
            tags: ["మొక్కజొన్న", "ఫీనోటైపింగ్", "డేటా సేకరణ"],
          },
          {
            icon: Sprout,
            title: "సమగ్ర కీటక సలహా కార్యక్రమం",
            description:
              "క్షేత్ర పరిశీలనలు, ప్రయోగ ఫలితాలు, రైతు అభిప్రాయాలను కలిపి ఆచరణాత్మక పంట రక్షణ సూచనలు రూపొందించడం.",
            tags: ["IPM", "క్షేత్ర ప్రయోగాలు", "రైతు అవుట్‌రీచ్"],
          },
        ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="ghost" className="px-0 h-auto text-primary">
                {language === "en" ? "View case details" : "కేసు వివరాలు చూడండి"}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
