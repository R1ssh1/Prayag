import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity";

const builder = imageUrlBuilder(sanityClient);

/**
 * Returns a Sanity image URL builder for a given image asset.
 * Chain .width(), .height(), .format(), .url() etc. to get the final URL.
 *
 * @example
 * urlFor(post.coverImage).width(800).height(500).format("webp").url()
 */
export function urlFor(source: any) {
  return builder.image(source);
}
