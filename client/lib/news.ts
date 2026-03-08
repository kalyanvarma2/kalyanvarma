export type NewsCategory =
  | "fungicides"
  | "insecticides"
  | "herbicides"
  | "biologicals"
  | "resistance"
  | "regulation"
  | "research"
  | "industry";

export interface NewsStory {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  category: NewsCategory;
  image: string;
  link: string;
  featured: boolean;
}

export interface MonthlyHighlight {
  id: string;
  title: string;
  summary: string;
  metric: string;
}

export const cropProtectionNews: NewsStory[] = [
  {
    id: "n1",
    title: "New fungicide rotation guidance issued for cereal disease pressure",
    source: "CropLife International",
    date: "2026-02-11",
    summary:
      "Updated recommendations emphasize mode-of-action rotation and timing precision to reduce resistance risk in high-pressure seasons.",
    category: "fungicides",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&auto=format&fit=crop",
    link: "https://www.croplife.org/",
    featured: true,
  },
  {
    id: "n2",
    title: "RNAi insecticide pipeline gains momentum in field-scale validation",
    source: "AgFunder News",
    date: "2026-02-03",
    summary:
      "Multiple programs reported encouraging efficacy and selectivity data, with focus on resistance stewardship and targeted delivery.",
    category: "insecticides",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&auto=format&fit=crop",
    link: "https://agfundernews.com/",
    featured: true,
  },
  {
    id: "n3",
    title: "Herbicide-resistant weed maps expanded across key maize and soybean belts",
    source: "Weed Science Society",
    date: "2026-01-28",
    summary:
      "New geospatial updates identify hotspots and suggest integrated control combinations beyond single chemistry dependence.",
    category: "herbicides",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&auto=format&fit=crop",
    link: "https://wssa.net/",
    featured: true,
  },
  {
    id: "n4",
    title: "Biological seed treatments show yield stability under variable moisture",
    source: "ISAAA",
    date: "2026-01-25",
    summary:
      "Consortium trials indicate stronger early vigor and improved root establishment when paired with nutrition planning.",
    category: "biologicals",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop",
    link: "https://www.isaaa.org/",
    featured: true,
  },
  {
    id: "n5",
    title: "Regulators publish draft framework for digital crop-protection label updates",
    source: "European Commission Agriculture",
    date: "2026-01-19",
    summary:
      "The proposal aims to streamline compliance updates and improve traceability for farmers, advisors, and distributors.",
    category: "regulation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
    link: "https://agriculture.ec.europa.eu/",
    featured: true,
  },
  {
    id: "n6",
    title: "Resistance monitoring networks call for synchronized regional scouting windows",
    source: "IRAC",
    date: "2026-01-14",
    summary:
      "Cross-border data harmonization is expected to improve response times for emerging insecticide resistance signals.",
    category: "resistance",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop",
    link: "https://irac-online.org/",
    featured: false,
  },
  {
    id: "n7",
    title: "Public-private research initiative launches next-gen disease phenotyping toolkit",
    source: "CGIAR",
    date: "2026-01-09",
    summary:
      "The toolkit integrates imaging and molecular markers to speed up disease severity scoring in breeding and protection programs.",
    category: "research",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=1200&auto=format&fit=crop",
    link: "https://www.cgiar.org/",
    featured: false,
  },
  {
    id: "n8",
    title: "Industry alliances announce stewardship campaign for safe application training",
    source: "FAO Partnerships",
    date: "2026-01-05",
    summary:
      "The campaign focuses on calibration, PPE usage, and integrated approaches to optimize outcomes and reduce misuse.",
    category: "industry",
    image:
      "https://images.unsplash.com/photo-1595351298020-038700609878?w=1200&auto=format&fit=crop",
    link: "https://www.fao.org/",
    featured: false,
  },
];

export const monthlyHighlights: MonthlyHighlight[] = [
  {
    id: "h1",
    title: "Resistance management moved to center stage",
    summary:
      "Across cereals and horticulture, advisors prioritized rotation programs and threshold-based interventions over calendar sprays.",
    metric: "3 major guidance updates",
  },
  {
    id: "h2",
    title: "Biologicals entered mainstream trial design",
    summary:
      "New field programs increasingly combine biologicals with conventional chemistry to improve resilience and performance stability.",
    metric: "12 multi-location trial reports",
  },
  {
    id: "h3",
    title: "Regulatory digitization accelerated",
    summary:
      "Draft digital labeling and traceability changes suggest faster update cycles for compliance and on-farm decision support.",
    metric: "2 policy consultations opened",
  },
];
