import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema, ProductSchema } from "../../seo/StructuredData";
import { getProductBySlug, getProductsByDivision } from "../../data/products";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { CatalogueDownloadButton } from "../../components/ui/CatalogueDownloadButton";
import { ProductCard } from "../../components/ui/ProductCard";
import { divisions } from "../../data/company";
import type { Division, MaterialFamily } from "../../data/products/types";

// ── TOC sections — computed per product based on available data ───────────────
function buildTocSections(hasMaterialsTable: boolean) {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "specifications", label: "Specifications" },
  ];
  if (hasMaterialsTable) {
    sections.push({ id: "available-materials", label: "Available Materials" });
  }
  sections.push(
    { id: "standards", label: "Standards & Compliance" },
    { id: "enquire", label: "Enquire" }
  );
  return sections;
}

// ── Available Materials card ──────────────────────────────────────────────────
function MaterialFamilyCard({ family }: { family: MaterialFamily }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-prayag-black leading-snug">
          {family.family}
        </p>
        <p className="font-body text-[11px] text-gray-400 mt-0.5 leading-snug">
          {family.standard}
        </p>
      </div>
      <div className="px-4 py-3 flex flex-wrap gap-1.5">
        {family.grades.map((grade) => (
          <span
            key={grade}
            className="inline-block px-2.5 py-1 rounded-full bg-prayag-red/5 border border-prayag-red/15 text-prayag-red font-body text-xs font-medium leading-snug"
          >
            {grade}
          </span>
        ))}
      </div>
    </div>
  );
}

export const ProductDetailPage: React.FC = () => {
  const { division, slug } = useParams<{ division: string; slug: string }>();
  const div = division as Division;

  const product = div && slug ? getProductBySlug(div, slug) : undefined;

  // Scroll offset to account for sticky navbar (~80px)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Reset scroll on product change
  const prevSlugRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (prevSlugRef.current !== slug) {
      window.scrollTo({ top: 0 });
      prevSlugRef.current = slug;
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading font-black text-4xl uppercase text-prayag-black mb-3">
            Product Not Found
          </h1>
          <p className="text-gray-500 font-body mb-6">
            The product you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to={`/products/${div ?? ""}`}
            className="text-prayag-red underline font-body text-sm"
          >
            ← Back to {div ? div.charAt(0).toUpperCase() + div.slice(1) : "Products"}
          </Link>
        </div>
      </div>
    );
  }

  const divisionTitle = div.charAt(0).toUpperCase() + div.slice(1);

  // ── Sidebar data ────────────────────────────────────────────────────────────
  const allDivisionProducts = getProductsByDivision(div);

  // Same-subcategory: filter by subcategory if defined.
  // FALLBACK: if the subcategory group only contains the current product (e.g.
  // fittings/flanges where each type is its own unique subcategory), fall back
  // to showing ALL products in the division — so the sidebar is always useful.
  const sameSubcategoryProducts = product.subcategory
    ? allDivisionProducts.filter((p) => p.subcategory === product.subcategory)
    : allDivisionProducts;

  const sameCategoryProducts =
    sameSubcategoryProducts.length > 1
      ? sameSubcategoryProducts
      : allDivisionProducts;

  const sameCategoryLabel =
    sameSubcategoryProducts.length > 1 && product.subcategory
      ? `Other ${product.subcategory} ${divisionTitle}`
      : `Other ${divisionTitle}`;

  const tocSections = buildTocSections(!!product.materialsTable);

  return (
    <>
      <PageMeta
        title={product.metaTitle}
        description={product.metaDescription}
        canonical={`https://www.prayagsteel.in/products/${div}/${slug}`}
        type="product"
      />
      <ProductSchema product={product} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: divisionTitle, url: `/products/${div}` },
          { name: product.name, url: `/products/${div}/${slug}` },
        ]}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — Dark background matching DivisionPage style
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-prayag-black overflow-hidden" aria-label={`${product.name} Hero`}>
        {/* Background division image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={div === "flanges" ? "/assets/images/products/flanges/hero.webp" : (divisions.find(d => d.id === div)?.image ? `/assets/images/${divisions.find(d => d.id === div)?.image}` : "")}
            alt=""
            className="w-full h-full object-cover opacity-20 bg-white"
            fetchPriority="high"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prayag-black via-prayag-black/65 to-prayag-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-prayag-black/80 via-transparent to-transparent" />
        </div>

        {/* Red geometric accent rings */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-prayag-red/15 pointer-events-none z-10" aria-hidden="true" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-prayag-red/25 pointer-events-none z-10" aria-hidden="true" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm font-body text-gray-400">
              <li><Link to="/" className="hover:text-prayag-red transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li><Link to="/products" className="hover:text-prayag-red transition-colors">Products</Link></li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li><Link to={`/products/${div}`} className="hover:text-prayag-red transition-colors capitalize">{divisionTitle}</Link></li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li className="text-prayag-red font-medium truncate max-w-[240px]" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {/* Division badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/15 border border-prayag-red/30 mb-4">
            <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">{divisionTitle}</span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl uppercase text-white leading-tight mb-5 max-w-3xl">
            {product.name}
          </h1>

          {/* Short description */}
          <p className="text-gray-300 font-body text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
            {product.shortDescription}
          </p>

          {/* Standards pills */}
          {product.standards && product.standards.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.standards.slice(0, 5).map((std) => (
                <span key={std} className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/5 text-gray-300 font-body text-xs font-medium">
                  {std}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

        {/* ── Two-column layout ────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ════════════════════════════════════════════════════════════════
              MAIN COLUMN
          ════════════════════════════════════════════════════════════════ */}
          <main className="flex-1 min-w-0">

            {/* Hero image */}
            <div className="mb-10">
              <ImagePlaceholder
                path={product.image}
                label={`${product.name} — ${product.materials[0]}`}
                aspectRatio="video"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* ── Table of Contents ──────────────────────────────────────── */}
            <nav aria-label="Page contents" className="mb-12 border-l-4 border-prayag-red pl-5 pr-5 py-5 rounded-r-xl bg-prayag-red/3 border border-prayag-red/20">
              <p className="font-body font-bold text-xs uppercase tracking-[0.2em] text-prayag-red mb-4">
                On This Page
              </p>
              <ol className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
                {tocSections.map((section, i) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center gap-2 text-sm font-body font-medium text-gray-600 hover:text-prayag-red transition-colors group"
                    >
                      <span className="w-5 h-5 rounded-full bg-prayag-red text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 transition-colors">
                        {i + 1}
                      </span>
                      {section.label}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── § Overview ─────────────────────────────────────────────── */}
            <section id="overview" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Product Overview
                </span>
              </div>
              <div className="prose prose-gray max-w-none font-body text-gray-600 leading-relaxed space-y-4">
                <p>{product.description}</p>
              </div>
              {/* Materials */}
              <div className="mt-6">
                <p className="font-body font-semibold uppercase tracking-widest text-gray-400 text-xs mb-3">
                  Material Grade
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat) => (
                    <span
                      key={mat}
                      className="inline-block px-3 py-1 rounded-full bg-prayag-red/5 border border-prayag-red/15 text-prayag-red font-body text-sm font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── § Specifications ───────────────────────────────────────── */}
            <section id="specifications" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Technical Specifications
                </span>
              </div>
              {product.specs.length > 0 ? (
                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <table className="w-full text-sm font-body">
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr
                          key={spec.label}
                          className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="px-6 py-3.5 font-semibold text-gray-500 w-2/5 border-r border-gray-100">
                            {spec.label}
                          </td>
                          <td className="px-6 py-3.5 text-prayag-black font-medium">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-400 font-body text-sm">No specifications listed.</p>
              )}
            </section>

            {/* ── § Available Materials (type-first divisions only) ────────── */}
            {product.materialsTable && product.materialsTable.length > 0 && (
              <section id="available-materials" className="mb-14 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                  <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                    Available Materials &amp; Grades
                  </span>
                </div>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                  This product is available in the following material families and grades. Enquire for current stock availability and lead times.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {product.materialsTable.map((family) => (
                    <MaterialFamilyCard key={family.family} family={family} />
                  ))}
                </div>
              </section>
            )}

            {/* ── § Standards & Compliance ───────────────────────────────── */}
            <section id="standards" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Standards &amp; Compliance
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((std) => (
                  <span
                    key={std}
                    className="inline-block px-4 py-2 rounded-full border-2 border-prayag-red/30 bg-prayag-red/5 text-prayag-red font-body font-bold text-sm hover:bg-prayag-red/10 transition-colors"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </section>

            {/* ── § Enquire ──────────────────────────────────────────────── */}
            <section id="enquire" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Request a Quote
                </span>
              </div>
              <div className="bg-off-white rounded-2xl border border-gray-100 p-8 lg:p-10">
                <p className="text-gray-600 font-body leading-relaxed mb-6">
                  Interested in <strong className="text-prayag-black">{product.name}</strong>? Contact our team for
                  pricing, availability, mill test certificates, and custom specifications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}&division=${div}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-prayag-red text-white font-body font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors shadow-lg shadow-prayag-red/20"
                  >
                    Enquire Now
                  </Link>
                  <a
                    href={`mailto:prayagsteelindia@yahoo.co.in?subject=Enquiry%3A%20${encodeURIComponent(product.name)}&body=Hi%20Prayag%20Steel%2C%0A%0AI%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20send%20me%20a%20quote.`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-body font-bold uppercase tracking-widest text-sm hover:border-prayag-red hover:text-prayag-red transition-colors"
                  >
                    Email Us Directly
                  </a>
                </div>
              </div>
            </section>
            {/* ── § Explore Other Products ────────────────────────────────── */}
            {sameCategoryProducts.filter((p) => p.slug !== product.slug).length > 0 && (
              <section className="mt-16 pt-12 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                  <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                    Other Products
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sameCategoryProducts
                    .filter((p) => p.slug !== product.slug)
                    .slice(0, 3)
                    .map((p, idx) => (
                      <ProductCard key={p.id} product={p} div={div} index={idx} />
                    ))}
                </div>
              </section>
            )}

          </main>

          {/* ════════════════════════════════════════════════════════════════
              SIDEBAR — sticky on desktop
          ════════════════════════════════════════════════════════════════ */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">

            {/* ── Same-subcategory products ─────────────────────────────── */}
            {sameCategoryProducts.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                  <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gray-500">
                    {sameCategoryLabel}
                  </p>
                </div>
                <ul className="divide-y divide-gray-50">
                  {sameCategoryProducts.map((p) => {
                    const isCurrent = p.slug === product.slug;
                    return (
                      <li key={p.id}>
                        {isCurrent ? (
                          <div
                            className="flex items-center gap-3 px-5 py-3.5 bg-prayag-red/5"
                            aria-current="page"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-prayag-red flex-shrink-0" aria-hidden="true" />
                            <span className="font-body font-bold text-sm text-prayag-red leading-snug">
                              {p.name}
                            </span>
                          </div>
                        ) : (
                          <Link
                            to={`/products/${div}/${p.slug}`}
                            className="flex items-center gap-3 px-5 py-3.5 hover:bg-red-50 transition-colors group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-prayag-red flex-shrink-0 transition-colors" aria-hidden="true" />
                            <span className="font-body text-sm text-gray-600 group-hover:text-prayag-red transition-colors leading-snug">
                              {p.name}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* ── Explore Other Products (all divisions) ────────────────── */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gray-500">
                  Explore Other Products
                </p>
              </div>
              <ul className="divide-y divide-gray-50">
                {divisions.map((d) => {
                  const isCurrentDivision = d.id === div;
                  return (
                    <li key={d.id}>
                      {isCurrentDivision ? (
                        <div
                          className="flex items-center gap-3 px-5 py-3.5 bg-prayag-red/5"
                          aria-current="true"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-prayag-red flex-shrink-0" aria-hidden="true" />
                          <span className="font-body font-bold text-sm text-prayag-red">
                            {d.name}
                          </span>
                        </div>
                      ) : (
                        <Link
                          to={`/products/${d.slug}`}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-red-50 transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-prayag-red flex-shrink-0 transition-colors" aria-hidden="true" />
                          <span className="font-body text-sm text-gray-600 group-hover:text-prayag-red transition-colors">
                            {d.name}
                          </span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── Download Catalogue ────────────────────────────────────── */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5">
              <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gray-500 mb-3">
                Download
              </p>
              <CatalogueDownloadButton id="product-detail-catalogue-btn" className="w-full justify-center" />
            </div>

            {/* ── Enquire Now CTA ───────────────────────────────────────── */}
            <div className="rounded-2xl bg-prayag-red p-5 text-white">
              <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-red-200 mb-2">
                Get a Quote
              </p>
              <p className="font-body text-sm text-red-100 mb-4 leading-relaxed">
                Need specs, pricing, or MTCs for this product?
              </p>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}&division=${div}`}
                className="block text-center px-4 py-2.5 rounded-lg bg-white text-prayag-red font-body font-bold uppercase tracking-widest text-sm hover:bg-red-50 transition-colors"
              >
                Enquire Now
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
};
