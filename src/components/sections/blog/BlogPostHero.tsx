import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronLeft } from "lucide-react";
import type { BlogPostFull } from "../../../types/blog";
import { urlFor } from "../../../lib/imageUrl";

interface BlogPostHeroProps {
  post: BlogPostFull;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(1920).height(1080).format("webp").fit("crop").url()
    : null;

  return (
  <section
    className="relative bg-prayag-black overflow-hidden"
    aria-label={`Blog post: ${post.title}`}
  >
    {/* Full-bleed background image */}
    {imgUrl && (
      <div className="absolute inset-0">
        <img
          src={imgUrl}
          alt={post.coverImage?.alt ?? post.title}
          className="w-full h-full object-cover"
        />
        {/* Deep gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-prayag-black via-prayag-black/80 to-prayag-black/40" />
      </div>
    )}

    {/* Decorative rings (hidden on mobile if image exists) */}
    <div
      className={`absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none ${imgUrl ? 'opacity-20' : ''}`}
      aria-hidden="true"
    >
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-prayag-red/20" />
        <div className="absolute inset-14 rounded-full border border-prayag-red/30" />
      </div>
    </div>

    {/* Subtle background gradient (fallback if no image) */}
    {!imgUrl && (
      <div
        className="absolute inset-0 bg-gradient-to-br from-prayag-black via-prayag-black to-[#2a1a1b]"
        aria-hidden="true"
      />
    )}

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-prayag-red font-body text-sm font-medium transition-colors duration-200 mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Category eyebrow */}
        {post.category && (
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-prayag-red/30 bg-prayag-red/10">
              <Tag className="w-3 h-3 text-prayag-red" />
              <span className="text-prayag-red font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                {post.category.title}
              </span>
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading font-black uppercase leading-[1.1] text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8">
          {post.title}
        </h1>

        {/* Meta row — date & read time only */}
        <div className="flex flex-wrap items-center gap-5 text-gray-400 font-body text-sm mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-prayag-red" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="w-px h-4 bg-gray-700" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-prayag-red" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        {/* Tags — prominent row */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-prayag-red/15 border border-prayag-red/25 text-prayag-red text-xs font-body font-semibold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>

    {/* Arc divider to off-white */}
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full block" style={{ height: "64px" }}>
        <path d="M0,64 C480,4 960,4 1440,64 L1440,64 L0,64 Z" fill="#F5F5F5" />
      </svg>
    </div>
  </section>
  );
};
