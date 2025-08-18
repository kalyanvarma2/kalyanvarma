import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InsightsSection() {
  const { t } = useLanguage();

  // Placeholder articles
  const placeholderArticles = [
    {
      title: "Sustainable Pest Management in Modern Agriculture",
      excerpt:
        "Exploring innovative approaches to pest control that minimize environmental impact while maintaining crop productivity.",
      date: "2024-03-15",
      readTime: "5 min read",
    },
    {
      title: "The Future of Crop Protection Technology",
      excerpt:
        "How emerging technologies like RNAi are revolutionizing pest and disease management strategies.",
      date: "2024-03-10",
      readTime: "7 min read",
    },
    {
      title: "Soil Health Assessment Techniques",
      excerpt:
        "Advanced methods for evaluating soil fertility and implementing targeted nutrient management programs.",
      date: "2024-03-05",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="insights" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.insights.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.insights.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {placeholderArticles.map((article, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString()}
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Read more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border border-dashed">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Coming Soon
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm preparing detailed insights and research articles on
              sustainable agriculture practices.
            </p>
            <Button variant="outline">Subscribe for Updates</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
