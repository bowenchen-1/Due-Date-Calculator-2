import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/ivf`,
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];
}
