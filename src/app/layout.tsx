import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shule-Digital - Multi School Management System & Software",
  description:
    "Shule-Digital is a multi-school management system with a Laravel admin panel, Flutter apps for students, parents, teachers and staff, subscription billing with M-Pesa support, and white-label branding.",
  keywords: [
    "Shule-Digital",
    "school management system",
    "multi school ERP",
    "Laravel admin",
    "Flutter school app",
    "SaaS billing",
    "M-Pesa",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Shule-Digital - Multi School Management System",
    description:
      "Run unlimited schools from one Super Admin panel with dedicated Flutter apps and built-in SaaS billing.",
    siteName: "WRTeam Marketplace",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
