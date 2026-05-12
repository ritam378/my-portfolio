import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import { ViewTransitions } from "next-view-transitions";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ritam Mukherjee",
    template: "%s | Ritam Mukherjee",
  },
  description:
    "Principal Data Engineer & Architect. Writing about Data Engineering, Big Data, Cloud, and AI/ML.",
  openGraph: {
    title: "Ritam Mukherjee",
    description:
      "Principal Data Engineer & Architect. Writing about Data Engineering, Big Data, Cloud, and AI/ML.",
    url: baseUrl,
    siteName: "Ritam Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Ritam Mukherjee",
    card: "summary_large_image",
    description:
      "Principal Data Engineer & Architect. Writing about Data Engineering, Big Data, Cloud, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cx(
          "text-black bg-white dark:text-white dark:bg-black",
          GeistSans.className,
          GeistMono.variable,
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
