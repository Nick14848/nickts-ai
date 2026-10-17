import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["en", "zh"].map((lang) => ({ url: `${site.url}/agent/${lang}`, lastModified: new Date("2026-10-17"), priority: 0.8 })),
  ];
}
