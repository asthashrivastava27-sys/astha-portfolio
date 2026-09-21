import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astha Shrivastava | SEO Portfolio",
  description: "SEO Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}