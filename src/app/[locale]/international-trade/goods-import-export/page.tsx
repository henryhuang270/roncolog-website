/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";


type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "商品进出口",
    title: "协助中国商品出海，也协助海外商品进入中国。",
    subtitle:
      "荣程国际围绕真实产品、资料准备、供应链协同和跨境运输需求，协助客户推进商品双向流通。",
    introEyebrow: "双向贸易",
    introTitle: "从产品资料、贸易路径到跨境交付，协助推进商品流通",
    introText:
      "荣程国际关注商品本身、目标市场、合作条件、文件资料和物流执行。无论是中国商品进入海外市场，还是海外优质商品进入中国市场，我们都会先从产品资料和实际需求开始沟通，判断是否具备进一步推进的基础。",
    exportTitle: "中国商品出海",
    exportText:
      "面向中国工厂、品牌方和产品供应商，荣程国际可协助梳理产品资料、目标市场、贸易路径、物流方案和合作沟通方式，帮助客户更务实地评估海外市场机会。",
    exportItems: [
      "适合有出口意向的中国工厂、品牌方和贸易商",
      "协助整理产品资料、包装信息、规格参数和基础报价",
      "围绕目标国家、客户类型和运输方式评估合作路径",
      "协助对接跨境运输、文件准备和供应链衔接需求",
    ],
    importTitle: "海外商品进入中国",
    importText:
      "面向海外品牌、供应商和贸易伙伴，荣程国际关注适合中国市场的优质商品。在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试与分销合作沟通。",
    importItems: [
      "适合希望进入中国市场的海外品牌和供应商",
      "协助初步判断产品资料、商业报价和合作条件",
      "关注营养健康、天然护肤、运动户外、生活方式等优质消费品方向",
      "也保留一般贸易商品、工业设备、配件等未来合作空间",
    ],
    prepareTitle: "客户或合作方需要准备什么",
    prepareItems: [
      "产品名称、用途、材质、成分或规格型号",
      "产品图片、包装图片、目录或基础介绍资料",
      "目标出口国或进口国、预计数量和交付要求",
      "是否已有品牌授权、检测报告、合规资料或自由销售证明",
      "当前期望的合作方式，例如采购、供货、代理、分销或市场测试",
    ],
    processTitle: "我们通常如何推进",
    processItems: [
      {
        step: "01",
        title: "了解产品与需求",
        text: "先确认产品类型、贸易方向、目标市场和现有资料情况。",
      },
      {
        step: "02",
        title: "评估资料与路径",
        text: "结合产品、合规资料、运输方式和商业条件，判断是否具备推进基础。",
      },
      {
        step: "03",
        title: "沟通合作方式",
        text: "根据实际情况讨论采购、供货、市场测试、分销或供应链协同方案。",
      },
      {
        step: "04",
        title: "推进后续执行",
        text: "在资料和合作条件清楚后，再推进运输、文件、渠道和交付安排。",
      },
    ],
    note:
      "本页面仅说明荣程国际当前关注的商品进出口合作方向，不构成采购承诺、销售承诺、代理承诺、合规通过承诺或固定运输结果承诺。具体合作及执行安排，以产品资料、品牌授权、合规条件、运输条件和实际沟通结果为准。",
    ctaTitle: "有商品进出口需求？",
    ctaText:
      "请先告诉我们产品类型、贸易方向、目标市场和目前已有资料。荣程国际会根据实际情况判断下一步沟通方式。",
    contactButton: "联系我们",
    tradeButton: "返回国际贸易",
  },
  en: {
    eyebrow: "Product Import & Export",
    title: "Supporting China-made products going overseas and selected overseas goods entering China.",
    subtitle:
      "RONCO supports two-way product flow through real product information, documentation, supply-chain coordination and cross-border logistics discussion.",
    introEyebrow: "Two-Way Trade",
    introTitle:
      "Supporting product flow from documentation and trade pathways to cross-border delivery",
    introText:
      "RONCO focuses on real products, target markets, cooperation conditions, documentation and logistics execution. Whether China-made products are going overseas or selected overseas goods are entering China, we start from product information and actual requirements to assess whether there is a practical basis for further discussion.",
    exportTitle: "China-made products going overseas",
    exportText:
      "For Chinese manufacturers, brands and product suppliers, RONCO can help organize product information, target-market direction, trade pathways, logistics options and cooperation communication so that overseas opportunities can be assessed more practically.",
    exportItems: [
      "Suitable for Chinese factories, brands and trading companies with export intentions",
      "Support product information, packaging details, specifications and basic quotation preparation",
      "Assess cooperation paths around target countries, customer types and transport modes",
      "Coordinate cross-border transport, documentation and supply-chain connection needs",
    ],
    importTitle: "Overseas goods entering China",
    importText:
      "For overseas brands, suppliers and trading partners, RONCO looks for quality products suitable for the China market. Subject to authorization, product documents and compliance conditions, we discuss product introduction, market testing and distribution cooperation.",
    importItems: [
      "Suitable for overseas brands and suppliers exploring the China market",
      "Initial review of product information, commercial pricing and cooperation conditions",
      "Focus on nutrition, natural skincare, sports, outdoor and lifestyle consumer products",
      "Also keeps future space for general trade goods, industrial equipment and parts",
    ],
    prepareTitle: "Information to prepare",
    prepareItems: [
      "Product name, usage, materials, ingredients or model specifications",
      "Product photos, packaging photos, catalogue or basic introduction documents",
      "Target export or import country, estimated quantity and delivery requirements",
      "Brand authorization, test reports, compliance documents or free-sale certificates if available",
      "Expected cooperation model, such as purchase, supply, agency, distribution or market testing",
    ],
    processTitle: "How we usually proceed",
    processItems: [
      {
        step: "01",
        title: "Understand the product and need",
        text: "Confirm product type, trade direction, target market and available documents.",
      },
      {
        step: "02",
        title: "Review documents and pathway",
        text: "Assess product information, compliance materials, transport mode and commercial conditions.",
      },
      {
        step: "03",
        title: "Discuss cooperation model",
        text: "Discuss purchase, supply, market testing, distribution or supply-chain coordination based on the actual case.",
      },
      {
        step: "04",
        title: "Move into execution",
        text: "After documents and cooperation conditions are clear, coordinate transport, paperwork, channels and delivery.",
      },
    ],
    note:
      "This page explains RONCO’s current product import and export cooperation directions only. It does not constitute a purchase commitment, sales commitment, agency commitment, compliance approval commitment or fixed logistics outcome. Specific cooperation and execution depend on product documents, authorization, compliance conditions, transport conditions and actual communication.",
    ctaTitle: "Have a product import or export need?",
    ctaText:
      "Tell us about the product type, trade direction, target market and documents currently available. RONCO will review the situation and discuss the next step.",
    contactButton: "Contact Us",
    tradeButton: "Back to International Trade",
  },
} as const;

export default async function GoodsImportExportPage({
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

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
            <section className="bg-[#eef7fb] px-6 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white shadow-[0_20px_50px_rgba(31,93,122,0.12)] lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="relative min-h-[300px] lg:min-h-[520px]">
            <img
              src="/images/banners/international-trade-import-export-banner.png"
              alt={copy.title}
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#d89d2b]">
              {copy.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#071629] sm:text-5xl lg:text-[3.5rem]">
              {copy.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.introEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.introTitle}
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-700 sm:text-lg">
            {copy.introText}
          </p>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <TradeDirectionCard
            label="01"
            title={copy.exportTitle}
            text={copy.exportText}
            items={copy.exportItems}
            image="/images/banners/global-logistics-hero.png"
          />

          <TradeDirectionCard
            label="02"
            title={copy.importTitle}
            text={copy.importText}
            items={copy.importItems}
            image="/images/banners/brand-partnership-hero.png"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              TRADE READINESS
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.prepareTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.prepareItems.map((item) => (
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

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              TRADE PROCESS
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.processItems.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm"
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

          <p className="mt-10 rounded-3xl border border-[#d6e8ee] bg-white p-6 text-sm leading-8 text-slate-600">
            {copy.note}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-[#cfe6ee] bg-[linear-gradient(135deg,#eef8fb,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
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
              href={`/${currentLocale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
            >
              {copy.contactButton}
            </Link>

            <Link
              href={`/${currentLocale}/international-trade`}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
            >
              {copy.tradeButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TradeDirectionCard({
  label,
  title,
  text,
  items,
  image,
}: {
  label: string;
  title: string;
  text: string;
  items: readonly string[];
  image: string;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-white shadow-sm">
      <img src={image} alt="" className="aspect-[16/9] w-full object-cover" />

      <div className="p-7 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
          {label}
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
          {title}
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-700">{text}</p>

        <ul className="mt-7 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#39a773]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}