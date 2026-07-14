import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import ArticleEditor from "@/components/admin/ArticleEditor";

export const metadata: Metadata = {
  title: "编辑文章 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <AdminAccessGuard>
      <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AdminSectionHeader
            title="编辑文章"
            description="修改文章内容、分类、推荐状态、发布时间和封面图片。"
          />

          <ArticleEditor articleId={id} />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
