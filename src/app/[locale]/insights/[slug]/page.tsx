/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import {
  getArticleCategoryLabel,
  getArticleText,
  getPublishedArticleBySlug,
  getPublishedArticles,
  type ArticleContentImage,
  type ArticleLocale,
  type SiteArticle,
} from "../../../../lib/site-articles";

export const dynamic = "force-dynamic";

type Locale = "en" | "zh";

const pageCopy = {
  zh: {
    home: "首页",
    insights: "新闻洞察",
    back: "返回新闻洞察",
    categories: "文章分类",
    related: "相关推荐",
    contactEyebrow: "RONCO",
    contact: "与 RONCO 讨论你的业务需求",
    contactText:
      "无论是跨境物流、国际贸易，还是海外品牌合作，都可以通过邮件向我们说明你的业务背景、货物或产品情况与初步需求。",
    contactButton: "发送邮件至 RONCO",
    noRelated: "更多内容将持续更新。",
  },
  en: {
    home: "Home",
    insights: "Insights",
    back: "BACK TO INSIGHTS",
    categories: "Categories",
    related: "Related Insights",
    contactEyebrow: "RONCO",
    contact: "Discuss your business needs with RONCO",
    contactText:
      "For cross-border logistics, international trade or overseas brand partnership, email us with your business context, cargo or product information and initial requirements.",
    contactButton: "EMAIL RONCO",
    noRelated: "More insights will be published soon.",
  },
} as const;

function formatArticleDate(value: string | null, locale: Locale) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

function getCategoryOptions(locale: Locale) {
  return [
    {
      key: "company-news",
      label: locale === "zh" ? "公司动态" : "Company News",
    },
    {
      key: "industry-insights",
      label: locale === "zh" ? "行业洞察" : "Industry Insights",
    },
    {
      key: "global-logistics",
      label: locale === "zh" ? "全球物流" : "Global Logistics",
    },
    {
      key: "international-trade",
      label:
        locale === "zh"
          ? "国际贸易与品牌合作"
          : "International Trade & Brand Partnership",
    },
  ];
}

function getRelatedArticles(
  articles: SiteArticle[],
  currentArticle: SiteArticle,
): SiteArticle[] {
  const sameCategory = articles.filter(
    (article) =>
      article.id !== currentArticle.id &&
      article.category === currentArticle.category,
  );

  const otherArticles = articles.filter(
    (article) =>
      article.id !== currentArticle.id &&
      article.category !== currentArticle.category,
  );

  return [...sameCategory, ...otherArticles].slice(0, 3);
}

function renderInlineText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-[#17324f]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function renderTextBlock(block: string, key: string) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return null;
  }

  if (lines.length === 1 && lines[0].startsWith("### ")) {
    return (
      <h3
        key={key}
        className="pt-3 text-xl font-semibold leading-8 text-[#17324f] sm:text-2xl"
      >
        {renderInlineText(lines[0].slice(4))}
      </h3>
    );
  }

  if (lines.length === 1 && lines[0].startsWith("## ")) {
    return (
      <h2
        key={key}
        className="pt-5 text-2xl font-semibold leading-9 text-[#071629] sm:text-3xl"
      >
        {renderInlineText(lines[0].slice(3))}
      </h2>
    );
  }

  if (lines.length === 1 && lines[0].startsWith("# ")) {
    return (
      <h2
        key={key}
        className="pt-5 text-3xl font-semibold leading-tight text-[#071629] sm:text-4xl"
      >
        {renderInlineText(lines[0].slice(2))}
      </h2>
    );
  }

  if (lines.every((line) => /^[-*]\s+/.test(line))) {
    return (
      <ul key={key} className="list-disc space-y-2 pl-6 marker:text-[#a8721f]">
        {lines.map((line, index) => (
          <li key={`${key}-item-${index}`}>
            {renderInlineText(line.replace(/^[-*]\s+/, ""))}
          </li>
        ))}
      </ul>
    );
  }

  if (lines.every((line) => /^\d+\.\s+/.test(line))) {
    return (
      <ol key={key} className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#a8721f]">
        {lines.map((line, index) => (
          <li key={`${key}-item-${index}`}>
            {renderInlineText(line.replace(/^\d+\.\s+/, ""))}
          </li>
        ))}
      </ol>
    );
  }

  if (lines.every((line) => line.startsWith("> "))) {
    return (
      <blockquote
        key={key}
        className="border-l-4 border-[#d9ba78] bg-[#f8fafc] px-5 py-4 text-slate-600"
      >
        {lines.map((line, index) => (
          <p key={`${key}-quote-${index}`}>
            {renderInlineText(line.replace(/^>\s+/, ""))}
          </p>
        ))}
      </blockquote>
    );
  }

  return (
    <p key={key}>
      {lines.map((line, index) => (
        <span key={`${key}-line-${index}`}>
          {renderInlineText(line)}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "zh") {
    return {};
  }

  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const articleCopy = getArticleText(article, locale);

  return {
    title: `${articleCopy.title} | RONCO`,
    description: articleCopy.excerpt,
    openGraph: {
      title: `${articleCopy.title} | RONCO`,
      description: articleCopy.excerpt,
      images: article.cover_image_url ? [article.cover_image_url] : [],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = pageCopy[currentLocale];

  const [article, allArticles] = await Promise.all([
    getPublishedArticleBySlug(slug),
    getPublishedArticles(),
  ]);

  if (!article) {
    notFound();
  }

  const articleCopy = getArticleText(article, currentLocale as ArticleLocale);
  const relatedArticles = getRelatedArticles(allArticles, article);
  const categoryOptions = getCategoryOptions(currentLocale);
  const contentImages = Array.isArray(article.content_images)
    ? article.content_images
    : [];

  const contentImageMap = new Map(
    contentImages.map((image: ArticleContentImage) => [
      image.marker,
      image,
    ]),
  );

  const contentBlocks = articleCopy.content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const coverImage =
    article.cover_image_url || "/images/banners/insights-hero.png";

  return (
    <main className="bg-[#f3f6fa] text-[#071629]">
      <section className="border-b border-slate-200 bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label={currentLocale === "zh" ? "面包屑导航" : "Breadcrumb"}
            className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-slate-500"
          >
            <Link href={`/${currentLocale}`} className="transition hover:text-[#8f641e]">
              {copy.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/${currentLocale}/insights`}
              className="transition hover:text-[#8f641e]"
            >
              {copy.insights}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[22rem] truncate text-slate-700">
              {articleCopy.title}
            </span>
          </nav>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#a8721f]">
                {getArticleCategoryLabel(
                  article.category,
                  currentLocale as ArticleLocale,
                )}
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-5xl lg:text-6xl">
                {articleCopy.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {articleCopy.excerpt}
              </p>
            </div>

            <div className="border-l-2 border-[#d9ba78] bg-[#f8fafc] px-6 py-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#8f641e]">
                RONCO INSIGHTS
              </p>
              <time className="mt-3 block text-sm text-slate-600">
                {formatArticleDate(article.published_at, currentLocale)}
              </time>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <article className="overflow-hidden rounded-[2px] border border-slate-200 bg-white shadow-[0_12px_36px_rgba(7,22,41,0.08)]">
            <img
              src={coverImage}
              alt={articleCopy.coverAlt}
              className="aspect-[16/7] w-full object-cover"
            />

            <div className="px-7 py-9 sm:px-10 sm:py-12">
              <Link
                href={`/${currentLocale}/insights`}
                className="inline-flex items-center gap-2 border-b border-[#c28c32] pb-2 text-xs font-semibold tracking-[0.09em] text-[#8f641e] transition hover:border-[#071629] hover:text-[#071629]"
              >
                <span aria-hidden="true">←</span>
                {copy.back}
              </Link>

              <div className="mt-10 space-y-7 text-base leading-9 text-slate-700 sm:text-lg">
                {contentBlocks.map((block, index) => {
                  const markerMatch = block.match(/^\[\[(image-\d+)\]\]$/);
                  const contentImage = markerMatch
                    ? contentImageMap.get(markerMatch[1])
                    : undefined;

                  if (contentImage) {
                    const caption =
                      currentLocale === "zh"
                        ? contentImage.caption_zh
                        : contentImage.caption_en ||
                          contentImage.caption_zh;

                    return (
                      <figure
                        key={`${article.id}-${contentImage.id}`}
                        className="my-10 overflow-hidden rounded-[2px] border border-slate-200 bg-[#f8fafc]"
                      >
                        <img
                          src={contentImage.url}
                          alt={caption || articleCopy.title}
                          className="h-auto w-full object-cover"
                        />
                        {caption ? (
                          <figcaption className="border-t border-slate-200 px-5 py-3 text-center text-sm leading-6 text-slate-500">
                            {caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    );
                  }

                  return renderTextBlock(
                    block,
                    `${article.id}-content-${index}`,
                  );
                })}
              </div>
            </div>
          </article>

          <aside className="grid gap-6">
            <section className="rounded-[2px] bg-[#071629] p-6 text-white shadow-[0_12px_28px_rgba(7,22,41,0.18)]">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#d9ba78]">
                RONCO INSIGHTS
              </p>
              <h2 className="mt-4 text-xl font-semibold">{copy.categories}</h2>

              <nav className="mt-5 divide-y divide-white/10 border-t border-white/10">
                <Link
                  href={`/${currentLocale}/insights`}
                  className="flex items-center justify-between gap-4 py-3 text-sm text-slate-200 transition hover:text-[#ead29a]"
                >
                  {currentLocale === "zh" ? "全部内容" : "All Insights"}
                  <span aria-hidden="true">→</span>
                </Link>

                {categoryOptions.map((category) => (
                  <Link
                    key={category.key}
                    href={`/${currentLocale}/insights?category=${category.key}`}
                    className={`flex items-center justify-between gap-4 py-3 text-sm transition ${
                      category.key === article.category
                        ? "font-semibold text-[#ead29a]"
                        : "text-slate-300 hover:text-[#ead29a]"
                    }`}
                  >
                    {category.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </nav>
            </section>

            <section className="rounded-[2px] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(7,22,41,0.06)]">
              <h2 className="text-xl font-semibold text-[#071629]">{copy.related}</h2>

              {relatedArticles.length > 0 ? (
                <div className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                  {relatedArticles.map((relatedArticle) => {
                    const relatedCopy = getArticleText(
                      relatedArticle,
                      currentLocale as ArticleLocale,
                    );

                    return (
                      <Link
                        key={relatedArticle.id}
                        href={`/${currentLocale}/insights/${relatedArticle.slug}`}
                        className="group flex gap-3 py-4"
                      >
                        <img
                          src={
                            relatedArticle.cover_image_url ||
                            "/images/banners/insights-hero.png"
                          }
                          alt={relatedCopy.coverAlt}
                          className="h-16 w-20 shrink-0 object-cover"
                        />
                        <div>
                          <p className="text-[11px] font-semibold tracking-[0.09em] text-[#a8721f]">
                            {getArticleCategoryLabel(
                              relatedArticle.category,
                              currentLocale as ArticleLocale,
                            )}
                          </p>
                          <h3 className="mt-1 line-clamp-3 text-sm font-semibold leading-5 text-[#17324f] transition group-hover:text-[#8f641e]">
                            {relatedCopy.title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {copy.noRelated}
                </p>
              )}
            </section>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2px] border-l-4 border-[#d9ba78] bg-[#0b2745] px-7 py-9 text-white sm:px-10 sm:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#d9ba78]">
              {copy.contactEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              {copy.contact}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
              {copy.contactText}
            </p>
          </div>

          <a
            href="mailto:info@roncolog.com"
            className="inline-flex w-fit items-center justify-center border border-[#d9ba78] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#f3e2b7] transition hover:bg-[#d9ba78] hover:text-[#071629]"
          >
            {copy.contactButton}
          </a>
        </div>
      </section>
    </main>
  );
}
