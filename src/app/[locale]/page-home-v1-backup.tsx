import Image from "next/image";
import { notFound } from "next/navigation";

const heroImage =
  "https://cwcqspxufigntuefwxqi.supabase.co/storage/v1/object/public/ronco-public-assets/homepage/banner/ronco-homepage-banner-v1.png";

const content = {
  en: {
    brandTag: "INTERNATIONAL",
    languageSwitch: "中文",
    nav: [
      { label: "Home", href: "#home" },
      { label: "Global Logistics", href: "#logistics" },
      { label: "International Trade", href: "#trade" },
      { label: "Partnership", href: "#partnership" },
      { label: "Insights", href: "#insights" },
    ],
    contact: "CONTACT RONCO",
    eyebrow: "GLOBAL SUPPLY CHAIN · CROSS-BORDER TRADE",
    titleLine1: "Connecting Global",
    titleLine2: "Supply Chains and",
    titleHighlight: "Market Opportunities.",
    description:
      "RONCO connects international logistics, cross-border trade and market-entry opportunities — helping businesses move goods, develop partnerships and reach new markets with confidence.",
    primaryButton: "GET A LOGISTICS SOLUTION",
    secondaryButton: "EXPLORE TRADE COOPERATION",
    cards: [
      {
        label: "LOGISTICS",
        text: "Sea · Air · Rail · Road",
      },
      {
        label: "TRADE",
        text: "Import · Export · Sourcing",
      },
      {
        label: "PARTNERSHIP",
        text: "Brands · Markets · Growth",
      },
    ],
    bottomText: "RONCO INTERNATIONAL SUPPLY CHAIN TECHNOLOGY",
    logisticsTitle: "Global Logistics",
    logisticsText:
      "Integrated cross-border transportation and supply chain coordination.",
    tradeTitle: "International Trade",
    tradeText:
      "Connecting overseas brands, suppliers and market opportunities.",
    partnershipTitle: "Partnership",
    partnershipText:
      "Building long-term, transparent and commercially practical cooperation.",
    insightsTitle: "Insights",
    insightsText:
      "Industry observations, company updates and international market intelligence.",
  },

  zh: {
    brandTag: "国际供应链",
    languageSwitch: "EN",
    nav: [
      { label: "首页", href: "#home" },
      { label: "全球物流", href: "#logistics" },
      { label: "国际贸易", href: "#trade" },
      { label: "合作机会", href: "#partnership" },
      { label: "新闻洞察", href: "#insights" },
    ],
    contact: "联系 RONCO",
    eyebrow: "全球供应链 · 跨境贸易",
    titleLine1: "连接全球供应链",
    titleLine2: "创造跨境",
    titleHighlight: "市场机会",
    description:
      "RONCO 连接国际物流、跨境贸易与市场进入机会，帮助企业更稳健地完成货物流动、合作拓展与全球市场连接。",
    primaryButton: "获取物流方案",
    secondaryButton: "探讨贸易合作",
    cards: [
      {
        label: "全球物流",
        text: "海运 · 空运 · 铁路 · 陆运",
      },
      {
        label: "国际贸易",
        text: "进口 · 出口 · 全球采购",
      },
      {
        label: "合作机会",
        text: "品牌 · 市场 · 长期增长",
      },
    ],
    bottomText: "RONCO 国际供应链科技",
    logisticsTitle: "全球物流",
    logisticsText: "提供跨境运输、项目物流与供应链协同服务。",
    tradeTitle: "国际贸易",
    tradeText: "连接海外品牌、供应商与跨境市场机会。",
    partnershipTitle: "合作机会",
    partnershipText: "推动透明、稳定且具备商业可行性的长期合作。",
    insightsTitle: "新闻洞察",
    insightsText: "展示公司动态、行业观察与国际市场信息。",
  },
} as const;

type Locale = keyof typeof content;

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
  const copy = content[currentLocale];
  const targetLocale = currentLocale === "en" ? "zh" : "en";

  const heroBackground = `
    linear-gradient(
      90deg,
      rgba(4, 18, 40, 0.98) 0%,
      rgba(4, 18, 40, 0.90) 34%,
      rgba(4, 18, 40, 0.54) 60%,
      rgba(4, 18, 40, 0.18) 100%
    ),
    url("${heroImage}")
  `;

  return (
    <main className="bg-[#061426] text-white">
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: heroBackground }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(214,180,109,0.16),transparent_30%)]" />

        <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
  href={`/${currentLocale}`}
  className="flex items-center"
  aria-label="RONCO Home"
>
  <Image
    src="/brand/ronco-logo-v4-light-bg.png"
    alt="RONCO International"
    width={420}
    height={165}
    priority
    className="h-auto w-[180px] sm:w-[220px] lg:w-[260px]"
  />
</a>

          <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            {copy.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#e5ca90]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`/${targetLocale}`}
              className="border border-white/30 px-3 py-2 text-xs font-semibold tracking-[0.12em] text-white transition hover:border-[#d9ba78] hover:text-[#f0d9a5]"
            >
              {copy.languageSwitch}
            </a>

            <a
              href="#contact"
              className="hidden border border-[#d9ba78] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#f1dbac] transition hover:bg-[#d9ba78] hover:text-[#071629] sm:inline-flex"
            >
              {copy.contact}
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] w-full max-w-7xl items-center px-6 pb-20 pt-10 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#e7cf9d]">
              <span className="h-px w-10 bg-[#d9ba78]" />
              {copy.eyebrow}
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
              <br />
              <span className="text-[#e4c681]">{copy.titleHighlight}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#logistics"
                className="inline-flex items-center justify-center bg-[#d9ba78] px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-[#071629] transition hover:bg-[#ecd69d]"
              >
                {copy.primaryButton}
              </a>

              <a
                href="#partnership"
                className="inline-flex items-center justify-center border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white backdrop-blur-sm transition hover:border-[#d9ba78] hover:text-[#f0d9a5]"
              >
                {copy.secondaryButton}
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {copy.cards.map((card) => (
                <div
                  key={card.label}
                  className="border border-white/15 bg-[#081a2e]/50 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-xs tracking-[0.14em] text-[#e1c483]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-100">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 z-10 flex items-center gap-3 text-[10px] tracking-[0.18em] text-slate-300 lg:left-10">
          <span className="h-8 w-px bg-[#d9ba78]" />
          {copy.bottomText}
        </div>
      </section>

      <section
  id="logistics"
  className="border-t border-white/10 bg-[#071629] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-[#d9ba78]">
          01 · {currentLocale === "en" ? "GLOBAL LOGISTICS" : "全球物流"}
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {currentLocale === "en"
            ? "Move goods with clarity, control and confidence."
            : "让跨境运输更清晰、更可控、更可靠。"}
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
          {currentLocale === "en"
            ? "RONCO coordinates international transportation and practical supply-chain support for businesses moving goods across markets, routes and operating conditions."
            : "RONCO 为企业提供国际运输协调与供应链支持，帮助货物在不同国家、路线与业务场景中更稳健地流动。"}
        </p>

        <a
          href="#contact"
          className="mt-9 inline-flex items-center gap-3 border-b border-[#d9ba78] pb-2 text-sm font-semibold tracking-[0.08em] text-[#ead29a] transition hover:text-white"
        >
          {currentLocale === "en"
            ? "REQUEST A LOGISTICS DISCUSSION"
            : "咨询物流合作方案"}
          <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
        <div className="min-h-[220px] bg-[#0a1c31] p-7 transition hover:bg-[#0d243e]">
          <p className="text-xs tracking-[0.16em] text-[#d9ba78]">
            01
          </p>
          <h3 className="mt-8 text-xl font-semibold text-white">
            {currentLocale === "en"
              ? "International Freight"
              : "国际货运"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {currentLocale === "en"
              ? "Sea, air, rail and road transportation coordination for cross-border cargo movements."
              : "协调海运、空运、铁路与陆运，为跨境货物流动提供适配方案。"}
          </p>
        </div>

        <div className="min-h-[220px] bg-[#0a1c31] p-7 transition hover:bg-[#0d243e]">
          <p className="text-xs tracking-[0.16em] text-[#d9ba78]">
            02
          </p>
          <h3 className="mt-8 text-xl font-semibold text-white">
            {currentLocale === "en"
              ? "Supply Chain Coordination"
              : "供应链协同"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {currentLocale === "en"
              ? "Route planning, shipment coordination and operational support for practical delivery needs."
              : "围绕运输路线、货物衔接与实际交付需求，提供协同与执行支持。"}
          </p>
        </div>

        <div className="min-h-[220px] bg-[#0a1c31] p-7 transition hover:bg-[#0d243e]">
          <p className="text-xs tracking-[0.16em] text-[#d9ba78]">
            03
          </p>
          <h3 className="mt-8 text-xl font-semibold text-white">
            {currentLocale === "en"
              ? "Cold Chain & Special Cargo"
              : "冷链与特殊货物"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {currentLocale === "en"
              ? "Support for temperature-sensitive cargo, oversized freight and project-related transportation needs."
              : "支持温控货物、超尺寸货物及项目型运输等有特殊要求的业务场景。"}
          </p>
        </div>

        <div className="min-h-[220px] bg-[#0a1c31] p-7 transition hover:bg-[#0d243e]">
          <p className="text-xs tracking-[0.16em] text-[#d9ba78]">
            04
          </p>
          <h3 className="mt-8 text-xl font-semibold text-white">
            {currentLocale === "en"
              ? "Packaging & Relocation"
              : "货物包装与工厂搬迁"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {currentLocale === "en"
              ? "Practical support for cargo packaging, industrial relocation and complex logistics execution."
              : "提供货物包装、工厂搬迁及复杂物流执行相关的配套支持。"}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section
        id="trade"
        className="border-t border-white/10 bg-[#0a1c31] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.18em] text-[#d9ba78]">02</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {copy.tradeTitle}
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            {copy.tradeText}
          </p>
        </div>
      </section>

      <section
        id="partnership"
        className="border-t border-white/10 bg-[#071629] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.18em] text-[#d9ba78]">03</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {copy.partnershipTitle}
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            {copy.partnershipText}
          </p>
        </div>
      </section>

      <section
        id="insights"
        className="border-t border-white/10 bg-[#0a1c31] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.18em] text-[#d9ba78]">04</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {copy.insightsTitle}
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            {copy.insightsText}
          </p>
        </div>
      </section>
    </main>
  );
}