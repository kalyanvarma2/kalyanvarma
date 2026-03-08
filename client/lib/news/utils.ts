import { EventItem, FeaturedStory, MonthlyHighlight, NewsItem } from "./models";

export function sortByDateDesc<T extends { publishedAt: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function filterByCategory<T extends { category: string }>(
  items: T[],
  category?: string,
): T[] {
  if (!category) return items;
  return items.filter((item) => item.category === category);
}

export function filterFeaturedStories(items: NewsItem[]): NewsItem[] {
  return items.filter((item) => item.featured);
}

export function groupNewsByMonth(items: NewsItem[]): Record<string, NewsItem[]> {
  return items.reduce<Record<string, NewsItem[]>>((acc, item) => {
    const date = new Date(item.publishedAt);
    const key = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
    acc[key] = acc[key] ? [...acc[key], item] : [item];
    return acc;
  }, {});
}

export function selectUpcomingEvents(items: EventItem[], now = new Date()): EventItem[] {
  const nowMs = now.getTime();
  return [...items]
    .filter((item) => new Date(item.endDate).getTime() >= nowMs)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function selectTopFeaturedStories(
  items: FeaturedStory[],
  limit = 5,
): FeaturedStory[] {
  return [...items].sort((a, b) => a.priority - b.priority).slice(0, limit);
}

export function sortMonthlyHighlights(
  items: MonthlyHighlight[],
): MonthlyHighlight[] {
  return [...items].sort((a, b) => b.year - a.year || b.month - a.month);
}
