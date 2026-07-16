import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema } from "../../seo/StructuredData";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { CatalogueDownloadButton } from "../../components/ui/CatalogueDownloadButton";
import { FooterCTA } from "../../components/sections/FooterCTA";
import { getProductsByDivision } from "../../data/products";
import { divisions } from "../../data/company";
import type { Division, Product } from "../../data/products/types";
import type { Transition } from "framer-motion";

// ── SEO meta per division ─────────────────────────────────────────────────────
const divisionMeta: Record<Division, { metaTitle: string; metaDescription: string }> = {
  flanges: {
    metaTitle: "Flanges | Prayag Steel & Engineering Co.",
    metaDescription:
      "Forged, machined, CNC-finished flanges. WNRF, BLRF, Slip-On, Socket Weld, Lap Joint in SS, CS, Duplex, Inconel, Monel, Hastelloy. 1/2\"–36\", Class 150#–2500#.",
  },
  fittings: {
    metaTitle: "Fittings | Prayag Steel & Engineering Co.",
    metaDescription:
      "Seamless & welded butt-weld fittings, forged fittings — elbows, tees, reducers, caps. 1/2\"–16\" NB. ASME B16.9/B16.11. SS, Duplex, Inconel & exotic alloys.",
  },
  pipes: {
    metaTitle: "Pipes | Prayag Steel & Engineering Co.",
    metaDescription:
      "Seamless & welded stainless steel pipes in 20+ grades — SS304/316, Inconel, Hastelloy, Duplex, Titanium, Cupro Nickel. 6mm–168mm OD. BA, P&P, mirror finish.",
  },
  tubes: {
    metaTitle: "Tubes | Proficient Tubes Pvt. Ltd. — Prayag Steel",
    metaDescription:
      "Precision seamless & welded tubes 6mm–219mm OD, 0.5mm–12mm WT, up to 12m. SS, Inconel, Hastelloy, Titanium. Hydrostatic + eddy-current tested.",
  },
};

// ── Animation helper ─────────────────────────────────────────────────────────
const cardTransition = (i: number): Transition => ({
  duration: 0.55,
  delay: i * 0.07,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
});

// ── Subcategory group helper ──────────────────────────────────────────────────
function buildSubcategoryGroups(
  products: Product[],
  fallbackLabel: string
): Array<{ label: string; products: Product[]; id: string }> {
  const map = new Map<string, Product[]>();
  for (const p of products) {
    const key = p.subcategory ?? fallbackLabel;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }
  return [...map.entries()]
    .sort(([, a], [, b]) => b.length - a.length)
    .map(([label, products]) => ({
      label,
      products,
      // slug-safe id for anchor links
      id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
}

// ── Scroll helper (offset for navbar) ────────────────────────────────────────
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─────────────────────────────────────────────────────────────────────────────
export const DivisionPage: React.FC = () => {
  const { division } = useParams<{ division: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const div = division as Division;
  const meta = divisionMeta[div];
  const divisionData = divisions.find((d) => d.id === div);

  useEffect(() => {
    if (!div) return;
    setLoading(true);
    setProducts(getProductsByDivision(div));
    setLoading(false);
  }, [div]);

  if (!meta || !divisionData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-black text-4xl uppercase text-prayag-black mb-3">
            Division Not Found
          </h1>
          <Link to="/products" className="text-prayag-red underline font-body">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const divisionTitle = div.charAt(0).toUpperCase() + div.slice(1);
  const subcategoryGroups = buildSubcategoryGroups(products, divisionTitle);
  const heroImageSrc = `/assets/images/${divisionData.image}`;

  return (
    <>
      <PageMeta
        title={meta.metaTitle}
        description={meta.metaDescription}
        canonical={`https://www.prayagsteel.in/products/${div}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: divisionTitle, url: `/products/${div}` },
        ]}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — Dark, division image background, text pushed to top
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-prayag-black overflow-hidden"
        aria-label={`${divisionTitle} Division Hero`}
      >
        {/* Background division image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroImageSrc}
            alt=""
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prayag-black via-prayag-black/85 to-prayag-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-prayag-black/80 via-transparent to-transparent" />
        </div>

        {/* Red geometric accent rings */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-prayag-red/15 pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-prayag-red/25 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Hero content — tight vertical padding so text sits near top */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-12 lg:pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-body text-gray-400">
              <li>
                <Link to="/" className="hover:text-prayag-red transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li>
                <Link to="/products" className="hover:text-prayag-red transition-colors">Products</Link>
              </li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li className="text-prayag-red font-medium" aria-current="page">{divisionTitle}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* ── Text column ── */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tagline pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/15 border border-prayag-red/30 mb-4">
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">
                  {divisionData.tagline}
                </span>
              </div>

              <SectionHeading
                text={divisionTitle}
                highlightWords={[divisionTitle]}
                as="h1"
                light
                className="mb-5"
              />

              <p className="text-gray-300 font-body text-base leading-relaxed mb-7 max-w-xl">
                {divisionData.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Division highlights">
                {divisionData.highlights.map((h) => (
                  <li
                    key={h}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-body text-xs font-medium"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-prayag-red text-white font-body font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors shadow-lg shadow-prayag-red/25"
                >
                  Browse {divisionTitle}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <CatalogueDownloadButton
                  id={`${div}-hero-catalogue-btn`}
                  variant="white"
                />
              </div>
            </motion.div>

            {/* ── Image column ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
              aria-hidden="true"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-prayag-red/20 rounded-2xl z-0" />
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <img
                  src={heroImageSrc}
                  alt={`${divisionTitle} division`}
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => {
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full aspect-[4/3] bg-gray-900 flex items-center justify-center"><span class="text-gray-600 font-body text-sm">Image: assets/images/${divisionData.image}</span></div>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prayag-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="font-heading font-black text-white/20 text-5xl uppercase leading-none select-none">
                    {divisionTitle}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRODUCTS SECTION — two-column layout: TOC sidebar + cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="products"
        className="bg-off-white py-16 lg:py-24"
        aria-label={`${divisionTitle} Products`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
              Product Catalogue
            </span>
          </div>
          <SectionHeading
            text={`Our ${divisionTitle}`}
            highlightWords={[divisionTitle]}
            as="h2"
            className="mb-12"
          />

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-prayag-red border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

              {/* ── Main: single-column subcategory cards ── */}
              <div className="flex-1 min-w-0 space-y-8">
                {subcategoryGroups.map(({ label, products: groupProducts, id: groupId }, i) => (
                  <motion.div
                    key={label}
                    id={groupId}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={cardTransition(i)}
                    viewport={{ once: true, margin: "-60px" }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-28"
                  >
                    {/* Card body: image left, products right */}
                    <div className="flex flex-col sm:flex-row">

                      {/* ── Left: subcategory image ── */}
                      <div className="relative sm:w-48 lg:w-56 flex-shrink-0">
                        <ImagePlaceholder
                          path={groupProducts[0].image}
                          label={label}
                          aspectRatio="square"
                          className="w-full h-full"
                        />
                        {/* Gradient + title overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 sm:hidden">
                          <h2 className="font-heading font-black text-lg uppercase text-white leading-tight">
                            {label}
                          </h2>
                        </div>
                      </div>

                      {/* ── Right: title + product name grid ── */}
                      <div className="flex-1 min-w-0 p-5">
                        {/* Title — visible on sm+ only (hidden on mobile because overlay handles it) */}
                        <h2 className="hidden sm:block font-heading font-black text-xl uppercase text-prayag-black leading-tight mb-4">
                          {label}
                        </h2>

                        {/* Multi-column product name grid */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-0.5">
                          {groupProducts.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={`/products/${div}/${p.slug}`}
                                className="flex items-center gap-2 py-2 group transition-colors"
                              >
                                <span
                                  className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-prayag-red flex-shrink-0 transition-colors"
                                  aria-hidden="true"
                                />
                                <span className="font-body text-sm text-gray-600 group-hover:text-prayag-red transition-colors leading-snug">
                                  {p.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ── Sidebar: TOC (non-sticky) ── */}
              <aside
                className="w-full lg:w-60 xl:w-64 flex-shrink-0"
                aria-label="Table of Contents"
              >
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                    <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gray-500">
                      Categories
                    </p>
                  </div>
                  <nav>
                    <ul className="divide-y divide-gray-50">
                      {subcategoryGroups.map(({ label, id: groupId }) => (
                        <li key={groupId}>
                          <button
                            onClick={() => scrollToId(groupId)}
                            className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 group transition-colors text-left"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-prayag-red flex-shrink-0 transition-colors"
                              aria-hidden="true"
                            />
                            <span className="font-body text-sm text-gray-600 group-hover:text-prayag-red transition-colors leading-snug">
                              {label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  {/* Catalogue download in sidebar */}
                  <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                    <CatalogueDownloadButton
                      id={`${div}-sidebar-catalogue-btn`}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </aside>

            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <FooterCTA />
    </>
  );
};
