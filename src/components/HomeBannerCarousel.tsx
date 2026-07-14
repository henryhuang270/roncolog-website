"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Locale = "en" | "zh";

type HomeBannerCarouselProps = {
  locale: Locale;
};

const slides = {
  zh: [
    {
      eyebrow: "国际物流 · 商品贸易 · 品牌合作",
      title: "以国际物流为基础，\n连接商品、市场与交付。",
      description:
        "荣程国际立足东莞松山湖，围绕跨境运输、商品进出口和海外品牌合作，持续建设物流协调、供应链协同与市场分销能力。",
      image: "/images/banners/home-banner-01-company-vision.webp",
      imagePosition: "center center",
      primaryLabel: "了解荣程国际",
      primaryHref: "/zh/about",
      secondaryLabel: "探索业务方向",
      secondaryHref: "#business-overview",
      accent: "#24775b",
      textAccent: "#176347",
    },
    {
      eyebrow: "全球物流",
      title: "从真实货物出发，\n协调合适的跨境运输路径。",
      description:
        "根据货物、起运地、目的地、时效与交付要求，协调海运、空运、铁路运输、陆运及多式联运。",
      image: "/images/banners/home-banner-02-global-logistics.webp",
      imagePosition: "center center",
      primaryLabel: "提交运输咨询",
      primaryHref: "/zh/global-logistics/freight-inquiry",
      secondaryLabel: "查看业务范围",
      secondaryHref: "/zh/global-logistics/services",
      accent: "#0b6f99",
      textAccent: "#075777",
    },
    {
      eyebrow: "商品贸易与品牌分销",
      title: "从产品筛选到市场测试，\n推动商品双向流通。",
      description:
        "围绕国内外优质产品，推进资料评估、供应链协调、市场测试以及电商和渠道合作，让商品更稳妥地进入目标市场。",
      image: "/images/banners/home-banner-03-trade-distribution.webp",
      imagePosition: "center center",
      primaryLabel: "了解国际贸易",
      primaryHref: "/zh/international-trade",
      secondaryLabel: "咨询品牌合作",
      secondaryHref: "/zh/international-trade/overseas-brand-partnership",
      accent: "#1d8a62",
      textAccent: "#176347",
    },
  ],
  en: [
    {
      eyebrow: "GLOBAL LOGISTICS · TRADE · BRAND PARTNERSHIPS",
      title: "Built on global logistics.\nConnecting products, markets and delivery.",
      description:
        "Based in Dongguan Songshan Lake, RONCO develops practical capabilities across cross-border logistics, international trade, brand partnerships and market distribution.",
      image: "/images/banners/home-banner-01-company-vision.webp",
      imagePosition: "center center",
      primaryLabel: "About RONCO",
      primaryHref: "/en/about",
      secondaryLabel: "Explore Our Business",
      secondaryHref: "#business-overview",
      accent: "#24775b",
      textAccent: "#176347",
    },
    {
      eyebrow: "GLOBAL LOGISTICS",
      title: "Starting with the cargo,\nwe coordinate the right transport route.",
      description:
        "Based on cargo, origin, destination, timing and delivery requirements, RONCO coordinates ocean, air, rail, road and multimodal transport.",
      image: "/images/banners/home-banner-02-global-logistics.webp",
      imagePosition: "center center",
      primaryLabel: "Submit a Shipping Enquiry",
      primaryHref: "/en/global-logistics/freight-inquiry",
      secondaryLabel: "View Service Scope",
      secondaryHref: "/en/global-logistics/services",
      accent: "#0b6f99",
      textAccent: "#075777",
    },
    {
      eyebrow: "INTERNATIONAL TRADE & DISTRIBUTION",
      title: "From product selection to market testing,\nwe help products move across markets.",
      description:
        "RONCO supports product evaluation, supply-chain coordination, market testing, e-commerce collaboration and channel development for selected products from China and overseas.",
      image: "/images/banners/home-banner-03-trade-distribution.webp",
      imagePosition: "center center",
      primaryLabel: "Explore International Trade",
      primaryHref: "/en/international-trade",
      secondaryLabel: "Discuss a Brand Partnership",
      secondaryHref: "/en/international-trade/overseas-brand-partnership",
      accent: "#1d8a62",
      textAccent: "#176347",
    },
  ],
} as const;

export default function HomeBannerCarousel({
  locale,
}: HomeBannerCarouselProps) {
  const list = useMemo(() => slides[locale], [locale]);
  const slideCount = list.length;

  /*
   * 为实现无闪烁的无限横向轮播：
   * 轨道结构是 [最后一张克隆] + [真实三张] + [第一张克隆]
   * 初始位置是第 1 张真实幻灯片，对应 trackIndex = 1。
   */
  const extendedSlides = useMemo(
    () => [list[slideCount - 1], ...list, list[0]],
    [list, slideCount],
  );

  const [trackIndex, setTrackIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const activeIndex = (trackIndex - 1 + slideCount) % slideCount;
  const active = list[activeIndex];

  const goToTrackIndex = useCallback((index: number) => {
    setTransitionEnabled(true);
    setTrackIndex(index);
  }, []);

  const previous = useCallback(() => {
    goToTrackIndex(trackIndex - 1);
  }, [goToTrackIndex, trackIndex]);

  const next = useCallback(() => {
    goToTrackIndex(trackIndex + 1);
  }, [goToTrackIndex, trackIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      goToTrackIndex(index + 1);
    },
    [goToTrackIndex],
  );

  useEffect(() => {
    if (paused || isDragging) return;

    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setTrackIndex((current) => current + 1);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, isDragging]);

  const handleTransitionEnd = () => {
    if (trackIndex === slideCount + 1) {
      setTransitionEnabled(false);
      setTrackIndex(1);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }

    if (trackIndex === 0) {
      setTransitionEnabled(false);
      setTrackIndex(slideCount);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchDeltaX.current = 0;
    setIsDragging(true);
    setPaused(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const currentX = event.touches[0]?.clientX ?? touchStartX.current;
    touchDeltaX.current = currentX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 48;

    if (touchDeltaX.current <= -threshold) {
      next();
    } else if (touchDeltaX.current >= threshold) {
      previous();
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsDragging(false);
    setPaused(false);
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#eef8fb] text-[#071629]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={
        locale === "zh" ? "首页三屏轮播 Banner" : "Homepage carousel banner"
      }
    >
      <div
        className="flex will-change-transform"
        style={{
          width: `${extendedSlides.length * 100}%`,
          transform: `translate3d(-${
            (trackIndex * 100) / extendedSlides.length
          }%, 0, 0)`,
          transition: transitionEnabled
            ? "transform 1050ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => {
          const realIndex = (index - 1 + slideCount) % slideCount;
          const isCurrent = realIndex === activeIndex;

          return (
            <article
              key={`${slide.eyebrow}-${index}`}
              className="relative isolate shrink-0 overflow-hidden"
              style={{
                width: `${100 / extendedSlides.length}%`,
                minHeight: "clamp(500px, calc(100svh - 86px), 680px)",
              }}
              aria-hidden={!isCurrent}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 1}
                quality={85}
                sizes="100vw"
                draggable={false}
                className={`object-cover brightness-[1.02] saturate-[1.02] transition-transform duration-[1300ms] ease-out ${
                  isCurrent ? "scale-100" : "scale-[1.025]"
                }`}
                style={{ objectPosition: slide.imagePosition }}
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,253,254,0.97)_0%,rgba(250,253,254,0.92)_30%,rgba(250,253,254,0.72)_47%,rgba(250,253,254,0.30)_67%,rgba(250,253,254,0.06)_100%)]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(50,160,117,0.10),transparent_28%),radial-gradient(circle_at_34%_82%,rgba(88,175,205,0.08),transparent_30%)]" />

              <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-6 py-14 sm:px-8 sm:py-16 lg:px-10">
                <div
                  className={`max-w-[620px] transition-all duration-700 ${
                    isCurrent
                      ? "translate-y-0 opacity-100 delay-150"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <div
                    className="mb-5 inline-flex items-center gap-3 rounded-full border bg-white/84 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] shadow-sm backdrop-blur sm:text-xs"
                    style={{
                      borderColor: `${slide.accent}38`,
                      color: slide.textAccent,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: slide.accent }}
                    />
                    {slide.eyebrow}
                  </div>

                  <h1 className="max-w-[760px] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-[#071629]">
                    {slide.title.split("\n").map((line, lineIndex, array) => (
                      <span key={`${line}-${lineIndex}`}>
                        {line}
                        {lineIndex < array.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h1>

                  <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href={slide.primaryHref}
                      tabIndex={isCurrent ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-3.5 text-sm font-semibold tracking-[0.04em] text-white shadow-[0_12px_28px_rgba(11,111,153,0.20)] transition hover:-translate-y-0.5 hover:bg-[#075777]"
                    >
                      {slide.primaryLabel}
                    </Link>

                    <Link
                      href={slide.secondaryHref}
                      tabIndex={isCurrent ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-full border bg-white/88 px-7 py-3.5 text-sm font-semibold tracking-[0.04em] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                      style={{
                        borderColor: `${slide.accent}66`,
                        color: slide.textAccent,
                      }}
                    >
                      {slide.secondaryLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
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

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {list.map((slide, index) => (
          <button
            key={slide.eyebrow}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={
              locale === "zh"
                ? `切换到${slide.eyebrow}`
                : `Go to ${slide.eyebrow}`
            }
            aria-current={activeIndex === index ? "true" : undefined}
            className="h-2.5 rounded-full transition-all duration-300"
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

      <span className="sr-only" aria-live="polite">
        {locale === "zh"
          ? `当前第 ${activeIndex + 1} 张，共 ${slideCount} 张`
          : `Slide ${activeIndex + 1} of ${slideCount}`}
      </span>
    </section>
  );
}
