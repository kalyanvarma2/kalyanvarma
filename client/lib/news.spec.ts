import { describe, expect, it } from "vitest";
import { cropProtectionNews, monthlyHighlights } from "./news";

describe("cropProtectionNews seed data", () => {
  it("contains at least five featured stories for the homepage carousel", () => {
    const featured = cropProtectionNews.filter((story) => story.featured);
    expect(featured.length).toBeGreaterThanOrEqual(5);
  });

  it("uses all required crop protection categories at least once", () => {
    const categories = new Set(cropProtectionNews.map((story) => story.category));

    expect(categories).toEqual(
      new Set([
        "fungicides",
        "insecticides",
        "herbicides",
        "biologicals",
        "resistance",
        "regulation",
        "research",
        "industry",
      ]),
    );
  });

  it("ensures every news item has a valid http link", () => {
    for (const story of cropProtectionNews) {
      expect(story.link.startsWith("http://") || story.link.startsWith("https://")).toBe(true);
    }
  });
});

describe("monthlyHighlights seed data", () => {
  it("includes at least three monthly highlights", () => {
    expect(monthlyHighlights.length).toBeGreaterThanOrEqual(3);
  });
});
