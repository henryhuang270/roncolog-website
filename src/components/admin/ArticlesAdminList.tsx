"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

type ArticleStatus = "draft" | "published" | "archived";

type ArticleRow = {
  id: string;
  slug: string;
  status: ArticleStatus;
  category: string;
  is_featured: boolean;
  title_zh: string;
  title_en: string;
  published_at: string | null;
  updated_at: string;
};

const statusLabels: Record<ArticleStatus, string> = {
  draft: "草稿",
  published: "已发布",
  archived: "已归档",
};

const categoryLabels: Record<string, string> = {
  "company-news": "公司动态",
  "industry-insights": "行业洞察",
  "global-logistics": "全球物流",
  "international-trade": "国际贸易与品牌合作",
};

export default function ArticlesAdminList() {
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadArticles() {
    setIsLoading(true);
    setMessage("");

    const { data, error } = await supabaseBrowser
      .from("site_articles")
      .select(
        "id, slug, status, category, is_featured, title_zh, title_en, published_at, updated_at",
      )
      .order("is_featured", { ascending: false })
      .order("updated_at", { ascending: false });

    if (error) {
      setMessage(`读取新闻失败：${error.message}`);
      setArticles([]);
    } else {
      setArticles((data ?? []) as ArticleRow[]);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    void loadArticles();
  }, []);

  async function updateStatus(
    article: ArticleRow,
    status: ArticleStatus,
  ) {
    setMessage("");

    const payload: {
      status: ArticleStatus;
      published_at?: string | null;
    } = { status };

    if (status === "published" && !article.published_at) {
      payload.published_at = new Date().toISOString();
    }

    const { error } = await supabaseBrowser
      .from("site_articles")
      .update(payload)
      .eq("id", article.id);

    if (error) {
      setMessage(`更新失败：${error.message}`);
      return;
    }

    setMessage("文章状态已更新。");
    await loadArticles();
  }

  async function toggleFeatured(article: ArticleRow) {
    setMessage("");

    const { error } = await supabaseBrowser
      .from("site_articles")
      .update({ is_featured: !article.is_featured })
      .eq("id", article.id);

    if (error) {
      setMessage(`更新推荐状态失败：${error.message}`);
      return;
    }

    setMessage(article.is_featured ? "已取消推荐。" : "已设为推荐文章。");
    await loadArticles();
  }

  async function deleteArticle(article: ArticleRow) {
    const confirmed = window.confirm(
      `确定删除“${article.title_zh}”吗？删除后无法恢复。`,
    );

    if (!confirmed) return;

    setMessage("");

    const { error } = await supabaseBrowser
      .from("site_articles")
      .delete()
      .eq("id", article.id);

    if (error) {
      setMessage(`删除失败：${error.message}`);
      return;
    }

    setMessage("文章已删除。");
    await loadArticles();
  }

  return (
    <section className="mt-8 rounded-[2rem] border border-[#d6e8ee] bg-white p-6 shadow-sm sm:p-8">
      {message ? (
        <p className="mb-6 rounded-2xl border border-[#cfe6ee] bg-[#f2fbfd] px-4 py-3 text-sm text-[#0b5f83]">
          {message}
        </p>
      ) : null}

      {isLoading ? (
        <p className="py-12 text-center text-sm text-slate-600">
          正在读取新闻文章…
        </p>
      ) : articles.length === 0 ? (
        <div className="py-12 text-center">
          <h2 className="text-2xl font-semibold text-[#071629]">
            还没有新闻文章
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            点击“新增文章”创建第一篇新闻洞察。
          </p>
          <Link
            href="/admin/articles/new"
            className="mt-6 inline-flex rounded-full bg-[#0b6f99] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]"
          >
            新增文章
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-xs font-semibold tracking-[0.12em] text-[#5c7888]">
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  文章
                </th>
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  分类
                </th>
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  状态
                </th>
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  更新时间
                </th>
                <th className="border-b border-[#e4eef2] px-4 py-4 text-right">
                  操作
                </th>
              </tr>
            </thead>

            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="align-top">
                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-[#071629]">
                        {article.title_zh}
                      </p>
                      {article.is_featured ? (
                        <span className="rounded-full bg-[#fff8e8] px-2.5 py-1 text-[11px] font-semibold text-[#946200]">
                          推荐
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {article.title_en || "未填写英文标题"}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      /{article.slug}
                    </p>
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5 text-sm text-slate-600">
                    {categoryLabels[article.category] ?? article.category}
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        article.status === "published"
                          ? "bg-[#ecfff5] text-[#176347]"
                          : article.status === "archived"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-[#fff8e8] text-[#946200]"
                      }`}
                    >
                      {statusLabels[article.status]}
                    </span>
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5 text-sm text-slate-600">
                    {new Date(article.updated_at).toLocaleString("zh-CN")}
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <div className="flex flex-wrap justify-end gap-2">
                      <Link
                        href={`/admin/articles/${article.id}/edit`}
                        className="rounded-full border border-[#b8d9e4] px-3.5 py-2 text-xs font-semibold text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
                      >
                        编辑
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggleFeatured(article)}
                        className="rounded-full border border-[#e4cf9a] px-3.5 py-2 text-xs font-semibold text-[#8f641e] transition hover:bg-[#fff8e8]"
                      >
                        {article.is_featured ? "取消推荐" : "设为推荐"}
                      </button>

                      {article.status !== "published" ? (
                        <button
                          type="button"
                          onClick={() => updateStatus(article, "published")}
                          className="rounded-full bg-[#176347] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#0f5138]"
                        >
                          发布
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => updateStatus(article, "archived")}
                          className="rounded-full border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                          归档
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => deleteArticle(article)}
                        className="rounded-full border border-red-200 px-3.5 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
