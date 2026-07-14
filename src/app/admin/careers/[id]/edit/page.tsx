import type { Metadata } from "next";

import AdminAccessGuard from "@/components/admin/AdminAccessGuard";
import AdminSectionHeader from "@/components/admin/AdminSectionHeader";
import JobPostEditor from "@/components/admin/JobPostEditor";

export const metadata: Metadata = {
  title: "编辑职位 | 荣程国际后台",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function EditJobPostPage({
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
            title="编辑职位"
            description="修改职位内容、配图、状态和发布时间。"
          />

          <JobPostEditor jobId={id} />
        </div>
      </main>
    </AdminAccessGuard>
  );
}
