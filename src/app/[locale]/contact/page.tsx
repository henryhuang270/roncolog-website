import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "联系我们",
    title: "根据你的业务需求，选择合适的沟通入口。",
    subtitle:
      "你可以通过运输咨询、海外品牌合作资料提交或公司邮箱与荣程国际联系。请尽量提供具体货物、产品、路线或合作背景，便于我们更快判断下一步沟通方向。",
    heroPrimary: "提交运输咨询",
    heroSecondary: "发送邮件",

    infoEyebrow: "公司信息",
    infoTitle: "荣程国际供应链科技（东莞）有限公司",
    infoText:
      "荣程国际总部位于东莞松山湖，围绕全球物流、国际贸易、海外品牌引进与分销开展供应链服务。对于不同类型的业务需求，建议从对应入口提交资料，便于后续沟通更清楚、更高效。",
    companyInfo: [
      {
        label: "中文法定公司名称",
        value: "荣程国际供应链科技（东莞）有限公司",
      },
      {
        label: "英文法定公司名称",
        value:
          "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
      },
      {
        label: "总部位置",
        value: "东莞松山湖",
      },
      {
        label: "联系邮箱",
        value: "info@roncolog.com",
        href: "mailto:info@roncolog.com",
      },
      {
        label: "LinkedIn｜Henry Huang",
        value: "linkedin.com/in/henry-huang-a9047425b",
        href: "https://www.linkedin.com/in/henry-huang-a9047425b",
      },
    ],

    whatsappTitle: "WhatsApp 联系｜Henry Huang",
    whatsappText: "请使用 WhatsApp 相机扫描二维码添加联系。",

    accessEyebrow: "联系入口",
    accessTitle: "请选择更适合你的沟通方式",
    accessItems: [
      {
        number: "01",
        title: "运输咨询",
        text: "适合已有货物、起运地、目的地、重量体积、预计发货时间等运输需求的客户。",
        button: "提交运输咨询",
        href: "/global-logistics/freight-inquiry",
      },
      {
        number: "02",
        title: "海外品牌合作",
        text: "适合海外品牌方、供应商或合作代表提交品牌资料、产品方向和中国市场合作想法。",
        button: "提交品牌合作资料",
        href: "/international-trade/overseas-brand-partnership/inquiry",
      },
      {
        number: "03",
        title: "普通商务联系",
        text: "适合一般业务介绍、初步合作沟通或尚不确定具体入口的需求。",
        button: "发送邮件",
        href: "mailto:info@roncolog.com",
      },
    ],

    prepareEyebrow: "提交前准备",
    prepareTitle: "提前准备关键信息，会让沟通更高效",
    prepareGroups: [
      {
        title: "运输咨询建议准备",
        items: [
          "货物名称、用途、材质或主要特性",
          "起运地、目的地、是否需要提货或送货",
          "重量、体积、件数和包装方式",
          "预计发货时间、期望到达时间和贸易条款",
          "是否有特殊尺寸、装卸、包装或交付要求",
        ],
      },
      {
        title: "海外品牌合作建议准备",
        items: [
          "品牌介绍、官网或产品目录",
          "希望进入中国市场的核心产品方向",
          "供货方式、授权合作意向和目标市场想法",
          "现有产品资料，如标签、成分、检测或自由销售资料",
          "联系人信息、所在国家和可沟通语言",
        ],
      },
    ],

    noteTitle: "沟通说明",
    noteText:
      "荣程国际会根据你提交的实际信息判断下一步沟通方向。运输方案、报价、时效、清关要求、产品引进、品牌合作及分销安排，均需结合具体货物条件、产品资料、品牌授权、合规要求和实际沟通结果确认。",

    ctaTitle: "还不确定该从哪里开始？",
    ctaText:
      "可以先通过公司邮箱简要说明你的需求，我们会根据业务类型建议更合适的沟通入口。",
    ctaButton: "发送邮件至 info@roncolog.com",
  },

  en: {
    eyebrow: "Contact",
    title: "Choose the right contact path for your business need.",
    subtitle:
      "You can contact RONCO through freight inquiry, overseas brand partnership submission or the company email. Please provide specific cargo, product, route or cooperation background so that the next communication can be assessed more efficiently.",
    heroPrimary: "Submit Freight Inquiry",
    heroSecondary: "Send Email",

    infoEyebrow: "Company Information",
    infoTitle: "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
    infoText:
      "RONCO is based in Dongguan Songshan Lake and works across global logistics, international trade, overseas brand introduction and distribution. For different business needs, submitting information through the relevant access point helps make follow-up communication clearer and more efficient.",
    companyInfo: [
      {
        label: "Chinese Legal Name",
        value: "荣程国际供应链科技（东莞）有限公司",
      },
      {
        label: "English Legal Name",
        value:
          "RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
      },
      {
        label: "Headquarters",
        value: "Dongguan Songshan Lake",
      },
      {
        label: "Email",
        value: "info@roncolog.com",
        href: "mailto:info@roncolog.com",
      },
      {
        label: "LinkedIn | Henry Huang",
        value: "linkedin.com/in/henry-huang-a9047425b",
        href: "https://www.linkedin.com/in/henry-huang-a9047425b",
      },
    ],

    whatsappTitle: "WhatsApp Contact | Henry Huang",
    whatsappText: "Scan the QR code with the WhatsApp camera to add this contact.",

    accessEyebrow: "Contact Access",
    accessTitle: "Select the communication path that fits your need",
    accessItems: [
      {
        number: "01",
        title: "Freight Inquiry",
        text: "For customers with cargo, origin, destination, weight, volume, estimated shipping time or other shipment needs.",
        button: "Submit Freight Inquiry",
        href: "/global-logistics/freight-inquiry",
      },
      {
        number: "02",
        title: "Overseas Brand Partnership",
        text: "For overseas brands, suppliers or representatives submitting brand information, product directions and China-market cooperation ideas.",
        button: "Submit Brand Information",
        href: "/international-trade/overseas-brand-partnership/inquiry",
      },
      {
        number: "03",
        title: "General Business Contact",
        text: "For general business introduction, preliminary cooperation discussion or requests that do not yet fit a specific form.",
        button: "Send Email",
        href: "mailto:info@roncolog.com",
      },
    ],

    prepareEyebrow: "Before Submission",
    prepareTitle: "Preparing key information makes communication more efficient",
    prepareGroups: [
      {
        title: "For freight inquiries",
        items: [
          "Cargo name, usage, material or key characteristics",
          "Origin, destination, pickup or delivery requirements",
          "Weight, volume, package count and packaging method",
          "Estimated shipping time, expected arrival timing and trade terms",
          "Special dimensions, handling, packaging or delivery requirements",
        ],
      },
      {
        title: "For overseas brand partnership",
        items: [
          "Brand introduction, official website or product catalogue",
          "Key product directions intended for the China market",
          "Supply model, authorization intention and target-market ideas",
          "Available product documents such as labels, ingredients, tests or free-sale documents",
          "Contact information, country and communication language",
        ],
      },
    ],

    noteTitle: "Communication Note",
    noteText:
      "RONCO will assess the next communication direction based on the actual information submitted. Logistics plans, quotations, lead times, customs requirements, product introduction, brand cooperation and distribution arrangements depend on cargo conditions, product documents, brand authorization, compliance requirements and actual communication results.",

    ctaTitle: "Not sure where to start?",
    ctaText:
      "You can first send a short introduction by email, and we will suggest the more suitable communication path based on your business type.",
    ctaButton: "Email info@roncolog.com",
  },
} as const;


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "zh") {
    return {
      title: "联系我们｜运输咨询、国际贸易与海外品牌合作｜荣程国际",
      description:
        "联系荣程国际，提交跨境运输咨询、海外品牌合作资料或一般商务需求。请提供货物、路线、产品或合作背景，便于我们进一步沟通。",
      alternates: {
        canonical: "https://www.roncolog.com/zh/contact",
        languages: {
          "zh-CN": "https://www.roncolog.com/zh/contact",
          en: "https://www.roncolog.com/en/contact",
        },
      },
    };
  }

  return {
    title: "Contact RONCO | Freight Inquiry, Trade & Brand Partnership",
    description:
      "Contact RONCO for cross-border freight inquiries, international trade discussions, overseas brand partnership submissions and general business communication.",
    alternates: {
      canonical: "https://www.roncolog.com/en/contact",
      languages: {
        "zh-CN": "https://www.roncolog.com/zh/contact",
        en: "https://www.roncolog.com/en/contact",
      },
    },
  };
}

export default async function ContactPage({
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
        image="/images/banners/contact-ronco-hero.png"
        imagePosition="72% center"
        tone="light"
        overlay={false}
        textPanel
      >
        <Link
          href={hrefWithLocale("/global-logistics/freight-inquiry")}
          className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_10px_26px_rgba(11,111,153,0.24)] transition hover:-translate-y-0.5 hover:bg-[#176347]"
        >
          {copy.heroPrimary}
        </Link>

        <a
          href="mailto:info@roncolog.com"
          className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/92 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#176347] shadow-[0_10px_24px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
        >
          {copy.heroSecondary}
        </a>
      </PageHero>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.infoEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.infoTitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              {copy.infoText}
            </p>
          </div>

          <div className="grid gap-4">
            {copy.companyInfo.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                  {item.label}
                </p>

                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 inline-flex break-all text-base font-semibold leading-7 text-[#0b6f99] transition hover:text-[#176347]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-base font-semibold leading-7 text-[#071629]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}

            <div className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                {copy.whatsappTitle}
              </p>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Image
                  src="/images/contact/whatsapp-henry-qr.png"
                  alt={copy.whatsappTitle}
                  width={260}
                  height={260}
                  className="h-auto w-[190px] rounded-2xl border border-[#d6e8ee] bg-white p-2"
                />
                <p className="max-w-sm text-sm leading-7 text-slate-600">
                  {copy.whatsappText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.accessEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.accessTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.accessItems.map((item) => {
              const href = item.href.startsWith("mailto:")
                ? item.href
                : hrefWithLocale(item.href);

              const isEmail = item.href.startsWith("mailto:");

              return (
                <article
                  key={item.number}
                  className="flex h-full flex-col rounded-[2rem] border border-[#d7e8ee] bg-white p-7 shadow-[0_14px_34px_rgba(31,93,122,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(31,93,122,0.14)]"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                    {item.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-[#071629]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  {isEmail ? (
                    <a
                      href={href}
                      className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:bg-[#ecfff5]"
                    >
                      {item.button}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:bg-[#ecfff5]"
                    >
                      {item.button}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.prepareEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.prepareTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {copy.prepareGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#071629]">
                  {group.title}
                </h3>

                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-white px-4 py-3 text-sm leading-7 text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dcebf0] bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-[#071629]">
            {copy.noteTitle}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            {copy.noteText}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-[#cfe6ee] bg-[linear-gradient(135deg,#f7fbfc,#f3fff8)] p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.ctaTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              {copy.ctaText}
            </p>
          </div>

          <a
            href="mailto:info@roncolog.com"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}