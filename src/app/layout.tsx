import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/redux/provider";

const siteName = "Vymera Limited";
const tagline =
  "Computers, peripherals, and software — your trusted partner for elegant computing solutions.";
const siteUrl = "https://vymeratech.com";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | ${tagline.split("—")[0].trim()}`,
    template: `%s | ${siteName}`,
  },
  description: tagline,
  keywords: [
    "Vymera",
    "computers",
    "peripherals",
    "software",
    "computing solutions",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Elegant Computing Solutions`,
    description: tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Elegant Computing Solutions`,
    description: tagline,
  },
  robots: {
    index: true,
    follow: true,
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
