"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { supabaseBrowser } from "@/lib/supabase-browser";

type AdminSectionHeaderProps = {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export default function AdminSectionHeader({
  title,
  description,
  actionHref,
  actionLabel,
}: AdminSectionHeaderProps) {
  const router = useRouter();

  async function handleSignOut() {
    await supabaseBrowser.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex flex-col gap-5 rounded-[2rem] border border-[#d6e8ee] bg-white p-7 shadow-[0_18px_46px_rgba(31,93,122,0.10)] lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin"
            className="text-xs font-semibold tracking-[0.14em] text-[#0b6f99] transition hover:text-[#176347]"
          >
            ← 返回后台首页
          </Link>
          <span className="text-slate-300">/</span>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            RONCO ADMIN
          </p>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
          {title}
        </h1>

        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {actionHref && actionLabel ? (
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176347]"
          >
            {actionLabel}
          </Link>
        ) : null}

        <button
          type="button"
          onClick={handleSignOut}
          className="inline-flex items-center justify-center rounded-full border border-[#b8d9e4] bg-white px-5 py-3 text-sm font-semibold text-[#0b5f83] transition hover:border-[#6bbf95] hover:text-[#176347]"
        >
          退出登录
        </button>
      </div>
    </header>
  );
}
