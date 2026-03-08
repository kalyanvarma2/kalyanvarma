import { Layout } from "@/components/Layout";
import { FeaturedNewsCarousel } from "@/components/news/FeaturedNewsCarousel";
import { LatestNewsFeed } from "@/components/news/LatestNewsFeed";
import { MonthlyHighlightsSection } from "@/components/news/MonthlyHighlightsSection";
import { cropProtectionNews, monthlyHighlights } from "@/lib/news";

export default function Index() {
  const featuredStories = cropProtectionNews.filter((story) => story.featured).slice(0, 5);
  const latestStories = cropProtectionNews.slice(0, 6);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-[120px_1fr] gap-6 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8be6b11ebff64b34aed1f9197290caed%2Faa47cd6c80204bfaa5127bd7b38bdd0f?format=webp&width=500"
              alt="Kalyan Varma"
              className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover object-top border"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Kalyan Varma
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Crop Sciences researcher focused on sustainable crop protection.
                This platform curates high-signal crop protection news, market
                updates, resistance alerts, and practical insights for
                researchers, advisors, and farmers.
              </p>
            </div>
          </div>
        </section>

        <FeaturedNewsCarousel stories={featuredStories} />
        <LatestNewsFeed stories={latestStories} />
        <MonthlyHighlightsSection highlights={monthlyHighlights} />
      </div>
    </Layout>
  );
}
