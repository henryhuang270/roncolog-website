/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import HsCodeLookupTool from "../../../../components/HsCodeLookupTool";
import PageHero from "../../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "HS Code 辅助查询",
    title: "输入货物信息，初步查询可能相关的 HS Code 方向。",
    subtitle:
      "本工具用于帮助客户初步整理商品归类方向和需要补充的信息。最终 HS Code、税率、监管条件和申报要求，以官方规则、报关行及实际审核结果为准。",
    freightButton: "提交运输咨询",
    backButton: "返回全球物流",
    warningTitle: "使用说明",
    warningText:
      "查询结果仅为系统根据内置关键词库匹配出的候选方向，不是最终申报编码。商品归类需要结合名称、用途、材质、成分、规格型号、产品图片、出口国、进口国及实际监管规则判断。",
  },

  en: {
    eyebrow: "HS Code Lookup",
    title: "Enter cargo information to check possible HS Code directions.",
    subtitle:
      "This tool helps customers organize preliminary product-classification directions and missing information. Final HS Code, duty rate, regulatory conditions and declaration requirements depend on official rules, customs brokers and actual review results.",
    freightButton: "Submit Freight Inquiry",
    backButton: "Back to Global Logistics",
    warningTitle: "Usage Note",
    warningText:
      "Search results are candidate directions matched from the built-in keyword library, not final declaration codes. Product classification should be reviewed based on product name, usage, material, ingredients, specifications, product images, export country, import country and actual regulatory rules.",
  },
} as const;

export default async function HsCodePage({
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
        image="/images/banners/hs-code-lookup-hero.png"
        imagePosition="70% center"
        tone="light"
        contentAlign="right"
        overlay={false}
        textPanel
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hrefWithLocale("/global-logistics/freight-inquiry")}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.freightButton}
          </Link>

          <Link
            href={hrefWithLocale("/global-logistics")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/85 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
          >
            {copy.backButton}
          </Link>
        </div>
      </PageHero>

      <HsCodeLookupTool locale={currentLocale} />

      <section className="bg-white px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dcebf0] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-[#071629]">
            {copy.warningTitle}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            {copy.warningText}
          </p>
        </div>
      </section>
    </main>
  );
}