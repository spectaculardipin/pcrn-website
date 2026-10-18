import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pcrnepal.org";
  const lastModified = new Date("2026-09-29");

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/know-your-rights/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/focus-areas/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-involved/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];

  return routes;
}
