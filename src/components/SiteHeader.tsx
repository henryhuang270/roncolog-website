import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "zh";

type SiteHeaderProps = {
  locale: Locale;
};

const labels = {
  en: {
    home: "Home",
    logistics: "Global Logistics",
    trade: "International Trade",
    insights: "Insights",
    about: "About RONCO",
    contact: "Contact",
    language: "中文",
    menu: "MENU",
    logisticsMenu: [
      {
        label: "Service Scope",
        href: "/global-logistics/services",
      },
      {
        label: "Freight Inquiry",
        href: "/global-logistics/freight-inquiry",
      },
      {
        label: "Logistics Knowledge",
        href: "/global-logistics/knowledge",
      },
      {
        label: "HS Code Lookup",
        href: "/global-logistics/hs-code",
      },
    ],
    tradeMenu: {
      goods: {
        label: "Product Import & Export",
        href: "/international-trade/goods-import-export",
      },
      brand: {
        label: "Overseas Brand Introduction & Distribution",
        href: "/international-trade/overseas-brand-partnership",
      },
      brandChildren: [
        {
          label: "Children Nutrition & Health",
          href: "/international-trade/overseas-brand-partnership/children-nutrition",
          ready: true,
        },
        {
          label: "Adult Nutrition & Health",
          href: "/international-trade/overseas-brand-partnership/adult-nutrition",
          ready: true,
        },
        {
          label: "Natural Skincare Products",
          href: "/international-trade/overseas-brand-partnership/natural-skincare",
          ready: true,
        },
        {
          label: "Sports & Outdoor Products",
          href: "/international-trade/overseas-brand-partnership/sports-outdoor",
          ready: true,
        },
      ],
      globalSelect: {
        label: "RONCO Global Select",
        href: "/international-trade/ronco-global-select",
      },
    },
  },

  zh: {
    home: "首页",
    logistics: "全球物流",
    trade: "国际贸易",
    insights: "新闻洞察",
    about: "关于荣程国际",
    contact: "联系我们",
    language: "EN",
    menu: "菜单",
    logisticsMenu: [
      {
        label: "业务范围",
        href: "/global-logistics/services",
      },
      {
        label: "运输咨询",
        href: "/global-logistics/freight-inquiry",
      },
      {
        label: "物流知识",
        href: "/global-logistics/knowledge",
      },
      {
        label: "HS Code 辅助查询",
        href: "/global-logistics/hs-code",
      },
    ],
    tradeMenu: {
      goods: {
        label: "商品进出口",
        href: "/international-trade/goods-import-export",
      },
      brand: {
        label: "海外品牌引进与分销",
        href: "/international-trade/overseas-brand-partnership",
      },
      brandChildren: [
        {
          label: "儿童营养健康",
          href: "/international-trade/overseas-brand-partnership/children-nutrition",
          ready: true,
        },
        {
          label: "成人营养健康",
          href: "/international-trade/overseas-brand-partnership/adult-nutrition",
          ready: true,
        },
        {
          label: "天然护肤产品",
          href: "/international-trade/overseas-brand-partnership/natural-skincare",
          ready: true,
        },
        {
          label: "运动与户外产品",
          href: "/international-trade/overseas-brand-partnership/sports-outdoor",
          ready: true,
        },
      ],
      globalSelect: {
        label: "荣程全球精选",
        href: "/international-trade/ronco-global-select",
      },
    },
  },
} as const;

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const copy = labels[locale];
  const targetLocale = locale === "en" ? "zh" : "en";

  const localeHref = (path: string) => `/${locale}${path}`;
  const targetLocaleHref = (path: string) => `/${targetLocale}${path}`;

  return (
    <header className="relative z-50 border-b border-[#cfe5ed] bg-[linear-gradient(90deg,#eef8fb_0%,#f7fcfb_50%,#eef8f1_100%)] shadow-[0_8px_28px_rgba(31,93,122,0.10)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[86px] w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href={`/${locale}`}
          className="flex items-center"
          aria-label="RONCO Home"
        >
          <Image
            src="/brand/ronco-logo-v4-light-bg.png"
            alt="RONCO International"
            width={420}
            height={165}
            priority
            className="h-auto w-[145px] sm:w-[165px] lg:w-[185px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#23445c] xl:flex">
          <Link href={`/${locale}`} className="transition hover:text-[#0b6f99]">
            {copy.home}
          </Link>

          <div className="group relative">
            <Link
              href={localeHref("/global-logistics")}
              className="flex items-center gap-1.5 py-8 transition hover:text-[#0b6f99]"
            >
              {copy.logistics}
              <span className="text-xs text-[#c69b42]">⌄</span>
            </Link>

            <div className="invisible absolute left-0 top-[74px] w-[285px] translate-y-2 rounded-3xl border border-[#d6e8ee] bg-white/98 p-3 opacity-0 shadow-[0_18px_46px_rgba(31,93,122,0.16)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {copy.logisticsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={localeHref(item.href)}
                  className="block rounded-2xl px-4 py-3 text-sm text-[#23445c] transition hover:bg-[#eef8fb] hover:text-[#0b6f99]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              href={localeHref("/international-trade")}
              className="flex items-center gap-1.5 py-8 transition hover:text-[#0b6f99]"
            >
              {copy.trade}
              <span className="text-xs text-[#c69b42]">⌄</span>
            </Link>

            <div className="invisible absolute left-0 top-[74px] w-[340px] translate-y-2 rounded-3xl border border-[#d6e8ee] bg-white/98 p-3 opacity-0 shadow-[0_18px_46px_rgba(31,93,122,0.16)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <Link
                href={localeHref(copy.tradeMenu.goods.href)}
                className="block rounded-2xl px-4 py-3 text-sm text-[#23445c] transition hover:bg-[#eef8fb] hover:text-[#0b6f99]"
              >
                {copy.tradeMenu.goods.label}
              </Link>

              <div className="group/brand relative">
                <Link
                  href={localeHref(copy.tradeMenu.brand.href)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-[#23445c] transition hover:bg-[#eef8fb] hover:text-[#0b6f99]"
                >
                  <span>{copy.tradeMenu.brand.label}</span>
                  <span className="text-xs text-[#c69b42]">›</span>
                </Link>

                <div className="invisible absolute left-full top-0 ml-2 w-[275px] translate-x-2 rounded-3xl border border-[#d6e8ee] bg-white p-3 opacity-0 shadow-[0_18px_46px_rgba(31,93,122,0.16)] transition duration-200 group-hover/brand:visible group-hover/brand:translate-x-0 group-hover/brand:opacity-100 group-focus-within/brand:visible group-focus-within/brand:translate-x-0 group-focus-within/brand:opacity-100">
                  {copy.tradeMenu.brandChildren.map((item) => (
                    <Link
                      key={item.label}
                      href={localeHref(item.href)}
                      className="block rounded-2xl px-4 py-3 text-sm text-[#49697d] transition hover:bg-[#eef8fb] hover:text-[#0b6f99]"
                    >
                      <span>{item.label}</span>
                      {!item.ready && (
                        <span className="ml-2 text-[11px] text-slate-400">
                          {locale === "zh" ? "建设中" : "Soon"}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={localeHref(copy.tradeMenu.globalSelect.href)}
                className="block rounded-2xl px-4 py-3 text-sm text-[#23445c] transition hover:bg-[#eef8fb] hover:text-[#0b6f99]"
              >
                {copy.tradeMenu.globalSelect.label}
              </Link>
            </div>
          </div>

          <Link
            href={localeHref("/insights")}
            className="transition hover:text-[#0b6f99]"
          >
            {copy.insights}
          </Link>

          <Link
            href={localeHref("/about")}
            className="transition hover:text-[#0b6f99]"
          >
            {copy.about}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={targetLocaleHref("")}
            className="rounded-full border border-[#b8d9e4] bg-white/86 px-4 py-2.5 text-xs font-semibold tracking-[0.1em] text-[#0b5f83] shadow-sm transition hover:border-[#6bbf95] hover:text-[#176347]"
          >
            {copy.language}
          </Link>

          <Link
            href={localeHref("/contact")}
            className="hidden rounded-full bg-[#0b6f99] px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(11,111,153,0.18)] transition hover:bg-[#176347] sm:inline-flex"
          >
            {copy.contact}
          </Link>

          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#b8d9e4] bg-white/86 px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#0b5f83] transition hover:border-[#6bbf95]">
              {copy.menu}
            </summary>

            <div className="absolute right-0 top-[52px] z-50 mt-3 w-[320px] rounded-3xl border border-[#d6e8ee] bg-white p-4 shadow-[0_18px_46px_rgba(31,93,122,0.18)]">
              <Link
                href={`/${locale}`}
                className="block border-b border-[#edf4f6] py-3 text-sm font-semibold text-[#071629]"
              >
                {copy.home}
              </Link>

              <Link
                href={localeHref("/global-logistics")}
                className="block border-b border-[#edf4f6] py-3 text-sm font-semibold text-[#071629]"
              >
                {copy.logistics}
              </Link>

              {copy.logisticsMenu.map((item) => (
                <Link
                  key={item.href}
                  href={localeHref(item.href)}
                  className="block rounded-2xl px-4 py-2 text-sm text-[#49697d] hover:bg-[#eef8fb] hover:text-[#0b6f99]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={localeHref("/international-trade")}
                className="mt-2 block border-y border-[#edf4f6] py-3 text-sm font-semibold text-[#071629]"
              >
                {copy.trade}
              </Link>

              <Link
                href={localeHref(copy.tradeMenu.goods.href)}
                className="block rounded-2xl px-4 py-2 text-sm text-[#49697d] hover:bg-[#eef8fb] hover:text-[#0b6f99]"
              >
                {copy.tradeMenu.goods.label}
              </Link>

              <Link
                href={localeHref(copy.tradeMenu.brand.href)}
                className="block rounded-2xl px-4 py-2 text-sm font-semibold text-[#23445c] hover:bg-[#eef8fb] hover:text-[#0b6f99]"
              >
                {copy.tradeMenu.brand.label}
              </Link>

              {copy.tradeMenu.brandChildren.map((item) => (
                <Link
                  key={item.label}
                  href={localeHref(item.href)}
                  className="ml-3 block rounded-2xl border-l border-[#d6e8ee] px-4 py-2 text-sm text-[#5c7888] hover:bg-[#eef8fb] hover:text-[#0b6f99]"
                >
                  {item.label}
                  {!item.ready && (
                    <span className="ml-2 text-[11px] text-slate-400">
                      {locale === "zh" ? "建设中" : "Soon"}
                    </span>
                  )}
                </Link>
              ))}

              <Link
                href={localeHref(copy.tradeMenu.globalSelect.href)}
                className="block rounded-2xl px-4 py-2 text-sm text-[#49697d] hover:bg-[#eef8fb] hover:text-[#0b6f99]"
              >
                {copy.tradeMenu.globalSelect.label}
              </Link>

              <Link
                href={localeHref("/insights")}
                className="mt-2 block border-t border-[#edf4f6] py-3 text-sm font-semibold text-[#071629]"
              >
                {copy.insights}
              </Link>

              <Link
                href={localeHref("/about")}
                className="block border-t border-[#edf4f6] py-3 text-sm font-semibold text-[#071629]"
              >
                {copy.about}
              </Link>

              <Link
                href={localeHref("/contact")}
                className="mt-3 block rounded-full bg-[#0b6f99] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_20px_rgba(11,111,153,0.18)]"
              >
                {copy.contact}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}