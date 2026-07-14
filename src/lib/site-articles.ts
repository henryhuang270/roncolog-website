import "server-only";

import { supabaseServer } from "./supabase-server";

export type ArticleContentImage = {
  id: string;
  marker: string;
  url: string;
  path: string;
  caption_zh: string;
  caption_en: string;
};

export type SiteArticle = {
  id: string;
  slug: string;
  status: "draft" | "published" | "archived";
  category: string;
  is_featured: boolean;
  published_at: string | null;
  cover_image_url: string | null;
  cover_image_alt_zh: string | null;
  cover_image_alt_en: string | null;
  title_zh: string;
  excerpt_zh: string;
  content_zh: string;
  title_en: string;
  excerpt_en: string;
  content_en: string;
  content_images: ArticleContentImage[];
  created_at: string;
  updated_at: string;
};

export type ArticleLocale = "en" | "zh";

const articleFields = `
  id,
  slug,
  status,
  category,
  is_featured,
  published_at,
  cover_image_url,
  cover_image_alt_zh,
  cover_image_alt_en,
  title_zh,
  excerpt_zh,
  content_zh,
  title_en,
  excerpt_en,
  content_en,
  content_images,
  created_at,
  updated_at
`;

export async function getPublishedArticles(): Promise<SiteArticle[]> {
  const now = new Date().toISOString();

  const { data, error } = await supabaseServer
    .from("site_articles")
    .select(articleFields)
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load published site articles:", error.message);
    return [];
  }

  return (data ?? []) as SiteArticle[];
}

export async function getPublishedArticleBySlug(
  slug: string,
): Promise<SiteArticle | null> {
  const now = new Date().toISOString();

  const { data, error } = await supabaseServer
    .from("site_articles")
    .select(articleFields)
    .eq("slug", slug)
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .maybeSingle();

  if (error) {
    console.error("Failed to load site article:", error.message);
    return null;
  }

  return (data ?? null) as SiteArticle | null;
}

export function getArticleText(article: SiteArticle, locale: ArticleLocale) {
  return locale === "zh"
    ? {
        title: article.title_zh,
        excerpt: article.excerpt_zh,
        content: article.content_zh,
        coverAlt: article.cover_image_alt_zh || article.title_zh,
      }
    : {
        title: article.title_en,
        excerpt: article.excerpt_en,
        content: article.content_en,
        coverAlt: article.cover_image_alt_en || article.title_en,
      };
}

export function getArticleCategoryLabel(
  category: string,
  locale: ArticleLocale,
) {
  const labels: Record<string, { zh: string; en: string }> = {
    "company-news": {
      zh: "公司动态",
      en: "Company News",
    },
    "industry-insights": {
      zh: "行业洞察",
      en: "Industry Insights",
    },
    "global-logistics": {
      zh: "全球物流",
      en: "Global Logistics",
    },
    "international-trade": {
      zh: "国际贸易与品牌合作",
      en: "International Trade & Brand Partnership",
    },
  };

  const fallback = {
    zh: "新闻洞察",
    en: "Insights",
  };

  return (labels[category] ?? fallback)[locale];
}
