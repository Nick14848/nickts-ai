import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
