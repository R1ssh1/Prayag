import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./src/sanity/schemas/blogPost";
import { category } from "./src/sanity/schemas/category";

export default defineConfig({
  name: "prayag-steel",
  title: "Prayag Steel CMS",
  projectId: "xgrv0aaj",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [blogPost, category],
  },
});
