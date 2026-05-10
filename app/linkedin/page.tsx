import type { Metadata } from "next";
import { LinkedInIcon } from "../components/icons";
import { baseUrl } from "../sitemap";

export const metadata: Metadata = {
  title: "LinkedIn",
  description:
    "Ritam Mukherjee's professional experience — Principal Data Engineer & Architect with 12+ years across Mobilewalla, Walmart Labs, Deloitte, Capgemini, and Infosys.",
  openGraph: {
    title: "LinkedIn | Ritam Mukherjee",
    description:
      "Professional experience of Ritam Mukherjee in Big Data, Cloud, and AI/ML.",
    url: baseUrl + "/linkedin",
    siteName: "Ritam Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "LinkedIn | Ritam Mukherjee",
    card: "summary_large_image",
    description:
      "Professional experience of Ritam Mukherjee in Big Data, Cloud, and AI/ML.",
  },
};

export default function LinkedInPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">LinkedIn</h1>

      {/* Profile card */}
      <div className="mb-10 rounded border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-semibold text-xl tracking-tighter">
              Ritam Mukherjee
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
              Principal BigData &amp; Cloud Engineer @ Mobilewalla | Ex-Walmart,
              Deloitte
            </p>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm mt-1">
              Greater Kolkata Area &nbsp;&middot;&nbsp; 12+ years experience
            </p>
          </div>
          <LinkedInIcon />
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://www.linkedin.com/in/ritam378/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            View Profile
          </a>
          <a
            href="https://www.linkedin.com/in/ritam378/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            Connect
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Accomplished professional with 12+ years of experience designing and
          deploying cloud-native architectures and big data solutions. Strong
          focus on creating business impact through technical excellence in cloud
          platforms (AWS, Azure, GCP), real-time analytics, big data pipelines,
          and distributed systems. Proven track record of delivering 30% cost
          savings, improving system performance by 40%, and achieving 100% SLA
          compliance.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">Experience</h2>

        {/* Mobilewalla — Principal Engineer */}
        <h3 className="font-medium text-lg tracking-tighter mt-6">
          Mobilewalla
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Principal Engineer &nbsp;&middot;&nbsp; Aug 2024 – Present &nbsp;&middot;&nbsp; Kolkata
        </p>
        <ul>
          <li>
            Designed framework for petabyte-scale data ingestion and processing
            to generate custom consumer behaviour segments with predictive models
            at scale.
          </li>
          <li>
            Built end-to-end Fintech API backend delivering near real-time
            feature and risk assessment data — multi-region, highly available,
            with enhanced security, metering, and logging.
          </li>
          <li>
            Designed and developed a Feature Integrator product as a single
            source of truth for all predictive model features (including age and
            gender models), reading petabyte-scale aggregate data once to save
            computation time and cost.
          </li>
        </ul>

        {/* Mobilewalla — Lead Data Engineer */}
        <h3 className="font-medium text-lg tracking-tighter mt-6">
          Mobilewalla
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Lead Data Engineer &nbsp;&middot;&nbsp; Sep 2020 – Jul 2023 (2 yrs 11 mos) &nbsp;&middot;&nbsp; Kolkata
        </p>

        {/* Mobilewalla — Senior Data Engineer */}
        <h3 className="font-medium text-lg tracking-tighter mt-6">
          Mobilewalla
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Senior Data Engineer &nbsp;&middot;&nbsp; Jun 2019 – Aug 2020 (1 yr 3 mos) &nbsp;&middot;&nbsp; Kolkata
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Walmart Labs */}
        <h3 className="font-medium text-lg tracking-tighter">Walmart Labs</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Senior Developer &nbsp;&middot;&nbsp; May 2018 – May 2019 (1 yr 1 mo) &nbsp;&middot;&nbsp; Bangalore
        </p>
        <ul>
          <li>
            Designed and built workflows to ingest high-volume clickstream data
            via Adobe Omniture into a Hive staging environment.
          </li>
          <li>
            Implemented a data pipeline ingestion framework producing primary DWH
            and secondary NoSQL aggregated feeds.
          </li>
          <li>
            Tuned Spark code and resolved streaming bottlenecks in the execution
            environment.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Deloitte */}
        <h3 className="font-medium text-lg tracking-tighter">Deloitte</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Technical Consultant &nbsp;&middot;&nbsp; Mar 2016 – May 2018 (2 yrs 3 mos) &nbsp;&middot;&nbsp; Bengaluru
        </p>
        <ul>
          <li>
            Implemented real-time analytics with Apache Kafka &amp; Spark
            Streaming; built custom Kafka consumer for network outage data.
          </li>
          <li>
            Developed a scalable framework for end-to-end data pipeline
            integration via Apache Spark and Alluxio.
          </li>
          <li>
            Created and validated IVR files with alternate paths for audit reject
            records.
          </li>
          <li>
            Built complex Airflow DAGs for Spark jobs; drove projects from RFP
            submission through high-level design, execution, and warranty
            support.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Capgemini */}
        <h3 className="font-medium text-lg tracking-tighter">Capgemini</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          Associate Consultant &nbsp;&middot;&nbsp; Jul 2014 – Mar 2016 (1 yr 9 mos) &nbsp;&middot;&nbsp; Pune
        </p>
        <ul>
          <li>
            Implemented Teradata–Hive data migration project using Teradata Sqoop
            connector, Hive, Sqoop, and Oozie.
          </li>
          <li>
            Solved Hive script performance issues with optimised joins and
            aggregations.
          </li>
          <li>
            Implemented DWH integration on Teradata using FLOAD/MLOAD utilities
            and built ELT scripts.
          </li>
          <li>
            Used Informatica to develop mappings and workflows scheduled via WLM.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        {/* Infosys */}
        <h3 className="font-medium text-lg tracking-tighter">Infosys</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
          System Engineer &nbsp;&middot;&nbsp; Sep 2011 – Aug 2013 (2 yrs) &nbsp;&middot;&nbsp; Hyderabad
        </p>
        <ul>
          <li>
            Worked on Oracle Warehouse Builder 11g, Oracle 11g PL/SQL, and
            OLAP/OLTP systems for a data integration project at a leading oil
            drilling corporation.
          </li>
          <li>
            Developed shell scripts, PL/SQL stored procedures, and triggers for
            data curation.
          </li>
          <li>Published a KX paper on Materialized Views and Triggers.</li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">Certifications</h2>
        <ul>
          <li>Building Intelligent Agent Workflows</li>
          <li>Machine Learning Nanodegree — Udacity</li>
          <li>Generative AI Applications with Amazon Bedrock</li>
          <li>GenAI and LLMs on AWS</li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter">Education</h2>
        <h3 className="font-medium text-lg tracking-tighter mt-4">
          West Bengal University of Technology
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Bachelor of Technology (B.Tech.), Information Technology &nbsp;&middot;&nbsp; 2007–2011
        </p>
        <h3 className="font-medium text-lg tracking-tighter mt-4">Udacity</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Nanodegree, Machine Learning Engineer &nbsp;&middot;&nbsp; 2018
        </p>
      </div>
    </section>
  );
}
