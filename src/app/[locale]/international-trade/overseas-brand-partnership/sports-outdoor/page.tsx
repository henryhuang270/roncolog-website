/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "运动与户外产品",
    title: "关注轻量户外、运动生活方式与实用户外装备。",
    subtitle:
      "荣程国际关注适合中国市场的海外运动与户外产品方向，在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试与合作沟通。",
    introEyebrow: "运动与户外产品",
    introTitle: "从产品实用性、场景适配和供应条件出发，判断合作可行性",
    introText:
      "运动与户外产品不只是看外观和概念，也要关注产品质量、使用场景、规格参数、包装资料、供应稳定性、价格区间和中国市场消费习惯。荣程国际会先审核品牌与产品资料，再判断是否适合进一步推进合作。",
    productsEyebrow: "产品方向示例",
    productsTitle: "当前关注的运动与户外产品方向",
    productsText:
      "以下为无真实品牌 Logo 的产品方向示例，用于说明荣程国际当前关注的运动与户外合作范围，不代表相关产品已取得品牌授权、已在中国销售或可以直接购买。",
    products: [
      {
        title: "轻量户外背包",
        desc: "关注徒步、露营、短途旅行和轻量户外场景下的背包产品方向。",
        image: "/images/sports-outdoor/outdoor-backpack-gear.png",
      },
      {
        title: "专业徒步鞋",
        desc: "关注徒步、登山、户外行走场景下的功能鞋类产品方向。",
        image: "/images/sports-outdoor/hiking-boots.png",
      },
      {
        title: "登山杖",
        desc: "关注徒步、登山和长距离行走场景下的辅助装备方向。",
        image: "/images/sports-outdoor/trekking-poles.png",
      },
      {
        title: "户外冲锋衣",
        desc: "关注防风、防雨、轻量出行和山地户外活动相关的服装产品方向。",
        image: "/images/sports-outdoor/outdoor-shell-jacket.png",
      },
      {
        title: "户外头灯",
        desc: "关注露营、夜间行走、应急照明和户外工具类产品方向。",
        image: "/images/sports-outdoor/headlamp.png",
      },
      {
        title: "露营帐篷",
        desc: "关注家庭露营、轻量露营和户外休闲场景下的帐篷产品方向。",
        image: "/images/sports-outdoor/camping-tent.png",
      },
      {
        title: "睡袋",
        desc: "关注露营、徒步旅行和户外住宿场景下的睡袋产品方向。",
        image: "/images/sports-outdoor/sleeping-bag.png",
      },
      {
        title: "保温水壶",
        desc: "关注户外饮水、旅行携带和日常运动生活方式相关产品方向。",
        image: "/images/sports-outdoor/insulated-water-bottle.png",
      },
      {
        title: "户外太阳镜",
        desc: "关注徒步、登山、旅行和户外活动场景下的太阳镜产品方向。",
        image: "/images/sports-outdoor/outdoor-sunglasses.png",
      },
    ],
    noteTitle: "合作说明",
    noteText:
      "运动与户外产品需要结合实际功能、材质、规格、安全说明、使用场景、包装资料和供应条件进行判断。荣程国际不会在授权不清楚、资料不完整或合作条件不明确的情况下，承诺代理、采购、销售或上线。",
    ctaTitle: "有运动与户外产品合作方向？",
    ctaText:
      "欢迎提交品牌资料、产品目录、重点 SKU 和合作预期。荣程国际会先审核资料，再与您沟通下一步合作方向。",
    ctaButton: "合作咨询",
    backButton: "返回海外品牌引进与分销",
  },

  en: {
    eyebrow: "Sports & Outdoor Products",
    title: "Focused on lightweight outdoor gear, sports lifestyle and practical equipment.",
    subtitle:
      "RONCO focuses on overseas sports and outdoor product directions suitable for the China market. Subject to brand authorization, product documents and compliance conditions, we discuss product introduction, market testing and cooperation opportunities.",
    introEyebrow: "Sports & Outdoor",
    introTitle:
      "Review product practicality, scenario fit and supply conditions before cooperation",
    introText:
      "Sports and outdoor products should be reviewed not only by appearance and concept, but also by product quality, usage scenarios, specifications, packaging documents, supply stability, price range and China-market consumer habits. RONCO reviews brand and product materials first before deciding whether further cooperation discussion is practical.",
    productsEyebrow: "Product Direction Examples",
    productsTitle: "Current sports and outdoor product directions",
    productsText:
      "The following are non-branded product direction examples. They explain RONCO’s current focus areas and do not mean that related products have obtained authorization, are already sold in China or are available for direct purchase.",
    products: [
      {
        title: "Light Outdoor Backpacks",
        desc: "Focused on backpack product directions for hiking, camping, short trips and lightweight outdoor scenarios.",
        image: "/images/sports-outdoor/outdoor-backpack-gear.png",
      },
      {
        title: "Hiking Boots",
        desc: "Focused on functional footwear directions for hiking, mountaineering and outdoor walking scenarios.",
        image: "/images/sports-outdoor/hiking-boots.png",
      },
      {
        title: "Trekking Poles",
        desc: "Focused on support-equipment directions for hiking, mountaineering and long-distance walking.",
        image: "/images/sports-outdoor/trekking-poles.png",
      },
      {
        title: "Outdoor Shell Jackets",
        desc: "Focused on windproof, rainproof and lightweight apparel directions for mountain and outdoor activities.",
        image: "/images/sports-outdoor/outdoor-shell-jacket.png",
      },
      {
        title: "Headlamps",
        desc: "Focused on camping, night walking, emergency lighting and outdoor tool product directions.",
        image: "/images/sports-outdoor/headlamp.png",
      },
      {
        title: "Camping Tents",
        desc: "Focused on tent product directions for family camping, lightweight camping and outdoor leisure.",
        image: "/images/sports-outdoor/camping-tent.png",
      },
      {
        title: "Sleeping Bags",
        desc: "Focused on sleeping-bag product directions for camping, hiking trips and outdoor stays.",
        image: "/images/sports-outdoor/sleeping-bag.png",
      },
      {
        title: "Insulated Water Bottles",
        desc: "Focused on outdoor hydration, travel carry and daily sports lifestyle product directions.",
        image: "/images/sports-outdoor/insulated-water-bottle.png",
      },
      {
        title: "Outdoor Sunglasses",
        desc: "Focused on sunglasses product directions for hiking, mountaineering, travel and outdoor activities.",
        image: "/images/sports-outdoor/outdoor-sunglasses.png",
      },
    ],
    noteTitle: "Cooperation Note",
    noteText:
      "Sports and outdoor products should be reviewed based on actual function, materials, specifications, safety information, usage scenarios, packaging documents and supply conditions. RONCO does not commit to agency, purchase, sales or launch when authorization is unclear, documents are incomplete or cooperation conditions are not ready.",
    ctaTitle: "Have a sports or outdoor product cooperation direction?",
    ctaText:
      "You are welcome to submit brand information, product catalogues, key SKUs and cooperation expectations. RONCO will review the materials first and then discuss suitable next steps.",
    ctaButton: "Cooperation Inquiry",
    backButton: "Back to Overseas Brand Partnership",
  },
} as const;

export default async function SportsOutdoorPage({
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
  const scrollingProducts = [...copy.products, ...copy.products];

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <section className="bg-white px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="py-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#24775b]">
              {copy.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#071629] sm:text-5xl lg:text-6xl">
              {copy.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] shadow-[0_18px_46px_rgba(31,93,122,0.12)]">
            <img
              src="/images/sports-outdoor/sports-outdoor-hero.png"
              alt={copy.eyebrow}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.introEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
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

      <section className="overflow-hidden bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.productsEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.productsTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.productsText}
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#eef7fb] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#eef7fb] to-transparent" />

          <div className="sports-outdoor-track flex w-max gap-6">
            {scrollingProducts.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group w-[310px] shrink-0 overflow-hidden rounded-[1.8rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
              >
                <div className="overflow-hidden bg-[#f7fbfc]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-snug text-[#071629]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes sportsOutdoorScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .sports-outdoor-track {
            animation: sportsOutdoorScroll 58s linear infinite;
          }

          .sports-outdoor-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            NOTE
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
            {copy.noteTitle}
          </h2>

          <p className="mt-5 max-w-5xl text-base leading-8 text-slate-700">
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
              {copy.ctaButton}
            </Link>

            <Link
              href={`/${currentLocale}/international-trade/overseas-brand-partnership`}
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