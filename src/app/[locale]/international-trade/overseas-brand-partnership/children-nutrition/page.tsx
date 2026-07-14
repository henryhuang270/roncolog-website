import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "@/components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "儿童营养健康",
    title: "小孩的健康成长，离不开父母细心呵护。",
    subtitle:
      "荣程国际关注适合中国家庭场景的儿童营养健康产品方向，在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试与合作沟通。",
    introEyebrow: "儿童营养健康",
    introTitle: "关注适合儿童成长阶段的营养产品方向",
    introText:
      "儿童营养健康产品不仅要看市场需求，也要结合产品资料、成分说明、适用年龄段、供应能力和中国市场合规条件进行判断。荣程国际会先看资料和合作基础，再判断是否适合继续推进。",
    productsEyebrow: "产品方向示例",
    productsTitle: "当前关注的儿童营养产品方向",
    productsText:
      "以下为无真实品牌 Logo 的产品方向示例，用于说明荣程国际当前关注的儿童营养健康合作范围，不代表相关产品已取得品牌授权、已在中国销售或可以直接购买。",
    products: [
      {
        title: "钙镁锌",
        desc: "关注儿童成长阶段常见的矿物质营养补充方向。",
        image: "/images/children-nutrition/calcium-magnesium-zinc.webp",
      },
      {
        title: "维生素 A&D",
        desc: "关注儿童日常营养补充场景下的基础营养产品方向。",
        image: "/images/children-nutrition/vitamin-ad-drops.webp",
      },
      {
        title: "DHA",
        desc: "关注儿童成长阶段常见的 DHA 营养补充产品方向。",
        image: "/images/children-nutrition/dha-softgels.webp",
      },
      {
        title: "Omega-3 鱼油",
        desc: "关注适合儿童食用方式和规格说明的 Omega-3 产品方向。",
        image: "/images/children-nutrition/omega-3-fish-oil.webp",
      },
      {
        title: "藻油",
        desc: "关注适合儿童营养场景的藻油类产品方向。",
        image: "/images/children-nutrition/algal-oil-drops.webp",
      },
      {
        title: "K2 + D3",
        desc: "关注复合营养方向，具体需结合产品资料、标签说明和适用人群判断。",
        image: "/images/children-nutrition/k2-d3-drops.webp",
      },
      {
        title: "益生菌",
        desc: "关注儿童日常营养与肠道健康管理相关产品方向。",
        image: "/images/children-nutrition/probiotics.webp",
      },
      {
        title: "儿童多维",
        desc: "关注儿童日常多种营养补充产品方向。",
        image: "/images/children-nutrition/children-multivitamin.webp",
      },
    ],
    noteTitle: "合作说明",
    noteText:
      "儿童营养健康产品不得进行医疗疗效宣传，不得夸大保健功效。具体产品是否适合中国市场、是否可进口、是否可销售，需结合品牌授权、产品资料、标签要求、合规条件和实际审核结果判断。",
    ctaTitle: "有儿童营养健康品牌合作方向？",
    ctaText:
      "欢迎提交品牌资料、产品目录、重点 SKU 和合作预期。荣程国际会先审核资料，再与您沟通下一步合作方向。",
    ctaButton: "合作咨询",
    backButton: "返回海外品牌引进与分销",
  },
  en: {
    eyebrow: "Children Nutrition & Health",
    title: "Healthy growth starts with thoughtful care from parents.",
    subtitle:
      "RONCO focuses on children nutrition and health product directions suitable for China family scenarios. Subject to brand authorization, product documents and compliance conditions, we discuss product introduction, market testing and cooperation opportunities.",
    introEyebrow: "Children Nutrition",
    introTitle:
      "Focused on nutrition directions suitable for children’s growth stages",
    introText:
      "Children nutrition products should be reviewed not only from market demand, but also from product documents, ingredients, age suitability, supply capability and China-market compliance conditions. RONCO reviews the materials first before deciding whether further cooperation discussion is practical.",
    productsEyebrow: "Product Direction Examples",
    productsTitle: "Current children nutrition product directions",
    productsText:
      "The following are non-branded product direction examples. They explain RONCO’s current focus areas and do not mean that related products have obtained authorization, are already sold in China or are available for direct purchase.",
    products: [
      {
        title: "Calcium Magnesium Zinc",
        desc: "Focused on mineral nutrition directions for children’s growth-stage scenarios.",
        image: "/images/children-nutrition/calcium-magnesium-zinc.webp",
      },
      {
        title: "Vitamin A&D",
        desc: "Focused on basic daily nutrition directions for children.",
        image: "/images/children-nutrition/vitamin-ad-drops.webp",
      },
      {
        title: "DHA",
        desc: "Focused on DHA nutrition directions for children’s growth-stage products.",
        image: "/images/children-nutrition/dha-softgels.webp",
      },
      {
        title: "Omega-3 Fish Oil",
        desc: "Focused on Omega-3 products suitable for children’s usage and specification needs.",
        image: "/images/children-nutrition/omega-3-fish-oil.webp",
      },
      {
        title: "Algal Oil",
        desc: "Focused on algal-oil product directions suitable for children nutrition scenarios.",
        image: "/images/children-nutrition/algal-oil-drops.webp",
      },
      {
        title: "K2 + D3",
        desc: "Focused on combined nutrition directions, subject to product documents and label review.",
        image: "/images/children-nutrition/k2-d3-drops.webp",
      },
      {
        title: "Probiotics",
        desc: "Focused on children nutrition and daily gut-health related product directions.",
        image: "/images/children-nutrition/probiotics.webp",
      },
      {
        title: "Children Multivitamins",
        desc: "Focused on children’s daily multiple-nutrition product directions.",
        image: "/images/children-nutrition/children-multivitamin.webp",
      },
    ],
    noteTitle: "Cooperation Note",
    noteText:
      "Children nutrition and health products must not make medical treatment claims or exaggerated health-benefit claims. Whether a product is suitable for the China market, importable or sellable depends on brand authorization, product documents, label requirements, compliance conditions and actual review results.",
    ctaTitle: "Have a children nutrition brand cooperation direction?",
    ctaText:
      "You are welcome to submit brand information, product catalogues, key SKUs and cooperation expectations. RONCO will review the materials first and then discuss suitable next steps.",
    ctaButton: "Cooperation Inquiry",
    backButton: "Back to Overseas Brand Partnership",
  },
} as const;

export default async function ChildrenNutritionPage({
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
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        image="/images/children-nutrition/children-family-hero.webp"
        imagePosition="70% 15%"
        tone="light"
        height="full"
      />

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

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {copy.products.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.8rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f7fbfc]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={85}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
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