"use client";

import { formatDate, type BlogPost } from "app/blog/utils";
import { useMemo, useState, useEffect } from "react";

const POSTS_PER_PAGE = 30;
const INITIAL_POSTS = 30;

export function BlogPosts({
  posts,
  query,
  hideResultsCount = false,
}: {
  posts: BlogPost[];
  query: string;
  hideResultsCount?: boolean;
  variant?: "default" | "featured";
}) {
  const [itemsToShow, setItemsToShow] = useState(INITIAL_POSTS);

  // Reset itemsToShow when query changes
  useEffect(() => {
    setItemsToShow(INITIAL_POSTS);
  }, [query]);

  const filteredBlogs = useMemo(() => {
    if (!query) return posts;

    const lowerQuery = query.toLowerCase();
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    });
  }, [posts, query]);

  const displayedBlogs = filteredBlogs.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prev) =>
      Math.min(prev + POSTS_PER_PAGE, filteredBlogs.length),
    );
  };

  if (filteredBlogs.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          {query
            ? `No articles found matching "${query}".`
            : "No articles found."}
        </p>
      </div>
    );
  }

  const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery) return text;
    // Escape special regex characters
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark
          key={i}
          className="bg-yellow-200 dark:bg-yellow-900/30 px-0.5 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div>
      {/* Search Results Info */}
      {query && filteredBlogs.length > 0 && (
        <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Found {filteredBlogs.length} article
          {filteredBlogs.length !== 1 ? "s" : ""} matching "{query}"
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {displayedBlogs.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:opacity-80 transition-opacity"
            aria-label={`Read article: ${post.title}`}
          >
            {/* Cover Image */}
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            ) : (
              <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600 select-none uppercase">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 tabular-nums">
                {formatDate(post.datePublished, false)}
              </p>
              <p className="font-medium text-sm tracking-tight text-neutral-900 dark:text-neutral-100 line-clamp-2 mb-3">
                {highlightText(post.title, query)}
              </p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {itemsToShow < filteredBlogs.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="justify-center py-2 px-4 border cursor-pointer border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            Load More ({filteredBlogs.length - itemsToShow} remaining)
          </button>
        </div>
      )}

      {/* Results Count */}
      {!hideResultsCount && (
        <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Showing {displayedBlogs.length} of {filteredBlogs.length} articles
        </div>
      )}
    </div>
  );
}
