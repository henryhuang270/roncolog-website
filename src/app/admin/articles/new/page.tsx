import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import ArticleEditor from "@/components/admin/ArticleEditor";

export const metadata: Metadata = {
  title: "新增文章 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewArticlePage() {
  return (
    <AdminAccessGuard>
      <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AdminSectionHeader
            title="新增文章"
            description="填写中英文标题、摘要、正文、分类和封面图片，可先保存草稿，也可直接发布。"
          />

          <ArticleEditor />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
