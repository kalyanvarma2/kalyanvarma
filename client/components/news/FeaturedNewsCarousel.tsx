import { useEffect, useMemo, useState } from "react";
import { NewsStory } from "@/lib/news";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface FeaturedNewsCarouselProps {
  stories: NewsStory[];
  autoSlideMs?: number;
}

export function FeaturedNewsCarousel({
  stories,
  autoSlideMs = 5000,
}: FeaturedNewsCarouselProps) {
  const featuredStories = useMemo(() => stories.slice(0, 5), [stories]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (featuredStories.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredStories.length);
    }, autoSlideMs);

    return () => window.clearInterval(interval);
  }, [autoSlideMs, featuredStories.length]);

  if (featuredStories.length === 0) {
    return null;
  }

  const activeStory = featuredStories[activeIndex];

  return (
    <section className="mb-14">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <img
          src={activeStory.image}
          alt={activeStory.title}
          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
          <p className="text-xs uppercase tracking-wider text-white/80 mb-2">
            {activeStory.source} • {new Date(activeStory.date).toLocaleDateString()}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 max-w-3xl">
            {activeStory.title}
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-3xl mb-4">
            {activeStory.summary}
          </p>
          <Button asChild className="gap-2">
            <a href={activeStory.link} target="_blank" rel="noopener noreferrer">
              Read full story <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2"
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? featuredStories.length - 1 : activeIndex - 1,
            )
          }
          aria-label="Previous story"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setActiveIndex((activeIndex + 1) % featuredStories.length)}
          aria-label="Next story"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {featuredStories.map((story, index) => (
          <button
            key={story.id}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
