import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "zh";

type SiteFooterProps = {
  locale: Locale;
};

const footerContent = {
  zh: {
    logoAlt: "荣程国际",
    companyName: "荣程国际供应链科技（东莞）有限公司",
    brandIntro:
      "荣程国际以国际物流为基础，同时开展国际贸易与海外品牌引进及分销合作，连接中国企业、全球市场与海外品牌合作需求。",
    slogan: "清晰 · 务实 · 协同",

    logisticsTitle: "全球物流",
    logisticsLinks: [
      { label: "全球物流总览", href: "/global-logistics" },
      { label: "业务范围", href: "/global-logistics/services" },
      { label: "运输咨询", href: "/global-logistics/freight-inquiry" },
      { label: "物流知识", href: "/global-logistics/knowledge" },
      { label: "HS Code 辅助查询", href: "/global-logistics/hs-code" },
    ],

    tradeTitle: "国际贸易",
    tradeLinks: [
      { label: "国际贸易总览", href: "/international-trade" },
      { label: "商品进出口", href: "/international-trade/goods-import-export" },
      {
        label: "海外品牌引进与分销",
        href: "/international-trade/overseas-brand-partnership",
      },
      {
        label: "儿童营养健康",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
      },
      {
        label: "成人营养健康",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
      },
      {
        label: "天然护肤产品",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
      },
      {
        label: "运动与户外产品",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
      },
      {
        label: "荣程全球精选",
        href: "/international-trade/ronco-global-select",
      },
    ],

    companyTitle: "公司信息",
    companyLinks: [
      { label: "新闻洞察", href: "/insights" },
      { label: "关于荣程国际", href: "/about" },
      { label: "加入我们", href: "/careers" },
      { label: "联系我们", href: "/contact" },
    ],

    contactTitle: "联系我们",
    contactText:
      "如果你有运输需求、贸易方向或海外品牌合作计划，可以先从实际货物、产品资料或合作背景开始沟通。",
    contactButton: "联系荣程国际",
    rights: "© 2026 荣程国际供应链科技（东莞）有限公司",
    location: "中国东莞松山湖",
    linkedinLabel: "LinkedIn｜Henry Huang",
    whatsappLabel: "WhatsApp 联系｜Henry Huang",
    whatsappScan: "扫描二维码添加 WhatsApp",
    privacyLabel: "隐私政策",
    langSwitch: "EN",
  },

  en: {
    logoAlt: "RONCO International",
    companyName:
      "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
    brandIntro:
      "RONCO is built on international logistics while also developing international trade, overseas brand introduction and distribution, connecting Chinese companies, global markets and overseas brand cooperation needs.",
    slogan: "CLEAR · PRACTICAL · COORDINATED",

    logisticsTitle: "Global Logistics",
    logisticsLinks: [
      { label: "Global Logistics Overview", href: "/global-logistics" },
      { label: "Service Scope", href: "/global-logistics/services" },
      { label: "Freight Inquiry", href: "/global-logistics/freight-inquiry" },
      { label: "Logistics Knowledge", href: "/global-logistics/knowledge" },
      { label: "HS Code Lookup", href: "/global-logistics/hs-code" },
    ],

    tradeTitle: "International Trade",
    tradeLinks: [
      { label: "International Trade Overview", href: "/international-trade" },
      {
        label: "Product Import & Export",
        href: "/international-trade/goods-import-export",
      },
      {
        label: "Overseas Brand Introduction & Distribution",
        href: "/international-trade/overseas-brand-partnership",
      },
      {
        label: "Children Nutrition & Health",
        href: "/international-trade/overseas-brand-partnership/children-nutrition",
      },
      {
        label: "Adult Nutrition & Health",
        href: "/international-trade/overseas-brand-partnership/adult-nutrition",
      },
      {
        label: "Natural Skincare Products",
        href: "/international-trade/overseas-brand-partnership/natural-skincare",
      },
      {
        label: "Sports & Outdoor Products",
        href: "/international-trade/overseas-brand-partnership/sports-outdoor",
      },
      {
        label: "RONCO Global Select",
        href: "/international-trade/ronco-global-select",
      },
    ],

    companyTitle: "Company",
    companyLinks: [
      { label: "Insights", href: "/insights" },
      { label: "About RONCO", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],

    contactTitle: "Contact",
    contactText:
      "If you have a shipment need, trade direction or overseas brand cooperation plan, the conversation can begin with your actual cargo, product documents or cooperation background.",
    contactButton: "Contact RONCO",
    rights:
      "© 2026 RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
    location: "Songshan Lake, Dongguan, China",
    linkedinLabel: "LinkedIn | Henry Huang",
    whatsappLabel: "WhatsApp Contact | Henry Huang",
    whatsappScan: "Scan to contact on WhatsApp",
    privacyLabel: "Privacy Policy",
    langSwitch: "中文",
  },
} as const;

export default function SiteFooter({ locale }: SiteFooterProps) {
  const copy = footerContent[locale];
  const targetLocale = locale === "zh" ? "en" : "zh";

  const hrefWithLocale = (path: string) => `/${locale}${path}`;
  const switchLocaleHref = `/${targetLocale}`;

  return (
    <footer className="border-t border-[#d6e8ee] bg-[linear-gradient(180deg,#eef8fb_0%,#f7fcfb_50%,#eef8f1_100%)] text-[#23445c]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.72fr_0.9fr_0.72fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center">
              <Image
                src="/brand/ronco-logo-v4-light-bg.png"
                alt={copy.logoAlt}
                width={420}
                height={165}
                className="h-auto w-[145px] sm:w-[160px]"
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#4b697a]">
              {copy.brandIntro}
            </p>

            <div className="mt-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] text-[#c69b42]">
              <span className="h-px w-8 bg-[#c69b42]" />
              {copy.slogan}
            </div>

            <p className="mt-5 max-w-md text-xs leading-6 text-[#6b8796]">
              {copy.companyName}
            </p>

            <div className="mt-6 flex items-start gap-4">
              <div className="inline-flex flex-col items-center rounded-2xl border border-[#d6e8ee] bg-white p-2.5 shadow-sm">
                <Image
                  src="/images/contact/whatsapp-henry-qr.png"
                  alt={copy.whatsappLabel}
                  width={140}
                  height={140}
                  className="h-auto w-[108px] rounded-lg"
                />
              </div>

              <div className="pt-1">
                <p className="text-sm font-semibold leading-6 text-[#176347]">
                  {copy.whatsappLabel}
                </p>
                <p className="mt-1 max-w-[170px] text-xs leading-5 text-[#6b8796]">
                  {copy.whatsappScan}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-[#0b5f83]">
              {copy.logisticsTitle}
            </h3>

            <div className="mt-4 space-y-2.5">
              {copy.logisticsLinks.map((item) => (
                <Link
                  key={item.href}
                  href={hrefWithLocale(item.href)}
                  className="block text-sm text-[#23445c] transition hover:text-[#0b6f99]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-[#0b5f83]">
              {copy.tradeTitle}
            </h3>

            <div className="mt-4 grid gap-x-5 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {copy.tradeLinks.map((item) => (
                <Link
                  key={item.href}
                  href={hrefWithLocale(item.href)}
                  className="block text-sm leading-6 text-[#23445c] transition hover:text-[#0b6f99]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.16em] text-[#0b5f83]">
              {copy.companyTitle}
            </h3>

            <div className="mt-4 space-y-2.5">
              {copy.companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={hrefWithLocale(item.href)}
                  className="block text-sm text-[#23445c] transition hover:text-[#0b6f99]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <h3 className="mt-6 text-xs font-semibold tracking-[0.16em] text-[#0b5f83]">
              {copy.contactTitle}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#4b697a]">
              {copy.contactText}
            </p>

            <div className="mt-4 space-y-1.5 text-sm text-[#23445c]">
              <a
                href="mailto:info@roncolog.com"
                className="block transition hover:text-[#0b6f99]"
              >
                info@roncolog.com
              </a>

              <p>{copy.location}</p>

              <a
                href="https://www.linkedin.com/in/henry-huang-a9047425b"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-[#0b6f99]"
              >
                {copy.linkedinLabel}
              </a>

            </div>

            <Link
              href={hrefWithLocale("/contact")}
              className="mt-5 inline-flex rounded-full bg-[#0b6f99] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,111,153,0.18)] transition hover:bg-[#176347]"
            >
              {copy.contactButton}
            </Link>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-[#d6e8ee] pt-5 text-xs text-[#6b8796] sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.rights}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hrefWithLocale("/privacy")}
              className="text-xs font-semibold text-[#0b5f83] transition hover:text-[#176347]"
            >
              {copy.privacyLabel}
            </Link>

            <Link
              href={switchLocaleHref}
              className="rounded-full border border-[#bdd8e2] bg-white px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
            >
              {copy.langSwitch}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}