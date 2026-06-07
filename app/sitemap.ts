import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://sparksesl.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sparksesl.com/legal/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://sparksesl.com/legal/terms",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
