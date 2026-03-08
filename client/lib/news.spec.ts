import { describe, expect, it } from "vitest";
import {
  featuredStories,
  monthlyHighlights,
  newsData,
  selectTopFeaturedStories,
} from "./news";

describe("news data architecture", () => {
  it("contains valid HTTP links for every news item", () => {
    for (const item of newsData) {
      expect(item.link.startsWith("http://") || item.link.startsWith("https://")).toBe(true);
    }
  });

  it("covers all editorially required core categories", () => {
    const categories = new Set(newsData.map((item) => item.category));
    expect(categories).toEqual(
      new Set([
        "fungicides",
        "insecticides",
        "herbicides",
        "biologicals",
        "resistance",
        "regulation",
        "industry",
        "digital-agriculture",
        "stewardship",
      ]),
    );
  });

  it("selects exactly top 5 featured stories by priority", () => {
    const top5 = selectTopFeaturedStories(featuredStories, 5);
    expect(top5).toHaveLength(5);
    expect(top5[0].priority).toBeLessThan(top5[1].priority);
  });

  it("includes month/year info in monthly highlights", () => {
    for (const highlight of monthlyHighlights) {
      expect(highlight.month).toBeGreaterThanOrEqual(1);
      expect(highlight.month).toBeLessThanOrEqual(12);
      expect(highlight.year).toBeGreaterThan(2024);
    }
  });
});
