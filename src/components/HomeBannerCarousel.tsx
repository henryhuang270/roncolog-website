"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Locale = "en" | "zh";

type HomeBannerCarouselProps = {
  locale: Locale;
};

const slides = {
  zh: [
    {
      eyebrow: "全球物流",
      title: "围绕真实货物、路线与交付需求，\n制定物流方案。",
      description:
        "荣程国际根据货物、起运地、目的地、时效和交付要求，协助协调海运、空运、铁路运输、陆运及多式联运。",
      image: "/images/banners/global-logistics-hero.png",
      imagePosition: "62% center",
      primaryLabel: "提交运输咨询",
      primaryHref: "/zh/global-logistics/freight-inquiry",
      secondaryLabel: "查看业务范围",
      secondaryHref: "/zh/global-logistics/services",
      tags: ["海运", "空运", "铁路运输", "陆运", "多式联运"],
      accent: "#0b6f99",
      textAccent: "#075777",
    },
    {
      eyebrow: "进出口贸易",
      title: "连接中国制造与国际市场，\n推动商品双向流通。",
      description:
        "协助中国商品进入海外市场，也协助海外优质商品进入中国市场，围绕产品、资料、包装、样品与供应链协同推进沟通。",
      image: "/images/banners/international-trade-hero.png",
      imagePosition: "64% center",
      primaryLabel: "了解国际贸易",
      primaryHref: "/zh/international-trade",
      secondaryLabel: "海外品牌引进与分销",
      secondaryHref: "/zh/international-trade/overseas-brand-partnership",
      tags: ["商品出海", "海外商品入华", "产品资料", "供应链协同"],
      accent: "#1d8a62",
      textAccent: "#176347",
    },
    {
      eyebrow: "海外品牌合作",
      title: "寻找海外优质品牌，\n共同开拓中国市场。",
      description:
        "面向营养健康、天然护肤、运动户外和轻量生活方式等产品方向，在品牌授权、产品资料和合规条件具备的前提下推进合作沟通。",
      image: "/images/banners/brand-partnership-hero.png",
      imagePosition: "66% center",
      primaryLabel: "咨询合作",
      primaryHref: "/zh/international-trade/overseas-brand-partnership",
      secondaryLabel: "",
      secondaryHref: "",
      tags: ["营养健康", "天然护肤", "运动户外", "生活方式"],
      accent: "#29965f",
      textAccent: "#176347",
    },
  ],
  en: [
    {
      eyebrow: "Global Logistics",
      title: "Build logistics plans around\nreal cargo, routes and delivery needs.",
      description:
        "RONCO coordinates ocean, air, rail, road and multimodal transport based on cargo, origin, destination, timing and delivery requirements.",
      image: "/images/banners/global-logistics-hero.png",
      imagePosition: "62% center",
      primaryLabel: "Submit Freight Inquiry",
      primaryHref: "/en/global-logistics/freight-inquiry",
      secondaryLabel: "View Service Scope",
      secondaryHref: "/en/global-logistics/services",
      tags: ["Ocean", "Air", "Rail", "Road", "Multimodal"],
      accent: "#0b6f99",
      textAccent: "#075777",
    },
    {
      eyebrow: "Import & Export Trade",
      title: "Connect China manufacturing\nwith global markets.",
      description:
        "RONCO supports China-made products going overseas and selected overseas goods entering China through product, document and supply-chain coordination.",
      image: "/images/banners/international-trade-hero.png",
      imagePosition: "64% center",
      primaryLabel: "Explore International Trade",
      primaryHref: "/en/international-trade",
      secondaryLabel: "Overseas Brand Partnership",
      secondaryHref: "/en/international-trade/overseas-brand-partnership",
      tags: ["Export", "Import", "Products", "Supply Chain"],
      accent: "#1d8a62",
      textAccent: "#176347",
    },
    {
      eyebrow: "Overseas Brand Partnership",
      title: "Work with quality overseas brands\nto explore the China market.",
      description:
        "RONCO discusses product introduction, documentation, market testing and distribution cooperation, subject to authorization and compliance readiness.",
      image: "/images/banners/brand-partnership-hero.png",
      imagePosition: "66% center",
      primaryLabel: "Discuss Cooperation",
      primaryHref: "/en/international-trade/overseas-brand-partnership",
      secondaryLabel: "",
      secondaryHref: "",
      tags: ["Nutrition", "Skincare", "Outdoor", "Lifestyle"],
      accent: "#29965f",
      textAccent: "#176347",
    },
  ],
} as const;

export default function HomeBannerCarousel({ locale }: HomeBannerCarouselProps) {
  const list = slides[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = list[activeIndex];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % list.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, list.length]);

  const previous = () => {
    setActiveIndex((current) => (current - 1 + list.length) % list.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % list.length);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#eef8fb] text-[#071629]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label={locale === "zh" ? "首页轮播 Banner" : "Homepage carousel banner"}
    >
      <img
        src={active.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-[1.06] saturate-[1.04]"
        style={{ objectPosition: active.imagePosition }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,253,255,0.98)_0%,rgba(248,253,255,0.94)_34%,rgba(248,253,255,0.76)_52%,rgba(248,253,255,0.30)_74%,rgba(248,253,255,0.06)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(50,160,117,0.13),transparent_28%),radial-gradient(circle_at_35%_75%,rgba(88,175,205,0.09),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:min-h-[580px] lg:px-10">
        <div className="max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-3 rounded-full border bg-white/86 px-4 py-2 text-xs font-semibold tracking-[0.16em] shadow-sm backdrop-blur"
            style={{
              borderColor: `${active.accent}38`,
              color: active.textAccent,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: active.accent }}
            />
            {active.eyebrow}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#071629] sm:text-5xl lg:text-[3.85rem]">
            {active.title.split("\n").map((line, index, array) => (
              <span key={line}>
                {line}
                {index < array.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            {active.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={active.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-3.5 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_12px_28px_rgba(11,111,153,0.20)] transition hover:-translate-y-0.5 hover:bg-[#075777]"
            >
              {active.primaryLabel}
            </Link>

            {active.secondaryHref && active.secondaryLabel ? (
              <Link
                href={active.secondaryHref}
                className="inline-flex items-center justify-center rounded-full border bg-white/88 px-7 py-3.5 text-sm font-semibold tracking-[0.06em] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                style={{
                  borderColor: `${active.accent}66`,
                  color: active.textAccent,
                }}
              >
                {active.secondaryLabel}
              </Link>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {active.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#d8e9ee] bg-white/86 px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={previous}
        aria-label={locale === "zh" ? "上一张" : "Previous slide"}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/86 text-2xl text-[#0b6f99] shadow-md backdrop-blur transition hover:bg-white md:flex"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={next}
        aria-label={locale === "zh" ? "下一张" : "Next slide"}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/86 text-2xl text-[#0b6f99] shadow-md backdrop-blur transition hover:bg-white md:flex"
      >
        ›
      </button>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {list.map((slide, index) => (
          <button
            key={slide.eyebrow}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={
              locale === "zh"
                ? `切换到${slide.eyebrow}`
                : `Go to ${slide.eyebrow}`
            }
            className="h-2.5 rounded-full transition-all"
            style={{
              width: activeIndex === index ? 30 : 10,
              backgroundColor:
                activeIndex === index
                  ? active.accent
                  : "rgba(117,143,153,0.45)",
            }}
          />
        ))}
      </div>
    </section>
  );
}