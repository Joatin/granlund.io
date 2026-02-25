import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: []
    },
    sitemap: ["https://granlund.io/sitemap.xml"]
  };
}
