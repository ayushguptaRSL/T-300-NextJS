import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Explorer - Project Management Portal",
  description: "Lightweight project management portal built with Next.js App Router and TypeScript."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div className="site-header" style={{ height: "57px" }} />}>
          <Header />
        </Suspense>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
