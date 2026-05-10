import { Link } from "next-view-transitions";
import Image from "next/image";
import { LinkedInIcon, ViewsIcon, GitHubIcon, TwitterIcon } from "./components/icons";

function MediumIcon() {
  return (
    <svg
      viewBox="0 0 1043.63 592.71"
      className="w-5 h-5"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.17-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
    </svg>
  );
}

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

function SocialLink({ href, ariaLabel, children }: SocialLinkProps) {
  return (
    <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-6 py-4 transition-all hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Ritam
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a Principal Data Engineer & Architect with 12+ years of experience
        building AI/ML integrations, cloud-native big data platforms and real-time streaming pipelines. I write about Data Engineering, Big Data, Cloud,
        and applied AI.`}
      </p>

      <div className="flex items-start md:items-center my-8 gap-2 flex-row md:flex-row">
        <Image
          src="/ritam.jpg"
          alt="Ritam Mukherjee"
          width={120}
          height={120}
          className="rounded-full max-sm:w-24 max-sm:h-24"
        />
        <div className="mt-2 sm:mt-6 md:mt-0 ml-0 md:ml-6 space-y-1 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <span>
              <LinkedInIcon />
            </span>
            Principal AI Engineer & Cloud Data Architect
          </p>
          <p className="flex items-center gap-2">
            <span>
              <ViewsIcon />
            </span>
            400+ followers on Medium
          </p>
          <p className="flex items-center gap-2">
            <span>
              <MediumIcon />
            </span>
            40+ articles published
          </p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I design and build cloud data platforms that handle complexity at scale —
          from Spark optimisation and stream processing with Kafka to cloud-native
          architectures on AWS, Azure, and GCP. I also explore where LLMs and AI
          agents intersect with modern workflows.
        </p>
        <p>
          Read my{" "}
          <Link href="/blog" className="underline">
            writing on Medium
          </Link>
          , explore my{" "}
          <Link href="/linkedin" className="underline">
            professional experience
          </Link>
          , browse my{" "}
          <Link href="/projects" className="underline">
            projects
          </Link>
          , or{" "}
          <Link href="/contact-me" className="underline">
            get in touch
          </Link>
          .
        </p>
      </div>

      <div className="my-6 flex h-12 w-full flex-row space-x-2 overflow-x-auto">
        <SocialLink
          href="https://www.linkedin.com/in/ritam378/"
          ariaLabel="LinkedIn Profile"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          href="https://medium.com/@ritam378"
          ariaLabel="Medium Blog"
        >
          <MediumIcon />
        </SocialLink>
        <SocialLink
          href="https://github.com/ritam378"
          ariaLabel="GitHub Profile"
        >
          <GitHubIcon />
        </SocialLink>
        <SocialLink
          href="https://x.com/ritam378"
          ariaLabel="X Profile"
        >
          <TwitterIcon />
        </SocialLink>
      </div>
    </section>
  );
}
