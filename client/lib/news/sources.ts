import { SourceConfig } from "./models";

export const sources: SourceConfig[] = [
  {
    id: "source-croplife",
    name: "CropLife International",
    url: "https://croplife.org",
    type: "association",
    active: true,
    categories: ["fungicides", "insecticides", "stewardship", "industry"],
    priority: 1,
  },
  {
    id: "source-irac",
    name: "IRAC",
    url: "https://irac-online.org",
    type: "association",
    active: true,
    categories: ["resistance", "insecticides", "stewardship"],
    priority: 1,
  },
  {
    id: "source-ec",
    name: "European Commission Agriculture",
    url: "https://agriculture.ec.europa.eu",
    type: "regulatory",
    active: true,
    categories: ["regulation", "stewardship"],
    priority: 2,
  },
  {
    id: "source-cgiar",
    name: "CGIAR",
    url: "https://www.cgiar.org",
    type: "research",
    active: true,
    categories: ["research", "digital-agriculture", "biologicals"],
    priority: 2,
  },
  {
    id: "source-wssa",
    name: "Weed Science Society",
    url: "https://wssa.net",
    type: "research",
    active: true,
    categories: ["herbicides", "resistance", "research"],
    priority: 2,
  },
];
