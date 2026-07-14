import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getJobText, getPublishedJobs, type JobLocale } from "@/lib/job-posts";

type Locale = "en" | "zh";

const pageCopy = {
  zh: {
    eyebrow: "加入我们",
    title: "加入荣程国际团队，我们一起并肩前行。",
    description:
      "荣程国际是一家成长中的供应链服务企业。我们重视务实执行、清晰沟通和长期协作，欢迎愿意从真实业务出发、能够承担责任并推动工作落地的人才加入。",
    sectionEyebrow: "正在招聘",
    sectionTitle: "当前开放职位",
    emptyTitle: "当前暂无公开招聘职位",
    emptyText:
      "招聘信息正在整理中。你也可以将个人简历发送至 info@roncolog.com，我们会在出现合适岗位时与你联系。",
    details: "查看职位详情",
    statusRecruiting: "招聘中",
    statusFilled: "已招满",
    statusPaused: "已停招",
    location: "工作地点",
    type: "职位类型",
    contactTitle: "暂时没有合适的职位？",
    contactText:
      "欢迎将简历和简短自我介绍发送至 info@roncolog.com。请在邮件标题中注明应聘方向。",
    contactButton: "发送简历",
    heroImageAlt: "荣程国际团队合作场景",
  },
  en: {
    eyebrow: "Careers",
    title: "Join the RONCO team and move forward together.",
    description:
      "RONCO is a growing supply-chain service company. We value practical execution, clear communication and long-term collaboration, and welcome people who are ready to take ownership and move real work forward.",
    sectionEyebrow: "OPEN POSITIONS",
    sectionTitle: "Current Opportunities",
    emptyTitle: "No public openings at the moment",
    emptyText:
      "Our recruitment information is being updated. You may still send your CV to info@roncolog.com, and we will contact you when a suitable opportunity becomes available.",
    details: "View Position",
    statusRecruiting: "Open",
    statusFilled: "Filled",
    statusPaused: "Paused",
    location: "Location",
    type: "Employment Type",
    contactTitle: "Do not see a suitable role?",
    contactText:
      "Send your CV and a short introduction to info@roncolog.com. Please include your target role in the email subject.",
    contactButton: "Send Your CV",
    heroImageAlt: "RONCO team collaboration scene",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "zh" ? "加入我们 | 荣程国际" : "Careers | RONCO",
    description:
      locale === "zh"
        ? "查看荣程国际当前开放职位和人才招聘信息。"
        : "Explore current career opportunities at RONCO.",
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = pageCopy[currentLocale];
  const jobs = await getPublishedJobs();

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eef8fb_0%,#ffffff_55%,#eef8f1_100%)] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(57,167,115,0.10),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(11,111,153,0.10),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#24775b] sm:text-base">
              {copy.eyebrow}
            </p>

            <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#071629] sm:text-4xl lg:text-5xl">
              {copy.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              {copy.description}
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#eaf4f8] shadow-[0_18px_46px_rgba(31,93,122,0.12)]">
            <Image
              src="/images/banners/careers-hero-team-banner.png"
              alt={copy.heroImageAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            {copy.sectionEyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#071629] sm:text-4xl">
            {copy.sectionTitle}
          </h2>

          {jobs.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-[#071629]">{copy.emptyTitle}</h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {copy.emptyText}
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {jobs.map((job) => {
                const text = getJobText(job, currentLocale as JobLocale);

                return (
                  <article
                    key={job.id}
                    className="group overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] shadow-sm transition hover:-translate-y-1 hover:border-[#9fd5c0] hover:shadow-[0_18px_48px_rgba(31,93,122,0.14)]"
                  >
                    {job.cover_image_url ? (
                      <div className="relative aspect-[16/8] overflow-hidden bg-[#eef7fb]">
                        <Image
                          src={job.cover_image_url}
                          alt={text.coverAlt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          unoptimized
                        />
                      </div>
                    ) : null}

                    <div className="p-7 sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold text-[#071629]">
                          {text.title}
                        </h3>

                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                            job.recruitment_status === "recruiting"
                              ? "bg-[#ecfff5] text-[#176347]"
                              : job.recruitment_status === "filled"
                                ? "bg-[#fff8e8] text-[#946200]"
                                : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {job.recruitment_status === "recruiting"
                            ? copy.statusRecruiting
                            : job.recruitment_status === "filled"
                              ? copy.statusFilled
                              : copy.statusPaused}
                        </span>
                      </div>

                      {text.excerpt ? (
                        <p className="mt-4 text-base leading-8 text-slate-700">{text.excerpt}</p>
                      ) : null}

                      <div className="mt-6 grid gap-4 border-t border-[#dcebf0] pt-5 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.12em] text-[#24775b]">
                            {copy.location}
                          </p>
                          <p className="mt-2 text-sm text-slate-700">{text.location}</p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold tracking-[0.12em] text-[#24775b]">
                            {copy.type}
                          </p>
                          <p className="mt-2 text-sm text-slate-700">{text.employmentType}</p>
                        </div>
                      </div>

                      <Link
                        href={`/${currentLocale}/careers/${job.slug}`}
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]"
                      >
                        {copy.details}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[2rem] border border-[#cfe6ee] bg-white p-8 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.contactTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">{copy.contactText}</p>
          </div>

          <a
            href="mailto:info@roncolog.com"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#176347] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0f5138]"
          >
            {copy.contactButton}
          </a>
        </div>
      </section>
    </main>
  );
}
