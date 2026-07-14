import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type Locale = "en" | "zh";

const siteUrl = "https://www.roncolog.com";

const localeMetadata: Record<Locale, Metadata> = {
  zh: {
    title: "荣程国际｜国际物流、国际贸易与海外品牌合作",
    description:
      "荣程国际总部位于东莞松山湖，以国际物流为基础，同时开展国际贸易、商品进出口及海外品牌引进与分销合作。",
    alternates: {
      canonical: `${siteUrl}/zh`,
      languages: {
        "zh-CN": `${siteUrl}/zh`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/zh`,
      },
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: `${siteUrl}/zh`,
      siteName: "荣程国际",
      title: "荣程国际｜国际物流、国际贸易与海外品牌合作",
      description:
        "以国际物流为基础，同时开展国际贸易、商品进出口及海外品牌引进与分销合作。",
    },
  },
  en: {
    title: "RONCO | Global Logistics, International Trade & Brand Partnerships",
    description:
      "RONCO is a Dongguan-based supply chain service company providing global logistics coordination, international trade support, and overseas brand introduction and distribution services in China.",
    alternates: {
      canonical: `${siteUrl}/en`,
      languages: {
        "zh-CN": `${siteUrl}/zh`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/zh`,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/en`,
      siteName: "RONCO",
      title: "RONCO | Global Logistics, International Trade & Brand Partnerships",
      description:
        "Global logistics coordination, international trade support, and overseas brand introduction and distribution services in China.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    return {};
  }

  return localeMetadata[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      {children}
      <SiteFooter locale={locale as Locale} />
    </>
  );
}
