#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// validate-products.ts
// Run with: npm run validate-products
//
// Checks:
//   1. Every product conforms to the Product interface (TypeScript handles this
//      at compile time, but this script validates runtime values too)
//   2. Unique slugs within each division
//   3. Slug format: lowercase, hyphenated, no special characters (a-z 0-9 -)
//   4. Every image path either has a real file in src/assets/images/ or is
//      explicitly flagged as PLACEHOLDER_* — logs warnings, doesn't fail for
//      missing images since the site is still being built
//   5. Exits with code 1 and clear error messages on any failure
// ─────────────────────────────────────────────────────────────────────────────

import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_ROOT = path.join(ROOT, "src", "assets", "images");

// ── Load data (requires tsx / ts-node to run) ─────────────────────────────
// We use dynamic require via a simple inline import trick since this script
// is run with tsx which supports ESM TypeScript.
const { flanges } = await import("../src/data/products/flanges.js");
const { fittings } = await import("../src/data/products/fittings.js");
const { pipes } = await import("../src/data/products/pipes.js");
const { tubes } = await import("../src/data/products/tubes.js");

type DivisionName = "flanges" | "fittings" | "pipes" | "tubes";

const SLUG_REGEX = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const allDivisions: Record<DivisionName, typeof flanges> = {
  flanges,
  fittings,
  pipes,
  tubes,
};

let errors = 0;
let warnings = 0;

function error(msg: string) {
  console.error(`  ❌  ERROR: ${msg}`);
  errors++;
}

function warn(msg: string) {
  console.warn(`  ⚠️   WARN: ${msg}`);
  warnings++;
}

function ok(msg: string) {
  console.log(`  ✅  ${msg}`);
}

console.log("\n─────────────────────────────────────────");
console.log("  Prayag Steel — Product Data Validation");
console.log("─────────────────────────────────────────\n");

for (const [divisionName, products] of Object.entries(allDivisions) as [DivisionName, typeof flanges][]) {
  console.log(`\n▸ Division: ${divisionName.toUpperCase()} (${products.length} products)`);

  const slugsSeen = new Set<string>();

  for (const product of products) {
    const prefix = `  [${product.id ?? "NO_ID"}]`;

    // ── Required field presence ──────────────────────────────────────────────
    const required: (keyof typeof product)[] = [
      "id", "slug", "division", "name", "shortDescription",
      "description", "materials", "standards", "specs", "image",
      "metaTitle", "metaDescription",
    ];
    for (const field of required) {
      if (!product[field] || (Array.isArray(product[field]) && (product[field] as unknown[]).length === 0)) {
        error(`${prefix} Missing or empty required field: "${field}"`);
      }
    }

    // ── Division matches file ────────────────────────────────────────────────
    if (product.division !== divisionName) {
      error(`${prefix} product.division ("${product.division}") does not match file division ("${divisionName}")`);
    }

    // ── Slug format ──────────────────────────────────────────────────────────
    if (!SLUG_REGEX.test(product.slug)) {
      error(`${prefix} Invalid slug format: "${product.slug}" — must be lowercase, hyphenated (a-z, 0-9, hyphens only)`);
    }

    // ── Slug uniqueness within division ─────────────────────────────────────
    if (slugsSeen.has(product.slug)) {
      error(`${prefix} Duplicate slug within ${divisionName}: "${product.slug}"`);
    } else {
      slugsSeen.add(product.slug);
    }

    // ── Image path check ─────────────────────────────────────────────────────
    const imagePath = path.join(IMAGES_ROOT, product.image);
    if (existsSync(imagePath)) {
      ok(`Image found: ${product.image}`);
    } else {
      warn(`${prefix} Image not found (placeholder pending): assets/images/${product.image}`);
    }
  }
}

// ── Summary ─────────────────────────────────────────────────────────────────
console.log("\n─────────────────────────────────────────");
if (errors === 0) {
  console.log(`\n✅  All checks passed. ${warnings} warning(s).\n`);
  process.exit(0);
} else {
  console.error(`\n❌  Validation FAILED: ${errors} error(s), ${warnings} warning(s).\n`);
  console.error("    Fix the errors above before shipping.\n");
  process.exit(1);
}
