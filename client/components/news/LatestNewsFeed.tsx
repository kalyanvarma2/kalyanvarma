import { Badge } from "@/components/ui/badge";
import { NewsStory } from "@/lib/news";
import { ExternalLink } from "lucide-react";

interface LatestNewsFeedProps {
  stories: NewsStory[];
}

export function LatestNewsFeed({ stories }: LatestNewsFeedProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Latest News Feed</h2>
        <p className="text-muted-foreground mt-2">
          Curated updates across fungicides, insecticides, herbicides,
          biologicals, resistance, regulation, research, and industry.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stories.map((story) => (
          <article
            key={story.id}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <Badge variant="secondary" className="capitalize">
                  {story.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {new Date(story.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-semibold text-foreground leading-snug mb-2">
                {story.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{story.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{story.source}</span>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  Open <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
