import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type Locale = "en" | "zh";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      {children}
      <SiteFooter locale={locale as Locale} />
    </>
  );
}