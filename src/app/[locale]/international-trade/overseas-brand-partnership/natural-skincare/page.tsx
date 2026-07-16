/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "天然护肤产品",
    title: "关注天然成分、温和配方与健康肌肤状态。",
    subtitle:
      "荣程国际关注适合中国市场的海外天然护肤品牌，在品牌授权、产品资料和合规条件具备的前提下，推进产品引进、市场测试与合作沟通。",
    heroImageAlt: "天然护肤产品与植物成分护肤合作方向",
    introEyebrow: "天然护肤产品",
    introTitle: "从产品定位、成分资料和市场适配性出发，判断合作可行性",
    introText:
      "天然护肤产品不仅要看包装和概念，也要结合品牌定位、成分说明、产品体系、适用人群、价格区间、供应能力和中国市场合规要求进行判断。荣程国际会先审核资料，再判断是否适合继续推进合作。",
    productsEyebrow: "产品方向示例",
    productsTitle: "当前关注的天然护肤产品方向",
    productsText:
      "以下为无真实品牌 Logo 的产品方向示例，用于说明荣程国际当前关注的天然护肤合作范围，不代表相关产品已取得品牌授权、已在中国销售或可以直接购买。",
    products: [
      {
        title: "洁面产品",
        desc: "关注日常清洁、温和洁面和基础护肤场景下的产品方向。",
        image: "/images/natural-skincare/cleanser-product.png",
      },
      {
        title: "保湿产品",
        desc: "关注日常补水、保湿护理和基础肌肤管理相关产品方向。",
        image: "/images/natural-skincare/moisturizer-product.png",
      },
      {
        title: "面霜产品",
        desc: "关注日常护肤、肌肤屏障护理和季节性护肤需求相关产品方向。",
        image: "/images/natural-skincare/face-cream-product.png",
      },
      {
        title: "精华产品",
        desc: "关注植物成分、温和配方和日常肌肤护理场景下的精华产品方向。",
        image: "/images/natural-skincare/serum-product.png",
      },
      {
        title: "身体护理",
        desc: "关注身体乳、护手、身体保湿和家庭日常护理相关产品方向。",
        image: "/images/natural-skincare/body-care-product.png",
      },
      {
        title: "防晒产品",
        desc: "关注日常通勤、户外活动和季节性防护相关的防晒产品方向。",
        image: "/images/natural-skincare/sunscreen-product.png",
      },
      {
        title: "植物成分护肤",
        desc: "关注以植物成分、自然来源和温和配方为特点的护肤产品方向。",
        image: "/images/natural-skincare/botanical-skincare-product.png",
      },
      {
        title: "温和护理产品",
        desc: "关注适合日常温和护理、敏感肌消费场景和低刺激定位的产品方向。",
        image: "/images/natural-skincare/gentle-care-product.png",
      },
    ],
    noteTitle: "合作说明",
    noteText:
      "天然护肤产品不得进行医疗疗效宣传，不得夸大修复、治疗或特殊功效。具体产品是否适合中国市场、是否可进口、是否可销售，需结合品牌授权、产品资料、标签要求、备案或注册要求、合规条件和实际审核结果判断。",
    ctaTitle: "有天然护肤品牌合作方向？",
    ctaText:
      "欢迎提交品牌资料、产品目录、重点 SKU 和合作预期。荣程国际会先审核资料，再与您沟通下一步合作方向。",
    ctaButton: "合作咨询",
    backButton: "返回海外品牌引进与分销",
  },

  en: {
    eyebrow: "Natural Skincare Products",
    title: "Focused on natural ingredients, gentle formulas and healthy-looking skin.",
    subtitle:
      "RONCO focuses on overseas natural skincare brands suitable for the China market. Subject to brand authorization, product documents and compliance conditions, we discuss product introduction, market testing and cooperation opportunities.",
    heroImageAlt: "Natural skincare products and plant-based skincare cooperation",
    introEyebrow: "Natural Skincare",
    introTitle:
      "Review positioning, ingredient documents and market suitability before cooperation",
    introText:
      "Natural skincare products should be reviewed not only by packaging and concept, but also by brand positioning, ingredient information, product system, target consumers, price range, supply capability and China-market compliance requirements. RONCO reviews materials first before deciding whether further cooperation discussion is practical.",
    productsEyebrow: "Product Direction Examples",
    productsTitle: "Current natural skincare product directions",
    productsText:
      "The following are non-branded product direction examples. They explain RONCO’s current focus areas and do not mean that related products have obtained authorization, are already sold in China or are available for direct purchase.",
    products: [
      {
        title: "Cleansers",
        desc: "Focused on daily cleansing, gentle face wash and basic skincare scenarios.",
        image: "/images/natural-skincare/cleanser-product.png",
      },
      {
        title: "Hydrating Products",
        desc: "Focused on daily hydration, moisturizing care and basic skin management.",
        image: "/images/natural-skincare/moisturizer-product.png",
      },
      {
        title: "Face Creams",
        desc: "Focused on daily skincare, skin-barrier care and seasonal skincare needs.",
        image: "/images/natural-skincare/face-cream-product.png",
      },
      {
        title: "Serums",
        desc: "Focused on plant-based ingredients, gentle formulas and daily skincare scenarios.",
        image: "/images/natural-skincare/serum-product.png",
      },
      {
        title: "Body Care",
        desc: "Focused on body lotion, hand care, body hydration and family daily care.",
        image: "/images/natural-skincare/body-care-product.png",
      },
      {
        title: "Sunscreen",
        desc: "Focused on daily commuting, outdoor activity and seasonal sun-care scenarios.",
        image: "/images/natural-skincare/sunscreen-product.png",
      },
      {
        title: "Botanical Skincare",
        desc: "Focused on plant-based, naturally derived and gentle-formula product directions.",
        image: "/images/natural-skincare/botanical-skincare-product.png",
      },
      {
        title: "Gentle Care Products",
        desc: "Focused on daily gentle care, sensitive-skin consumer scenarios and low-irritation positioning.",
        image: "/images/natural-skincare/gentle-care-product.png",
      },
    ],
    noteTitle: "Cooperation Note",
    noteText:
      "Natural skincare products must not make medical treatment claims or exaggerated repair, treatment or special-function claims. Whether a product is suitable for the China market, importable or sellable depends on brand authorization, product documents, labeling requirements, filing or registration requirements, compliance conditions and actual review results.",
    ctaTitle: "Have a natural skincare brand cooperation direction?",
    ctaText:
      "You are welcome to submit brand information, product catalogues, key SKUs and cooperation expectations. RONCO will review the materials first and then discuss suitable next steps.",
    ctaButton: "Cooperation Inquiry",
    backButton: "Back to Overseas Brand Partnership",
  },
} as const;

export default async function NaturalSkincarePage({
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
      <section className="bg-white px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
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
              src="/images/natural-skincare/natural-skincare-hero.png"
              alt={copy.heroImageAlt}
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