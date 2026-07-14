"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

type JobStatus = "draft" | "published" | "archived";
type RecruitmentStatus = "recruiting" | "filled" | "paused";

type JobFormState = {
  slug: string;
  status: JobStatus;
  recruitment_status: RecruitmentStatus;
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
  contact_name: string;
  contact_phone: string;
  cover_image_url: string;
  cover_image_alt_zh: string;
  cover_image_alt_en: string;
  published_at: string | null;
};

const initialState: JobFormState = {
  slug: "",
  status: "draft",
  recruitment_status: "recruiting",
  title_zh: "",
  title_en: "",
  excerpt_zh: "",
  excerpt_en: "",
  content_zh: "",
  content_en: "",
  location_zh: "东莞松山湖",
  location_en: "Songshan Lake, Dongguan",
  employment_type_zh: "全职",
  employment_type_en: "Full-time",
  application_email: "info@roncolog.com",
  contact_name: "",
  contact_phone: "",
  cover_image_url: "",
  cover_image_alt_zh: "",
  cover_image_alt_en: "",
  published_at: null,
};

type JobPostEditorProps = {
  jobId?: string;
};

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function safeFileName(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2, 8);
  return `careers/${timestamp}-${random}.${extension}`;
}

export default function JobPostEditor({ jobId }: JobPostEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(jobId);

  const [form, setForm] = useState<JobFormState>(initialState);
  const [isLoading, setIsLoading] = useState(isEditing);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!jobId) return;

    let isMounted = true;

    async function loadJob() {
      const { data, error } = await supabaseBrowser
        .from("job_posts")
        .select("*")
        .eq("id", jobId)
        .maybeSingle();

      if (!isMounted) return;

      if (error || !data) {
        setMessage(
          error ? `读取职位失败：${error.message}` : "没有找到该职位。",
        );
        setIsLoading(false);
        return;
      }

      setForm({
        slug: data.slug ?? "",
        status: data.status ?? "draft",
        recruitment_status: data.recruitment_status ?? "recruiting",
        title_zh: data.title_zh ?? "",
        title_en: data.title_en ?? "",
        excerpt_zh: data.excerpt_zh ?? "",
        excerpt_en: data.excerpt_en ?? "",
        content_zh: data.content_zh ?? "",
        content_en: data.content_en ?? "",
        location_zh: data.location_zh ?? "",
        location_en: data.location_en ?? "",
        employment_type_zh: data.employment_type_zh ?? "",
        employment_type_en: data.employment_type_en ?? "",
        application_email: data.application_email ?? "info@roncolog.com",
        contact_name: data.contact_name ?? "",
        contact_phone: data.contact_phone ?? "",
        cover_image_url: data.cover_image_url ?? "",
        cover_image_alt_zh: data.cover_image_alt_zh ?? "",
        cover_image_alt_en: data.cover_image_alt_en ?? "",
        published_at: data.published_at ?? null,
      });

      setIsLoading(false);
    }

    void loadJob();

    return () => {
      isMounted = false;
    };
  }, [jobId]);

  function updateField<K extends keyof JobFormState>(
    field: K,
    value: JobFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function uploadCoverImage(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setMessage("只支持 JPG、PNG 或 WebP 图片。");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("图片不能超过 5MB。");
      return;
    }

    setMessage("");
    setIsUploading(true);

    const filePath = safeFileName(file);

    const { error } = await supabaseBrowser.storage
      .from("site-media")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (error) {
      setMessage(`图片上传失败：${error.message}`);
      setIsUploading(false);
      return;
    }

    const { data } = supabaseBrowser.storage
      .from("site-media")
      .getPublicUrl(filePath);

    updateField("cover_image_url", data.publicUrl);
    setMessage("图片上传成功。");
    setIsUploading(false);
  }

  async function saveJob(requestedStatus?: JobStatus) {
    setMessage("");

    const slug = normalizeSlug(form.slug);

    if (!slug) {
      setMessage("请填写英文网址标识，例如 cross-border-ecommerce-director。");
      return;
    }

    if (!form.title_zh.trim()) {
      setMessage("请填写中文职位名称。");
      return;
    }

    if (!form.content_zh.trim()) {
      setMessage("请填写中文职位正文。");
      return;
    }

    setIsSaving(true);

    const status = requestedStatus ?? form.status;
    const publishedAt =
      status === "published"
        ? form.published_at ?? new Date().toISOString()
        : form.published_at;

    const payload = {
      slug,
      status,
      recruitment_status: form.recruitment_status,
      title_zh: form.title_zh.trim(),
      title_en: form.title_en.trim(),
      excerpt_zh: form.excerpt_zh.trim(),
      excerpt_en: form.excerpt_en.trim(),
      content_zh: form.content_zh.trim(),
      content_en: form.content_en.trim(),
      location_zh: form.location_zh.trim(),
      location_en: form.location_en.trim(),
      employment_type_zh: form.employment_type_zh.trim(),
      employment_type_en: form.employment_type_en.trim(),
      application_email: form.application_email.trim(),
      contact_name: form.contact_name.trim() || null,
      contact_phone: form.contact_phone.trim() || null,
      cover_image_url: form.cover_image_url.trim() || null,
      cover_image_alt_zh: form.cover_image_alt_zh.trim() || null,
      cover_image_alt_en: form.cover_image_alt_en.trim() || null,
      published_at: publishedAt,
    };

    const result = jobId
      ? await supabaseBrowser
          .from("job_posts")
          .update(payload)
          .eq("id", jobId)
      : await supabaseBrowser.from("job_posts").insert(payload);

    if (result.error) {
      setMessage(`保存失败：${result.error.message}`);
      setIsSaving(false);
      return;
    }

    router.push("/admin/careers");
    router.refresh();
  }

  if (isLoading) {
    return (
      <section className="mt-8 rounded-[2rem] border border-[#d6e8ee] bg-white p-8">
        <p className="text-sm text-slate-600">正在读取职位资料…</p>
      </section>
    );
  }

  return (
    <form
      className="mt-8 space-y-8"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void saveJob("draft");
      }}
    >
      {message ? (
        <p className="rounded-2xl border border-[#cfe6ee] bg-[#f2fbfd] px-4 py-3 text-sm text-[#0b5f83]">
          {message}
        </p>
      ) : null}

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          基本信息
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Field
            label="中文职位名称"
            required
            value={form.title_zh}
            onChange={(value) => updateField("title_zh", value)}
            placeholder="例如：跨境电商运营总监"
          />

          <Field
            label="英文职位名称"
            value={form.title_en}
            onChange={(value) => updateField("title_en", value)}
            placeholder="例如：Cross-border E-commerce Operations Director"
          />

          <Field
            label="英文网址标识"
            required
            value={form.slug}
            onChange={(value) => updateField("slug", value)}
            placeholder="cross-border-ecommerce-director"
            help="只使用小写英文字母、数字和连字符。"
          />

          <SelectField
            label="状态"
            value={form.status}
            onChange={(value) =>
              updateField("status", value as JobStatus)
            }
            options={[
              { value: "draft", label: "草稿" },
              { value: "published", label: "已发布" },
              { value: "archived", label: "已下架" },
            ]}
          />

          <SelectField
            label="招聘状态"
            value={form.recruitment_status}
            onChange={(value) =>
              updateField(
                "recruitment_status",
                value as RecruitmentStatus,
              )
            }
            options={[
              { value: "recruiting", label: "招聘中" },
              { value: "filled", label: "已招满" },
              { value: "paused", label: "已停招" },
            ]}
          />

          <Field
            label="中文工作地点"
            value={form.location_zh}
            onChange={(value) => updateField("location_zh", value)}
          />

          <Field
            label="英文工作地点"
            value={form.location_en}
            onChange={(value) => updateField("location_en", value)}
          />

          <Field
            label="中文职位类型"
            value={form.employment_type_zh}
            onChange={(value) =>
              updateField("employment_type_zh", value)
            }
          />

          <Field
            label="英文职位类型"
            value={form.employment_type_en}
            onChange={(value) =>
              updateField("employment_type_en", value)
            }
          />

          <Field
            label="简历投递邮箱"
            type="email"
            value={form.application_email}
            onChange={(value) =>
              updateField("application_email", value)
            }
          />

          <Field
            label="联系人姓名（选填）"
            value={form.contact_name}
            onChange={(value) => updateField("contact_name", value)}
            placeholder="例如：黄先生"
          />

          <Field
            label="联系人电话（选填）"
            type="tel"
            value={form.contact_phone}
            onChange={(value) => updateField("contact_phone", value)}
            placeholder="例如：138 0000 0000"
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          中文内容
        </h2>

        <div className="mt-6 space-y-6">
          <TextAreaField
            label="中文简短说明"
            value={form.excerpt_zh}
            onChange={(value) => updateField("excerpt_zh", value)}
            rows={3}
            placeholder="用于职位列表页的简短介绍。"
          />

          <TextAreaField
            label="中文职位正文"
            required
            value={form.content_zh}
            onChange={(value) => updateField("content_zh", value)}
            rows={16}
            placeholder={`建议按以下结构填写：

岗位职责
1. ...
2. ...

任职要求
1. ...
2. ...

薪酬与工作地点
...`}
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          英文内容
        </h2>

        <div className="mt-6 space-y-6">
          <TextAreaField
            label="英文简短说明"
            value={form.excerpt_en}
            onChange={(value) => updateField("excerpt_en", value)}
            rows={3}
          />

          <TextAreaField
            label="英文职位正文"
            value={form.content_en}
            onChange={(value) => updateField("content_en", value)}
            rows={16}
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          职位配图
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <label className="block">
              <span className="text-sm font-semibold text-[#23445c]">
                上传图片
              </span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={uploadCoverImage}
                disabled={isUploading}
                className="mt-2 block w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#eef8fb] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0b5f83]"
              />
            </label>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              支持 JPG、PNG、WebP，单张不超过 5MB。
            </p>

            <div className="mt-5 space-y-5">
              <Field
                label="中文图片说明"
                value={form.cover_image_alt_zh}
                onChange={(value) =>
                  updateField("cover_image_alt_zh", value)
                }
              />

              <Field
                label="英文图片说明"
                value={form.cover_image_alt_en}
                onChange={(value) =>
                  updateField("cover_image_alt_en", value)
                }
              />
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-[#dcebf0] bg-[#f7fbfc]">
            {form.cover_image_url ? (
              <Image
                src={form.cover_image_url}
                alt={
                  form.cover_image_alt_zh ||
                  form.title_zh ||
                  "职位配图"
                }
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex min-h-[260px] items-center justify-center px-6 text-center text-sm text-slate-500">
                尚未上传职位配图
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/admin/careers"
          className="inline-flex items-center justify-center rounded-full border border-[#b8d9e4] px-5 py-3 text-sm font-semibold text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
        >
          取消并返回
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={isSaving || isUploading}
            onClick={() => void saveJob("draft")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold text-[#176347] transition hover:bg-[#ecfff5] disabled:opacity-60"
          >
            {isSaving ? "正在保存…" : "保存草稿"}
          </button>

          <button
            type="button"
            disabled={isSaving || isUploading}
            onClick={() => void saveJob("published")}
            className="inline-flex items-center justify-center rounded-full bg-[#176347] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f5138] disabled:opacity-60"
          >
            {isSaving ? "正在发布…" : "保存并发布"}
          </button>
        </div>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  help?: string;
  required?: boolean;
  type?: string;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  help,
  required,
  type = "text",
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#23445c]">
        {label}
        {required ? <span className="ml-1 text-red-500">*</span> : null}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3.5 text-[#071629] outline-none transition focus:border-[#39a773] focus:ring-4 focus:ring-[#39a773]/10"
      />

      {help ? (
        <span className="mt-2 block text-xs leading-6 text-slate-500">
          {help}
        </span>
      ) : null}
    </label>
  );
}

type TextAreaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
  placeholder?: string;
  required?: boolean;
};

function TextAreaField({
  label,
  value,
  onChange,
  rows,
  placeholder,
  required,
}: TextAreaFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#23445c]">
        {label}
        {required ? <span className="ml-1 text-red-500">*</span> : null}
      </span>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3.5 leading-7 text-[#071629] outline-none transition focus:border-[#39a773] focus:ring-4 focus:ring-[#39a773]/10"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
};

function SelectField({
  label,
  value,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#23445c]">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3.5 text-[#071629] outline-none transition focus:border-[#39a773] focus:ring-4 focus:ring-[#39a773]/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
