
  autoSlideMs?: number;
}

export function FeaturedNewsCarousel({
  stories,
  autoSlideMs = 5000,
}: FeaturedNewsCarouselProps) {


  return (
    <section className="mb-14">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <img
          src={activeStory.image}

          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
          <p className="text-xs uppercase tracking-wider text-white/80 mb-2">

          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-3xl mb-4">
            {activeStory.summary}
          </p>
          <Button asChild className="gap-2">
            <a href={activeStory.link} target="_blank" rel="noopener noreferrer">

            </a>
          </Button>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2"

          aria-label="Previous story"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2"

          aria-label="Next story"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">

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
