import React from "react";
import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  /** Full canonical URL for this page */
  canonical?: string;
  /** OG image path (absolute URL or relative from site root) */
  ogImage?: string;
  /** "website" | "article" | "product" */
  type?: string;
}

const SITE_NAME = "Prayag Steel & Engineering Co.";
const SITE_URL = "https://www.prayagsteel.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

/**
 * PageMeta — sets per-page <title>, meta description, Open Graph, and Twitter
 * tags via react-helmet-async. Compatible with vite-react-ssg prerendering.
 */
export const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
}) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ?? SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
