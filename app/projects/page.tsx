import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and products I've built across Data Engineering, Cloud Architecture, and AI/ML.",
};

interface Project {
  name: string;
  company: string;
  period: string;
  href?: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Petabyte-Scale Audience Segmentation Framework",
    company: "Mobilewalla",
    period: "2024–Present",
    description:
      "Designed and built a framework for ingestion and processing of petabyte-scale data to generate custom consumer behaviour segments, enabling clients to understand consumer insights with various predictive models at scale.",
    tags: ["Spark", "AWS", "Petabyte-scale", "Predictive Models"],
  },
  {
    name: "Fintech Real-Time Risk API Backend",
    company: "Mobilewalla",
    period: "2024–Present",
    description:
      "End-to-end Fintech API backend delivering near real-time feature and risk assessment data to clients. Multi-region, highly available, petabyte-scale backend with enhanced security, metering, and logging.",
    tags: ["API", "Real-Time", "Multi-Region", "High Availability"],
  },
  {
    name: "Feature Integrator",
    company: "Mobilewalla",
    period: "2024–Present",
    description:
      "Single source of truth encompassing all features required for various predictive models (including age and gender models). Reads petabyte-scale aggregate data once, eliminating redundant computation and significantly reducing cost.",
    tags: ["Feature Engineering", "ML", "Cost Optimisation", "Spark"],
  },
  {
    name: "Clickstream Ingestion Pipeline",
    company: "Walmart Labs",
    period: "2018–2019",
    description:
      "Designed and built workflows to ingest high-volume clickstream data via Adobe Omniture into a Hive staging environment, producing primary DWH and secondary NoSQL aggregated feeds with Spark streaming tuning.",
    tags: ["Clickstream", "Hive", "Spark", "NoSQL", "DWH"],
  },
  {
    name: "Real-Time Analytics Platform",
    company: "Deloitte",
    period: "2016–2018",
    description:
      "Implemented real-time analytics with Apache Kafka & Spark Streaming. Built a custom Kafka consumer for network outage data and a scalable end-to-end data pipeline integration framework via Apache Spark and Alluxio.",
    tags: ["Kafka", "Spark Streaming", "Alluxio", "Real-Time"],
  },
  {
    name: "Teradata–Hive Data Migration",
    company: "Capgemini",
    period: "2014–2016",
    description:
      "Led migration of enterprise data warehouse from Teradata to Hive using Sqoop connector, Oozie orchestration, and custom ELT scripts. Resolved performance bottlenecks in Hive queries through optimised joins and aggregations.",
    tags: ["Teradata", "Hive", "Sqoop", "Oozie", "DWH"],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Key engineering projects I've designed and delivered across Data
          Engineering, Cloud Architecture, and AI/ML — spanning petabyte-scale
          data platforms, real-time pipelines, and enterprise migrations.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="space-y-8 not-prose">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded border border-neutral-200 dark:border-neutral-700 p-5"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="font-medium text-base tracking-tight">
                    {project.name}
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-0.5">
                    {project.company} &nbsp;&middot;&nbsp; {project.period}
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
