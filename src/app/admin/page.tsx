import type { Metadata } from "next";

import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "网站管理后台 | 荣程国际",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
