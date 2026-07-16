import type { MetadataRoute } from "next";

import { getPublishedJobs } from "@/lib/job-posts";
import { getPublishedArticles } from "@/lib/site-articles";

const baseUrl = "https://www.roncolog.com";
const locales = ["zh", "en"] as const;

const staticRoutes = [
  "",
  "/global-logistics",
  "/global-logistics/services",
  "/global-logistics/freight-inquiry",
  "/global-logistics/knowledge",
  "/global-logistics/hs-code",
  "/international-trade",
  "/international-trade/goods-import-export",
  "/international-trade/overseas-brand-partnership",
  "/international-trade/overseas-brand-partnership/inquiry",
  "/international-trade/overseas-brand-partnership/children-nutrition",
  "/international-trade/overseas-brand-partnership/adult-nutrition",
  "/international-trade/overseas-brand-partnership/natural-skincare",
  "/international-trade/overseas-brand-partnership/sports-outdoor",
  "/international-trade/ronco-global-select",
  "/insights",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
] as const;

function localizedEntry(
  route: string,
  locale: (typeof locales)[number],
  options?: {
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
    lastModified?: string | Date;
  },
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}/${locale}${route}`,
    ...(options?.lastModified
      ? { lastModified: options.lastModified }
      : {}),
    changeFrequency: options?.changeFrequency ?? "monthly",
    priority: options?.priority ?? 0.7,
    alternates: {
      languages: {
        "zh-CN": `${baseUrl}/zh${route}`,
        en: `${baseUrl}/en${route}`,
        "x-default": `${baseUrl}/en${route}`,
      },
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) =>
      localizedEntry(route, locale, {
        changeFrequency:
          route === ""
            ? "weekly"
            : route === "/insights" || route === "/careers"
              ? "weekly"
              : "monthly",
        priority:
          route === ""
            ? 1
            : route === "/global-logistics" ||
                route === "/international-trade"
              ? 0.9
              : route === "/insights"
                ? 0.8
                : 0.7,
      }),
    ),
  );

  const [articlesResult, jobsResult] = await Promise.allSettled([
    getPublishedArticles(),
    getPublishedJobs(),
  ]);

  const articleEntries =
    articlesResult.status === "fulfilled"
      ? locales.flatMap((locale) =>
          articlesResult.value.map((article) =>
            localizedEntry(`/insights/${article.slug}`, locale, {
              changeFrequency: "monthly",
              priority: 0.75,
              lastModified: article.published_at ?? undefined,
            }),
          ),
        )
      : [];

  const jobEntries =
    jobsResult.status === "fulfilled"
      ? locales.flatMap((locale) =>
          jobsResult.value.map((job) =>
            localizedEntry(`/careers/${job.slug}`, locale, {
              changeFrequency: "weekly",
              priority: 0.65,
            }),
          ),
        )
      : [];

  return [...staticEntries, ...articleEntries, ...jobEntries];
}
