import { eventsData } from "@/lib/news/eventsData";
import { featuredStories } from "@/lib/news/featuredStories";
import { monthlyHighlights } from "@/lib/news/monthlyHighlights";
import { newsData } from "@/lib/news/newsData";
import { sources } from "@/lib/news/sources";
import {
  EventItem,
  FeaturedStory,
  MonthlyHighlight,
  NewsItem,
  SourceConfig,
} from "@/lib/news/models";
import {
  selectTopFeaturedStories,
  selectUpcomingEvents,
  sortByDateDesc,
  sortMonthlyHighlights,
} from "@/lib/news/utils";

/**
 * Update strategy (planned):
 * - News feed refresh: daily
 * - Monthly highlights: weekly aggregation + monthly publication refresh
 * - Events/conferences: weekly refresh, with ad-hoc updates for date/location changes
 */

export async function fetchNewsFromSources(
  sourceConfigs: SourceConfig[] = sources,
): Promise<NewsItem[]> {
  // Placeholder for future live ingestion layer.
  // In future this will call trusted RSS/APIs and merge normalized records.
  const activeSources = sourceConfigs.filter((source) => source.active);
  if (activeSources.length === 0) {
    return [];
  }
  return newsData;
}

export function normalizeNewsItem(partial: Partial<NewsItem>): NewsItem {
  return {
    id: partial.id ?? `news-${Date.now()}`,
    title: partial.title ?? "Untitled crop protection update",
    source: partial.source ?? "Unknown source",
    sourceType: partial.sourceType ?? "media",
    publishedAt: partial.publishedAt ?? new Date().toISOString(),
    summary: partial.summary ?? "Summary pending editorial review.",
    category: partial.category ?? "industry",
    image: partial.image ?? "",
    link: partial.link ?? "#",
    featured: partial.featured ?? false,
    tags: partial.tags ?? [],
    company: partial.company,
    region: partial.region ?? "Global",
  };
}

export function getLatestNews(): NewsItem[] {
  return sortByDateDesc(newsData);
}

export function getFeaturedStories(limit = 5): FeaturedStory[] {
  return selectTopFeaturedStories(featuredStories, limit);
}

export function getMonthlyHighlights(): MonthlyHighlight[] {
  return sortMonthlyHighlights(monthlyHighlights);
}

export function getUpcomingEvents(limit?: number): EventItem[] {
  const upcoming = selectUpcomingEvents(eventsData);
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}
