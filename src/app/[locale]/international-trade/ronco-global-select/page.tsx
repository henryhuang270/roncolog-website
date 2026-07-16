/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";


type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "荣程全球精选",
    title: "商城正在建设中，敬请期待。",
    subtitle:
      "荣程全球精选将作为荣程国际未来面向优质海外商品展示、市场测试和复购承接的预留入口。目前商城尚未正式上线。",
    heroImageAlt: "荣程全球精选多品类产品方向展示",
    statusLabel: "当前状态",
    statusTitle: "荣程全球精选暂未开放购买",
    statusText:
      "当前页面仅用于说明未来商城方向，不代表相关产品已经取得品牌授权、已经在中国销售或可以直接购买。具体上线安排将根据品牌授权、产品资料、合规条件、供应链准备和渠道计划逐步推进。",
    focusEyebrow: "GLOBAL SELECT",
    focusTitle: "未来关注方向",
    focusText:
      "荣程全球精选将持续关注适合中国市场的优质海外商品，围绕健康生活与品质生活需求，逐步引入更多值得信赖的品牌与产品。",
    focusCards: [
      {
        number: "01",
        title: "营养健康产品",
        text: "关注营养补充、健康支持与日常健康管理类优质产品。",
        image: "/images/global-select/global-select-nutrition.jpg",
      },
      {
        number: "02",
        title: "天然护肤产品",
        text: "关注天然成分、温和配方与肌肤健康的护肤类产品。",
        image: "/images/global-select/global-select-skincare.jpg",
      },
      {
        number: "03",
        title: "运动与户外产品",
        text: "关注运动、户外与功能装备，支持健康与探索的生活方式。",
        image: "/images/global-select/global-select-outdoor.jpg",
      },
      {
        number: "04",
        title: "轻量生活方式产品",
        text: "关注出行、家居与日常生活场景下的品质商品。",
        image: "/images/global-select/global-select-lifestyle.jpg",
      },
      {
        number: "05",
        title: "其它适合中国市场的优质海外商品",
        text: "关注更多优质品类，持续发现适合中国市场的好产品。",
        image: "/images/global-select/global-select-quality-products.jpg",
      },
    ],
    cardNote:
      "以上方向为荣程全球精选未来关注领域的示例说明，具体合作与上线安排以品牌授权、合规资料与实际计划为准。",
    noteTitle: "重要说明",
    noteText:
      "荣程国际目前不会在本页面发布未经授权的真实品牌 Logo、真实品牌包装或容易造成授权误解的产品画面。后续如有正式合作和上线计划，将以品牌授权、合规资料和实际渠道安排为准。",
    ctaTitle: "有海外品牌或商品合作方向？",
    ctaText:
      "如果您是海外品牌方、供应商或合作伙伴，可以先提交品牌合作资料，与荣程国际沟通中国市场合作可能性。",
    partnershipButton: "提交品牌合作资料",
    tradeButton: "返回国际贸易",
  },
  en: {
    eyebrow: "RONCO Global Select",
    title: "The marketplace is under development. Stay tuned.",
    subtitle:
      "RONCO Global Select is a reserved entry for future product display, market testing and repeat-purchase support for selected overseas goods. The marketplace is not officially launched yet.",
    heroImageAlt: "RONCO Global Select multi-category product showcase",
    statusLabel: "Current Status",
    statusTitle: "RONCO Global Select is not open for purchase yet",
    statusText:
      "This page only explains a future marketplace direction. It does not mean that any related products have obtained brand authorization, are already sold in China or are available for direct purchase. Future launch plans will depend on brand authorization, product documents, compliance conditions, supply-chain readiness and channel planning.",
    focusEyebrow: "GLOBAL SELECT",
    focusTitle: "Future Focus Areas",
    focusText:
      "RONCO Global Select will continue to focus on quality overseas goods suitable for the China market, gradually introducing trustworthy brands and products around healthier and higher-quality living needs.",
    focusCards: [
      {
        number: "01",
        title: "Nutrition & Health Products",
        text: "Focused on daily nutrition, wellness support and health-management products.",
        image: "/images/global-select/global-select-nutrition.jpg",
      },
      {
        number: "02",
        title: "Natural Skincare Products",
        text: "Focused on natural ingredients, gentle formulas and skin-health-oriented products.",
        image: "/images/global-select/global-select-skincare.jpg",
      },
      {
        number: "03",
        title: "Sports & Outdoor Products",
        text: "Focused on sports, outdoor and functional products for active lifestyles.",
        image: "/images/global-select/global-select-outdoor.jpg",
      },
      {
        number: "04",
        title: "Lightweight Lifestyle Products",
        text: "Focused on travel, home and everyday lifestyle products with practical quality.",
        image: "/images/global-select/global-select-lifestyle.jpg",
      },
      {
        number: "05",
        title: "Other Quality Overseas Goods",
        text: "Focused on discovering more suitable overseas products for the China market.",
        image: "/images/global-select/global-select-quality-products.jpg",
      },
    ],
    cardNote:
      "The above areas are examples of RONCO Global Select’s future focus. Specific cooperation and launch arrangements depend on brand authorization, compliance documents and actual plans.",
    noteTitle: "Important Note",
    noteText:
      "RONCO will not display unauthorized real brand logos, real packaging or product visuals that may create authorization misunderstanding on this page. Any future launch will be subject to brand authorization, compliance documents and actual channel arrangements.",
    ctaTitle: "Have an overseas brand or product cooperation direction?",
    ctaText:
      "If you are an overseas brand owner, supplier or cooperation partner, you may submit brand partnership information and discuss China-market opportunities with RONCO.",
    partnershipButton: "Submit Brand Partnership Information",
    tradeButton: "Back to International Trade",
  },
} as const;

export default async function RoncoGlobalSelectPage({
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
            <section className="bg-[#eef7fb] px-6 pb-0 pt-8 sm:px-8 lg:px-10 lg:pt-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-t-[2rem] border border-b-0 border-[#d7e8ee] bg-white shadow-[0_20px_50px_rgba(31,93,122,0.12)]">
          <img
            src="/images/banners/ronco-global-select-banner.png"
            alt={copy.heroImageAlt}
            className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[500px]"
          />
        </div>
      </section>

      <section className="bg-white px-6 pb-20 pt-0 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-b-[2rem] border border-t-0 border-[#d7e8ee] bg-white px-6 py-10 shadow-[0_20px_50px_rgba(31,93,122,0.12)] sm:px-10 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#d89d2b]">
              {copy.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#071629] sm:text-5xl lg:text-[3.35rem]">
              {copy.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-7 shadow-sm sm:p-8">
            <p className="text-center text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.statusLabel}
            </p>

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#071629] sm:text-3xl">
              {copy.statusTitle}
            </h2>

            <p className="mt-5 text-center text-base leading-8 text-slate-700">
              {copy.statusText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#24775b]">
              {copy.focusEyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#071629] sm:text-5xl">
              {copy.focusTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              {copy.focusText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {copy.focusCards.map((card) => (
              <article
                key={card.number}
                className="group overflow-hidden rounded-[1.7rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.16)]"
              >
                <div className="overflow-hidden bg-[#edf7fb]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#39a773]">
                    {card.number}
                  </p>

                  <h3 className="mt-4 min-h-[3.2rem] text-xl font-semibold leading-snug text-[#071629]">
                    {card.title}
                  </h3>

                  <p className="mt-4 min-h-[5.4rem] text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#39a773] text-lg font-medium text-[#24775b] transition group-hover:bg-[#39a773] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl rounded-full border border-[#cfe6ee] bg-white px-6 py-4 text-center text-sm leading-7 text-slate-600 shadow-sm">
            {copy.cardNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            NOTE
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
            {copy.noteTitle}
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            {copy.noteText}
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
              {copy.partnershipButton}
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