import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type Locale = "en" | "zh";

const siteUrl = "https://www.roncolog.com";

const organizationJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: locale === "zh" ? "荣程国际" : "RONCO",
  alternateName: locale === "zh" ? "RONCO" : "荣程国际",
  legalName:
    locale === "zh"
      ? "荣程国际供应链科技（东莞）有限公司"
      : "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
  url: siteUrl,
  logo: `${siteUrl}/brand/ronco-logo-v4-light-bg.png`,
  email: "mailto:info@roncolog.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      locale === "zh"
        ? "松山湖高新技术产业开发区工业西路国际创意设计城2栋2单元503室"
        : "Room 503, Unit 2, Building 2, International Creative Design City (ICDC), West Industrial Road, Songshan Lake Science and Technology Industrial Park",
    addressLocality: locale === "zh" ? "东莞市" : "Dongguan",
    addressRegion: locale === "zh" ? "广东省" : "Guangdong",
    postalCode: "523808",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: "info@roncolog.com",
    availableLanguage: ["zh-CN", "en"],
  },
});


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

  const currentLocale = locale as Locale;
  const jsonLd = organizationJsonLd(currentLocale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader locale={currentLocale} />
      {children}
      <SiteFooter locale={currentLocale} />
    </>
  );
}
