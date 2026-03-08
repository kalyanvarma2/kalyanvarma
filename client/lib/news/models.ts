export type Category =
  | "fungicides"
  | "insecticides"
  | "herbicides"
  | "biologicals"
  | "resistance"
  | "regulation"
  | "research"
  | "industry"
  | "events"
  | "conferences"
  | "digital-agriculture"
  | "stewardship";

export type SourceType = "regulatory" | "industry" | "research" | "media" | "association";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceType: SourceType;
  publishedAt: string;
  summary: string;
  category: Category;
  image: string;
  link: string;
  featured: boolean;
  tags: string[];
  company?: string;
  region: string;
}

export interface FeaturedStory {
  id: string;
  newsItemId: string;
  priority: number;
  image: string;
  headline: string;
  summary: string;
  link: string;
  source: string;
  publishedAt: string;
}

export interface MonthlyHighlight {
  id: string;
  month: number;
  year: number;
  title: string;
  summary: string;
  category: Category;
  relatedNewsIds: string[];
}

export interface EventItem {
  id: string;
  name: string;
  organizer: string;
  location: string;
  startDate: string;
  endDate: string;
  topic: string;
  link: string;
  description: string;
  category: Category;
  region: string;
}

export interface SourceConfig {
  id: string;
  name: string;
  url: string;
  type: SourceType;
  active: boolean;
  categories: Category[];
  priority: number;
}
