import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { SiteProvider } from "@/components/SiteProvider";
import "./globals.css";
import "./business-card.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.domain,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.domain,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.nameZh,
  url: site.url,
  email: site.email,
  jobTitle: "AI Builder",
  affiliation: {
    "@type": "Organization",
    name: "Archbridge Capital Partners",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The University of Hong Kong",
  },
  sameAs: [site.githubUrl, site.REDNOTE_URL, site.DOUYIN_URL],
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
