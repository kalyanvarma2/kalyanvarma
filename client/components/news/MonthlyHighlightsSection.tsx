import { MonthlyHighlight } from "@/lib/news";

interface MonthlyHighlightsSectionProps {
  highlights: MonthlyHighlight[];
}

export function MonthlyHighlightsSection({
  highlights,
}: MonthlyHighlightsSectionProps) {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          This Month in Crop Protection
        </h2>
        <p className="text-muted-foreground mt-2">
          Major developments from the past 30 days in one quick briefing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {highlights.map((highlight) => (
          <article
            key={highlight.id}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wide text-primary mb-2">
              {highlight.metric}
            </p>
            <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
            <p className="text-sm text-muted-foreground">{highlight.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
