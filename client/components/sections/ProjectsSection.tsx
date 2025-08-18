import { useLanguage } from '@/contexts/LanguageContext';
import { FolderOpen, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const { language } = useLanguage();

  const title = language === 'en' ? "Projects" : "ప్రాజెక్టులు";
  const subtitle = language === 'en' 
    ? "Showcasing my research projects and agricultural innovations" 
    : "నా పరిశోధన ప్రాజెక్టులు మరియు వ్యవసాయ ఆవిష్కరణలను ప్రదర్శించడం";

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

        {/* Empty state - Coming Soon */}
        <div className="text-center">
          <div className="bg-card rounded-xl p-12 shadow-sm border border-border border-dashed max-w-2xl mx-auto">
            <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {language === 'en' ? "Projects Coming Soon" : "ప్రాజెక్టులు త్వరలో వస్తున్నాయి"}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === 'en' 
                ? "I'm preparing detailed information about my research projects, innovations, and contributions to sustainable agriculture. Check back soon for updates!"
                : "నేను నా పరిశోధన ప్రాజెక్టులు, ఆవిష్కరణలు మరియు స్థిరమైన వ్యవసాయానికి చేసిన కృషి గురించి వివరణాత్మక సమాచారాన్ని సిద్ధం చేస్తున్నాను. అప్‌డేట్‌ల కోసం త్వరలో తిరిగి చూడండి!"
              }
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Plus className="h-4 w-4" />
              <span>
                {language === 'en' ? "Content will be added soon" : "కంటెంట్ త్వరలో జోడించబడుతుంది"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
