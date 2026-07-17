/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import HomeBannerCarousel from "../../components/HomeBannerCarousel";

type Locale = "en" | "zh";

const introImage =
  "https://cwcqspxufigntuefwxqi.supabase.co/storage/v1/object/public/ronco-public-assets/homepage/banner/ronco-homepage-banner-v1.png";

const serviceDirectionMapImage =
  "/images/maps/dongguan-service-directions-map.png";

const pageContent = {
  zh: {
    introEyebrow: "荣程国际是什么公司",
    introTitle: "连接中国企业、全球市场与海外品牌",
    introDescription:
      "荣程国际的英文品牌名称为 RONCO，总部位于东莞松山湖。我们是一家以国际物流为基础，同时开展国际贸易与海外品牌引进及分销的供应链服务企业。我们协助中国企业处理跨境运输需求，根据货物、路线、时效及交付要求，协调海运、空运、铁路运输、陆运及多式联运；同时持续寻找海外优质品牌商品，推进产品引进、市场测试和中国市场分销。",
    introImageAlt: "国际物流与商品贸易协同",
    introCards: [
      {
        title: "全球物流",
        text: "海运、空运、铁路、陆运及多式联运协调",
        icon: "route",
        href: "/global-logistics",
      },
      {
        title: "国际贸易",
        text: "协助中国商品出海与海外商品进入中国",
        icon: "trade",
        href: "/international-trade",
      },
      {
        title: "海外品牌引进与分销",
        text: "连接海外优质品牌，推进引进与中国市场分销",
        icon: "brand",
        href: "/international-trade/overseas-brand-partnership",
      },
    ],
    logisticsEyebrow: "全球物流业务范围",
    logisticsTitle: "围绕货物、路线与交付需求，协调合适的运输方式",
    logisticsDescription:
      "荣程国际根据客户的货物类型、起运地、目的地、时效要求和交付方式，协助协调国际海运、空运、铁路运输、陆运及多式联运。",
    logisticsButton: "查看全球物流业务范围",
    transportModes: [
      {
        title: "国际海运",
        text: "适合整柜、拼箱及对成本敏感的大批量货物运输需求。",
      },
      {
        title: "国际空运",
        text: "适合对时效要求较高、货值较高或样品类货物运输需求。",
      },
      {
        title: "国际铁路运输",
        text: "适合部分中长距离路线中兼顾时效与成本的运输场景。",
      },
      {
        title: "国际陆运",
        text: "适合周边国家与区域性跨境运输及门到门衔接需求。",
      },
      {
        title: "多式联运",
        text: "根据路线与交付要求，组合多种运输方式完成货物流动。",
      },
    ],
    serviceMapAlt: "东莞出发重点服务方向示意图",
    tradeEyebrow: "国际贸易与海外品牌合作",
    tradeTitle: "从商品双向流通，到海外品牌进入中国市场",
    tradeDescription:
      "荣程国际围绕国际贸易、商品进出口、海外品牌引进与分销开展合作，帮助客户从真实产品、资料准备、供应链协同和市场测试开始推进。",
    tradeCards: [
      {
        title: "国际贸易",
        text: "协助中国商品进入海外市场，也协助海外优质商品进入中国市场。页面将重点展示产品、包装、资料、样品和供应链协同，而不是只停留在港口或货运画面。",
        image: "/images/banners/international-trade-hero.png",
        alt: "国际贸易与商品双向流通",
        button: "了解国际贸易",
        href: "/zh/international-trade",
      },
      {
        title: "海外品牌引进与分销",
        text: "面向优质海外品牌，围绕产品资料、合规条件、品牌授权、市场测试和中国市场分销合作进行务实沟通。",
        image: "/images/banners/brand-partnership-hero.png",
        alt: "海外品牌产品样品与合作资料",
        button: "咨询合作",
        href: "/zh/international-trade/overseas-brand-partnership",
      },
    ],
    finalCtaTitle: "有运输需求或合作方向？",
    finalCtaDescription:
      "告诉我们你的货物、路线、产品或品牌合作想法，荣程国际会从实际需求开始沟通下一步。",
    freightButton: "提交运输咨询",
    cooperationButton: "咨询合作",
  },
  en: {
    introEyebrow: "About RONCO",
    introTitle: "Connecting Chinese companies, global markets and overseas brands",
    introDescription:
      "RONCO is the operating brand of RONCO International Supply Chain Technology (Dongguan) Co., Ltd., headquartered in Songshan Lake, Dongguan. We are a supply-chain service company built on international logistics, while also developing international trade, overseas brand introduction and distribution. We help Chinese companies handle cross-border transportation needs by coordinating sea, air, rail, road and multimodal transportation based on cargo, routes, timing and delivery requirements. We also continue to identify quality overseas products and explore brand introduction, market testing and distribution opportunities in China.",
    introImageAlt: "International logistics and trade coordination",
    introCards: [
      {
        title: "Global Logistics",
        text: "Sea, air, rail, road and multimodal transportation coordination",
        icon: "route",
        href: "/global-logistics",
      },
      {
        title: "International Trade",
        text: "Supporting China-made products going overseas and overseas goods entering China",
        icon: "trade",
        href: "/international-trade",
      },
      {
        title: "Overseas Brand Partnership",
        text: "Connecting overseas brands with practical China market-entry discussions",
        icon: "brand",
        href: "/international-trade/overseas-brand-partnership",
      },
    ],
    logisticsEyebrow: "Global Logistics Scope",
    logisticsTitle:
      "Coordinating suitable transportation modes around cargo, routes and delivery needs",
    logisticsDescription:
      "RONCO helps coordinate sea, air, rail, road and multimodal transportation based on cargo type, origin, destination, timing and delivery requirements.",
    logisticsButton: "View Global Logistics Scope",
    transportModes: [
      {
        title: "International Sea Freight",
        text: "Suitable for FCL, LCL and larger-volume shipments where cost control matters.",
      },
      {
        title: "International Air Freight",
        text: "Suitable for time-sensitive, higher-value cargo or product sample shipments.",
      },
      {
        title: "International Rail Freight",
        text: "Suitable for selected mid-to-long-distance routes balancing cost and timing.",
      },
      {
        title: "International Road Transport",
        text: "Suitable for regional cross-border delivery and door-to-door connection needs.",
      },
      {
        title: "Multimodal Transport",
        text: "Combines different transportation modes based on route and delivery requirements.",
      },
    ],
    serviceMapAlt: "Key service directions from Dongguan",
    tradeEyebrow: "International Trade & Overseas Brand Partnership",
    tradeTitle:
      "From two-way product flow to overseas brands entering China",
    tradeDescription:
      "RONCO works across international trade, product import and export, overseas brand introduction and distribution, starting from real products, documentation, supply-chain coordination and market testing.",
    tradeCards: [
      {
        title: "International Trade",
        text: "We support China-made products reaching overseas markets and selected overseas goods entering China. This section focuses on products, packaging, documents, samples and supply-chain coordination rather than only port or freight visuals.",
        image: "/images/banners/international-trade-hero.png",
        alt: "International trade and two-way product flow",
        button: "Explore International Trade",
        href: "/en/international-trade",
      },
      {
        title: "Overseas Brand Introduction & Distribution",
        text: "For quality overseas brands, we discuss product documentation, compliance conditions, authorization, market testing and practical distribution cooperation in China.",
        image: "/images/banners/brand-partnership-hero.png",
        alt: "Overseas brand samples and cooperation materials",
        button: "Discuss Cooperation",
        href: "/en/international-trade/overseas-brand-partnership",
      },
    ],
    finalCtaTitle: "Have a logistics need or cooperation direction?",
    finalCtaDescription:
      "Tell us about your cargo, route, product or brand cooperation idea. RONCO will start from real requirements and discuss the next step.",
    freightButton: "Submit Freight Inquiry",
    cooperationButton: "Discuss Cooperation",
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
      title: "荣程国际｜国际物流、国际贸易与海外品牌合作",
      description:
        "荣程国际英文品牌名称为 RONCO，总部位于东莞松山湖，以国际物流为基础，同时开展国际贸易、商品进出口及海外品牌引进与分销。",
      alternates: {
        canonical: "https://www.roncolog.com/zh",
        languages: {
          "zh-CN": "https://www.roncolog.com/zh",
          en: "https://www.roncolog.com/en",
        },
      },
    };
  }

  return {
    title: "RONCO | Global Logistics, International Trade & Brand Partnerships",
    description:
      "RONCO is the operating brand of RONCO International Supply Chain Technology (Dongguan) Co., Ltd., providing logistics, trade and overseas brand partnership services.",
    alternates: {
      canonical: "https://www.roncolog.com/en",
      languages: {
        "zh-CN": "https://www.roncolog.com/zh",
        en: "https://www.roncolog.com/en",
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = pageContent[currentLocale];

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <HomeBannerCarousel locale={currentLocale} />

      <section id="business-overview" className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#eef7fb] p-3 shadow-[0_22px_60px_rgba(31,93,122,0.12)]">
            <img
              src={introImage}
              alt={copy.introImageAlt}
              className="aspect-[4/3] w-full rounded-[1.45rem] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.introEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.introTitle}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
              {copy.introDescription}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.introCards.map((card) => (
                <Link
                  key={card.title}
                  href={`/${currentLocale}${card.href}`}
                  aria-label={card.title}
                  className="group rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-5 transition hover:-translate-y-1 hover:border-[#a8dbc6] hover:bg-[#f3fff8] hover:shadow-[0_14px_34px_rgba(31,93,122,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39a773] focus-visible:ring-offset-2"
                >
                  <LineIcon type={card.icon} />

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-[#071629]">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {card.text}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#9fd5c0] text-[#24775b] transition group-hover:bg-[#39a773] group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
                {copy.logisticsEyebrow}
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
                {copy.logisticsTitle}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                {copy.logisticsDescription}
              </p>

              <Link
                href={`/${currentLocale}/global-logistics/services`}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0b3558] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_12px_28px_rgba(11,53,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0d426e]"
              >
                {copy.logisticsButton}
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_22px_60px_rgba(31,93,122,0.12)]">
              <img
                src={serviceDirectionMapImage}
                alt={copy.serviceMapAlt}
                className="w-full rounded-[1.45rem] object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {copy.transportModes.map((mode, index) => (
              <div
                key={mode.title}
                className="rounded-3xl border border-[#dcebf0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#9fd5c0] hover:shadow-[0_14px_36px_rgba(31,93,122,0.12)]"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-lg font-semibold text-[#071629]">
                  {mode.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {mode.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.tradeEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.tradeTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700">
              {copy.tradeDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {copy.tradeCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] shadow-sm transition hover:-translate-y-1 hover:border-[#9fd5c0] hover:shadow-[0_18px_48px_rgba(31,93,122,0.14)]"
              >
                <div className="overflow-hidden bg-[#eef7fb]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold text-[#071629]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {card.text}
                  </p>

                  <Link
                    href={card.href}
                    className="mt-7 inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:bg-[#ecfff5]"
                  >
                    {card.button}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-[#cfe6ee] bg-white p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.finalCtaTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              {copy.finalCtaDescription}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}/global-logistics/freight-inquiry`}
              className="inline-flex items-center justify-center rounded-full bg-[#0b3558] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#0d426e]"
            >
              {copy.freightButton}
            </Link>

            <Link
              href={`/${currentLocale}/international-trade/overseas-brand-partnership`}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-[#ecfff5] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-white"
            >
              {copy.cooperationButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function LineIcon({ type }: { type: string }) {
  if (type === "route") {
    return (
      <svg
        className="h-10 w-10 text-[#24775b]"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 34C17 22 30 26 36 14"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="34" r="4" stroke="currentColor" strokeWidth="2.6" />
        <circle cx="36" cy="14" r="4" stroke="currentColor" strokeWidth="2.6" />
        <path
          d="M20 13H12V21"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "trade") {
    return (
      <svg
        className="h-10 w-10 text-[#24775b]"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 17H31C35.4 17 39 20.6 39 25V26"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M35 22L39 26L43 22"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 31H17C12.6 31 9 27.4 9 23V22"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M13 26L9 22L5 26"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-10 w-10 text-[#24775b]"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 36V19C14 16.8 15.8 15 18 15H30C32.2 15 34 16.8 34 19V36"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M18 15C18.5 10.8 21 8 24 8C27 8 29.5 10.8 30 15"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M10 36H38"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19 25H29"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}