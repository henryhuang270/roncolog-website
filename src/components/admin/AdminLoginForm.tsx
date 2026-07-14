"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

const ADMIN_EMAIL = "info@roncolog.com";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
        setErrorMessage("该邮箱没有后台管理权限。");
        return;
      }

      const { data, error } =
        await supabaseBrowser.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });

      if (error || !data.user) {
        setErrorMessage("登录失败，请检查邮箱和密码。");
        return;
      }

      if (data.user.email?.toLowerCase() !== ADMIN_EMAIL) {
        await supabaseBrowser.auth.signOut();
        setErrorMessage("该账号没有后台管理权限。");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#eef8fb_0%,#ffffff_50%,#eef8f1_100%)] px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#d6e8ee] bg-white shadow-[0_24px_70px_rgba(31,93,122,0.16)] lg:grid-cols-[0.95fr_1.05fr]">
          <section className="hidden bg-[linear-gradient(145deg,#0b3558,#0b6f99)] p-12 text-white lg:flex lg:flex-col lg:justify-between">
            <Image
              src="/brand/ronco-logo-v4-light-bg.png"
              alt="RONCO International"
              width={420}
              height={165}
              priority
              className="h-auto w-[190px] rounded-2xl bg-white/95 p-3"
            />

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f2d28b]">
                RONCO ADMIN
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight">
                荣程国际网站管理后台
              </h1>
              <p className="mt-5 max-w-md text-base leading-8 text-white/80">
                用于管理新闻洞察、人才招聘及网站内容。仅限授权管理员使用。
              </p>
            </div>
          </section>

          <section className="p-8 sm:p-12 lg:p-14">
            <div className="lg:hidden">
              <Image
                src="/brand/ronco-logo-v4-light-bg.png"
                alt="RONCO International"
                width={420}
                height={165}
                priority
                className="h-auto w-[170px]"
              />
            </div>

            <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-[#24775b] lg:mt-0">
              管理员登录
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#071629]">
              登录后台
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              请输入管理员邮箱和密码。
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-[#23445c]">
                  管理员邮箱
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="username"
                  required
                  className="mt-2 w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3.5 text-[#071629] outline-none transition focus:border-[#39a773] focus:ring-4 focus:ring-[#39a773]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#23445c]">
                  密码
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="mt-2 w-full rounded-2xl border border-[#cfe1e8] bg-white px-4 py-3.5 text-[#071629] outline-none transition focus:border-[#39a773] focus:ring-4 focus:ring-[#39a773]/10"
                />
              </label>

              {errorMessage ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(11,111,153,0.20)] transition hover:bg-[#176347] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "正在登录…" : "登录后台"}
              </button>
            </form>

            <p className="mt-7 text-xs leading-6 text-slate-500">
              后台仅供荣程国际授权管理员使用。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
