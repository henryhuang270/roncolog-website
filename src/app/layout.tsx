import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.roncolog.com"),
  title: {
    default: "荣程国际｜国际物流、国际贸易与海外品牌合作",
    template: "%s｜荣程国际",
  },
  description:
    "荣程国际总部位于东莞松山湖，以国际物流为基础，同时开展国际贸易、商品进出口及海外品牌引进与分销合作。",
  applicationName: "荣程国际",
  authors: [{ name: "荣程国际" }],
  creator: "荣程国际",
  publisher: "荣程国际供应链科技（东莞）有限公司",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
