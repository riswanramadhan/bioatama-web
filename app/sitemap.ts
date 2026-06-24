import type { MetadataRoute } from "next";

import { SITE_URL } from "@/app/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-06-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
