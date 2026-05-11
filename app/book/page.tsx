import type { Metadata } from "next";
import { baseUrl } from "../sitemap";

export const metadata: Metadata = {
  title: "Book 1:1",
  description:
    "Book a 1:1 session with Ritam Mukherjee — Data Engineering consulting, architecture reviews, career advice, or AI/ML discussions.",
  openGraph: {
    title: "Book 1:1 | Ritam Mukherjee",
    description:
      "Schedule a 1:1 session with Ritam Mukherjee for Data Engineering consulting, architecture advice, or AI/ML discussions.",
    url: baseUrl + "/book",
    siteName: "Ritam Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Book 1:1 | Ritam Mukherjee",
    card: "summary_large_image",
    description:
      "Schedule a 1:1 session with Ritam Mukherjee for Data Engineering consulting, architecture advice, or AI/ML discussions.",
  },
};

export default function BookPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
        Let's work together
      </h1>

      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Got questions about Data architecture, AI integration, career transitions into AI/Bigdata Engineering,
        or building AI/ML pipelines? <br />Skip the back-and-forth — book a focused 1:1 session
        and get straight to answers. Pick a slot below.
      </p>

      <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
        <iframe
          src="https://topmate.io/embed/profile/ritam_mukherjee"
          width="100%"
          height="700"
          frameBorder="0"
          title="Book a 1:1 session with Ritam Mukherjee on Topmate"
          allow="payment"
        />
      </div>

      <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        Widget not loading?{" "}
        <a
          href="https://topmate.io/ritam_mukherjee/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        >
          Open Topmate directly →
        </a>
      </p>
    </section>
  );
}
