/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "业务范围",
    title: "围绕海运、空运、铁路、陆运及多式联运，协调跨境运输安排。",
    subtitle:
      "荣程国际根据货物属性、起运地、目的地、时效要求和交付条件，协助客户评估更适合的运输方式与服务方向。",
    primaryButton: "提交运输咨询",
    secondaryButton: "返回全球物流",

    overviewEyebrow: "业务范围",
    overviewTitle: "先确认真实运输需求，再判断适合的路线与运输方式",
    overviewText:
      "不同货物、不同目的地、不同交付要求，对运输方式、文件资料、费用结构和操作衔接都有不同影响。荣程国际会先了解货物名称、起运地、目的地、重量体积、包装方式和预计发运时间，再协助客户判断海运、空运、铁路、陆运或多式联运是否更适合。",

    transportEyebrow: "运输方式",
    transportTitle: "五种主要运输方式",
    transportItems: [
      {
        number: "01",
        title: "国际海运",
        text: "适合大批量、重货、整柜、拼箱及对成本敏感的跨境运输需求。",
        image: "/images/global-logistics/sea-freight-icon.png",
      },
      {
        number: "02",
        title: "国际空运",
        text: "适合时效要求较高、货值较高或需要快速交付的货物运输需求。",
        image: "/images/global-logistics/air-freight-icon.png",
      },
      {
        number: "03",
        title: "国际铁路运输",
        text: "适合部分中长距离线路，对时效和成本之间需要平衡的运输需求。",
        image: "/images/global-logistics/rail-freight-icon.png",
      },
      {
        number: "04",
        title: "国际陆运",
        text: "适合周边国家、口岸衔接、区域配送及门到门运输需求。",
        image: "/images/global-logistics/road-freight-icon.png",
      },
      {
        number: "05",
        title: "多式联运",
        text: "当单一运输方式无法满足交付要求时，协调海、空、铁、陆等方式衔接。",
        image: "/images/global-logistics/multimodal-icon.png",
      },
    ],

    regionEyebrow: "服务区域",
    regionTitle: "重点关注东南亚、美国、欧洲、非洲等发运方向",
    regionText:
      "下列内容为重点服务方向说明，不代表荣程国际拥有自营海外网络、固定直达线路或覆盖全部国家。具体运输方案需根据货物、路线、舱位、承运资源、目的地要求和实际审核结果确认。",
    regions: [
      {
        title: "东南亚重点方向",
        text: "当前重点关注越南、泰国、马来西亚、印度尼西亚、柬埔寨等市场，可结合海运、陆运及多式联运方向评估。",
      },
      {
        title: "美国方向",
        text: "根据货物类型、交付要求和时效预算，评估海运、空运及配套运输方式。",
      },
      {
        title: "欧洲方向",
        text: "结合货物属性、运输时效、成本要求和路线条件，评估海运、空运、铁路或多式联运路径。",
      },
      {
        title: "非洲方向",
        text: "围绕具体国家、目的港、清关资料、交付条件和当地操作资源逐票评估。",
      },
    ],

    scenarioEyebrow: "适用场景",
    scenarioTitle: "适合提交咨询的运输需求",
    scenarioItems: [
      "中国企业出口货物，需要评估海运、空运、铁路、陆运或多式联运方案",
      "货物起运地、目的地、体积重量已大致明确，需要初步判断路线和费用方向",
      "工厂、贸易商或品牌方需要安排跨境发运、补货或项目型运输",
      "货物有特殊尺寸、包装、装卸、文件或交付要求，需要提前沟通操作条件",
      "需要围绕东南亚、美国、欧洲、非洲等方向评估发运路径",
      "希望在提交正式运输咨询前，先梳理需要准备哪些资料",
    ],

    infoEyebrow: "提交资料",
    infoTitle: "运输咨询建议准备的信息",
    infoItems: [
      "货物名称、用途、材质或主要特性",
      "起运地、目的地、是否需要提货或送货",
      "重量、体积、件数和包装方式",
      "预计发货时间和期望到达时间",
      "贸易条款、收发货方信息和文件需求",
      "是否有特殊尺寸、装卸、包装或交付要求",
    ],

    hsEyebrow: "HS Code 与商品归类",
    hsTitle: "商品归类不能只凭一个名称判断",
    hsText:
      "HS Code、税率、监管条件和申报要求，通常需要结合商品名称、用途、材质、成分、规格型号、产品图片、出口国、进口国及实际申报规则判断。荣程国际可协助客户梳理应准备的信息，但最终归类、税率、监管条件和申报要求，以官方规则、报关行及实际审核结果为准。",
    hsItems: [
      "商品名称与具体用途",
      "材质、成分、结构或工作原理",
      "规格型号、包装、产品图片",
      "出口国、进口国及贸易方式",
      "产品说明书、检测资料或供应商资料",
      "报关行或海关实际审核要求",
    ],

    noteTitle: "服务边界说明",
    noteText:
      "荣程国际提供物流方案协调和执行支持。最终运输安排、价格、时效、清关要求、目的地交付及服务可用性，均需以具体货物条件、路线情况、承运资源、当地规则和实际审核结果为准。本页面不承诺固定报价、固定时效、固定线路、自营海外网络或覆盖全部国家。",

    ctaTitle: "已经有货物、路线或目的地需求？",
    ctaText:
      "请提交货物名称、起运地、目的地、重量体积、预计发运时间及联系方式。荣程国际会根据实际信息与您沟通下一步运输方案。",
    ctaButton: "提交运输咨询",
    backButton: "返回全球物流总览",
  },

  en: {
    eyebrow: "Service Scope",
    title:
      "Coordinating cross-border shipments across sea, air, rail, road and multimodal transport.",
    subtitle:
      "Based on cargo characteristics, origin, destination, timing and delivery requirements, RONCO helps assess suitable transport modes and service directions.",
    primaryButton: "Submit Freight Inquiry",
    secondaryButton: "Back to Global Logistics",

    overviewEyebrow: "Service Scope",
    overviewTitle:
      "Review real shipment needs before selecting a route or transport mode",
    overviewText:
      "Different cargo, destinations and delivery requirements affect transport mode, documentation, cost structure and operational coordination. RONCO first reviews cargo name, origin, destination, weight, volume, packaging and estimated shipping time, then helps assess whether sea freight, air freight, rail freight, road transport or multimodal transport is more suitable.",

    transportEyebrow: "Transport Modes",
    transportTitle: "Five major transport modes",
    transportItems: [
      {
        number: "01",
        title: "International Sea Freight",
        text: "Suitable for bulk cargo, heavy goods, full-container, LCL and cost-sensitive cross-border shipment needs.",
        image: "/images/global-logistics/sea-freight-icon.png",
      },
      {
        number: "02",
        title: "International Air Freight",
        text: "Suitable for higher time requirements, higher-value cargo or faster delivery needs.",
        image: "/images/global-logistics/air-freight-icon.png",
      },
      {
        number: "03",
        title: "International Rail Freight",
        text: "Suitable for certain medium-to-long distance routes where timing and cost need to be balanced.",
        image: "/images/global-logistics/rail-freight-icon.png",
      },
      {
        number: "04",
        title: "International Road Transport",
        text: "Suitable for neighboring countries, border connections, regional delivery and door-to-door movement.",
        image: "/images/global-logistics/road-freight-icon.png",
      },
      {
        number: "05",
        title: "Multimodal Transport",
        text: "When one transport mode is not enough, sea, air, rail and road can be coordinated together.",
        image: "/images/global-logistics/multimodal-icon.png",
      },
    ],

    regionEyebrow: "Service Regions",
    regionTitle:
      "Focused on Southeast Asia, the United States, Europe, Africa and related directions",
    regionText:
      "The following are priority service directions only. They do not mean RONCO has self-owned overseas networks, fixed direct routes or coverage of all countries. Specific transport plans depend on cargo, route, capacity, carrier resources, destination requirements and actual review results.",
    regions: [
      {
        title: "Southeast Asia Priority",
        text: "Currently focused on Vietnam, Thailand, Malaysia, Indonesia and Cambodia, with sea, road and multimodal directions assessed by case.",
      },
      {
        title: "United States",
        text: "Sea freight, air freight and supporting transport options are assessed based on cargo type, delivery requirements and timing budget.",
      },
      {
        title: "Europe",
        text: "Sea freight, air freight, rail freight or multimodal routes are assessed based on cargo profile, timing, cost and route conditions.",
      },
      {
        title: "Africa",
        text: "Each shipment is reviewed by destination country, port, customs documents, delivery conditions and local operational resources.",
      },
    ],

    scenarioEyebrow: "Use Cases",
    scenarioTitle: "Shipment needs suitable for inquiry",
    scenarioItems: [
      "Chinese companies exporting cargo and needing sea, air, rail, road or multimodal assessment",
      "Origin, destination, volume and weight are roughly known and route or cost direction needs to be reviewed",
      "Factories, traders or brands arranging cross-border shipping, replenishment or project-related movement",
      "Cargo with special dimensions, packaging, handling, documents or delivery requirements",
      "Shipments toward Southeast Asia, the United States, Europe, Africa or related markets",
      "Customers who need to understand what information should be prepared before inquiry",
    ],

    infoEyebrow: "Required Information",
    infoTitle: "Information recommended for freight inquiry",
    infoItems: [
      "Cargo name, usage, material or key characteristics",
      "Origin, destination, pickup or delivery requirements",
      "Weight, volume, package count and packaging method",
      "Estimated shipping time and expected arrival timing",
      "Trade terms, shipper/consignee information and document needs",
      "Special dimension, handling, packaging or delivery requirements",
    ],

    hsEyebrow: "HS Code & Classification",
    hsTitle: "Classification cannot be decided by product name alone",
    hsText:
      "HS Code, duty rate, regulatory conditions and declaration requirements usually depend on product name, usage, material, ingredients, specifications, product images, export country, import country and actual declaration rules. RONCO can help organize the information to prepare, but the final classification, duty rate, regulatory conditions and declaration requirements depend on official rules, customs brokers and actual review results.",
    hsItems: [
      "Product name and specific usage",
      "Material, ingredients, structure or working principle",
      "Specifications, packaging and product images",
      "Export country, import country and trade mode",
      "Product manuals, test documents or supplier materials",
      "Customs broker or authority review requirements",
    ],

    noteTitle: "Scope Note",
    noteText:
      "RONCO provides logistics planning coordination and execution support. Final transport arrangement, pricing, lead time, customs requirements, destination delivery and service availability depend on actual cargo conditions, route situation, carrier resources, local rules and review results. This page does not promise fixed pricing, fixed transit time, fixed routes, self-owned overseas networks or coverage of all countries.",

    ctaTitle: "Already have cargo, route or destination requirements?",
    ctaText:
      "Please submit cargo name, origin, destination, weight, volume, estimated shipping time and contact information. RONCO will review the actual details and discuss the next suitable step with you.",
    ctaButton: "Submit Freight Inquiry",
    backButton: "Back to Global Logistics",
  },
} as const;

export default async function GlobalLogisticsServicesPage({
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
        subtitle={copy.subtitle}
        image="/images/banners/global-logistics-services-hero.png"
        imagePosition="70% center"
        tone="light"
        contentAlign="right"
        overlay={false}
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hrefWithLocale("/global-logistics/freight-inquiry")}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.primaryButton}
          </Link>

          <Link
            href={hrefWithLocale("/global-logistics")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/85 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
          >
            {copy.secondaryButton}
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.overviewEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.overviewTitle}
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.overviewText}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f8fcfd,#edf7fb)] p-5 shadow-[0_18px_46px_rgba(31,93,122,0.10)]">
            <img
              src="/images/global-logistics/dongguan-service-map.png"
              alt={
                currentLocale === "zh"
                  ? "东莞出发重点服务方向示意地图"
                  : "Service direction map from Dongguan"
              }
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.transportEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.transportTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {copy.transportItems.map((item) => (
              <article
                key={item.number}
                className="rounded-[1.8rem] border border-[#d7e8ee] bg-white p-5 shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
              >
                <div className="overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,#eef8fb,#f4fffa)] p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-contain"
                  />
                </div>

                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.number}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-[#071629]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.regionEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.regionTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.regionText}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.regions.map((region, index) => (
              <article
                key={region.title}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(31,93,122,0.10)]"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-[#071629]">
                  {region.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {region.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.scenarioEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.scenarioTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.scenarioItems.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm"
              >
                <span className="mt-1 text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
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
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6"
              >
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
     
      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-[#cfe6ee] bg-white p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
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
              {copy.ctaButton}
            </Link>

            <Link
              href={hrefWithLocale("/global-logistics")}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
            >
              {copy.backButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}