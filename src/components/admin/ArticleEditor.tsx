"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

type ArticleStatus = "draft" | "published" | "archived";

type ContentImage = {
  id: string;
  marker: string;
  url: string;
  path: string;
  caption_zh: string;
  caption_en: string;
};

type ArticleFormState = {
  slug: string;
  status: ArticleStatus;
  category: string;
  is_featured: boolean;
  title_zh: string;
  excerpt_zh: string;
  content_zh: string;
  title_en: string;
  excerpt_en: string;
  content_en: string;
  cover_image_url: string;
  cover_image_alt_zh: string;
  cover_image_alt_en: string;
  content_images: ContentImage[];
  published_at: string;
};

const initialState: ArticleFormState = {
  slug: "",
  status: "draft",
  category: "company-news",
  is_featured: false,
  title_zh: "",
  excerpt_zh: "",
  content_zh: "",
  title_en: "",
  excerpt_en: "",
  content_en: "",
  cover_image_url: "",
  cover_image_alt_zh: "",
  cover_image_alt_en: "",
  content_images: [],
  published_at: "",
};

type ArticleEditorProps = {
  articleId?: string;
};

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function safeFileName(file: File, folder: "covers" | "content") {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2, 8);
  return `articles/${folder}/${timestamp}-${random}.${extension}`;
}

function toLocalDateTime(value: string | null) {
  if (!value) return "";

  const date = new Date(value);
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);

  return localDate.toISOString().slice(0, 16);
}

function getNextMarker(images: ContentImage[]) {
  const numbers = images
    .map((image) => Number(image.marker.match(/^image-(\d+)$/)?.[1] ?? 0))
    .filter((value) => Number.isFinite(value));

  return `image-${Math.max(0, ...numbers) + 1}`;
}

function removeMarkerFromContent(content: string, marker: string) {
  const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return content
    .replace(new RegExp(`\\n?\\s*\\[\\[${escaped}\\]\\]\\s*\\n?`, "g"), "\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isValidImage(file: File) {
  return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
}

export default function ArticleEditor({
  articleId,
}: ArticleEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(articleId);

  const [form, setForm] = useState<ArticleFormState>(initialState);
  const [isLoading, setIsLoading] = useState(isEditing);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingContent, setIsUploadingContent] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!articleId) return;

    let isMounted = true;

    async function loadArticle() {
      const { data, error } = await supabaseBrowser
        .from("site_articles")
        .select("*")
        .eq("id", articleId)
        .maybeSingle();

      if (!isMounted) return;

      if (error || !data) {
        setMessage(
          error ? `读取文章失败：${error.message}` : "没有找到该文章。",
        );
        setIsLoading(false);
        return;
      }

      setForm({
        slug: data.slug ?? "",
        status: data.status ?? "draft",
        category: data.category ?? "company-news",
        is_featured: Boolean(data.is_featured),
        title_zh: data.title_zh ?? "",
        excerpt_zh: data.excerpt_zh ?? "",
        content_zh: data.content_zh ?? "",
        title_en: data.title_en ?? "",
        excerpt_en: data.excerpt_en ?? "",
        content_en: data.content_en ?? "",
        cover_image_url: data.cover_image_url ?? "",
        cover_image_alt_zh: data.cover_image_alt_zh ?? "",
        cover_image_alt_en: data.cover_image_alt_en ?? "",
        content_images: Array.isArray(data.content_images)
          ? (data.content_images as ContentImage[])
          : [],
        published_at: toLocalDateTime(data.published_at ?? null),
      });

      setIsLoading(false);
    }

    void loadArticle();

    return () => {
      isMounted = false;
    };
  }, [articleId]);

  function updateField<K extends keyof ArticleFormState>(
    field: K,
    value: ArticleFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function uploadCoverImage(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    if (!isValidImage(file)) {
      setMessage("只支持 JPG、PNG 或 WebP 图片。");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("图片不能超过 5MB。");
      return;
    }

    setMessage("");
    setIsUploadingCover(true);

    const filePath = safeFileName(file, "covers");

    const { error } = await supabaseBrowser.storage
      .from("site-media")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (error) {
      setMessage(`封面图片上传失败：${error.message}`);
      setIsUploadingCover(false);
      return;
    }

    const { data } = supabaseBrowser.storage
      .from("site-media")
      .getPublicUrl(filePath);

    updateField("cover_image_url", data.publicUrl);
    setMessage("封面图片上传成功。");
    setIsUploadingCover(false);
  }

  async function uploadContentImages(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";

    if (files.length === 0) return;

    const invalidFile = files.find((file) => !isValidImage(file));
    if (invalidFile) {
      setMessage(`“${invalidFile.name}”不是支持的 JPG、PNG 或 WebP 图片。`);
      return;
    }

    const oversizedFile = files.find(
      (file) => file.size > 5 * 1024 * 1024,
    );
    if (oversizedFile) {
      setMessage(`“${oversizedFile.name}”超过 5MB。`);
      return;
    }

    setMessage("");
    setIsUploadingContent(true);

    const uploadedImages: ContentImage[] = [];
    let workingImages = [...form.content_images];

    for (const file of files) {
      const filePath = safeFileName(file, "content");

      const { error } = await supabaseBrowser.storage
        .from("site-media")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type,
        });

      if (error) {
        setMessage(
          `正文图片“${file.name}”上传失败：${error.message}`,
        );
        setIsUploadingContent(false);
        return;
      }

      const { data } = supabaseBrowser.storage
        .from("site-media")
        .getPublicUrl(filePath);

      const marker = getNextMarker(workingImages);
      const newImage: ContentImage = {
        id: crypto.randomUUID(),
        marker,
        url: data.publicUrl,
        path: filePath,
        caption_zh: "",
        caption_en: "",
      };

      workingImages = [...workingImages, newImage];
      uploadedImages.push(newImage);
    }

    updateField("content_images", workingImages);
    setMessage(
      `已上传 ${uploadedImages.length} 张正文图片。请复制图片标记并粘贴到正文相应位置。`,
    );
    setIsUploadingContent(false);
  }

  function updateContentImage(
    imageId: string,
    field: "caption_zh" | "caption_en",
    value: string,
  ) {
    updateField(
      "content_images",
      form.content_images.map((image) =>
        image.id === imageId ? { ...image, [field]: value } : image,
      ),
    );
  }

  function moveContentImage(imageId: string, direction: -1 | 1) {
    const currentIndex = form.content_images.findIndex(
      (image) => image.id === imageId,
    );
    const targetIndex = currentIndex + direction;

    if (
      currentIndex < 0 ||
      targetIndex < 0 ||
      targetIndex >= form.content_images.length
    ) {
      return;
    }

    const nextImages = [...form.content_images];
    [nextImages[currentIndex], nextImages[targetIndex]] = [
      nextImages[targetIndex],
      nextImages[currentIndex],
    ];

    updateField("content_images", nextImages);
  }

  async function deleteContentImage(image: ContentImage) {
    const confirmed = window.confirm(
      `确定删除正文图片 ${image.marker} 吗？正文中的 [[${image.marker}]] 标记也会自动移除。`,
    );

    if (!confirmed) return;

    setMessage("");

    if (image.path) {
      const { error } = await supabaseBrowser.storage
        .from("site-media")
        .remove([image.path]);

      if (error) {
        setMessage(`删除图片文件失败：${error.message}`);
        return;
      }
    }

    setForm((current) => ({
      ...current,
      content_images: current.content_images.filter(
        (item) => item.id !== image.id,
      ),
      content_zh: removeMarkerFromContent(
        current.content_zh,
        image.marker,
      ),
      content_en: removeMarkerFromContent(
        current.content_en,
        image.marker,
      ),
    }));

    setMessage(`正文图片 ${image.marker} 已删除。`);
  }

  async function copyMarker(marker: string) {
    const value = `[[${marker}]]`;

    try {
      await navigator.clipboard.writeText(value);
      setMessage(`已复制 ${value}，请粘贴到正文需要显示图片的位置。`);
    } catch {
      setMessage(`请手动复制标记：${value}`);
    }
  }

  async function saveArticle(requestedStatus?: ArticleStatus) {
    setMessage("");

    const slug = normalizeSlug(form.slug);

    if (!slug) {
      setMessage("请填写英文网址标识，例如 company-update-july-2026。");
      return;
    }

    if (!form.title_zh.trim()) {
      setMessage("请填写中文标题。");
      return;
    }

    if (!form.excerpt_zh.trim()) {
      setMessage("请填写中文摘要。");
      return;
    }

    if (!form.content_zh.trim()) {
      setMessage("请填写中文正文。");
      return;
    }

    setIsSaving(true);

    const status = requestedStatus ?? form.status;
    const publishedAt =
      status === "published"
        ? form.published_at
          ? new Date(form.published_at).toISOString()
          : new Date().toISOString()
        : form.published_at
          ? new Date(form.published_at).toISOString()
          : null;

    const payload = {
      slug,
      status,
      category: form.category,
      is_featured: form.is_featured,
      title_zh: form.title_zh.trim(),
      excerpt_zh: form.excerpt_zh.trim(),
      content_zh: form.content_zh.trim(),
      title_en: form.title_en.trim(),
      excerpt_en: form.excerpt_en.trim(),
      content_en: form.content_en.trim(),
      cover_image_url: form.cover_image_url.trim() || null,
      cover_image_alt_zh: form.cover_image_alt_zh.trim() || null,
      cover_image_alt_en: form.cover_image_alt_en.trim() || null,
      content_images: form.content_images,
      published_at: publishedAt,
    };

    const result = articleId
      ? await supabaseBrowser
          .from("site_articles")
          .update(payload)
          .eq("id", articleId)
      : await supabaseBrowser.from("site_articles").insert(payload);

    if (result.error) {
      setMessage(`保存失败：${result.error.message}`);
      setIsSaving(false);
      return;
    }

    router.push("/admin/articles");
    router.refresh();
  }

  if (isLoading) {
    return (
      <section className="mt-8 rounded-[2rem] border border-[#d6e8ee] bg-white p-8">
        <p className="text-sm text-slate-600">正在读取文章资料…</p>
      </section>
    );
  }

  return (
    <div className="mt-8 space-y-8">
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
            label="中文标题"
            required
            value={form.title_zh}
            onChange={(value) => updateField("title_zh", value)}
          />

          <Field
            label="英文标题"
            value={form.title_en}
            onChange={(value) => updateField("title_en", value)}
          />

          <Field
            label="英文网址标识"
            required
            value={form.slug}
            onChange={(value) => updateField("slug", value)}
            placeholder="ronco-website-launch"
            help="只使用小写英文字母、数字和连字符。"
          />

          <SelectField
            label="文章分类"
            value={form.category}
            onChange={(value) => updateField("category", value)}
            options={[
              { value: "company-news", label: "公司动态" },
              { value: "industry-insights", label: "行业洞察" },
              { value: "global-logistics", label: "全球物流" },
              {
                value: "international-trade",
                label: "国际贸易与品牌合作",
              },
            ]}
          />

          <SelectField
            label="发布状态"
            value={form.status}
            onChange={(value) =>
              updateField("status", value as ArticleStatus)
            }
            options={[
              { value: "draft", label: "草稿" },
              { value: "published", label: "已发布" },
              { value: "archived", label: "已归档" },
            ]}
          />

          <Field
            label="发布时间"
            type="datetime-local"
            value={form.published_at}
            onChange={(value) => updateField("published_at", value)}
            help="留空并直接发布时，将自动使用当前时间。"
          />

          <label className="flex items-center gap-3 rounded-2xl border border-[#cfe1e8] bg-[#f7fbfc] px-4 py-3.5">
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(event) =>
                updateField("is_featured", event.target.checked)
              }
              className="h-4 w-4"
            />
            <span className="text-sm font-semibold text-[#23445c]">
              设为推荐文章
            </span>
          </label>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          中文内容
        </h2>

        <div className="mt-6 space-y-6">
          <TextAreaField
            label="中文摘要"
            required
            value={form.excerpt_zh}
            onChange={(value) => updateField("excerpt_zh", value)}
            rows={4}
          />

          <TextAreaField
            label="中文正文"
            required
            value={form.content_zh}
            onChange={(value) => updateField("content_zh", value)}
            rows={18}
            placeholder={`每段之间空一行。需要插入正文图片时，把对应标记单独放一行，例如：

第一段正文。

[[image-1]]

第二段正文。`}
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          英文内容
        </h2>

        <div className="mt-6 space-y-6">
          <TextAreaField
            label="英文摘要"
            value={form.excerpt_en}
            onChange={(value) => updateField("excerpt_en", value)}
            rows={4}
          />

          <TextAreaField
            label="英文正文"
            value={form.content_en}
            onChange={(value) => updateField("content_en", value)}
            rows={18}
            placeholder="Put an image marker on its own line, for example: [[image-1]]"
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          封面图片
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <label className="block">
              <span className="text-sm font-semibold text-[#23445c]">
                上传封面图片
              </span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={uploadCoverImage}
                disabled={isUploadingCover}
                className="mt-2 block w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#eef8fb] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0b5f83]"
              />
            </label>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              每篇文章保留一张封面。重新上传会替换文章当前使用的封面。
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

          <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[#dcebf0] bg-[#f7fbfc]">
            {form.cover_image_url ? (
              <Image
                src={form.cover_image_url}
                alt={
                  form.cover_image_alt_zh ||
                  form.title_zh ||
                  "新闻封面"
                }
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex min-h-[280px] items-center justify-center px-6 text-center text-sm text-slate-500">
                尚未上传封面图片
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#071629]">
              正文图片
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              可一次选择多张图片。上传后复制标记，并把标记单独粘贴到中文或英文正文相应位置。
            </p>
          </div>

          <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#0b6f99] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]">
            {isUploadingContent ? "正在上传…" : "上传正文图片"}
            <input
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp"
              onChange={uploadContentImages}
              disabled={isUploadingContent}
              className="sr-only"
            />
          </label>
        </div>

        {form.content_images.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-[#cfe1e8] bg-[#f7fbfc] px-6 py-10 text-center text-sm text-slate-500">
            尚未上传正文图片
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            {form.content_images.map((image, index) => (
              <article
                key={image.id}
                className="grid gap-5 rounded-[1.5rem] border border-[#dcebf0] bg-[#f9fcfd] p-5 lg:grid-cols-[13rem_minmax(0,1fr)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#eaf4f8]">
                  <Image
                    src={image.url}
                    alt={image.caption_zh || image.marker}
                    fill
                    sizes="208px"
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[#24775b]">
                        正文图片 {index + 1}
                      </p>
                      <code className="mt-2 inline-flex rounded-lg bg-[#eaf4f8] px-3 py-1.5 text-sm font-semibold text-[#0b5f83]">
                        [[{image.marker}]]
                      </code>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => copyMarker(image.marker)}
                        className="rounded-full border border-[#9ccbd9] px-3.5 py-2 text-xs font-semibold text-[#0b5f83]"
                      >
                        复制标记
                      </button>
                      <button
                        type="button"
                        disabled={index === 0}
                        onClick={() => moveContentImage(image.id, -1)}
                        className="rounded-full border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-600 disabled:opacity-40"
                      >
                        上移
                      </button>
                      <button
                        type="button"
                        disabled={index === form.content_images.length - 1}
                        onClick={() => moveContentImage(image.id, 1)}
                        className="rounded-full border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-600 disabled:opacity-40"
                      >
                        下移
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteContentImage(image)}
                        className="rounded-full border border-red-200 px-3.5 py-2 text-xs font-semibold text-red-600"
                      >
                        删除
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <Field
                      label="中文图片说明"
                      value={image.caption_zh}
                      onChange={(value) =>
                        updateContentImage(
                          image.id,
                          "caption_zh",
                          value,
                        )
                      }
                    />
                    <Field
                      label="英文图片说明"
                      value={image.caption_en}
                      onChange={(value) =>
                        updateContentImage(
                          image.id,
                          "caption_en",
                          value,
                        )
                      }
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="flex flex-col gap-3 rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/admin/articles"
          className="inline-flex items-center justify-center rounded-full border border-[#b8d9e4] px-5 py-3 text-sm font-semibold text-[#0b5f83]"
        >
          取消并返回
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={
              isSaving || isUploadingCover || isUploadingContent
            }
            onClick={() => saveArticle("draft")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-5 py-3 text-sm font-semibold text-[#176347] disabled:opacity-60"
          >
            {isSaving ? "正在保存…" : "保存草稿"}
          </button>

          <button
            type="button"
            disabled={
              isSaving || isUploadingCover || isUploadingContent
            }
            onClick={() => saveArticle("published")}
            className="inline-flex items-center justify-center rounded-full bg-[#176347] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isSaving ? "正在发布…" : "保存并发布"}
          </button>
        </div>
      </div>
    </div>
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
