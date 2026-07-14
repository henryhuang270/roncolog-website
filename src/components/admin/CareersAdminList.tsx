"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

type JobPost = {
  id: string;
  slug: string;
  status: "draft" | "published" | "archived";
  recruitment_status: "recruiting" | "filled" | "paused";
  title_zh: string;
  title_en: string;
  location_zh: string;
  employment_type_zh: string;
  published_at: string | null;
  updated_at: string;
};

const statusLabels: Record<JobPost["status"], string> = {
  draft: "草稿",
  published: "已发布",
  archived: "已下架",
};

export default function CareersAdminList() {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadJobs() {
    setIsLoading(true);
    setMessage("");

    const { data, error } = await supabaseBrowser
      .from("job_posts")
      .select(
        "id, slug, status, recruitment_status, title_zh, title_en, location_zh, employment_type_zh, published_at, updated_at",
      )
      .order("updated_at", { ascending: false });

    if (error) {
      setMessage(`读取职位失败：${error.message}`);
      setJobs([]);
    } else {
      setJobs((data ?? []) as JobPost[]);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    void loadJobs();
  }, []);

  async function updateStatus(
    job: JobPost,
    status: JobPost["status"],
  ) {
    setMessage("");

    const payload: {
      status: JobPost["status"];
      published_at?: string | null;
    } = { status };

    if (status === "published" && !job.published_at) {
      payload.published_at = new Date().toISOString();
    }

    const { error } = await supabaseBrowser
      .from("job_posts")
      .update(payload)
      .eq("id", job.id);

    if (error) {
      setMessage(`更新失败：${error.message}`);
      return;
    }

    setMessage("职位状态已更新。");
    await loadJobs();
  }

  async function deleteJob(job: JobPost) {
    const confirmed = window.confirm(
      `确定删除“${job.title_zh}”吗？删除后无法恢复。`,
    );

    if (!confirmed) return;

    setMessage("");

    const { error } = await supabaseBrowser
      .from("job_posts")
      .delete()
      .eq("id", job.id);

    if (error) {
      setMessage(`删除失败：${error.message}`);
      return;
    }

    setMessage("职位已删除。");
    await loadJobs();
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
          正在读取职位…
        </p>
      ) : jobs.length === 0 ? (
        <div className="py-12 text-center">
          <h2 className="text-2xl font-semibold text-[#071629]">
            还没有招聘职位
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            点击“新增职位”创建第一条招聘信息。
          </p>
          <Link
            href="/admin/careers/new"
            className="mt-6 inline-flex rounded-full bg-[#0b6f99] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]"
          >
            新增职位
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left text-xs font-semibold tracking-[0.12em] text-[#5c7888]">
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  职位
                </th>
                <th className="border-b border-[#e4eef2] px-4 py-4">
                  地点 / 类型
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
              {jobs.map((job) => (
                <tr key={job.id} className="align-top">
                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <p className="font-semibold text-[#071629]">
                      {job.title_zh}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {job.title_en || "未填写英文职位名称"}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      /{job.slug}
                    </p>
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5 text-sm text-slate-600">
                    <p>{job.location_zh}</p>
                    <p className="mt-1">{job.employment_type_zh}</p>
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <div className="flex flex-col items-start gap-2">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                          job.status === "published"
                            ? "bg-[#ecfff5] text-[#176347]"
                            : job.status === "archived"
                              ? "bg-slate-100 text-slate-600"
                              : "bg-[#fff8e8] text-[#946200]"
                        }`}
                      >
                        {statusLabels[job.status]}
                      </span>

                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                          job.recruitment_status === "recruiting"
                            ? "bg-[#eaf8ff] text-[#0b5f83]"
                            : job.recruitment_status === "filled"
                              ? "bg-[#fff8e8] text-[#946200]"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {job.recruitment_status === "recruiting"
                          ? "招聘中"
                          : job.recruitment_status === "filled"
                            ? "已招满"
                            : "已停招"}
                      </span>
                    </div>
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5 text-sm text-slate-600">
                    {new Date(job.updated_at).toLocaleString("zh-CN")}
                  </td>

                  <td className="border-b border-[#edf4f6] px-4 py-5">
                    <div className="flex flex-wrap justify-end gap-2">
                      <Link
                        href={`/admin/careers/${job.id}/edit`}
                        className="rounded-full border border-[#b8d9e4] px-3.5 py-2 text-xs font-semibold text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
                      >
                        编辑
                      </Link>

                      {job.status !== "published" ? (
                        <button
                          type="button"
                          onClick={() => updateStatus(job, "published")}
                          className="rounded-full bg-[#176347] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#0f5138]"
                        >
                          发布
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => updateStatus(job, "archived")}
                          className="rounded-full border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                        >
                          下架
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => deleteJob(job)}
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
