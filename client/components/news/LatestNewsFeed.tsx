import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/lib/news";
import { ExternalLink } from "lucide-react";

interface LatestNewsFeedProps {
  items: NewsItem[];
  title?: string;
}

export function LatestNewsFeed({
  items,
  title = "Latest Crop Protection Updates",
}: LatestNewsFeedProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-2">
          High-signal editorial coverage across chemistry, biologicals,
          resistance, regulation, stewardship, and applied research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-3">
                <Badge variant="secondary" className="capitalize">
                  {item.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-semibold text-foreground leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{item.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.source}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-medium"
                >
                  Open article <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
