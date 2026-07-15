/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "全球物流",
    title: "围绕真实货物、路线与交付需求，制定物流方案。",
    intro:
      "荣程国际以国际物流为基础，协助中国企业处理跨境运输需求。我们会根据货物属性、起运地、目的地、时效要求和交付条件，协调海运、空运、铁路运输、陆运及多式联运方案。",
    primaryButton: "提交运输咨询",
    secondaryButton: "查看业务范围",
    overviewEyebrow: "全球物流总览",
    overviewTitle: "不是简单报价，而是先判断货物、路线与交付条件",
    overviewText:
      "不同货物、不同国家、不同交付要求，对运输方式、文件资料、时效、费用和操作衔接都有不同要求。荣程国际会先了解真实运输需求，再协助客户评估更适合的运输路径和操作安排。",
    serviceEyebrow: "运输方式",
    serviceTitle: "五种主要运输方式协调",
    services: [
      {
        number: "01",
        title: "国际海运",
        text: "适合大批量、重货、整柜或拼箱等对成本敏感的跨境运输需求。",
        icon: "/images/global-logistics/sea-freight-icon.png",
      },
      {
        number: "02",
        title: "国际空运",
        text: "适合时效要求较高、货值较高或需要快速交付的货物运输需求。",
        icon: "/images/global-logistics/air-freight-icon.png",
      },
      {
        number: "03",
        title: "国际铁路运输",
        text: "适合部分中长距离线路，对时效和成本之间需要平衡的运输需求。",
        icon: "/images/global-logistics/rail-freight-icon.png",
      },
      {
        number: "04",
        title: "国际陆运",
        text: "适合周边国家、口岸衔接、区域配送及门到门运输需求。",
        icon: "/images/global-logistics/road-freight-icon.png",
      },
      {
        number: "05",
        title: "多式联运",
        text: "当单一运输方式无法满足交付要求时，协调海、空、铁、陆等方式衔接。",
        icon: "/images/global-logistics/multimodal-icon.png",
      },
    ],
    mapEyebrow: "重点服务方向",
    mapTitle: "东莞出发的重点服务方向示意",
    mapText:
      "当前重点关注东南亚方向，包括越南、泰国、马来西亚、印度尼西亚、柬埔寨等市场；美国为第二重点方向，欧洲与非洲保留简洁区域连接。具体运输方案需结合货物、路线、舱位、时效和实际承运资源确认。",
    regions: [
      {
        title: "东南亚重点方向",
        text: "越南、泰国、马来西亚、印度尼西亚、柬埔寨",
      },
      {
        title: "美国方向",
        text: "根据货物类型和交付要求，评估海运、空运及配套运输方式。",
      },
      {
        title: "欧洲方向",
        text: "结合货物属性、路线条件和时效要求，评估可行运输路径。",
      },
      {
        title: "非洲方向",
        text: "围绕具体国家、港口、清关资料和交付条件逐票评估。",
      },
    ],
    infoEyebrow: "提交前准备",
    infoTitle: "客户提交运输咨询时，建议先准备这些信息",
    infoItems: [
      "货物名称、用途、材质或主要特性",
      "起运地、目的地、是否需要上门提货或送货",
      "重量、体积、件数、包装方式",
      "预计发货时间和期望到达时间",
      "贸易条款、收发货方信息及文件需求",
      "是否有特殊装卸、尺寸、包装或交付要求",
    ],
    processEyebrow: "服务方式",
    processTitle: "从货物信息到可执行安排，逐步推进",
    processItems: [
      {
        step: "01",
        title: "了解运输需求",
        text: "确认货物类型、路线、重量体积、时间要求、交付方式和现有资料。",
      },
      {
        step: "02",
        title: "评估运输路径",
        text: "结合海运、空运、铁路、陆运或多式联运，判断可行方向。",
      },
      {
        step: "03",
        title: "协调操作资源",
        text: "围绕提货、订舱、装卸、文件、运输衔接和交付安排进行协调。",
      },
      {
        step: "04",
        title: "跟进运输进度",
        text: "在执行过程中保持沟通，根据实际情况协助处理后续衔接问题。",
      },
    ],
    entryEyebrow: "栏目入口",
    entryTitle: "继续了解全球物流相关内容",
    entries: [
      {
        title: "业务范围",
        text: "查看海运、空运、铁路、陆运及多式联运的服务方向说明。",
        href: "/global-logistics/services",
        button: "查看业务范围",
      },
      {
        title: "运输咨询",
        text: "提交货物名称、起运地、目的地、重量体积和联系信息。",
        href: "/global-logistics/freight-inquiry",
        button: "提交运输咨询",
      },
      {
        title: "物流知识",
        text: "了解 EXW、FOB、CIF、DAP、DDP、计费重量等常见物流知识。",
        href: "/global-logistics/knowledge",
        button: "查看物流知识",
      },
      {
        title: "HS Code 辅助查询",
        text: "了解商品归类所需资料，最终编码及监管条件以实际审核为准。",
        href: "/global-logistics/hs-code",
        button: "了解商品归类",
      },
    ],
    note:
      "荣程国际提供物流方案协调和执行支持。最终运输安排、价格、时效、清关要求及服务可用性，均需以具体货物条件、路线情况、承运资源和实际审核结果为准。本页面不承诺固定报价、固定时效、固定线路或覆盖全部国家。",
    ctaTitle: "有跨境运输需求？",
    ctaText:
      "请先提交货物、路线、重量体积和预计发货时间。荣程国际会根据实际信息与您沟通适合的运输方案。",
    ctaPrimary: "提交运输咨询",
    ctaSecondary: "查看业务范围",
  },

  en: {
    eyebrow: "Global Logistics",
    title: "Logistics planning around real cargo, routes and delivery needs.",
    intro:
      "Built on international logistics, RONCO supports cross-border shipment needs for Chinese companies. Based on cargo characteristics, origin, destination, timing and delivery requirements, we coordinate sea freight, air freight, rail freight, road transport and multimodal options.",
    primaryButton: "Submit Freight Inquiry",
    secondaryButton: "View Service Scope",
    overviewEyebrow: "Logistics Overview",
    overviewTitle:
      "Not just a quote — first review the cargo, route and delivery conditions",
    overviewText:
      "Different cargo, countries and delivery requirements create different needs for transport mode, documents, timing, cost and operational coordination. RONCO first reviews the actual shipment details, then helps assess a practical route and execution approach.",
    serviceEyebrow: "Transport Modes",
    serviceTitle: "Five major transport modes we coordinate",
    services: [
      {
        number: "01",
        title: "International Sea Freight",
        text: "Suitable for bulk cargo, heavy goods, full-container or LCL shipments with cost-sensitive requirements.",
        icon: "/images/global-logistics/sea-freight-icon.png",
      },
      {
        number: "02",
        title: "International Air Freight",
        text: "Suitable for shipments with higher time requirements, higher value or faster delivery needs.",
        icon: "/images/global-logistics/air-freight-icon.png",
      },
      {
        number: "03",
        title: "International Rail Freight",
        text: "Suitable for certain medium-to-long distance routes that need a balance between time and cost.",
        icon: "/images/global-logistics/rail-freight-icon.png",
      },
      {
        number: "04",
        title: "International Road Transport",
        text: "Suitable for neighboring countries, border connections, regional delivery and door-to-door movement.",
        icon: "/images/global-logistics/road-freight-icon.png",
      },
      {
        number: "05",
        title: "Multimodal Transport",
        text: "When a single mode is not enough, sea, air, rail and road can be coordinated together.",
        icon: "/images/global-logistics/multimodal-icon.png",
      },
    ],
    mapEyebrow: "Priority Directions",
    mapTitle: "Service direction illustration from Dongguan",
    mapText:
      "Southeast Asia is a current priority direction, including Vietnam, Thailand, Malaysia, Indonesia and Cambodia. The United States is a second priority direction, while Europe and Africa remain simplified regional connection areas. Specific transport plans depend on cargo, route, capacity, timing and actual carrier resources.",
    regions: [
      {
        title: "Southeast Asia Priority",
        text: "Vietnam, Thailand, Malaysia, Indonesia and Cambodia",
      },
      {
        title: "United States",
        text: "Sea freight, air freight and supporting transport options are assessed by cargo and delivery needs.",
      },
      {
        title: "Europe",
        text: "Practical routes are assessed based on cargo profile, route conditions and timing needs.",
      },
      {
        title: "Africa",
        text: "Each shipment is reviewed by destination country, port, documents and delivery requirements.",
      },
    ],
    infoEyebrow: "Before Inquiry",
    infoTitle: "Information to prepare before submitting a freight inquiry",
    infoItems: [
      "Cargo name, usage, material or key characteristics",
      "Origin, destination, pick-up or delivery requirements",
      "Weight, volume, package count and packaging method",
      "Estimated shipping time and expected arrival timing",
      "Trade terms, shipper/consignee information and document needs",
      "Special handling, dimension, packaging or delivery requirements",
    ],
    processEyebrow: "How We Work",
    processTitle: "From shipment details to an executable arrangement",
    processItems: [
      {
        step: "01",
        title: "Understand the shipment",
        text: "Confirm cargo type, route, weight, volume, timing, delivery method and available documents.",
      },
      {
        step: "02",
        title: "Assess route options",
        text: "Review sea, air, rail, road or multimodal possibilities and identify workable directions.",
      },
      {
        step: "03",
        title: "Coordinate operations",
        text: "Coordinate pickup, booking, handling, documents, transport connections and delivery arrangements.",
      },
      {
        step: "04",
        title: "Follow shipment progress",
        text: "Maintain communication during execution and help coordinate the following operational steps.",
      },
    ],
    entryEyebrow: "Section Entries",
    entryTitle: "Continue exploring global logistics content",
    entries: [
      {
        title: "Service Scope",
        text: "View service directions for sea freight, air freight, rail freight, road transport and multimodal coordination.",
        href: "/global-logistics/services",
        button: "View Service Scope",
      },
      {
        title: "Freight Inquiry",
        text: "Submit cargo name, origin, destination, weight, volume and contact information.",
        href: "/global-logistics/freight-inquiry",
        button: "Submit Inquiry",
      },
      {
        title: "Logistics Knowledge",
        text: "Learn about EXW, FOB, CIF, DAP, DDP, chargeable weight and common logistics terms.",
        href: "/global-logistics/knowledge",
      },
      {
        title: "HS Code Lookup",
        text: "Understand documents needed for classification. Final code and regulatory conditions depend on actual review.",
        href: "/global-logistics/hs-code",
        button: "Learn Classification",
      },
    ],
    note:
      "RONCO provides logistics planning coordination and execution support. Final transport arrangement, pricing, lead time, customs requirements and service availability depend on actual cargo conditions, route situation, carrier resources and review results. This page does not promise fixed pricing, fixed transit time, fixed routes or coverage of all countries.",
    ctaTitle: "Have a cross-border shipment need?",
    ctaText:
      "Submit the cargo, route, weight, volume and estimated shipping time. RONCO will review the actual details and discuss a suitable logistics approach with you.",
    ctaPrimary: "Submit Freight Inquiry",
    ctaSecondary: "View Service Scope",
  },
} as const;


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "zh") {
    return {
      title: "全球物流服务｜海运、空运、铁路、陆运及多式联运｜荣程国际",
      description:
        "荣程国际根据货物属性、起运地、目的地、时效和交付要求，协助协调国际海运、空运、铁路运输、陆运及多式联运方案。",
      alternates: {
        canonical: "https://www.roncolog.com/zh/global-logistics",
        languages: {
          "zh-CN": "https://www.roncolog.com/zh/global-logistics",
          en: "https://www.roncolog.com/en/global-logistics",
        },
      },
    };
  }

  return {
    title: "Global Logistics | Sea, Air, Rail, Road & Multimodal Transport | RONCO",
    description:
      "RONCO coordinates sea freight, air freight, rail freight, road transport and multimodal options based on cargo, route, timing and delivery requirements.",
    alternates: {
      canonical: "https://www.roncolog.com/en/global-logistics",
      languages: {
        "zh-CN": "https://www.roncolog.com/zh/global-logistics",
        en: "https://www.roncolog.com/en/global-logistics",
      },
    },
  };
}

export default async function GlobalLogisticsPage({
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
        image="/images/banners/global-logistics-hero.png"
        imagePosition="70% center"
        tone="light"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hrefWithLocale("/global-logistics/freight-inquiry")}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.primaryButton}
          </Link>

          <Link
            href={hrefWithLocale("/global-logistics/services")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/85 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
          >
            {copy.secondaryButton}
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.overviewEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.overviewTitle}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-7 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {copy.overviewText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-4xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
        {copy.serviceEyebrow}
      </p>

      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
        {copy.serviceTitle}
      </h2>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {copy.services.map((service) => (
        <article
          key={service.number}
          className="rounded-[1.8rem] border border-[#d7e8ee] bg-white p-5 shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
        >
          <div className="overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,#eef8fb,#f4fffa)] p-4">
            <img
              src={service.icon}
              alt={service.title}
              className="h-40 w-full object-contain"
            />
          </div>

          <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#39a773]">
            {service.number}
          </p>

          <h3 className="mt-3 text-xl font-semibold leading-snug text-[#071629]">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {service.text}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.mapEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.mapTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700">
              {copy.mapText}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {copy.regions.map((region) => (
                <div
                  key={region.title}
                  className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-5"
                >
                  <h3 className="text-base font-semibold text-[#071629]">
                    {region.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {region.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f8fcfd,#edf7fb)] p-5 shadow-[0_18px_46px_rgba(31,93,122,0.10)]">
            <img
              src="/images/global-logistics/dongguan-service-map.png"
              alt={currentLocale === "zh" ? "东莞出发重点服务方向示意地图" : "Service direction map from Dongguan"}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
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
                className="rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.processEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.processItems.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.step}
                </p>

                <h3 className="mt-5 text-xl font-semibold text-[#071629]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 rounded-3xl border border-[#d6e8ee] bg-[#f7fbfc] p-6 text-sm leading-8 text-slate-600">
            {copy.note}
          </p>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.entryEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.entryTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.entries.map((entry) => (
              <Link
                key={entry.title}
                href={hrefWithLocale(entry.href)}
                className="group rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
              >
                <h3 className="text-xl font-semibold text-[#071629]">
                  {entry.title}
                </h3>

                <p className="mt-4 min-h-[6.5rem] text-sm leading-7 text-slate-600">
                  {entry.text}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#176347]">
                    {"button" in entry ? entry.button : currentLocale === "zh" ? "查看详情" : "Learn More"}
                  </span>

                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#39a773] text-lg font-medium text-[#24775b] transition group-hover:bg-[#39a773] group-hover:text-white">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-[#cfe6ee] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.ctaTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              {copy.ctaText}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={hrefWithLocale("/global-logistics/freight-inquiry")}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
            >
              {copy.ctaPrimary}
            </Link>

            <Link
              href={hrefWithLocale("/global-logistics/services")}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}