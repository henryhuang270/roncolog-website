import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Locale = "en" | "zh";

const siteUrl = "https://www.roncolog.com";

const content = {
  zh: {
    eyebrow: "隐私政策",
    title: "我们如何收集、使用和保护您的信息",
    intro:
      "本隐私政策适用于荣程国际官网以及通过本网站提交的运输咨询、海外品牌合作资料和一般商务联系。",
    updated: "更新日期：2026年7月16日",
    sections: [
      {
        title: "1. 信息处理主体",
        paragraphs: [
          "本网站的信息处理主体为荣程国际供应链科技（东莞）有限公司。",
          "办公地址：广东省东莞市松山湖高新技术产业开发区工业西路国际创意设计城2栋2单元503室，邮编523808。",
          "联系邮箱：info@roncolog.com。",
        ],
      },
      {
        title: "2. 我们可能收集的信息",
        paragraphs: [
          "当您提交运输咨询时，我们可能收集联系人姓名、公司名称、电子邮箱、联系电话，以及货物名称、起运地、目的地、重量、体积、件数、预计发货时间、运输要求和您主动提供的其他货物资料。",
          "当您提交海外品牌合作资料时，我们可能收集联系人信息、公司与品牌资料、产品目录、重点产品、目标市场、合作预期以及您主动上传或填写的其他资料。",
          "当您通过电子邮件或其他公开联系入口与我们沟通时，我们会处理您主动提供的联系信息和沟通内容。",
          "网站托管和安全服务可能自动生成必要的技术日志，例如访问时间、浏览器或设备类型、请求状态和用于安全防护的网络信息。我们目前不以定向广告为目的收集个人信息。",
        ],
      },
      {
        title: "3. 信息使用目的",
        paragraphs: [
          "我们仅在与业务沟通直接相关的范围内使用信息，包括核实和回复咨询、评估运输需求、审核品牌与产品资料、讨论合作条件、安排后续沟通、维护网站安全以及履行适用的法律义务。",
          "未经另行说明和取得必要授权，我们不会将您提交的信息用于与上述目的无关的营销活动，也不会出售个人信息。",
        ],
      },
      {
        title: "4. 信息处理的法律基础与必要性",
        paragraphs: [
          "您主动提交表单或发送邮件，表示希望我们根据您提供的信息进行业务沟通。我们会遵循合法、正当、必要和诚信原则，只处理实现相应沟通目的所需的信息。",
          "表单中标为必填的项目用于识别联系人和初步判断业务需求；其他项目由您根据实际情况自愿提供。请勿提交与咨询无关的敏感个人信息。",
        ],
      },
      {
        title: "5. 服务提供商与信息传输",
        paragraphs: [
          "为运行网站和处理咨询，本网站使用第三方技术服务，包括 Vercel 网站托管、Supabase 数据存储与后台服务，以及 Resend 邮件通知服务。相关服务提供商可能按照其服务规则处理完成服务所必需的信息。",
          "我们会根据业务需要和适用规则限制访问权限，并要求相关处理仅服务于网站运行、信息存储、邮件通知和安全维护等必要目的。",
        ],
      },
      {
        title: "6. 保存期限",
        paragraphs: [
          "我们会在实现咨询处理、合作跟进、争议处理和法定义务所必要的期限内保存信息。保存期限会根据业务是否仍在沟通、资料是否仍有必要以及适用的法律要求确定。",
          "当信息不再需要时，我们会在合理范围内删除、匿名化或停止继续使用，但法律法规要求保留的除外。",
        ],
      },
      {
        title: "7. 信息安全",
        paragraphs: [
          "我们采取与网站规模和信息性质相适应的管理与技术措施，减少未经授权访问、泄露、篡改、丢失或滥用的风险。",
          "互联网传输和第三方服务无法保证绝对安全。如发生或可能发生信息安全事件，我们会根据实际情况采取补救措施，并按适用规则处理通知或报告事项。",
        ],
      },
      {
        title: "8. 您的权利",
        paragraphs: [
          "您可以通过 info@roncolog.com 联系我们，询问我们是否处理了您的信息，并在适用情况下提出查阅、更正、补充、删除、撤回同意或限制处理等请求。",
          "为保护信息安全，我们可能需要核实请求人的身份和请求内容。法律法规另有规定或信息仍需用于履行法定义务、处理争议的，我们可能无法立即删除全部信息。",
        ],
      },
      {
        title: "9. 未成年人信息",
        paragraphs: [
          "本网站主要面向企业客户、品牌方、供应商和成年业务联系人，不以未成年人为主要服务对象。未成年人不应在监护人不知情的情况下通过本网站提交个人信息。",
        ],
      },
      {
        title: "10. 外部链接",
        paragraphs: [
          "本网站可能包含 LinkedIn 等第三方网站链接。您访问第三方网站后，其信息处理活动适用该第三方自己的隐私规则，荣程国际无法控制其处理方式。",
        ],
      },
      {
        title: "11. 政策更新",
        paragraphs: [
          "我们可能根据网站功能、业务流程或适用规则变化更新本政策。更新后的版本将在本页面公布，并标明更新日期。重大变化如对您的权益产生实质影响，我们会采用适当方式进行说明。",
        ],
      },
      {
        title: "12. 联系我们",
        paragraphs: [
          "公司：荣程国际供应链科技（东莞）有限公司。",
          "地址：广东省东莞市松山湖高新技术产业开发区工业西路国际创意设计城2栋2单元503室，邮编523808。",
          "邮箱：info@roncolog.com。",
        ],
      },
    ],
    back: "返回首页",
    contact: "联系我们",
    note:
      "本页面用于说明荣程国际官网的一般信息处理方式，不替代针对特定项目、合同或法律要求另行提供的说明。",
  },
  en: {
    eyebrow: "Privacy Policy",
    title: "How we collect, use and protect your information",
    intro:
      "This Privacy Policy applies to the RONCO website and to freight inquiries, overseas brand partnership submissions and general business communications made through this website.",
    updated: "Last updated: 16 July 2026",
    sections: [
      {
        title: "1. Data Controller",
        paragraphs: [
          "The entity responsible for information processed through this website is RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
          "Office address: Room 503, Unit 2, Building 2, International Creative Design City (ICDC), West Industrial Road, Songshan Lake Science and Technology Industrial Park, Dongguan, Guangdong 523808, China.",
          "Contact email: info@roncolog.com.",
        ],
      },
      {
        title: "2. Information We May Collect",
        paragraphs: [
          "For freight inquiries, we may collect contact name, company name, email address, telephone number, and shipment information such as cargo name, origin, destination, weight, volume, package count, estimated shipping date, transport requirements and other details you voluntarily provide.",
          "For overseas brand partnership submissions, we may collect contact details, company and brand information, product catalogues, representative products, target markets, cooperation expectations and other materials you voluntarily upload or enter.",
          "When you contact us by email or another public contact channel, we process the contact information and communication content you choose to provide.",
          "Hosting and security services may automatically generate necessary technical logs, such as access time, browser or device type, request status and network information used for security protection. We do not currently collect personal information for targeted advertising.",
        ],
      },
      {
        title: "3. How We Use Information",
        paragraphs: [
          "We use information only where directly related to business communication, including verifying and responding to inquiries, assessing shipment requirements, reviewing brand and product materials, discussing cooperation terms, arranging follow-up communication, maintaining website security and complying with applicable legal obligations.",
          "Unless separately explained and appropriately authorized, we do not use submitted information for unrelated marketing and we do not sell personal information.",
        ],
      },
      {
        title: "4. Legal Basis and Data Minimisation",
        paragraphs: [
          "By submitting a form or sending an email, you are asking us to communicate with you using the information provided. We process information under principles of lawfulness, fairness, necessity and good faith, and limit processing to what is required for the relevant communication purpose.",
          "Fields marked as required are needed to identify the contact and conduct an initial business assessment. Other information is provided voluntarily according to your circumstances. Please do not submit sensitive personal information unrelated to the inquiry.",
        ],
      },
      {
        title: "5. Service Providers and Data Transfers",
        paragraphs: [
          "To operate the website and handle inquiries, we use third-party technology providers, including Vercel for website hosting, Supabase for data storage and backend services, and Resend for email notifications. These providers may process information necessary to deliver their services under their own service terms.",
          "We limit access according to business need and seek to ensure that processing is restricted to necessary purposes such as website operation, storage, email notification and security maintenance.",
        ],
      },
      {
        title: "6. Retention",
        paragraphs: [
          "We retain information for the period reasonably necessary to process inquiries, follow up cooperation, handle disputes and meet legal obligations. The period depends on whether communication remains active, whether the materials remain necessary and applicable legal requirements.",
          "When information is no longer required, we will, where reasonably practicable, delete it, anonymise it or stop further use, unless retention is required by law.",
        ],
      },
      {
        title: "7. Security",
        paragraphs: [
          "We use administrative and technical measures appropriate to the scale of the website and the nature of the information to reduce risks of unauthorised access, disclosure, alteration, loss or misuse.",
          "No internet transmission or third-party service can be guaranteed to be completely secure. If an information security incident occurs or is likely to occur, we will take remedial action and handle notification or reporting obligations as applicable.",
        ],
      },
      {
        title: "8. Your Rights",
        paragraphs: [
          "You may contact us at info@roncolog.com to ask whether we process your information and, where applicable, request access, correction, supplementation, deletion, withdrawal of consent or restriction of processing.",
          "To protect information security, we may need to verify the identity of the requester and the scope of the request. We may be unable to delete all information immediately where retention is required by law or necessary for legal obligations or dispute handling.",
        ],
      },
      {
        title: "9. Information About Minors",
        paragraphs: [
          "This website is primarily intended for business customers, brand owners, suppliers and adult business contacts. Minors should not submit personal information through this website without the knowledge of a parent or guardian.",
        ],
      },
      {
        title: "10. External Links",
        paragraphs: [
          "This website may include links to third-party services such as LinkedIn. Once you visit a third-party website, its own privacy rules apply. RONCO does not control how that third party processes information.",
        ],
      },
      {
        title: "11. Changes to This Policy",
        paragraphs: [
          "We may update this Policy when website functions, business processes or applicable requirements change. The updated version will be published on this page with a revised date. Where a material change substantially affects your rights, we will provide an appropriate explanation.",
        ],
      },
      {
        title: "12. Contact Us",
        paragraphs: [
          "Company: RONCO International Supply Chain Technology (Dongguan) Co., Ltd.",
          "Address: Room 503, Unit 2, Building 2, International Creative Design City (ICDC), West Industrial Road, Songshan Lake Science and Technology Industrial Park, Dongguan, Guangdong 523808, China.",
          "Email: info@roncolog.com.",
        ],
      },
    ],
    back: "Back to Home",
    contact: "Contact Us",
    note:
      "This page describes the general information-handling practices of the RONCO website. It does not replace any additional notice required for a specific project, contract or legal obligation.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    return {};
  }

  const isZh = locale === "zh";
  const canonicalUrl = `${siteUrl}/${locale}/privacy`;

  return {
    title: isZh ? "隐私政策｜荣程国际" : "Privacy Policy | RONCO",
    description: isZh
      ? "了解荣程国际官网如何收集、使用、保存和保护运输咨询、品牌合作资料及一般商务联系中提交的信息。"
      : "Learn how the RONCO website collects, uses, retains and protects information submitted through freight inquiries, brand partnership forms and business communications.",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "zh-CN": `${siteUrl}/zh/privacy`,
        en: `${siteUrl}/en/privacy`,
        "x-default": `${siteUrl}/en/privacy`,
      },
    },
    openGraph: {
      type: "website",
      locale: isZh ? "zh_CN" : "en_US",
      alternateLocale: isZh ? ["en_US"] : ["zh_CN"],
      url: canonicalUrl,
      siteName: isZh ? "荣程国际" : "RONCO",
      title: isZh ? "隐私政策｜荣程国际" : "Privacy Policy | RONCO",
      description: isZh
        ? "荣程国际官网信息收集、使用、保存、安全保护及个人权利说明。"
        : "Information collection, use, retention, security and individual rights for the RONCO website.",
    },
  };
}

export default async function PrivacyPage({
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
      <section className="border-b border-[#d6e8ee] bg-[linear-gradient(135deg,#eef8fb,#f3fff8)] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            {copy.intro}
          </p>
          <p className="mt-4 text-sm text-slate-500">{copy.updated}</p>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto grid max-w-5xl gap-6">
          {copy.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-[#dcebf0] bg-white p-7 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-semibold leading-snug text-[#071629]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-8 text-slate-700 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <div className="rounded-[1.75rem] border border-[#f0d7a2] bg-[#fff8e8] p-6 text-sm leading-7 text-[#7a5a1e]">
            {copy.note}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${currentLocale}`}
              className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3 text-sm font-semibold text-[#176347] transition hover:bg-[#ecfff5]"
            >
              {copy.back}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]"
            >
              {copy.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
