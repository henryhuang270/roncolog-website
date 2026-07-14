import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getJobText,
  getPublishedJobBySlug,
  type JobLocale,
} from "@/lib/job-posts";

type Locale = "en" | "zh";

const pageCopy = {
  zh: {
    back: "返回全部职位",
    location: "工作地点",
    type: "职位类型",
    applyTitle: "申请这个职位",
    applyText:
      "请将个人简历和简短自我介绍发送至以下邮箱，并在邮件标题中注明应聘职位。",
    applyButton: "发送简历",
    statusRecruiting: "招聘中",
    statusFilled: "已招满",
    statusPaused: "已停招",
    closedTitle: "该职位当前已停止接收申请",
    closedText: "你仍可查看职位信息，但暂时无法投递简历或联系招聘负责人。",
    contactName: "联系人",
    contactPhone: "联系电话",
  },
  en: {
    back: "Back to All Positions",
    location: "Location",
    type: "Employment Type",
    applyTitle: "Apply for This Position",
    applyText:
      "Please send your CV and a short introduction to the email below, and include the position title in your email subject.",
    applyButton: "Send Your CV",
    statusRecruiting: "Open",
    statusFilled: "Filled",
    statusPaused: "Paused",
    closedTitle: "Applications are currently closed",
    closedText: "You may still review the position details, but applications and recruitment contacts are currently unavailable.",
    contactName: "Contact",
    contactPhone: "Phone",
  },
} as const;

function renderContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

      if (lines.length === 1 && !/^\d+[.、]/.test(lines[0])) {
        return (
          <h2
            key={`${lines[0]}-${index}`}
            className="mt-10 text-2xl font-semibold text-[#071629] first:mt-0"
          >
            {lines[0]}
          </h2>
        );
      }

      return (
        <div
          key={`${block.slice(0, 30)}-${index}`}
          className="mt-5 space-y-3 text-base leading-8 text-slate-700"
        >
          {lines.map((line, lineIndex) => (
            <p key={`${line}-${lineIndex}`}>{line}</p>
          ))}
        </div>
      );
    });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const job = await getPublishedJobBySlug(slug);

  if (!job || (locale !== "en" && locale !== "zh")) {
    return {};
  }

  const text = getJobText(job, locale as JobLocale);

  return {
    title: `${text.title} | ${locale === "zh" ? "荣程国际招聘" : "RONCO Careers"}`,
    description: text.excerpt || text.title,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const job = await getPublishedJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = pageCopy[currentLocale];
  const text = getJobText(job, currentLocale as JobLocale);
  const applySubject = encodeURIComponent(text.title);

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <section className="bg-white px-6 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/${currentLocale}/careers`}
            className="inline-flex text-sm font-semibold text-[#0b6f99] transition hover:text-[#176347]"
          >
            ← {copy.back}
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
                {currentLocale === "zh" ? "加入我们" : "CAREERS"}
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#071629] sm:text-5xl">
                {text.title}
              </h1>

              <span
                className={`mt-5 inline-flex rounded-full px-3.5 py-2 text-xs font-semibold ${
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

              {text.excerpt ? (
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                  {text.excerpt}
                </p>
              ) : null}

              <div className="mt-8 grid gap-5 rounded-[1.5rem] border border-[#dcebf0] bg-[#f7fbfc] p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#24775b]">
                    {copy.location}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {text.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#24775b]">
                    {copy.type}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {text.employmentType}
                  </p>
                </div>
              </div>
            </div>

            {job.cover_image_url ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#dcebf0] bg-[#eef7fb] shadow-[0_18px_46px_rgba(31,93,122,0.12)]">
                <Image
                  src={job.cover_image_url}
                  alt={text.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_340px]">
          <article className="rounded-[2rem] border border-[#dcebf0] bg-white p-7 shadow-sm sm:p-10">
            {renderContent(text.content)}
          </article>

          <aside className="h-fit rounded-[2rem] border border-[#cfe6ee] bg-[linear-gradient(135deg,#eef8fb,#f3fff8)] p-7 lg:sticky lg:top-28">
            {job.recruitment_status === "recruiting" ? (
              <>
                <h2 className="text-2xl font-semibold text-[#071629]">
                  {copy.applyTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {copy.applyText}
                </p>

                <a
                  href={`mailto:${job.application_email}?subject=${applySubject}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#176347] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0f5138]"
                >
                  {copy.applyButton}
                </a>

                <p className="mt-4 break-all text-sm font-semibold text-[#0b5f83]">
                  {job.application_email}
                </p>

                {job.contact_name || job.contact_phone ? (
                  <div className="mt-6 border-t border-[#cfe6ee] pt-5">
                    {job.contact_name ? (
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold text-[#23445c]">
                          {copy.contactName}：
                        </span>
                        {job.contact_name}
                      </p>
                    ) : null}

                    {job.contact_phone ? (
                      <p className="mt-3 text-sm text-slate-700">
                        <span className="font-semibold text-[#23445c]">
                          {copy.contactPhone}：
                        </span>
                        <a
                          href={`tel:${job.contact_phone.replace(/\s+/g, "")}`}
                          className="font-semibold text-[#0b5f83] transition hover:text-[#176347]"
                        >
                          {job.contact_phone}
                        </a>
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[#071629]">
                  {copy.closedTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {copy.closedText}
                </p>

                <div className="mt-6 rounded-2xl bg-white/75 px-4 py-3 text-center text-sm font-semibold text-slate-600">
                  {job.recruitment_status === "filled"
                    ? copy.statusFilled
                    : copy.statusPaused}
                </div>
              </>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
