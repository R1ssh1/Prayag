import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import type { BlogPost, BlogCategory } from "../../../types/blog";
import { urlFor } from "../../../lib/imageUrl";

interface BlogGridSectionProps {
  posts: BlogPost[];
  isLoading: boolean;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Skeleton card shown while posts are loading */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
      <div className="bg-gray-200 h-48 w-full" />
      <div className="p-6 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}

/** Cinematic full-bleed featured post */
function FeaturedPost({ post }: { post: BlogPost }) {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(640).format("webp").fit("crop").url()
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl overflow-hidden shadow-2xl mb-14"
      style={{ minHeight: "520px" }}
      aria-label={`Featured: ${post.title}`}
    >
      {/* Full-bleed background image */}
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={post.coverImage?.alt ?? post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-prayag-charcoal to-prayag-black" />
      )}

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Featured badge — top right */}
      <div className="absolute top-5 right-5 z-10">
        <span className="px-3 py-1.5 rounded-full bg-prayag-red text-white text-[10px] font-body font-bold uppercase tracking-widest shadow-lg">
          ★ Featured
        </span>
      </div>

      {/* Content — pinned to bottom left */}
      <div className="relative z-10 flex flex-col justify-end p-8 lg:p-14" style={{ minHeight: "520px" }}>
        <div className="max-w-2xl">
          {post.category && (
            <span className="inline-flex items-center gap-1.5 text-prayag-red font-body text-xs font-bold uppercase tracking-widest mb-4">
              <Tag className="w-3 h-3" />
              {post.category.title}
            </span>
          )}
          <h2 className="font-heading font-black uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 group-hover:text-prayag-red transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-300 font-body text-base sm:text-lg leading-relaxed mb-6 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-5 mb-8">
            <span className="flex items-center gap-1.5 text-gray-400 font-body text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="w-px h-4 bg-gray-600" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-gray-400 font-body text-sm">
              <Clock className="w-4 h-4" />
              {post.readTimeMinutes} min read
            </span>
          </div>
          <Link
            to={`/blogs/${post.slug.current}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-prayag-red text-white font-body font-bold uppercase tracking-wider text-sm rounded-xl transition-all duration-200 hover:bg-red-700 self-start"
            style={{ boxShadow: "0 6px 24px rgba(227,30,36,0.4)" }}
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/** Standard blog card for the grid */
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(600).height(380).format("webp").fit("crop").url()
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-prayag-red/20 transition-all duration-300 flex flex-col"
    >
      <Link to={`/blogs/${post.slug.current}`} className="flex flex-col h-full w-full">
      {/* Cover image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={post.coverImage?.alt ?? post.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="font-heading font-black text-[60px] text-gray-300 leading-none">P</span>
          </div>
        )}
        {/* Red top accent on hover */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-prayag-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        {post.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-prayag-black/75 text-white text-[10px] font-body font-bold uppercase tracking-widest backdrop-blur-sm group-hover:bg-prayag-red transition-colors duration-200">
              {post.category.title}
            </span>
          </div>
        )}
        {post.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded-full bg-prayag-red/90 text-white text-[9px] font-body font-bold uppercase tracking-widest">
              ★
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-black uppercase text-prayag-black text-lg leading-tight mb-3 line-clamp-2 group-hover:text-prayag-red transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-500 font-body text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-400 font-body text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMinutes}m
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 text-prayag-red font-body font-bold text-sm uppercase tracking-wide hover:gap-2 transition-all duration-200"
          >
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
      </Link>
    </motion.article>
  );
}

/** Category filter pill */
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-body text-sm font-semibold uppercase tracking-wide transition-all duration-200 border ${
        active
          ? "bg-prayag-red text-white border-prayag-red shadow-md"
          : "bg-white text-gray-500 border-gray-200 hover:border-prayag-red/40 hover:text-prayag-red"
      }`}
    >
      {label}
    </button>
  );
}

export const BlogGridSection: React.FC<BlogGridSectionProps> = ({ posts, isLoading }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Derive unique categories from posts
  const categories = useMemo<BlogCategory[]>(() => {
    const seen = new Set<string>();
    const cats: BlogCategory[] = [];
    posts.forEach((p) => {
      if (p.category && !seen.has(p.category._id)) {
        seen.add(p.category._id);
        cats.push(p.category);
      }
    });
    return cats;
  }, [posts]);

  const featuredPost = useMemo(
    () => posts.find((p) => p.featured) ?? null,
    [posts]
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((p) => p.category?.slug?.current === activeCategory);
  }, [posts, activeCategory]);

  return (
    <section id="blog-posts" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-prayag-red font-body text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-6 h-px bg-prayag-red" />
              Latest Articles
            </span>
            <h2 className="font-heading font-black uppercase text-prayag-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
              From the Steel Industry
            </h2>
          </motion.div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {!isLoading && (
          <>
            {/* Cinematic featured post */}
            {featuredPost && <FeaturedPost post={featuredPost} />}

            {/* Sticky category filter bar */}
            {categories.length > 0 && (
              <div className="sticky top-[79px] z-20 bg-white/95 backdrop-blur-sm py-3 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <FilterPill
                    label="All"
                    active={activeCategory === "all"}
                    onClick={() => setActiveCategory("all")}
                  />
                  {categories.map((cat) => (
                    <FilterPill
                      key={cat._id}
                      label={cat.title}
                      active={activeCategory === cat.slug.current}
                      onClick={() => setActiveCategory(cat.slug.current)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Post grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, i) => (
                  <BlogCard key={post._id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-heading font-black text-4xl text-gray-200 uppercase mb-3">
                  No Posts Yet
                </p>
                <p className="font-body text-gray-400 text-lg">
                  {activeCategory === "all"
                    ? "Check back soon — articles are on the way."
                    : "No posts in this category yet. Try another filter."}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
