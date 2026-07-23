/**
 * All GROQ queries for the Blogs section.
 * Centralised here so changes to field names only need updating in one place.
 */

/** Fields shared by both listing and detail queries */
const POST_COMMON_FIELDS = `
  _id,
  title,
  slug { current },
  excerpt,
  "category": category->{ _id, title, slug { current } },
  coverImage{ asset, alt, hotspot },
  publishedAt,
  readTimeMinutes,
  featured,
  tags
`;

/**
 * Fetch all published blog posts for the listing page.
 * Ordered: featured first, then newest first.
 */
export const ALL_POSTS_QUERY = `
  *[_type == "blogPost" && defined(publishedAt)] | order(featured desc, publishedAt desc) {
    ${POST_COMMON_FIELDS}
  }
`;

/**
 * Fetch all unique categories that have at least one published post.
 */
export const ALL_CATEGORIES_QUERY = `
  *[_type == "category" && count(*[_type == "blogPost" && references(^._id)]) > 0] {
    _id,
    title,
    "slug": slug.current
  } | order(title asc)
`;

/**
 * Fetch a single blog post by slug (includes full body).
 * Pass { slug: "some-slug" } as the params object.
 */
export const POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${POST_COMMON_FIELDS},
    body
  }
`;

/**
 * Fetch up to 3 related posts by category, excluding the current post.
 * Pass { categoryId: "...", excludeId: "..." } as params.
 */
export const RELATED_POSTS_QUERY = `
  *[
    _type == "blogPost" &&
    defined(publishedAt) &&
    _id != $excludeId &&
    category._ref == $categoryId
  ] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug { current },
    excerpt,
    coverImage{ asset, alt, hotspot },
    publishedAt,
    readTimeMinutes
  }
`;
