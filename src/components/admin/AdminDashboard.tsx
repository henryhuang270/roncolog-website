"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

const ADMIN_EMAIL = "info@roncolog.com";

export default function AdminDashboard() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function verifyAdmin() {
      const {
        data: { user },
      } = await supabaseBrowser.auth.getUser();

      if (!user || user.email?.toLowerCase() !== ADMIN_EMAIL) {
        await supabaseBrowser.auth.signOut();

        if (isMounted) {
          router.replace("/admin/login");
        }

        return;
      }

      if (isMounted) {
        setAdminEmail(user.email ?? ADMIN_EMAIL);
        setIsChecking(false);
      }
    }

    void verifyAdmin();

    return () => {
      isMounted = false;
    };
  }, [router]);

  async function handleSignOut() {
    await supabaseBrowser.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  if (isChecking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7fbfc] px-6">
        <p className="text-sm text-slate-600">正在验证管理员身份…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-[#d6e8ee] bg-white p-7 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              RONCO ADMIN
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              网站管理后台
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              当前管理员：{adminEmail}
            </p>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex items-center justify-center rounded-full border border-[#b8d9e4] bg-white px-5 py-3 text-sm font-semibold text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
          >
            退出登录
          </button>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/admin/articles"
            className="group rounded-[2rem] border border-[#d6e8ee] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#9fd5c0] hover:shadow-[0_18px_46px_rgba(31,93,122,0.12)]"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-[#0b6f99]">
              CONTENT
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-[#071629]">
              新闻洞察管理
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              新建、编辑、发布、归档新闻文章，并上传封面图片。
            </p>
            <span className="mt-7 inline-flex text-sm font-semibold text-[#176347]">
              进入新闻管理 →
            </span>
          </Link>

          <Link
            href="/admin/careers"
            className="group rounded-[2rem] border border-[#d6e8ee] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#9fd5c0] hover:shadow-[0_18px_46px_rgba(31,93,122,0.12)]"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-[#39a773]">
              CAREERS
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-[#071629]">
              人才招聘管理
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              新增、编辑、发布和下架职位信息。
            </p>
            <span className="mt-7 inline-flex text-sm font-semibold text-[#176347]">
              进入招聘管理 →
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}
