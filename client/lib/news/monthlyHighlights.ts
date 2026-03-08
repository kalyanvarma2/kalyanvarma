import { MonthlyHighlight } from "./models";

export const monthlyHighlights: MonthlyHighlight[] = [
  {
    id: "mh-2026-02-1",
    month: 2,
    year: 2026,
    title: "Discovery-to-stewardship pipelines got tighter",
    summary:
      "Major updates across fungicides and RNAi programs show earlier stewardship planning integrated with trial design and advisory communication.",
    category: "stewardship",
    relatedNewsIds: ["news-001", "news-006", "news-009"],
  },
  {
    id: "mh-2026-01-1",
    month: 1,
    year: 2026,
    title: "Resistance management moved from reactive to predictive",
    summary:
      "Cross-region monitoring and geospatial updates are helping teams prioritize interventions before visible control failures emerge.",
    category: "resistance",
    relatedNewsIds: ["news-003", "news-005"],
  },
  {
    id: "mh-2026-01-2",
    month: 1,
    year: 2026,
    title: "Regulation and digital workflows gained momentum",
    summary:
      "Draft digital-label frameworks indicate a faster cadence for compliance, traceability, and safe-use guidance distribution.",
    category: "regulation",
    relatedNewsIds: ["news-004", "news-008"],
  },
];
