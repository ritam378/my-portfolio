export interface BlogPost {
  title: string;
  datePublished: string;
  url: string;
  description: string;
  coverImage: string | null;
  tags: string[];
  featured?: boolean;
}

// Fetching from multiple feeds to work around Medium's 10-item profile RSS cap.
// dataengineeringxperts is a publication where Ritam is the sole author so all
// items belong to him. The profile feed catches articles from other publications.
const RSS_FEEDS = [
  "https://medium.com/feed/@ritam378",
  "https://medium.com/feed/dataengineeringxperts",
];

const FEATURED_POST_TITLES: string[] = [];

// Articles not reachable via RSS (Medium publication feeds are shared with
// other authors and the profile feed is capped at 10). Merged with live RSS
// results and deduplicated by URL.
const STATIC_POSTS: BlogPost[] = [
  {
    title: "Say Goodbye to Dirty Data: Build Trustworthy Pipelines with These Pro Tips",
    datePublished: "2025-05-21T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/say-goodbye-to-dirty-data-build-trustworthy-pipelines-with-these-pro-tips-974306a68db5",
    description: "How data quality frameworks help prevent problems caused by messy data in pipelines — covering validation, testing, and monitoring strategies.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Data Quality", "Data Pipelines", "Big Data"],
  },
  {
    title: "No SQL? No Problem: Ask Your Database Questions in Plain English",
    datePublished: "2025-04-20T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/no-sql-no-problem-ask-your-database-questions-in-plain-english-3f5f9b83866d",
    description: "A lightweight application demonstrating how to query MySQL databases using natural language via the OpenAI API, enabling non-technical users to skip writing SQL entirely.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "NLP", "MySQL", "OpenAI API"],
  },
  {
    title: "Catching Sneaky Data Drift Before It Wreaks Havoc",
    datePublished: "2025-04-07T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/catching-sneaky-data-drift-before-it-wreaks-havoc-19fa2fbc80ed",
    description: "How to detect and handle data drift — when incoming data changes in structure, semantics, or distribution — before it degrades model performance or dashboard accuracy.",
    coverImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Machine Learning", "Data Quality", "Monitoring"],
  },
  {
    title: "Building a Data Lakehouse with Iceberg, Spark, and AWS Glue",
    datePublished: "2025-03-08T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/building-a-data-lakehouse-with-iceberg-spark-and-aws-glue-d96e6e081c4f",
    description: "How to construct a data lakehouse combining Apache Iceberg, Spark, and AWS Glue — cheap scalable storage with fast structured querying.",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Apache Iceberg", "Apache Spark", "AWS Glue"],
  },
  {
    title: "From Data Lake to Lakehouse: A Migration Guide with Delta",
    datePublished: "2025-02-11T00:00:00.000Z",
    url: "https://blog.dataengineerthings.org/from-data-lake-to-lakehouse-a-migration-guide-with-delta-f03832cdbe9a",
    description: "Why migrating from Parquet-based data lakes to Delta Lake is beneficial — ACID transactions, schema evolution, time travel, and blazing-fast performance.",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Delta Lake", "Apache Spark", "Lakehouse Architecture"],
  },
  {
    title: "Mastering CDC in Delta Tables: A Use-case in Spark",
    datePublished: "2025-02-05T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/mastering-cdc-in-delta-tables-a-use-case-in-spark-338faaca4332",
    description: "A deep dive into Change Data Capture with Delta Tables — tracking data modifications efficiently using MERGE operations, versioning, and streaming updates.",
    coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "CDC", "Delta Lake", "Apache Spark"],
  },
  {
    title: "Handling Bottlenecks in Spark Streaming: Lessons Learned",
    datePublished: "2025-01-20T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/handling-bottlenecks-in-spark-streaming-lessons-learned-71b53d92c21a",
    description: "Practical solutions to Spark Streaming bottlenecks — data skew, slow external sinks, checkpointing overhead, and resource contention causing latency.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Spark Streaming", "Performance Optimization", "Real-time"],
  },
  {
    title: "Demystifying Event-Driven Architecture with AWS",
    datePublished: "2025-01-09T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/demystifying-event-driven-architecture-with-aws-86a5ed44a667",
    description: "An introduction to Event-Driven Architecture for building scalable, decoupled systems — with practical AWS service examples.",
    coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Event-Driven Architecture", "AWS", "System Design"],
  },
  {
    title: "Hands-on Cloud: Build a Serverless To-Do List App on AWS",
    datePublished: "2024-12-24T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/hands-on-cloud-build-a-serverless-to-do-list-app-on-aws-342de2636707",
    description: "A practical guide to building a serverless application on AWS — Lambda, API Gateway, DynamoDB, and Step Functions without managing infrastructure.",
    coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Cloud Computing", "AWS", "Serverless", "Lambda", "DynamoDB"],
  },
  {
    title: "Building Real-Time ETL Pipelines with Flink? Here's How You Can Nail It!",
    datePublished: "2024-12-12T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/building-real-time-etl-pipelines-with-flink-heres-how-you-can-nail-it-eb39360e0f11",
    description: "How to build a real-time ETL system combining Kafka Streams with Apache Flink — covering data cleaning, enrichment, and preparation for analytics dashboards.",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Apache Flink", "Kafka", "ETL", "Real-time Processing"],
  },
  {
    title: "Building Real-Time Recommendations with Spark, ALS, and Kafka",
    datePublished: "2024-11-30T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/building-real-time-recommendations-with-spark-als-and-kafka-4158310bfbe3",
    description: "How to build a real-time recommendation system combining Spark's ALS collaborative filtering model with Kafka event streaming to deliver personalised suggestions.",
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Apache Spark", "Kafka", "Machine Learning", "Recommendation Systems"],
  },
  {
    title: "Customer 360 in E-commerce: Real-Life Use Case with Delta Lake on Databricks",
    datePublished: "2024-11-24T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/customer-360-in-e-commerce-real-life-use-case-with-delta-lake-on-databricks-2d8f4f3bec7c",
    description: "How Delta Lake and Databricks solve real-world data engineering challenges through a Customer 360 platform — ACID transactions, schema evolution, CDC, and Z-ordering.",
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Delta Lake", "Databricks", "CDC", "E-commerce"],
  },
  {
    title: "Real-Time Use-case: Fraud Detection in Financial Transactions with Kafka and Spark Streaming",
    datePublished: "2024-11-18T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/real-time-use-case-fraud-detection-in-financial-transactions-with-kafka-and-spark-streaming-86782df3e27d",
    description: "Building a fraud detection system using Apache Kafka and Spark Streaming to monitor financial transactions in real time and identify suspicious activity instantly.",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Kafka", "Spark Streaming", "Fraud Detection", "Fintech"],
  },
  {
    title: "Preventing Data Mix-ups: Understanding Database Isolation and Concurrency Management",
    datePublished: "2024-11-12T00:00:00.000Z",
    url: "https://blog.dataengineerthings.org/preventing-data-mix-ups-understanding-database-isolation-and-concurrency-management-7ed2b361a533",
    description: "A deep dive into database isolation levels and concurrency management strategies to prevent data anomalies in concurrent transaction environments.",
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Database", "Concurrency", "SQL", "ACID"],
  },
  {
    title: "Data Engineering for ML: Building a Customer Churn Prediction Pipeline with Airflow",
    datePublished: "2024-11-09T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/data-engineering-for-ml-building-a-customer-churn-prediction-pipeline-with-airflow-f6b50daf5443",
    description: "A walkthrough of building an ML pipeline that forecasts customer churn using Apache Airflow for orchestration — covering data extraction, cleaning, and prediction.",
    coverImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Machine Learning", "Apache Airflow", "Customer Churn"],
  },
  {
    title: "Building End-to-End Customer Insights Pipeline by Integrating Multiple Data Sources in Spark with Airflow",
    datePublished: "2024-11-03T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/building-end-to-end-customer-insights-pipeline-by-integrating-multiple-data-sources-in-spark-with-ed9c3a347928",
    description: "How to build an automated pipeline using Apache Spark and Airflow to consolidate customer data from SQL databases, cloud storage, and CSV files for actionable insights.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Apache Spark", "Apache Airflow", "Data Pipeline", "Customer Analytics"],
  },
  {
    title: "SQL Interview Questions That Every Candidate Should Know",
    datePublished: "2024-10-27T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/are-you-a-sql-expert-try-solving-these-problems-48c1c809f1b9",
    description: "A challenging set of SQL problems designed to test deeper knowledge — including consecutive login streaks, window functions, and advanced query patterns.",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80&fit=crop&crop=entropy",
    tags: ["SQL", "Data Engineering", "Interview Preparation", "Database"],
  },
  {
    title: "Many Orgs are moving from Cassandra to ScyllaDB. But why?",
    datePublished: "2024-10-12T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/many-orgs-are-moving-from-cassandra-to-scylladb-but-why-6d98db09608b",
    description: "Why organisations are switching from Apache Cassandra to ScyllaDB — better performance at scale with fewer nodes, less admin work, and lower infrastructure costs.",
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80&fit=crop&crop=entropy",
    tags: ["NoSQL", "Cassandra", "ScyllaDB", "Database", "Data Engineering"],
  },
  {
    title: "Data Skew in Spark: Using Salting while Avoiding Common Mistakes",
    datePublished: "2024-10-05T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/taming-skewness-in-spark-salting-revisited-4a36388e6e24",
    description: "How to handle uneven data distribution in Apache Spark through salting — adding random values to skewed keys to spread records evenly and improve join performance.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Apache Spark", "Data Engineering", "Performance Optimization", "Big Data"],
  },
  {
    title: "Parquet is Good for OLAP but Not for OLTP Use Cases. But Why?",
    datePublished: "2024-09-28T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/parquet-is-good-for-olap-but-not-for-oltp-use-cases-but-why-06d30a303cb8",
    description: "Why Parquet's columnar storage format excels for analytical workloads but has fundamental limitations for transactional processing use cases.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Data Engineering", "Parquet", "OLAP", "OLTP", "Storage Formats"],
  },
  {
    title: "Scaling Apache Spark: Understanding Cluster Utilisation with a 50-Node Setup",
    datePublished: "2024-09-23T00:00:00.000Z",
    url: "https://medium.com/towards-data-engineering/scaling-apache-spark-understanding-cluster-utilisation-with-a-50-node-setup-f946128c80c8",
    description: "How resource management influences Spark performance in a 50-node cluster — capacity calculations, task parallelism, and optimising large dataset processing.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&fit=crop&crop=entropy",
    tags: ["Apache Spark", "Data Engineering", "Cluster Management", "Big Data", "Performance"],
  },
];

function extractTag(xml: string, tag: string): string {
  const escapedTag = tag.replace(":", "\\:");
  const match = xml.match(new RegExp(`<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`));
  return match ? match[1].trim() : "";
}

function extractAllMatches(xml: string, tag: string): string[] {
  const escapedTag = tag.replace(":", "\\:");
  const regex = new RegExp(`<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = regex.exec(xml)) !== null) {
    results.push(m[1].trim());
  }
  return results;
}

function stripCdata(s: string): string {
  return s.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function extractFirstImgSrc(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function parseRssItems(xml: string): BlogPost[] {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const posts: BlogPost[] = [];
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const title = stripCdata(extractTag(item, "title"));

    // Medium puts the post URL in <guid>, not <link>
    const linkRaw = extractTag(item, "link");
    const guidRaw = extractTag(item, "guid");
    const url = stripCdata(linkRaw || guidRaw)
      // Strip ?source=rss query params Medium appends on publication feeds
      .split("?")[0];

    const pubDate = extractTag(item, "pubDate");
    const descriptionRaw = stripCdata(extractTag(item, "description"));
    const contentEncoded = stripCdata(extractTag(item, "content:encoded"));

    const categories = extractAllMatches(item, "category").map(stripCdata);
    // Medium puts the cover image inside <description> CDATA html; fall back to content:encoded
    const coverImage = extractFirstImgSrc(descriptionRaw) ?? extractFirstImgSrc(contentEncoded);
    const description = stripHtml(descriptionRaw).slice(0, 220);

    if (!title || !url) continue;

    posts.push({
      title,
      datePublished: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      url,
      description,
      coverImage: coverImage ?? null,
      tags: categories.filter((c) => c.length > 0),
      featured: FEATURED_POST_TITLES.includes(title),
    });
  }

  return posts;
}


async function fetchFeed(url: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return [];
    const xml = await response.text();
    return parseRssItems(xml);
  } catch {
    console.error(`Error fetching RSS feed: ${url}`);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Fetch all RSS feeds in parallel, then merge with static posts,
  // deduplicating by canonical URL (strip query params for comparison).
  const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
  const seen = new Set<string>();
  const merged: BlogPost[] = [];

  const addPost = (post: BlogPost) => {
    const key = post.url.split("?")[0];
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(post);
    }
  };

  for (const posts of results) posts.forEach(addPost);
  STATIC_POSTS.forEach(addPost);

  return merged;
}

export function searchBlogPosts(
  articles: BlogPost[],
  query: string,
): BlogPost[] {
  if (!query) return articles;

  const lowerQuery = query.toLowerCase();
  return articles.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

export function formatDate(date: string, includeRelative = true): string {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
