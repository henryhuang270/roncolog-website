import { notFound } from "next/navigation";

import BrandPartnershipForm from "@/components/BrandPartnershipForm";
import PageHero from "@/components/PageHero";

type Locale = "en" | "zh";

const content = {
  en: {
    eyebrow: "Brand Partnership Information",
    title: "Submit Brand Partnership Information",
    subtitle:
      "Share your brand profile, product portfolio and cooperation expectations. RONCO will review the information before discussing a practical next step for the China market.",
    noteTitle: "Before you submit",
    notes: [
      "Please provide accurate brand and contact information.",
      "Representative products and available materials help us conduct an initial review more efficiently.",
      "Submission does not constitute a purchase commitment, distribution appointment, exclusivity arrangement or China market authorization.",
    ],
    sideLabel: "RONCO Review Process",
    sideIntro:
      "We review brand information step by step before discussing cooperation details.",
    sideItems: [
      {
        title: "Information Review",
        text: "We review brand positioning, product categories and basic market readiness.",
      },
      {
        title: "Initial Assessment",
        text: "We assess China-market relevance, commercial feasibility and possible market-entry routes.",
      },
      {
        title: "Next-Step Discussion",
        text: "Suitable opportunities will be contacted for a more detailed cooperation discussion.",
      },
    ],
  },

  zh: {
    eyebrow: "海外品牌合作资料",
    title: "提交品牌合作资料",
    subtitle:
      "请提交您的品牌介绍、产品资料及合作预期。荣程国际会先审核相关信息，再与您沟通适合中国市场的务实合作路径。",
    noteTitle: "提交前请注意",
    notes: [
      "请尽量提供准确的品牌、产品及联系人信息。",
      "代表性产品、产品目录及可提供资料越完整，荣程国际的初步审核效率越高。",
      "提交资料不构成采购承诺、经销承诺、独家合作承诺或中国市场准入承诺。",
    ],
    sideLabel: "荣程国际审核流程",
    sideIntro:
      "我们会先审核品牌和产品资料，再判断是否适合进入下一步合作沟通。",
    sideItems: [
      {
        title: "资料审核",
        text: "初步了解品牌定位、产品类别及基本市场准备情况。",
      },
      {
        title: "合作适配评估",
        text: "评估产品与中国市场的相关性、商业可行性及可能的市场进入路径。",
      },
      {
        title: "下一步沟通",
        text: "对于适合进一步推进的项目，荣程国际将联系您讨论更具体的合作方向。",
      },
    ],
  },
} as const;

export default async function BrandPartnershipInquiryPage({
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
        image="/images/banners/brand-partnership-hero.png"
        imagePosition="74% center"
        tone="light"
      />

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="space-y-8">
            <BrandPartnershipForm locale={currentLocale} />

            <section className="rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-7 shadow-sm sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
                {copy.noteTitle}
              </p>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                {copy.notes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#39a773]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-[2rem] border border-[#dcebf0] bg-[#eef7fb] p-7 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.sideLabel}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-700">
              {copy.sideIntro}
            </p>

            <div className="mt-8 space-y-5">
              {copy.sideItems.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#dcebf0] bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-3 text-lg font-semibold text-[#071629]">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}