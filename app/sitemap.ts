import type { MetadataRoute } from "next";

const BASE_URL = "https://astha-shrivastava.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-09-24"),
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date("2026-09-24"),
    },
  ];
}
