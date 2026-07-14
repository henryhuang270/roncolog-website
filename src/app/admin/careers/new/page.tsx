import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import JobPostEditor from "@/components/admin/JobPostEditor";

export const metadata: Metadata = {
  title: "新增职位 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewJobPostPage() {
  return (
    <AdminAccessGuard>
      <main className="min-h-screen bg-[#f7fbfc] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AdminSectionHeader
            title="新增职位"
            description="填写中文和英文职位信息，可先保存草稿，也可以直接发布。"
          />

          <JobPostEditor />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
