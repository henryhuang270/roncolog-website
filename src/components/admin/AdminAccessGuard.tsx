"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase-browser";

const ADMIN_EMAIL = "info@roncolog.com";

type AdminAccessGuardProps = {
  children: ReactNode;
};

export default function AdminAccessGuard({
  children,
}: AdminAccessGuardProps) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

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
        setIsReady(true);
      }
    }

    void verifyAdmin();

    return () => {
      isMounted = false;
    };
  }, [router]);

  if (!isReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7fbfc] px-6">
        <p className="text-sm text-slate-600">正在验证管理员身份…</p>
      </main>
    );
  }

  return <>{children}</>;
}
