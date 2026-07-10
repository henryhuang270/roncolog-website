/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "国际贸易",
    title: "围绕商品、品牌与供应链，推进务实的国际贸易合作。",
    subtitle:
      "荣程国际在国际物流基础上，开展商品进出口、海外品牌引进与分销合作，协助中国商品出海，也寻找适合中国市场的海外优质商品。",
    introEyebrow: "贸易业务总览",
    introTitle: "国际贸易不是单纯买卖，而是从真实产品和可执行路径开始",
    introText:
      "荣程国际关注产品本身、目标市场、资料准备、贸易路径、跨境运输和合作方式。我们不会在信息不完整时轻易承诺采购、代理或销售，而是先判断产品、资料、合规条件和商业路径是否具备推进基础。",
    directionsEyebrow: "业务入口",
    directionsTitle: "三条国际贸易相关业务线",
    directions: [
      {
        number: "01",
        title: "商品进出口",
        text: "协助中国商品进入海外市场，也协助海外优质商品进入中国市场，围绕产品资料、供应链协同和跨境运输需求推进双向贸易。",
        image: "/images/banners/international-trade-hero.png",
        href: "/international-trade/goods-import-export",
        button: "了解商品进出口",
      },
      {
        number: "02",
        title: "海外品牌引进与分销",
        text: "面向希望进入中国市场的海外品牌，围绕产品资料、品牌授权、合规条件、市场测试和中国市场分销合作进行沟通。",
        image: "/images/banners/brand-partnership-hero.png",
        href: "/international-trade/overseas-brand-partnership",
        button: "了解海外品牌合作",
      },
      {
        number: "03",
        title: "荣程全球精选",
        text: "作为未来海外优质商品展示、市场测试和复购承接的预留入口。目前商城正在建设中，暂未正式开放购买。",
        image: "/images/global-select/global-select-quality-products.jpg",
        href: "/international-trade/ronco-global-select",
        button: "查看建设中页面",
      },
    ],
    flowEyebrow: "双向流通",
    flowTitle: "同时关注中国商品出海和海外商品进入中国",
    flowItems: [
      {
        title: "中国商品出海",
        text: "适合有出口意向的中国工厂、品牌方和贸易商。荣程国际可协助梳理产品资料、目标市场、运输方式和合作沟通路径。",
      },
      {
        title: "海外商品进入中国",
        text: "适合希望进入中国市场的海外品牌、供应商和贸易伙伴。在品牌授权、产品资料和合规条件具备的前提下，推进市场测试与分销合作沟通。",
      },
    ],
    categoryEyebrow: "重点关注方向",
    categoryTitle: "当前重点关注四类海外品牌合作方向",
    categoryText:
      "以下四类是荣程国际当前重点关注的海外品牌合作方向。页面仅展示合作方向示例，不代表相关产品已取得品牌授权、已在中国销售或可直接购买。",
    categories: [
      {
        number: "01",
        title: "儿童营养健康",
        text: "关注适合儿童日常营养补充、成长支持和家庭健康管理场景的产品方向。",
        image: "/images/children-nutrition/children-family-hero.png",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
        tags: ["钙镁锌", "维生素 A&D", "DHA", "Omega-3", "益生菌"],
      },
      {
        number: "02",
        title: "成人营养健康",
        text: "关注成人日常营养、健康管理、职场人群和中老年生活场景下的营养产品方向。",
        image: "/images/adult-nutrition/adult-family-hero.png",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
        tags: ["Omega-3", "补钙", "护眼", "睡眠支持", "关节营养"],
      },
      {
        number: "03",
        title: "天然护肤产品",
        text: "关注天然成分、温和配方、植物成分和日常护肤场景下的优质护肤产品方向。",
        image: "/images/natural-skincare/natural-skincare-hero.png",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
        tags: ["洁面", "保湿", "面霜", "精华", "防晒"],
      },
      {
        number: "04",
        title: "运动与户外产品",
        text: "关注运动、轻户外、旅行和健康生活方式相关的功能型产品方向。",
        image: "/images/sports-outdoor/sports-outdoor-hero.png",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
        tags: ["户外背包", "徒步鞋", "登山杖", "帐篷", "保温水壶"],
      },
    ],
    processEyebrow: "推进方式",
    processTitle: "从产品资料到合作沟通，先判断是否具备推进基础",
    processItems: [
      {
        step: "01",
        title: "了解产品与合作方向",
        text: "确认产品类型、贸易方向、目标市场、现有资料和合作预期。",
      },
      {
        step: "02",
        title: "评估资料与商业路径",
        text: "围绕产品资料、品牌授权、合规条件、报价、运输方式和渠道计划进行初步判断。",
      },
      {
        step: "03",
        title: "讨论测试与合作方式",
        text: "根据实际情况讨论采购、供货、市场测试、分销或长期供应链协同方式。",
      },
      {
        step: "04",
        title: "推进执行与持续沟通",
        text: "在资料、授权和合作条件清楚后，再推进运输、文件、渠道和交付安排。",
      },
    ],
    note:
      "本页面仅说明荣程国际当前国际贸易业务方向，不构成采购承诺、销售承诺、代理承诺、独家合作承诺、合规通过承诺或固定运输结果承诺。具体合作以产品资料、品牌授权、合规条件、运输条件和实际沟通结果为准。",
    ctaTitle: "有商品、品牌或贸易合作方向？",
    ctaText:
      "你可以先从商品进出口、海外品牌合作或荣程全球精选入口了解对应方向，也可以直接联系我们沟通实际需求。",
    contactButton: "联系我们",
    goodsButton: "商品进出口",
  },

  en: {
    eyebrow: "International Trade",
    title:
      "Practical international trade cooperation around products, brands and supply chains.",
    subtitle:
      "Built on international logistics, RONCO develops product import and export, overseas brand introduction and distribution, supporting China-made products going overseas and selected overseas goods entering China.",
    introEyebrow: "Trade Overview",
    introTitle:
      "International trade starts from real products and workable paths",
    introText:
      "RONCO focuses on products, target markets, documentation, trade routes, cross-border transportation and cooperation models. We do not make purchase, agency or sales commitments before reviewing whether the product, documents, compliance conditions and commercial pathway are ready for further discussion.",
    directionsEyebrow: "Business Entries",
    directionsTitle: "Three international trade-related business lines",
    directions: [
      {
        number: "01",
        title: "Product Import & Export",
        text: "Supporting China-made products reaching overseas markets and selected overseas goods entering China through product documentation, supply-chain coordination and cross-border transportation discussion.",
        image: "/images/banners/international-trade-hero.png",
        href: "/international-trade/goods-import-export",
        button: "Explore Product Import & Export",
      },
      {
        number: "02",
        title: "Overseas Brand Introduction & Distribution",
        text: "For overseas brands exploring the China market, RONCO discusses product documents, authorization, compliance conditions, market testing and distribution cooperation.",
        image: "/images/banners/brand-partnership-hero.png",
        href: "/international-trade/overseas-brand-partnership",
        button: "Explore Brand Partnership",
      },
      {
        number: "03",
        title: "RONCO Global Select",
        text: "A reserved entry for future product display, market testing and repeat-purchase support for selected overseas goods. The marketplace is currently under development.",
        image: "/images/global-select/global-select-quality-products.jpg",
        href: "/international-trade/ronco-global-select",
        button: "View Development Page",
      },
    ],
    flowEyebrow: "Two-Way Product Flow",
    flowTitle:
      "Supporting both China-made products going overseas and overseas goods entering China",
    flowItems: [
      {
        title: "China-made products going overseas",
        text: "Suitable for Chinese factories, brands and trading companies with export intentions. RONCO can help organize product information, target-market direction, transportation options and cooperation communication paths.",
      },
      {
        title: "Overseas goods entering China",
        text: "Suitable for overseas brands, suppliers and trading partners exploring the China market. Subject to authorization, documents and compliance conditions, we discuss market testing and distribution cooperation.",
      },
    ],
    categoryEyebrow: "Priority Focus",
    categoryTitle: "Current overseas brand cooperation categories",
    categoryText:
      "The following categories describe RONCO’s current overseas brand cooperation focus areas. They are examples only and do not mean that related products have obtained authorization, are already sold in China or are available for direct purchase.",
    categories: [
      {
        number: "01",
        title: "Children Nutrition & Health",
        text: "Focused on children’s daily nutrition, growth support and family health-management scenarios.",
        image: "/images/children-nutrition/children-family-hero.png",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
        tags: ["Calcium Magnesium Zinc", "Vitamin A&D", "DHA", "Omega-3", "Probiotics"],
      },
      {
        number: "02",
        title: "Adult Nutrition & Health",
        text: "Focused on adult nutrition, daily wellness, working adults and healthy ageing scenarios.",
        image: "/images/adult-nutrition/adult-family-hero.png",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
        tags: ["Omega-3", "Calcium", "Eye health", "Sleep support", "Joint nutrition"],
      },
      {
        number: "03",
        title: "Natural Skincare Products",
        text: "Focused on natural ingredients, gentle formulas, plant-based positioning and daily skincare needs.",
        image: "/images/natural-skincare/natural-skincare-hero.png",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
        tags: ["Cleanser", "Moisturizer", "Face cream", "Serum", "Sunscreen"],
      },
      {
        number: "04",
        title: "Sports & Outdoor Products",
        text: "Focused on sports, light outdoor activity, travel and functional lifestyle products.",
        image: "/images/sports-outdoor/sports-outdoor-hero.png",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
        tags: ["Backpacks", "Hiking boots", "Trekking poles", "Tents", "Water bottles"],
      },
    ],
    processEyebrow: "How We Proceed",
    processTitle:
      "From product documents to cooperation discussion, we first review readiness",
    processItems: [
      {
        step: "01",
        title: "Understand the product and direction",
        text: "Confirm product type, trade direction, target market, available documents and cooperation expectations.",
      },
      {
        step: "02",
        title: "Review documents and commercial path",
        text: "Review product documents, brand authorization, compliance conditions, pricing, transport mode and channel planning.",
      },
      {
        step: "03",
        title: "Discuss testing and cooperation model",
        text: "Discuss purchase, supply, market testing, distribution or long-term supply-chain coordination based on the actual case.",
      },
      {
        step: "04",
        title: "Move into execution and communication",
        text: "When documents, authorization and cooperation conditions are clear, coordinate transport, paperwork, channels and delivery.",
      },
    ],
    note:
      "This page explains RONCO’s current international trade directions only. It does not constitute a purchase commitment, sales commitment, agency commitment, exclusivity commitment, compliance approval commitment or fixed logistics outcome. Specific cooperation depends on product documents, brand authorization, compliance conditions, transport conditions and actual communication.",
    ctaTitle: "Have a product, brand or trade cooperation direction?",
    ctaText:
      "You may explore product import and export, overseas brand partnership or RONCO Global Select, or contact us directly to discuss your actual requirements.",
    contactButton: "Contact Us",
    goodsButton: "Product Import & Export",
  },
} as const;

export default async function InternationalTradePage({
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
        image="/images/banners/international-trade-hero.png"
        imagePosition="72% center"
        tone="light"
      />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.directionsEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.directionsTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.directions.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.16)]"
              >
                <div className="overflow-hidden bg-[#edf7fb]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#39a773]">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#071629]">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[7rem] text-sm leading-7 text-slate-600">
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

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.flowEyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.flowTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {copy.flowItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-7"
              >
                <h3 className="text-2xl font-semibold text-[#071629]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.categoryEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.categoryTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.categoryText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.categories.map((item) => (
              <Link
                key={item.number}
                href={hrefWithLocale(item.href)}
                className="group overflow-hidden rounded-[2rem] border border-[#d7e8ee] bg-white shadow-[0_14px_34px_rgba(31,93,122,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.16)]"
              >
                <div className="overflow-hidden bg-[#edf7fb]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#39a773]">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-[#071629]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#cfe6ee] bg-[#f7fbfc] px-3 py-1.5 text-xs text-[#49697d]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#176347]">
                      {currentLocale === "zh" ? "查看分类页面" : "View Category Page"}
                    </span>

                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#39a773] text-lg font-medium text-[#24775b] transition group-hover:bg-[#39a773] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
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
              href={hrefWithLocale("/contact")}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
            >
              {copy.contactButton}
            </Link>

            <Link
              href={hrefWithLocale("/international-trade/goods-import-export")}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
            >
              {copy.goodsButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}