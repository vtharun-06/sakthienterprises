import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", SITE.rentalPath, "/about", "/contact", "/privacy"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));
}
