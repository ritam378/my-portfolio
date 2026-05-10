import { redirect } from "next/navigation";
import { getBlogPosts } from "app/blog/utils";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPosts();

  // Try to find the article by slug and redirect to Medium
  // Medium URL format: https://medium.com/@ritam378/post-title-slug-hash
  const post = posts.find((post) => {
    const urlSlug = post.url.split("/").pop();
    return urlSlug === slug;
  });

  if (post) {
    redirect(post.url);
  }

  // If not found, redirect to blog listing
  redirect("/blog");
}
