import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-JSWL44EM7V";

export const viewport: Viewport = {
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://astha-shrivastava.com"),
  title: "Astha Shrivastava | SEO Professional",
  description:
    "SEO Professional portfolio showcasing organic growth, technical SEO, content strategy, AI search optimization, and data-driven digital growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Astha Shrivastava | SEO Professional",
    description:
      "SEO Professional portfolio showcasing organic growth, technical SEO, content strategy, AI search optimization, and data-driven digital growth.",
    url: "https://astha-shrivastava.com/",
    siteName: "Astha Shrivastava",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Astha Shrivastava | SEO Professional",
    description:
      "SEO Professional portfolio showcasing organic growth, technical SEO, content strategy, AI search optimization, and data-driven digital growth.",
  },
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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}