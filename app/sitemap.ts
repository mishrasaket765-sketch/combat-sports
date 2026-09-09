import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return site.nav.map((i) => ({
    url: `${site.url}${i.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i.href === "/" ? 1 : 0.7,
  }));
}
