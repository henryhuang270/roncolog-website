import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import CareersAdminList from "@/components/admin/CareersAdminList";

export const metadata: Metadata = {
  title: "人才招聘管理 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminCareersPage() {
  return (
    <AdminAccessGuard>
      <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AdminSectionHeader
            title="人才招聘管理"
            description="新增、编辑、发布、下架和删除职位信息。职位发布后将在前台“加入我们”页面显示。"
            actionHref="/admin/careers/new"
            actionLabel="新增职位"
          />

          <CareersAdminList />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
