import React, { useEffect, useState } from "react";
import { PageMeta } from "../seo/PageMeta";
import { BlogHeroSection } from "../components/sections/blog/BlogHeroSection";
import { BlogGridSection } from "../components/sections/blog/BlogGridSection";
import { FooterCTA } from "../components/sections/FooterCTA";
import { sanityClient } from "../lib/sanity";
import { ALL_POSTS_QUERY } from "../lib/queries";
import type { BlogPost } from "../types/blog";

export const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch<BlogPost[]>(ALL_POSTS_QUERY)
      .then((data) => {
        setPosts(data ?? []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err);
        setError("Could not load articles. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <PageMeta
        title="Blog — Steel Insights & Industry Knowledge | Prayag Steel & Engineering Co."
        description="Expert articles on stainless steel grades, fabrication standards, ASME & ASTM compliance, flanges, pipes, tubes, and the insights that power India's critical infrastructure."
        canonical="https://www.prayagsteel.in/blogs"
        type="website"
      />

      <main>
        {/* 1. Hero */}
        <BlogHeroSection />

        {/* 2. Post Grid */}
        {error ? (
          <section className="bg-white py-32 text-center">
            <p className="font-heading font-black text-4xl text-gray-200 uppercase mb-3">Oops</p>
            <p className="font-body text-gray-400 text-lg">{error}</p>
          </section>
        ) : (
          <BlogGridSection posts={posts} isLoading={isLoading} />
        )}

        {/* 3. Footer CTA */}
        <FooterCTA />
      </main>
    </>
  );
};
