import { EventItem } from "./models";

export const eventsData: EventItem[] = [
  {
    id: "ev-1",
    name: "Global Crop Protection Summit",
    organizer: "International Crop Protection Forum",
    location: "Berlin, Germany",
    startDate: "2026-04-18",
    endDate: "2026-04-20",
    topic: "Resistance strategy, stewardship, and regulatory adaptation",
    link: "https://example.org/events/global-crop-protection-summit-2026",
    description:
      "Industry, regulatory, and academic leaders present operational frameworks for resistance mitigation and safe deployment.",
    category: "conferences",
    region: "Europe",
  },
  {
    id: "ev-2",
    name: "Integrated Pest Management Symposium",
    organizer: "South Asia Plant Health Network",
    location: "Hyderabad, India",
    startDate: "2026-05-07",
    endDate: "2026-05-09",
    topic: "IPM case studies from farm advisory systems",
    link: "https://example.org/events/ipm-symposium-2026",
    description:
      "Researchers and extension advisors share high-impact IPM interventions and adoption metrics.",
    category: "events",
    region: "South Asia",
  },
  {
    id: "ev-3",
    name: "Biologicals & RNAi Innovation Summit",
    organizer: "AgBio Innovation Council",
    location: "Virtual",
    startDate: "2026-05-22",
    endDate: "2026-05-23",
    topic: "Biological products and RNAi translational pathways",
    link: "https://example.org/events/biologicals-rnai-summit-2026",
    description:
      "Focused sessions on efficacy evidence, manufacturing readiness, and stewardship integration.",
    category: "conferences",
    region: "Global",
  },
  {
    id: "ev-4",
    name: "Digital Agriculture for Crop Protection Workshop",
    organizer: "CGIAR Regional Hub",
    location: "Nairobi, Kenya",
    startDate: "2026-06-12",
    endDate: "2026-06-13",
    topic: "AI-based diagnostics and decision-support in crop protection",
    link: "https://example.org/events/digital-crop-protection-workshop-2026",
    description:
      "Practical workshop for students and researchers applying digital pipelines in field disease and pest decisions.",
    category: "digital-agriculture",
    region: "Africa",
  },
];
