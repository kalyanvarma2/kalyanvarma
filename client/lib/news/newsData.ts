import { NewsItem } from "./models";

export const newsData: NewsItem[] = [
  {
    id: "news-001",
    title: "Discovery program reports a new broad-spectrum fungicidal active for cereals",
    source: "CropLife International",
    sourceType: "association",
    publishedAt: "2026-02-11T09:30:00Z",
    summary:
      "Early field programs report strong efficacy against multi-site pathogen pressure, with stewardship guidance focused on rotation and dose discipline.",
    category: "fungicides",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&auto=format&fit=crop",
    link: "https://croplife.org/news/new-fungicidal-active-cereals-2026/",
    featured: true,
    tags: ["mode-of-action", "cereal-diseases", "pipeline"],
    company: "CropLife member consortium",
    region: "Europe",
  },
  {
    id: "news-002",
    title: "Biological seed-treatment innovation improves stand establishment under moisture stress",
    source: "ISAAA",
    sourceType: "research",
    publishedAt: "2026-02-08T07:15:00Z",
    summary:
      "New biological formulations demonstrated stronger root vigor and more uniform emergence in multi-location validation plots.",
    category: "biologicals",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop",
    link: "https://www.isaaa.org/blog/entry/default.asp?NewsID=4567",
    featured: true,
    tags: ["biologicals", "seed-treatment", "yield-stability"],
    company: "BioAg startup alliance",
    region: "Global",
  },
  {
    id: "news-003",
    title: "Resistance monitoring networks call for synchronized regional scouting windows",
    source: "IRAC",
    sourceType: "association",
    publishedAt: "2026-01-14T10:20:00Z",
    summary:
      "Cross-border harmonization of resistance monitoring windows is expected to shorten time-to-response for emerging insecticide resistance clusters.",
    category: "resistance",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop",
    link: "https://irac-online.org/news/2026/regional-scouting-windows-resistance-monitoring/",
    featured: false,
    tags: ["resistance", "insecticides", "monitoring"],
    company: "IRAC",
    region: "Asia-Pacific",
  },
  {
    id: "news-004",
    title: "Regulatory draft introduces digital crop-protection label updates",
    source: "European Commission Agriculture",
    sourceType: "regulatory",
    publishedAt: "2026-01-19T08:10:00Z",
    summary:
      "Draft framework outlines digital labeling workflows for safer use instructions, traceability, and faster compliance updates.",
    category: "regulation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
    link: "https://agriculture.ec.europa.eu/news/digital-label-framework-crop-protection-2026_en",
    featured: true,
    tags: ["regulation", "digital-label", "compliance"],
    region: "Europe",
  },
  {
    id: "news-005",
    title: "Herbicide-resistant weed map updates highlight new hotspots in maize belts",
    source: "Weed Science Society",
    sourceType: "research",
    publishedAt: "2026-01-28T06:45:00Z",
    summary:
      "Updated spatial risk maps recommend stacking cultural controls with chemistry to reduce selection pressure in hotspot districts.",
    category: "herbicides",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&auto=format&fit=crop",
    link: "https://wssa.net/2026/weed-resistance-hotspot-update/",
    featured: true,
    tags: ["herbicides", "weed-resistance", "mapping"],
    region: "North America",
  },
  {
    id: "news-006",
    title: "RNAi insecticide validation programs report improved target selectivity",
    source: "AgFunder News",
    sourceType: "media",
    publishedAt: "2026-02-03T11:00:00Z",
    summary:
      "Latest translational reports indicate improved target precision and stronger stewardship pathways for resistance mitigation.",
    category: "insecticides",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1200&auto=format&fit=crop",
    link: "https://agfundernews.com/rnai-insecticide-validation-selectivity-2026",
    featured: true,
    tags: ["RNAi", "insecticides", "stewardship"],
    company: "AgBiotech consortium",
    region: "Global",
  },
  {
    id: "news-007",
    title: "University consortium launches AI-assisted disease phenotyping toolkit",
    source: "CGIAR",
    sourceType: "research",
    publishedAt: "2026-01-09T04:50:00Z",
    summary:
      "The toolkit combines imaging and molecular markers to accelerate crop protection screening decisions for breeders and advisors.",
    category: "digital-agriculture",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=1200&auto=format&fit=crop",
    link: "https://www.cgiar.org/news-events/news/ai-assisted-disease-phenotyping-2026/",
    featured: false,
    tags: ["AI", "research", "phenotyping"],
    region: "Global",
  },
  {
    id: "news-008",
    title: "Industry stewardship campaign expands safe-application certification",
    source: "FAO Partnerships",
    sourceType: "industry",
    publishedAt: "2026-01-05T12:00:00Z",
    summary:
      "Program scale-up emphasizes spray calibration, PPE compliance, and integrated decision protocols for farmer advisory networks.",
    category: "stewardship",
    image:
      "https://images.unsplash.com/photo-1595351298020-038700609878?w=1200&auto=format&fit=crop",
    link: "https://www.fao.org/partnerships/news/news-detail/en/c/1654321/",
    featured: false,
    tags: ["stewardship", "training", "safety"],
    region: "South Asia",
  },
  {
    id: "news-009",
    title: "Company R&D update: next-gen premix fungicide enters expanded field trials",
    source: "Bayer Crop Science Newsroom",
    sourceType: "industry",
    publishedAt: "2026-02-01T09:00:00Z",
    summary:
      "Expanded efficacy trials focus on resistance-risk management and compatibility with integrated crop protection programs.",
    category: "industry",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&auto=format&fit=crop",
    link: "https://www.cropscience.bayer.com/news/stories/2026/premix-fungicide-expanded-trials",
    featured: false,
    tags: ["R&D", "fungicides", "pipeline"],
    company: "Bayer Crop Science",
    region: "Global",
  },
];
