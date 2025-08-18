import { useLanguage } from '@/contexts/LanguageContext';
import { Building, CalendarDays } from 'lucide-react';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {t.experience.items.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm" />
                
                {/* Content */}
                <div className="md:ml-20 bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">{item.company}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
