import type { PortableTextBlock } from "@portabletext/react";

export interface BlogCategory {
  _id: string;
  title: string;
  slug: { current: string };
}

/** Shape returned by the listing query (no body) */
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: BlogCategory | null;
  coverImage: SanityImageAsset | null;
  publishedAt: string;
  readTimeMinutes: number;
  featured: boolean;
  tags: string[];
}

/** Shape returned by the detail query (includes body) */
export interface BlogPostFull extends BlogPost {
  body: PortableTextBlock[];
}

/** Minimal shape used for related post cards */
export interface BlogPostPreview {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: BlogCategory | null;
  coverImage: SanityImageAsset | null;
  publishedAt: string;
  readTimeMinutes: number;
}

/** Sanity image asset reference (passed to urlFor) */
export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}
