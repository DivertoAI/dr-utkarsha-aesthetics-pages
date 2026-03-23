import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/clinic-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/businesses`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [...staticRoutes, ...serviceRoutes];
}
