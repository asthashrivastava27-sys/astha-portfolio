import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astha Shrivastava | SEO Portfolio",
  description: "SEO Professional Portfolio",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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