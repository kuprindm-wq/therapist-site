import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mariakuprina.ru";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/child-anger`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/family-stop-hearing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/need-therapist`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/parent-guilt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/parental-control`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/articles/similar-partners`,
      lastModified: new Date(),
    },
  ];
}