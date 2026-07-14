import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import ArticlesAdminList from "@/components/admin/ArticlesAdminList";

export const metadata: Metadata = {
  title: "新闻洞察管理 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminArticlesPage() {
  return (
    <AdminAccessGuard>
      <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AdminSectionHeader
            title="新闻洞察管理"
            description="新增、编辑、发布、归档和删除新闻文章，并上传封面图片。"
            actionHref="/admin/articles/new"
            actionLabel="新增文章"
          />

          <ArticlesAdminList />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
