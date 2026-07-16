/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";
import {
  getArticleCategoryLabel,
  getArticleText,
  getPublishedArticles,
  type ArticleLocale,
  type SiteArticle,
} from "../../../lib/site-articles";

export const dynamic = "force-dynamic";

type Locale = "en" | "zh";

const categoryKeys = [
  "all",
  "company-news",
  "industry-insights",
  "global-logistics",
  "international-trade",
] as const;

type CategoryKey = (typeof categoryKeys)[number];

const pageCopy = {
  zh: {
    eyebrow: "RONCO 新闻洞察",
    title: "关注供应链、国际贸易与市场合作的真实变化。",
    subtitle:
      "这里发布 RONCO 的业务动态、跨境物流观察、国际贸易实践与海外品牌合作相关内容。",
    latestLabel: "RONCO INSIGHTS",
    latestTitle: "最新内容",
    count: "篇已发布内容",
    read: "阅读文章",
    emptyTitle: "新闻内容正在准备中。",
    emptyText:
      "RONCO 将在这里持续发布公司动态、行业观察与国际市场合作相关内容。",
    all: "全部内容",
    editorialEyebrow: "持续更新",
    editorialTitle: "让业务信息保持清晰、可追溯、可讨论。",
    editorialText:
      "RONCO 新闻洞察聚焦跨境物流、国际贸易、海外品牌合作及供应链协同中的实际问题。我们希望以更务实的内容，帮助合作伙伴理解市场、信息与执行之间的关系。",
    editorialPoints: [
      "公司动态与业务进展",
      "国际物流与供应链观察",
      "海外品牌合作与中国市场实践",
      "围绕真实业务场景的经验分享",
    ],
    contact: "联系 RONCO",
  },
  en: {
    eyebrow: "RONCO INSIGHTS",
    title: "Practical perspectives on supply chains, trade and market collaboration.",
    subtitle:
      "Explore RONCO updates, cross-border logistics observations, international trade practices and overseas brand partnership insights.",
    latestLabel: "RONCO INSIGHTS",
    latestTitle: "Latest insights",
    count: "published articles",
    read: "READ ARTICLE",
    emptyTitle: "Insights are being prepared.",
    emptyText:
      "RONCO will publish company updates, industry observations and international market collaboration content here.",
    all: "All insights",
    editorialEyebrow: "STAY INFORMED",
    editorialTitle: "Business information that is clear, practical and worth discussing.",
    editorialText:
      "RONCO Insights focuses on practical issues in cross-border logistics, international trade, overseas brand partnership and supply-chain coordination. We share grounded perspectives that connect market context with real execution.",
    editorialPoints: [
      "Company updates and business progress",
      "Global logistics and supply-chain observations",
      "Overseas brand partnership and China-market practice",
      "Practical perspectives from real business scenarios",
    ],
    contact: "CONTACT RONCO",
  },
} as const;

function formatArticleDate(value: string | null, locale: Locale) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function isCategoryKey(value: string): value is CategoryKey {
  return categoryKeys.includes(value as CategoryKey);
}

function getCategoryOptions(locale: Locale) {
  return [
    { key: "all" as const, label: pageCopy[locale].all },
    {
      key: "company-news" as const,
      label: locale === "zh" ? "公司动态" : "Company News",
    },
    {
      key: "industry-insights" as const,
      label: locale === "zh" ? "行业洞察" : "Industry Insights",
    },
    {
      key: "global-logistics" as const,
      label: locale === "zh" ? "全球物流" : "Global Logistics",
    },
    {
      key: "international-trade" as const,
      label:
        locale === "zh"
          ? "国际贸易与品牌合作"
          : "International Trade & Brand Partnership",
    },
  ];
}

function getArticleHref(locale: Locale, slug: string) {
  return `/${locale}/insights/${slug}`;
}

function ArticleCard({
  article,
  locale,
  readLabel,
}: {
  article: SiteArticle;
  locale: Locale;
  readLabel: string;
}) {
  const articleCopy = getArticleText(article, locale as ArticleLocale);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-[0_12px_36px_rgba(7,22,41,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(7,22,41,0.16)]">
      {article.cover_image_url ? (
        <img
          src={article.cover_image_url}
          alt={articleCopy.coverAlt}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-56 items-end bg-[radial-gradient(circle_at_78%_12%,rgba(217,186,120,0.34),transparent_36%),linear-gradient(135deg,#0d2b4b,#071629)] p-7">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#ead29a]">
            RONCO INSIGHTS
          </p>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 text-xs">
          <span className="font-semibold tracking-[0.11em] text-[#a8721f]">
            {getArticleCategoryLabel(article.category, locale as ArticleLocale)}
          </span>
          <time className="shrink-0 text-slate-500">
            {formatArticleDate(article.published_at, locale)}
          </time>
        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-snug text-[#071629]">
          {articleCopy.title}
        </h2>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
          {articleCopy.excerpt}
        </p>

        <Link
          href={getArticleHref(locale, article.slug)}
          className="mt-7 inline-flex w-fit items-center gap-2 border-b border-[#c28c32] pb-2 text-xs font-semibold tracking-[0.1em] text-[#8f641e] transition hover:border-[#071629] hover:text-[#071629]"
        >
          {readLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    return {};
  }

  const isZh = locale === "zh";
  const siteUrl = "https://www.roncolog.com";
  const canonicalUrl = `${siteUrl}/${locale}/insights`;

  return {
    title: isZh
      ? "新闻洞察｜国际物流、国际贸易与品牌合作｜荣程国际"
      : "Insights on Logistics, Trade & Brand Partnerships | RONCO",
    description: isZh
      ? "荣程国际新闻洞察持续发布国际物流、国际贸易、海外品牌合作、商品进出口、供应链操作及公司动态等实用内容。"
      : "RONCO Insights covers global logistics, international trade, overseas brand partnerships, product import-export, supply-chain operations and company updates.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "zh-CN": `${siteUrl}/zh/insights`,
        en: `${siteUrl}/en/insights`,
        "x-default": `${siteUrl}/en/insights`,
      },
    },
    openGraph: {
      type: "website",
      locale: isZh ? "zh_CN" : "en_US",
      alternateLocale: isZh ? ["en_US"] : ["zh_CN"],
      url: canonicalUrl,
      siteName: isZh ? "荣程国际" : "RONCO",
      title: isZh
        ? "新闻洞察｜国际物流、国际贸易与品牌合作｜荣程国际"
        : "Insights on Logistics, Trade & Brand Partnerships | RONCO",
      description: isZh
        ? "阅读荣程国际关于国际物流、国际贸易、海外品牌合作和供应链操作的实用内容。"
        : "Read RONCO insights on global logistics, international trade, overseas brand partnerships and supply-chain operations.",
    },
  };
}

export default async function InsightsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = pageCopy[currentLocale];
  const categoryInput = Array.isArray(resolvedSearchParams.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams.category;

  const selectedCategory =
    categoryInput && isCategoryKey(categoryInput) ? categoryInput : "all";

  const articles = await getPublishedArticles();
  const displayedArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const categories = getCategoryOptions(currentLocale);

  return (
    <main className="bg-[#f3f6fa] text-[#071629]">
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        image="/images/banners/insights-hero.png"
        imagePosition="68% center"
        tone="light"
      />

      <section className="border-b border-slate-200 bg-white px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#a8721f]">
                {copy.latestLabel}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#071629] sm:text-4xl">
                {copy.latestTitle}
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                {displayedArticles.length.toString().padStart(2, "0")} ·{" "}
                {copy.count}
              </p>
            </div>

            <nav
              aria-label={currentLocale === "zh" ? "新闻分类" : "Insight categories"}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {categories.map((category) => {
                const isActive = category.key === selectedCategory;
                const href =
                  category.key === "all"
                    ? `/${currentLocale}/insights`
                    : `/${currentLocale}/insights?category=${category.key}`;

                return (
                  <Link
                    key={category.key}
                    href={href}
                    className={`border-b-2 pb-2 text-sm font-medium transition ${
                      isActive
                        ? "border-[#c28c32] text-[#8f641e]"
                        : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#071629]"
                    }`}
                  >
                    {category.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {displayedArticles.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {displayedArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  locale={currentLocale}
                  readLabel={copy.read}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-dashed border-slate-300 bg-slate-50 px-7 py-16 text-center sm:px-12">
              <p className="text-2xl font-semibold text-[#071629]">{copy.emptyTitle}</p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {copy.emptyText}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2px] border border-[#dbe4ef] bg-[linear-gradient(110deg,#e9f2fb_0%,#f8fbff_49%,#e2edf8_100%)] px-7 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#a8721f]">
              {copy.editorialEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#071629] sm:text-4xl">
              {copy.editorialTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              {copy.editorialText}
            </p>

            <a
              href="mailto:info@roncolog.com"
              className="mt-8 inline-flex items-center justify-center bg-[#071629] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white transition hover:bg-[#1a3c63]"
            >
              {copy.contact}
            </a>
          </div>

          <ul className="grid gap-4 border-t border-[#c9d9e9] pt-7 text-sm text-[#17324f] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {copy.editorialPoints.map((point) => (
              <li key={point} className="flex gap-3 leading-7">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9ba78] text-xs font-bold text-[#071629]">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
