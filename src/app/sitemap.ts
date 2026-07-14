import type { MetadataRoute } from "next";

const baseUrl = "https://www.roncolog.com";

const routes = [
  "",
  "/global-logistics",
  "/global-logistics/services",
  "/global-logistics/inquiry",
  "/global-logistics/knowledge",
  "/global-logistics/hs-code",
  "/international-trade",
  "/international-trade/import-export",
  "/international-trade/overseas-brand-partnership",
  "/international-trade/overseas-brand-partnership/children-nutrition",
  "/international-trade/overseas-brand-partnership/adult-nutrition",
  "/international-trade/overseas-brand-partnership/natural-skincare",
  "/international-trade/overseas-brand-partnership/sports-outdoor",
  "/international-trade/global-select",
  "/insights",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (["zh", "en"] as const).flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/insights" ? 0.8 : 0.7,
    }))
  );
}
