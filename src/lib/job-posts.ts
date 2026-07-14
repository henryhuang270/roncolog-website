import "server-only";

import { supabaseServer } from "./supabase-server";

export type JobPost = {
  id: string;
  slug: string;
  status: "draft" | "published" | "archived";
  recruitment_status: "recruiting" | "filled" | "paused";
  title_zh: string;
  title_en: string;
  excerpt_zh: string;
  excerpt_en: string;
  content_zh: string;
  content_en: string;
  location_zh: string;
  location_en: string;
  employment_type_zh: string;
  employment_type_en: string;
  application_email: string;
  contact_name: string | null;
  contact_phone: string | null;
  cover_image_url: string | null;
  cover_image_alt_zh: string | null;
  cover_image_alt_en: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type JobLocale = "en" | "zh";

const jobFields = `
  id,
  slug,
  status,
  recruitment_status,
  title_zh,
  title_en,
  excerpt_zh,
  excerpt_en,
  content_zh,
  content_en,
  location_zh,
  location_en,
  employment_type_zh,
  employment_type_en,
  application_email,
  contact_name,
  contact_phone,
  cover_image_url,
  cover_image_alt_zh,
  cover_image_alt_en,
  published_at,
  created_at,
  updated_at
`;

export async function getPublishedJobs(): Promise<JobPost[]> {
  const now = new Date().toISOString();

  const { data, error } = await supabaseServer
    .from("job_posts")
    .select(jobFields)
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load published jobs:", error.message);
    return [];
  }

  return (data ?? []) as JobPost[];
}

export async function getPublishedJobBySlug(
  slug: string,
): Promise<JobPost | null> {
  const now = new Date().toISOString();

  const { data, error } = await supabaseServer
    .from("job_posts")
    .select(jobFields)
    .eq("slug", slug)
    .eq("status", "published")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .maybeSingle();

  if (error) {
    console.error("Failed to load published job:", error.message);
    return null;
  }

  return (data ?? null) as JobPost | null;
}

export function getJobText(job: JobPost, locale: JobLocale) {
  const isZh = locale === "zh";

  return {
    title: isZh ? job.title_zh : job.title_en || job.title_zh,
    excerpt: isZh ? job.excerpt_zh : job.excerpt_en || job.excerpt_zh,
    content: isZh ? job.content_zh : job.content_en || job.content_zh,
    location: isZh ? job.location_zh : job.location_en || job.location_zh,
    employmentType: isZh
      ? job.employment_type_zh
      : job.employment_type_en || job.employment_type_zh,
    coverAlt: isZh
      ? job.cover_image_alt_zh || job.title_zh
      : job.cover_image_alt_en || job.title_en || job.title_zh,
  };
}
