/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "海外品牌引进与分销",
    title: "寻找适合中国市场的海外优质品牌。",
    subtitle:
      "荣程国际关注营养健康、天然护肤、运动户外和轻量生活方式产品，在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试与中国市场分销合作。",
    introEyebrow: "合作方式",
    introTitle: "先判断产品是否适合，再讨论如何进入中国市场",
    introText:
      "海外品牌进入中国市场，不只是找到一个买家或代理商。荣程国际会先了解品牌定位、产品资料、价格体系、合规条件和供应能力，再结合中国市场需求、跨境运输、市场测试和分销渠道，判断是否具备进一步合作基础。",
    categoryEyebrow: "重点合作方向",
    categoryTitle: "当前重点关注四类海外品牌合作方向",
    availableLabel: "查看独立页面",
    preparingLabel: "独立页面建设中",
    categories: [
      {
        id: "children-nutrition",
        number: "01",
        title: "儿童营养健康",
        text: "关注适合儿童日常营养补充、成长支持和家庭健康管理场景的产品方向。",
        examples: ["钙镁锌", "维生素 A&D", "DHA", "Omega-3", "藻油", "益生菌", "儿童多维"],
        image: "/images/global-select/global-select-nutrition.jpg",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
        ready: true,
      },
      {
        id: "adult-nutrition",
        number: "02",
        title: "成人营养健康",
        text: "关注成人日常营养、健康管理、职场人群和中老年生活场景下的营养产品方向。",
        examples: ["Omega-3", "钙片", "钙镁锌", "辅酶 Q10", "镁", "维生素 D", "叶黄素", "关节营养类产品"],
        image: "/images/global-select/global-select-quality-products.jpg",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
        ready: true,
      },
      {
        id: "natural-skincare",
        number: "03",
        title: "天然护肤产品",
        text: "关注天然成分、温和配方、植物成分和日常护肤场景下的优质护肤产品方向。",
        examples: ["洁面", "保湿", "面霜", "精华", "身体护理", "防晒", "植物成分护肤"],
        image: "/images/global-select/global-select-skincare.jpg",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
        ready: true,
      },
      {
        id: "sports-outdoor",
        number: "04",
        title: "运动与户外产品",
        text: "关注运动、轻户外、旅行和健康生活方式相关的功能型产品方向。",
        examples: ["轻量户外装备", "运动恢复用品", "徒步露营用品", "运动相关生活方式产品"],
        image: "/images/global-select/global-select-outdoor.jpg",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
        ready: true,
      },
    ],
    categoryNote:
      "以下内容为荣程国际当前重点关注的合作方向示例，不代表相关产品已取得品牌授权、已在中国销售或可直接购买。具体合作及上市安排以品牌授权、产品资料、合规条件和实际渠道计划为准。",
    cooperationEyebrow: "合作模式",
    cooperationTitle: "我们欢迎务实、透明、可持续的合作方式",
    cooperationItems: [
      {
        title: "B2B 批量采购与稳定供货",
        text: "适合愿意向中国合作伙伴提供正式商业报价、产品资料和稳定供货条件的品牌或供应商。",
      },
      {
        title: "跨境电商市场测试",
        text: "适合尚未完全确定中国市场投入节奏，但愿意先通过小规模产品测试了解市场反馈的品牌。",
      },
      {
        title: "中国市场分销合作",
        text: "在品牌授权、产品资料和合规条件具备时，进一步讨论渠道分销、市场推广和长期合作安排。",
      },
      {
        title: "产品资料与合规协同",
        text: "围绕成分、标签、检测报告、自由销售证明、授权资料等基础文件，先判断是否具备推进条件。",
      },
    ],
    readinessEyebrow: "合作前准备",
    readinessTitle: "品牌方或供应商建议先准备这些资料",
    readinessItems: [
      "公司介绍、品牌介绍和产品目录",
      "重点 SKU、规格、成分、适用场景和基础卖点说明",
      "商业报价、MOQ、供货方式和贸易条款",
      "产品图片、包装图片、标签和说明资料",
      "检测报告、自由销售证明、授权文件或其它合规资料",
      "是否已有中国市场合作方、线上渠道或既有销售安排",
    ],
    processEyebrow: "推进流程",
    processTitle: "从资料审核到市场测试，逐步推进",
    processItems: [
      {
        step: "01",
        title: "提交品牌与产品资料",
        text: "品牌方或供应商先提交公司、品牌、产品目录和合作预期。",
      },
      {
        step: "02",
        title: "初步判断中国市场适配性",
        text: "荣程国际结合产品定位、价格、资料完整度和市场需求做初步判断。",
      },
      {
        step: "03",
        title: "沟通供货与合作条件",
        text: "进一步讨论 MOQ、报价、授权、文件资料、运输和市场测试方式。",
      },
      {
        step: "04",
        title: "推进测试与分销合作",
        text: "在条件清楚后，再讨论市场测试、渠道分销和长期合作计划。",
      },
    ],
    note:
      "荣程国际不会在资料不完整、授权不清楚或合规条件不具备的情况下，承诺代理、采购、销售或上线。涉及营养健康、护肤等产品时，相关宣传和销售安排必须遵守中国市场合规要求。",
    ctaTitle: "希望与荣程国际沟通品牌合作？",
    ctaText:
      "请提交品牌介绍、产品目录、重点 SKU 和合作预期。荣程国际会先审核资料，再与您沟通适合的下一步方向。",
    ctaButton: "提交品牌合作资料",
    tradeButton: "返回国际贸易",
  },
  en: {
    eyebrow: "Overseas Brand Introduction & Distribution",
    title: "Identifying quality overseas brands suitable for the China market.",
    subtitle:
      "RONCO focuses on nutrition, natural skincare, sports, outdoor and lightweight lifestyle products. Subject to brand authorization, product documents and compliance conditions, we discuss product introduction, market testing and distribution cooperation in China.",
    introEyebrow: "Cooperation Approach",
    introTitle:
      "Review market suitability first, then discuss how to enter China",
    introText:
      "Entering the China market is not simply about finding a buyer or distributor. RONCO first reviews brand positioning, product documents, pricing, compliance conditions and supply capability, then assesses whether there is a practical basis for market testing, distribution and supply-chain cooperation.",
    categoryEyebrow: "Priority Categories",
    categoryTitle: "Current overseas brand cooperation categories",
    availableLabel: "View Category Page",
    preparingLabel: "Page Under Development",
    categories: [
      {
        id: "children-nutrition",
        number: "01",
        title: "Children Nutrition & Health",
        text: "Focused on children’s daily nutrition, growth support and family health-management scenarios.",
        examples: ["Calcium Magnesium Zinc", "Vitamin A&D", "DHA", "Omega-3", "Algal Oil", "Probiotics", "Children Multivitamins"],
        image: "/images/global-select/global-select-nutrition.jpg",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
        ready: true,
      },
      {
        id: "adult-nutrition",
        number: "02",
        title: "Adult Nutrition & Health",
        text: "Focused on adult nutrition, daily wellness, working adults and healthy ageing scenarios.",
        examples: ["Omega-3", "Calcium", "Calcium Magnesium Zinc", "CoQ10", "Magnesium", "Vitamin D", "Lutein", "Joint nutrition products"],
        image: "/images/global-select/global-select-quality-products.jpg",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
        ready: true,
      },
      {
        id: "natural-skincare",
        number: "03",
        title: "Natural Skincare Products",
        text: "Focused on natural ingredients, gentle formulas, plant-based positioning and daily skincare needs.",
        examples: ["Cleanser", "Moisturizer", "Face cream", "Serum", "Body care", "Sunscreen", "Plant-based skincare"],
        image: "/images/global-select/global-select-skincare.jpg",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
        ready: true,
      },
      {
        id: "sports-outdoor",
        number: "04",
        title: "Sports & Outdoor Products",
        text: "Focused on sports, light outdoor activity, travel and functional lifestyle products.",
        examples: ["Light outdoor gear", "Sports recovery products", "Hiking and camping goods", "Sports lifestyle products"],
        image: "/images/global-select/global-select-outdoor.jpg",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
        ready: true,
      },
    ],
    categoryNote:
      "The following are examples of RONCO’s current cooperation focus areas. They do not mean that related products have obtained brand authorization, are already sold in China or are available for direct purchase. Specific cooperation and launch arrangements depend on authorization, product documents, compliance conditions and actual channel plans.",
    cooperationEyebrow: "Cooperation Models",
    cooperationTitle:
      "We welcome practical, transparent and sustainable cooperation",
    cooperationItems: [
      {
        title: "B2B bulk purchase and stable supply",
        text: "For brands or suppliers able to provide formal pricing, product documents and stable supply conditions.",
      },
      {
        title: "Cross-border e-commerce market testing",
        text: "For brands that want to understand China-market feedback before committing to a larger launch plan.",
      },
      {
        title: "China-market distribution cooperation",
        text: "When authorization, documents and compliance conditions are ready, distribution and long-term market cooperation can be discussed.",
      },
      {
        title: "Product documentation and compliance coordination",
        text: "We review ingredients, labels, testing documents, free-sale certificates, authorization and related materials before moving forward.",
      },
    ],
    readinessEyebrow: "Before Cooperation",
    readinessTitle: "Recommended materials to prepare",
    readinessItems: [
      "Company profile, brand profile and product catalogue",
      "Key SKUs, specifications, ingredients, usage scenarios and product positioning",
      "Commercial price list, MOQ, supply model and trade terms",
      "Product photos, packaging photos, labels and product descriptions",
      "Test reports, free-sale certificates, authorization documents or other compliance materials",
      "Existing China-market partners, online channels or current sales arrangements if any",
    ],
    processEyebrow: "Process",
    processTitle: "From document review to market testing, step by step",
    processItems: [
      {
        step: "01",
        title: "Submit brand and product documents",
        text: "The brand owner or supplier submits company, brand, product catalogue and cooperation expectations.",
      },
      {
        step: "02",
        title: "Review China-market suitability",
        text: "RONCO reviews positioning, pricing, document completeness and market relevance.",
      },
      {
        step: "03",
        title: "Discuss supply and cooperation terms",
        text: "Further discussion covers MOQ, pricing, authorization, documents, logistics and market-testing approach.",
      },
      {
        step: "04",
        title: "Move into testing and distribution",
        text: "When conditions are clear, market testing, channel distribution and long-term plans can be discussed.",
      },
    ],
    note:
      "RONCO does not commit to agency, purchase, sales or launch when documents are incomplete, authorization is unclear or compliance conditions are not ready. For nutrition, skincare and related products, claims and sales arrangements must comply with China-market requirements.",
    ctaTitle: "Want to discuss brand cooperation with RONCO?",
    ctaText:
      "Submit your brand profile, product catalogue, key SKUs and cooperation expectations. RONCO will review the materials first and then discuss a suitable next step.",
    ctaButton: "Submit Brand Partnership Information",
    tradeButton: "Back to International Trade",
  },
} as const;

export default async function OverseasBrandPartnershipPage({
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
        image="/images/banners/brand-partnership-hero.png"
        imagePosition="74% 20%"
        tone="light"
        height="full"
      />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.introEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.introTitle}
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-7 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {copy.introText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.categoryEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.categoryTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                availableLabel={copy.availableLabel}
                preparingLabel={copy.preparingLabel}
                hrefWithLocale={hrefWithLocale}
              />
            ))}
          </div>

          <p className="mt-10 rounded-3xl border border-[#cfe6ee] bg-white p-6 text-sm leading-8 text-slate-600 shadow-sm">
            {copy.categoryNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.cooperationEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.cooperationTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {copy.cooperationItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-7"
              >
                <h3 className="text-xl font-semibold text-[#071629]">
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

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.readinessEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.readinessTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.readinessItems.map((item) => (
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
              href={`/${currentLocale}/international-trade/overseas-brand-partnership/inquiry`}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
            >
              {copy.ctaButton}
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

function CategoryCard({
  category,
  availableLabel,
  preparingLabel,
  hrefWithLocale,
}: {
  category: {
    id: string;
    number: string;
    title: string;
    text: string;
    examples: readonly string[];
    image: string;
    href: string;
    ready: boolean;
  };
  availableLabel: string;
  preparingLabel: string;
  hrefWithLocale: (path: string) => string;
}) {
  const cardContent = (
    <>
      <div className="overflow-hidden bg-[#edf7fb]">
        <img
          src={category.image}
          alt={category.title}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-7">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#39a773]">
          {category.number}
        </p>

        <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#071629]">
          {category.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {category.text}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {category.examples.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#cfe6ee] bg-[#f7fbfc] px-3 py-1.5 text-xs text-[#49697d]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${
              category.ready ? "text-[#176347]" : "text-slate-400"
            }`}
          >
            {category.ready ? availableLabel : preparingLabel}
          </span>

          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-lg font-medium transition ${
              category.ready
                ? "border-[#39a773] text-[#24775b] group-hover:bg-[#39a773] group-hover:text-white"
                : "border-slate-200 text-slate-300"
            }`}
          >
            →
          </span>
        </div>
      </div>
    </>
  );

  if (category.ready && category.href) {
    return (
      <Link
        id={category.id}
        href={hrefWithLocale(category.href)}
        className="group scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.16)]"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article
      id={category.id}
      className="group scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white/80 shadow-[0_14px_34px_rgba(31,93,122,0.08)]"
    >
      {cardContent}
    </article>
  );
}