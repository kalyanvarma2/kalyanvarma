import { Layout } from "@/components/Layout";
import { FeaturedNewsCarousel } from "@/components/news/FeaturedNewsCarousel";
import { LatestNewsFeed } from "@/components/news/LatestNewsFeed";
import { MonthlyHighlightsSection } from "@/components/news/MonthlyHighlightsSection";
import { UpcomingEventsPreview } from "@/components/news/UpcomingEventsPreview";
import {
  getFeaturedStories,
  getLatestNews,
  getMonthlyHighlights,
  getUpcomingEvents,
} from "@/lib/services/newsService";

export default function Index() {
  const featuredStories = getFeaturedStories(5);
  const latestStories = getLatestNews().slice(0, 6);
  const highlights = getMonthlyHighlights().slice(0, 3);
  const upcomingEvents = getUpcomingEvents(3);

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
                Crop sciences researcher and editorial curator focused on crop
                protection intelligence. This platform highlights major
                developments in chemistry, biologicals, resistance, regulation,
                and stewardship for students, researchers, and advisors.
              </p>
            </div>
          </div>
        </section>

        <FeaturedNewsCarousel stories={featuredStories} />
        <LatestNewsFeed items={latestStories} />
        <MonthlyHighlightsSection highlights={highlights} />
        <UpcomingEventsPreview events={upcomingEvents} />
      </div>
    </Layout>
  );
}
