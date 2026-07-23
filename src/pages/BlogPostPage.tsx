import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageMeta } from "../seo/PageMeta";
import { BlogPostHero } from "../components/sections/blog/BlogPostHero";
import { BlogPostBody } from "../components/sections/blog/BlogPostBody";
import { FooterCTA } from "../components/sections/FooterCTA";
import { sanityClient } from "../lib/sanity";
import { POST_BY_SLUG_QUERY, RELATED_POSTS_QUERY } from "../lib/queries";
import type { BlogPostFull, BlogPostPreview } from "../types/blog";

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostPreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true);
    setNotFound(false);

    sanityClient
      .fetch<BlogPostFull>(POST_BY_SLUG_QUERY, { slug })
      .then(async (data) => {
        if (!data) {
          setNotFound(true);
          setIsLoading(false);
          return;
        }
        setPost(data);

        // Fetch related posts if this post has a category
        if (data.category) {
          try {
            const related = await sanityClient.fetch<BlogPostPreview[]>(
              RELATED_POSTS_QUERY,
              { categoryId: data.category._id, excludeId: data._id }
            );
            setRelatedPosts(related ?? []);
          } catch {
            // Related posts are non-critical — fail silently
            setRelatedPosts([]);
          }
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setNotFound(true);
        setIsLoading(false);
      });
  }, [slug]);

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-prayag-red/20 border-t-prayag-red rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-gray-400 text-lg">Loading article…</p>
        </div>
      </main>
    );
  }

  // 404 state
  if (notFound || !post) {
    return (
      <main className="min-h-[60vh] bg-off-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-heading font-black text-8xl text-prayag-red mb-4">404</p>
          <h1 className="font-heading font-black text-3xl uppercase text-prayag-black mb-3">
            Article Not Found
          </h1>
          <p className="font-body text-gray-400 text-lg mb-8">
            This post may have been moved or doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-prayag-red text-white font-body font-bold uppercase tracking-wide text-sm hover:bg-red-700 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const ogImage = post.coverImage
    ? `https://cdn.sanity.io/images/xgrv0aaj/production/${post.coverImage.asset._ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`
    : undefined;

  return (
    <>
      <PageMeta
        title={`${post.title} | Prayag Steel Blog`}
        description={post.excerpt}
        canonical={`https://www.prayagsteel.in/blogs/${post.slug.current}`}
        ogImage={ogImage}
        type="article"
      />

      <main>
        {/* 1. Post hero */}
        <BlogPostHero post={post} />

        {/* 2. Article body + sidebar */}
        <BlogPostBody post={post} relatedPosts={relatedPosts} />

        {/* 3. Footer CTA */}
        <FooterCTA />
      </main>
    </>
  );
};
