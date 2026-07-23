import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { motion } from "framer-motion";
import {
  Link as LinkIcon,
  ExternalLink,
  CheckCheck,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import type { BlogPostFull, BlogPostPreview } from "../../../types/blog";
import { urlFor } from "../../../lib/imageUrl";

interface BlogPostBodyProps {
  post: BlogPostFull;
  relatedPosts: BlogPostPreview[];
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


/* ── Share Strip ───────────────────────────────────────────────────── */
function ShareStrip({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pageUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${pageUrl}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-y border-gray-100 my-8">
      <span className="font-body text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">
        Share
      </span>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-prayag-red/40 hover:text-prayag-red text-xs font-body font-medium transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <CheckCheck className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <LinkIcon className="w-3.5 h-3.5" />
        )}
        {copied ? "Copied!" : "Copy Link"}
      </button>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-black hover:text-black text-xs font-body font-medium transition-colors"
        aria-label="Share on X / Twitter"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        X / Twitter
      </a>
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 text-xs font-body font-medium transition-colors"
        aria-label="Share on LinkedIn"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        LinkedIn
      </a>
    </div>
  );
}

/* ── More Articles Strip ───────────────────────────────────────────── */
function MoreArticlesStrip({ posts }: { posts: BlogPostPreview[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-off-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-prayag-red font-body text-xs font-bold uppercase tracking-[0.2em] mb-2">
            <span className="w-6 h-px bg-prayag-red" />
            Continue Reading
          </span>
          <h2 className="font-heading font-black uppercase text-prayag-black text-2xl sm:text-3xl">
            More Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((rp) => {
            const imgUrl = rp.coverImage
              ? urlFor(rp.coverImage)
                .width(400)
                .height(240)
                .format("webp")
                .fit("crop")
                .url()
              : null;
            return (
              <Link
                key={rp._id}
                to={`/blogs/${rp.slug.current}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-prayag-red/20 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={rp.coverImage?.alt ?? rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading text-5xl text-gray-200">P</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-heading font-black uppercase text-prayag-black text-sm leading-tight line-clamp-2 group-hover:text-prayag-red transition-colors mb-2">
                    {rp.title}
                  </p>
                  <div className="flex items-center gap-3 text-gray-400 text-xs font-body">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {rp.readTimeMinutes}m read
                    </span>
                    <span className="text-gray-300">·</span>
                    <span>{formatDate(rp.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Main Component ────────────────────────────────────────────────── */
export const BlogPostBody: React.FC<BlogPostBodyProps> = ({ post, relatedPosts }) => {

  /* Portable Text components — headings get IDs for TOC anchor linking */
  const portableTextComponents = useMemo<PortableTextComponents>(
    () => ({
      block: {
        normal: ({ children }) => (
          <p className="font-body text-gray-600 text-lg leading-[1.85] mb-6">
            {children}
          </p>
        ),
        h2: ({ children, value }) => {
          const text = ((value as any)?.children ?? [])
            .map((c: any) => c.text ?? "")
            .join("");
          const id = slugifyHeading(text);
          return (
            <h2
              id={id}
              className="font-heading font-black uppercase text-prayag-black text-2xl sm:text-3xl leading-tight mt-12 mb-5 pl-4 border-l-4 border-prayag-red"
              style={{ scrollMarginTop: "100px" }}
            >
              {children}
            </h2>
          );
        },
        h3: ({ children, value }) => {
          const text = ((value as any)?.children ?? [])
            .map((c: any) => c.text ?? "")
            .join("");
          const id = slugifyHeading(text);
          return (
            <h3
              id={id}
              className="font-heading font-black uppercase text-prayag-black text-xl sm:text-2xl leading-tight mt-8 mb-4"
              style={{ scrollMarginTop: "100px" }}
            >
              {children}
            </h3>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-prayag-red pl-6 my-8 italic text-gray-500 font-body text-xl leading-relaxed">
            {children}
          </blockquote>
        ),
      },
      list: {
        bullet: ({ children }) => (
          <ul className="list-none space-y-2 mb-6 font-body text-gray-600 text-lg">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 font-body text-gray-600 text-lg pl-2">
            {children}
          </ol>
        ),
      },
      listItem: {
        bullet: ({ children }) => (
          <li className="flex items-start gap-3 leading-[1.7]">
            <span className="w-1.5 h-1.5 rounded-full bg-prayag-red flex-shrink-0 mt-3" />
            {children}
          </li>
        ),
        number: ({ children }) => <li className="leading-[1.7]">{children}</li>,
      },
      marks: {
        strong: ({ children }) => (
          <strong className="font-semibold text-prayag-black">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-500">{children}</em>
        ),
        code: ({ children }) => (
          <code className="px-1.5 py-0.5 rounded bg-prayag-red/8 text-prayag-red font-mono text-[0.88em]">
            {children}
          </code>
        ),
        link: ({ children, value }) => (
          <a
            href={value?.href}
            target={value?.blank ? "_blank" : undefined}
            rel={value?.blank ? "noopener noreferrer" : undefined}
            className="text-prayag-red underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {children}
          </a>
        ),
      },
      types: {
        image: ({ value }) => {
          const imgUrl = urlFor(value)
            .width(900)
            .format("webp")
            .quality(85)
            .url();
          return (
            <figure className="my-10">
              <img
                src={imgUrl}
                alt={value.alt ?? ""}
                className="w-full rounded-xl shadow-lg"
              />
              {value.caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-400 font-body italic">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },
      },
    }),
    []
  );

  return (
    <>
      <section className="bg-off-white pt-8 pb-16 lg:pt-1 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">

            {/* ── Main article ─────────────────────────────────────── */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >

              {/* Share strip */}
              <ShareStrip title={post.title} />

              {/* Excerpt lead */}
              <p className="font-body text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-prayag-red pl-5 italic">
                {post.excerpt}
              </p>

              {/* Portable Text body */}
              {post.body && (
                <div>
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </motion.article>
          </div>
        </div>
      </section>

      {/* More Articles strip — shown when related posts exist */}
      <MoreArticlesStrip posts={relatedPosts} />
    </>
  );
};
