import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import FreightInquiryForm from "@/components/FreightInquiryForm";
import PageHero from "@/components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "运输咨询",
    title: "提交货物与路线信息，便于评估运输方案。",
    intro:
      "请尽量填写货物名称、起运地、目的地、重量、体积、件数、预计发货时间和联系方式。荣程国际会根据实际信息与您沟通适合的运输方式。",
    backButton: "返回全球物流",
    scopeButton: "查看业务范围",
    infoEyebrow: "填写前准备",
    infoTitle: "这些信息有助于更快判断运输方向",
    infoItems: [
      "货物名称、用途、材质或主要特性",
      "起运地、目的地、是否需要提货或送货",
      "重量、体积、件数和包装方式",
      "预计发货时间和期望到达时间",
      "贸易条款、收发货方信息和文件需求",
      "是否有特殊尺寸、装卸、包装或交付要求",
    ],
    formEyebrow: "运输需求表单",
    formTitle: "请填写您的运输需求",
    formText:
      "如部分信息尚未确认，也可以先填写已知内容。信息越完整，越有利于判断运输方式、路线和后续沟通。",
    sideTitle: "提交后会怎样？",
    sideItems: [
      "我们先查看货物和路线信息",
      "判断适合海运、空运、铁路、陆运或多式联运",
      "如信息不足，会联系您补充确认",
      "再根据实际条件沟通运输方向和下一步",
    ],
    note:
      "本页面提交的信息仅用于运输需求初步评估。最终报价、时效、舱位、清关要求和运输安排，均需结合具体货物、路线、承运资源和实际审核结果确认。",
  },

  en: {
    eyebrow: "Freight Inquiry",
    title: "Submit cargo and route information for logistics assessment.",
    intro:
      "Please provide cargo name, origin, destination, weight, volume, package count, estimated shipping time and contact details. RONCO will review the actual information before discussing suitable transport options.",
    backButton: "Back to Global Logistics",
    scopeButton: "View Service Scope",
    infoEyebrow: "Before You Submit",
    infoTitle: "Information that helps us assess your shipment",
    infoItems: [
      "Cargo name, usage, material or key characteristics",
      "Origin, destination, pickup or delivery requirements",
      "Weight, volume, package count and packaging method",
      "Estimated shipping time and expected arrival timing",
      "Trade terms, shipper/consignee information and document needs",
      "Special dimensions, handling, packaging or delivery requirements",
    ],
    formEyebrow: "Freight Inquiry Form",
    formTitle: "Tell us about your shipment",
    formText:
      "If some information is not confirmed yet, you can submit the details you already have. More complete information helps assess transport mode, route and next-step communication.",
    sideTitle: "What happens after submission?",
    sideItems: [
      "We review the cargo and route information first",
      "We assess sea, air, rail, road or multimodal options",
      "If information is missing, we may contact you for confirmation",
      "Next steps are discussed based on actual shipment conditions",
    ],
    note:
      "Information submitted through this page is used for preliminary shipment assessment only. Final quotation, lead time, capacity, customs requirements and transport arrangements depend on actual cargo, route, carrier resources and review results.",
  },
} as const;

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
  const canonicalUrl = `${siteUrl}/${locale}/global-logistics/freight-inquiry`;

  return {
    title: isZh
      ? "运输咨询｜提交跨境物流需求｜荣程国际"
      : "Freight Inquiry | Submit Cross-Border Shipping Needs | RONCO",
    description: isZh
      ? "向荣程国际提交货物名称、起运地、目的地、重量、体积、件数和预计发货时间，以便评估海运、空运、铁路、陆运或多式联运方向。"
      : "Submit cargo, origin, destination, weight, volume, package count and shipping time to RONCO for preliminary assessment of sea, air, rail, road or multimodal transport options.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "zh-CN": `${siteUrl}/zh/global-logistics/freight-inquiry`,
        en: `${siteUrl}/en/global-logistics/freight-inquiry`,
        "x-default": `${siteUrl}/en/global-logistics/freight-inquiry`,
      },
    },
    openGraph: {
      type: "website",
      locale: isZh ? "zh_CN" : "en_US",
      alternateLocale: isZh ? ["en_US"] : ["zh_CN"],
      url: canonicalUrl,
      siteName: isZh ? "荣程国际" : "RONCO",
      title: isZh
        ? "运输咨询｜提交跨境物流需求｜荣程国际"
        : "Freight Inquiry | Submit Cross-Border Shipping Needs | RONCO",
      description: isZh
        ? "提交跨境运输需求，由荣程国际根据实际货物与路线信息评估运输方向。"
        : "Submit a freight inquiry to RONCO for preliminary assessment based on your cargo and route details.",
    },
  };
}

export default async function FreightInquiryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = content[currentLocale];

  const hrefWithLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.intro}
        image="/images/banners/freight-inquiry-hero.png"
        imagePosition="70% center"
        tone="light"
        contentAlign="right"
        overlay={false}
        textPanel
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hrefWithLocale("/global-logistics")}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.backButton}
          </Link>

          <Link
            href={hrefWithLocale("/global-logistics/services")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/85 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
          >
            {copy.scopeButton}
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.infoEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.infoTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.infoItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm"
              >
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.formEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.formTitle}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              {copy.formText}
            </p>

            <div className="mt-8">
              <FreightInquiryForm locale={currentLocale} />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#dcebf0] bg-white p-7 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold leading-9 text-[#071629]">
              {copy.sideTitle}
            </h2>

            <div className="mt-7 grid gap-4">
              {copy.sideItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-5"
                >
                  <span className="mt-1 text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-[#f0d7a2] bg-[#fff8e8] p-5">
              <p className="text-sm leading-7 text-[#7a5a1e]">{copy.note}</p>
            </div>

            <div className="mt-7 rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-5">
              <p className="text-sm leading-7 text-slate-600">
                {currentLocale === "zh"
                  ? "如遇紧急或复杂运输需求，也可以直接发送邮件至："
                  : "For urgent or complex shipment needs, you may also email:"}
              </p>

              <a
                href="mailto:info@roncolog.com"
                className="mt-3 inline-flex text-sm font-semibold text-[#0b6f99] transition hover:text-[#176347]"
              >
                info@roncolog.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}