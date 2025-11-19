import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title:
    "React Paginate Filter – Smart Pagination & Search Component for React",
  description:
    "A lightweight and customizable React component that combines pagination, search filtering, and dynamic data handling. Perfect for dashboards, tables, and list UIs.",
  keywords: [
    "react paginate filter",
    "react pagination component",
    "react search filter",
    "react table pagination",
    "filterable pagination react",
    "pagination library react",
    "react ui components",
  ],
  openGraph: {
    title: "React Paginate Filter – Smart Pagination & Search",
    description:
      "A powerful React UI component that provides pagination + search filtering in one package. Simple API, customizable, and production-ready.",
    url: "https://demo-paginate-filter.vercel.app",
    siteName: "React Paginate Filter Demo",
    images: [
      {
        url: "https://demo-paginate-filter.vercel.app/user-directory.png",
        width: 1200,
        height: 630,
        alt: "React Paginate Filter Component Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
