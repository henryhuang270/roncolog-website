/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "关于荣程国际",
    title: "以国际物流为基础，连接贸易、产品与海外品牌合作需求。",
    subtitle:
      "荣程国际总部位于东莞松山湖，围绕全球物流、国际贸易、海外品牌引进与分销开展供应链服务，协助客户把货物、产品资料和合作需求梳理成更清晰的执行路径。",
    contactButton: "联系我们",
    logisticsButton: "了解全球物流",

    overviewEyebrow: "公司定位",
    overviewTitle: "荣程国际是一家以国际物流为基础的供应链服务企业",
    overviewText:
      "荣程国际供应链科技（东莞）有限公司立足东莞松山湖，业务以国际物流为基础，同时开展国际贸易、海外品牌引进与分销合作。我们关注真实货物、真实路线、真实产品资料和可执行的合作条件，而不是脱离业务实际的空泛承诺。",

    facts: [
      {
        label: "总部位置",
        value: "东莞松山湖",
      },
      {
        label: "中文法定公司名称",
        value: "荣程国际供应链科技（东莞）有限公司",
      },
      {
        label: "英文法定公司名称",
        value: "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
      },
    ],

    businessEyebrow: "业务方向",
    businessTitle: "三条业务主线",
    businessItems: [
      {
        title: "全球物流",
        text: "根据货物、路线、时效和交付要求，协调海运、空运、铁路运输、陆运及多式联运方向。",
        image: "/images/banners/global-logistics-hero.png",
        href: "/global-logistics",
        button: "查看全球物流",
      },
      {
        title: "国际贸易",
        text: "协助中国商品出海，也协助海外优质商品进入中国市场，围绕产品资料、供应链和贸易路径推进沟通。",
        image: "/images/banners/international-trade-hero.png",
        href: "/international-trade",
        button: "查看国际贸易",
      },
      {
        title: "海外品牌引进与分销",
        text: "在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试和中国市场分销合作。",
        image: "/images/banners/brand-partnership-hero.png",
        href: "/international-trade/overseas-brand-partnership",
        button: "查看品牌合作",
      },
    ],

    scenariosEyebrow: "适合沟通的场景",
    scenariosTitle: "从一个具体需求开始，而不是从空泛方案开始",
    scenarios: [
      {
        number: "01",
        title: "中国企业有跨境运输需求",
        text: "客户已有货物、起运地、目的地、重量体积或预计发运时间，需要评估合适的运输方式。",
      },
      {
        number: "02",
        title: "中国商品希望进入海外市场",
        text: "工厂、贸易商或品牌方希望了解商品出口、运输、资料准备和目标市场沟通路径。",
      },
      {
        number: "03",
        title: "海外品牌希望了解中国市场",
        text: "海外品牌或供应商希望寻找中国合作伙伴，进行产品资料整理、市场测试和分销合作沟通。",
      },
      {
        number: "04",
        title: "项目涉及物流与贸易协同",
        text: "当运输、产品资料、贸易条款、清关要求和合作方式相互关联时，需要先梳理执行顺序。",
      },
    ],

    methodEyebrow: "工作方式",
    methodTitle: "我们先理解需求，再判断路径",
    methodItems: [
      {
        number: "01",
        title: "了解真实需求",
        text: "先确认货物、产品、路线、时间、资料和合作目标，避免直接套用模板方案。",
      },
      {
        number: "02",
        title: "梳理关键资料",
        text: "围绕货物信息、产品资料、贸易条款、授权条件、合规资料和联系信息进行整理。",
      },
      {
        number: "03",
        title: "评估可执行方向",
        text: "根据实际条件判断物流、贸易、品牌合作或分销路径是否具备推进基础。",
      },
      {
        number: "04",
        title: "推进沟通与执行",
        text: "在条件清楚后，再推进运输安排、资料沟通、合作洽谈和后续执行。",
      },
    ],

    boundaryEyebrow: "真实能力边界",
    boundaryTitle: "我们重视清楚表达，不做夸大承诺",
    boundaryText:
      "荣程国际可以协助客户处理跨境运输需求，协调不同运输方式，沟通商品进出口与海外品牌合作方向。具体运输方案、价格、时效、清关要求、品牌合作、产品引进和市场分销安排，均需根据货物条件、产品资料、品牌授权、合规要求和实际沟通结果确认。",
    boundaryItems: [
      "不承诺固定报价、固定时效或覆盖全部国家。",
      "不虚构全球直营网点、自营海外网络或海外仓储能力。",
      "不把尚未授权、尚未进口或尚未销售的产品写成已代理或已上市。",
      "健康、营养、护肤相关内容不做医疗疗效或夸大功效承诺。",
    ],

    ctaTitle: "有运输需求、贸易方向或品牌合作计划？",
    ctaText:
      "请先说明你的货物、产品、路线或合作背景。我们会根据实际信息判断下一步沟通方向。",
    ctaPrimary: "联系我们",
    ctaSecondary: "提交运输咨询",
  },

  en: {
    eyebrow: "About RONCO",
    title:
      "Built on international logistics, connecting trade, products and overseas brand cooperation needs.",
    subtitle:
      "RONCO is based in Dongguan Songshan Lake. We work across global logistics, international trade, overseas brand introduction and distribution, helping customers organize cargo, product documents and cooperation needs into clearer execution paths.",
    contactButton: "Contact Us",
    logisticsButton: "Global Logistics",

    overviewEyebrow: "Company Positioning",
    overviewTitle:
      "RONCO is a supply-chain service company built on international logistics",
    overviewText:
      "RONCO International Supply Chain Technology (Dongguan) Co., Ltd. is based in Dongguan Songshan Lake. Our business is built on international logistics, while also developing international trade, overseas brand introduction and distribution cooperation. We focus on real cargo, real routes, real product documents and executable cooperation conditions rather than broad promises detached from operation.",

    facts: [
      {
        label: "Headquarters",
        value: "Dongguan Songshan Lake",
      },
      {
        label: "Chinese Legal Name",
        value: "荣程国际供应链科技（东莞）有限公司",
      },
      {
        label: "English Legal Name",
        value: "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
      },
    ],

    businessEyebrow: "Business Directions",
    businessTitle: "Three core business lines",
    businessItems: [
      {
        title: "Global Logistics",
        text: "Coordinating sea, air, rail, road and multimodal transport directions based on cargo, routes, timing and delivery requirements.",
        image: "/images/banners/global-logistics-hero.png",
        href: "/global-logistics",
        button: "View Global Logistics",
      },
      {
        title: "International Trade",
        text: "Supporting China-made products going overseas and selected overseas goods entering China through product documents, supply-chain and trade-path communication.",
        image: "/images/banners/international-trade-hero.png",
        href: "/international-trade",
        button: "View International Trade",
      },
      {
        title: "Overseas Brand Introduction & Distribution",
        text: "Subject to brand authorization, product documents and compliance readiness, we discuss product introduction, market testing and China-market distribution cooperation.",
        image: "/images/banners/brand-partnership-hero.png",
        href: "/international-trade/overseas-brand-partnership",
        button: "View Brand Partnership",
      },
    ],

    scenariosEyebrow: "When to Talk with RONCO",
    scenariosTitle:
      "Start from one specific requirement, not from a broad proposal",
    scenarios: [
      {
        number: "01",
        title: "Chinese companies have cross-border shipment needs",
        text: "Customers already have cargo, origin, destination, weight, volume or estimated shipping time and need to assess suitable transport options.",
      },
      {
        number: "02",
        title: "China-made products need overseas market access",
        text: "Factories, traders or brands want to understand export, transport, document preparation and target-market communication paths.",
      },
      {
        number: "03",
        title: "Overseas brands want to understand the China market",
        text: "Overseas brands or suppliers seek China partners for product document preparation, market testing and distribution discussion.",
      },
      {
        number: "04",
        title: "Projects require logistics and trade coordination",
        text: "When transport, product documents, trade terms, customs requirements and cooperation models are linked, execution order should be clarified first.",
      },
    ],

    methodEyebrow: "How We Work",
    methodTitle: "We understand the need first, then assess the path",
    methodItems: [
      {
        number: "01",
        title: "Understand the real requirement",
        text: "We clarify cargo, product, route, timing, documents and cooperation objectives before using any standard approach.",
      },
      {
        number: "02",
        title: "Organize key information",
        text: "We organize cargo details, product documents, trade terms, authorization conditions, compliance materials and contact information.",
      },
      {
        number: "03",
        title: "Assess executable directions",
        text: "Based on actual conditions, we assess whether logistics, trade, brand cooperation or distribution paths are ready to proceed.",
      },
      {
        number: "04",
        title: "Advance communication and execution",
        text: "When conditions are clear, we move into transport arrangement, document communication, cooperation discussion and execution.",
      },
    ],

    boundaryEyebrow: "Operating Boundaries",
    boundaryTitle:
      "We value clear communication and do not make exaggerated promises",
    boundaryText:
      "RONCO can support cross-border shipment needs, coordinate different transport modes, and discuss product import/export and overseas brand cooperation directions. Specific logistics plans, pricing, timing, customs requirements, brand cooperation, product introduction and distribution arrangements depend on cargo conditions, product documents, brand authorization, compliance requirements and actual communication results.",
    boundaryItems: [
      "No promise of fixed quotation, fixed lead time or coverage of all countries.",
      "No claim of self-owned global offices, self-owned overseas network or overseas warehousing capability.",
      "No claim that unapproved, unimported or unsold products are already represented or launched.",
      "No medical-treatment claims or exaggerated health claims for nutrition, skincare or wellness-related content.",
    ],

    ctaTitle: "Have a shipment need, trade direction or brand cooperation plan?",
    ctaText:
      "Start by sharing your cargo, product, route or cooperation background. We will review the actual information and discuss the next suitable direction.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "Submit Freight Inquiry",
  },
} as const;

export default async function AboutPage({
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
        image="/images/banners/about-ronco-hero.png"
        imagePosition="72% center"
        tone="light"
        overlay={false}
        textPanel
      >
        <Link
          href={hrefWithLocale("/contact")}
          className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_10px_26px_rgba(11,111,153,0.24)] transition hover:-translate-y-0.5 hover:bg-[#176347]"
        >
          {copy.contactButton}
        </Link>

        <Link
          href={hrefWithLocale("/global-logistics")}
          className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/92 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#176347] shadow-[0_10px_24px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
        >
          {copy.logisticsButton}
        </Link>
      </PageHero>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.overviewEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.overviewTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.overviewText}
            </p>
          </div>

          <div className="grid gap-4">
            {copy.facts.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.label}
                </p>

                <p className="mt-3 text-base font-semibold leading-7 text-[#071629]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.businessEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.businessTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.businessItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
              >
                <div className="overflow-hidden bg-[#f7fbfc]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold leading-snug text-[#071629]">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[7.5rem] text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <Link
                    href={hrefWithLocale(item.href)}
                    className="mt-7 inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:bg-[#ecfff5]"
                  >
                    {item.button}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.scenariosEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.scenariosTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.scenarios.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(31,93,122,0.10)]"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#071629]">
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

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.methodEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.methodTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.methodItems.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.number}
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
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.boundaryEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.boundaryTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700">
              {copy.boundaryText}
            </p>
          </div>

          <div className="grid gap-4">
            {copy.boundaryItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#dcebf0] bg-white p-5"
              >
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-14 sm:px-8 lg:px-10">
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
              href={hrefWithLocale("/contact")}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
            >
              {copy.ctaPrimary}
            </Link>

            <Link
              href={hrefWithLocale("/global-logistics/freight-inquiry")}
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