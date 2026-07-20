import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, FileDown, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema } from "../../seo/StructuredData";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { CatalogueDownloadButton } from "../../components/ui/CatalogueDownloadButton";
import { FooterCTA } from "../../components/sections/FooterCTA";
import { getProductsByDivision, buildSubcategoryGroups } from "../../data/products";
import { divisions } from "../../data/company";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { divisionContent, type DivisionContent } from "../../data/divisions/content";
import type { Division, Product, MaterialFamily } from "../../data/products/types";
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

// ── Subcategory group helper ──────────────────────────────────────────────────// ── Scroll helper (offset for navbar) ────────────────────────────────────────
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─────────────────────────────────────────────────────────────────────────────

function StandardsTabs({ content }: { content: DivisionContent }) {
  const [activeTab, setActiveTab] = useState(content.standardsByBody?.[0]?.body || "");

  if (!content.standardsByBody || content.standardsByBody.length === 0) return null;

  const activeContent = content.standardsByBody.find(s => s.body === activeTab);

  return (
    <section className="bg-white py-16 lg:py-24" aria-label="Manufacturing Standards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Standards</span>
        </div>
        <SectionHeading text="Manufacturing Standards" as="h2" className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
            {content.standardsByBody.map((group) => (
              <button
                key={group.body}
                onClick={() => setActiveTab(group.body)}
                className={`flex-shrink-0 text-left px-5 py-3 rounded-xl font-heading font-black text-sm uppercase transition-all duration-300 ${activeTab === group.body
                  ? "bg-prayag-red text-white shadow-lg shadow-prayag-red/25"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-prayag-black"
                  }`}
              >
                {group.body}
              </button>
            ))}
          </div>
          <div className="lg:col-span-3">
            {activeContent && (
              <motion.div
                key={activeContent.body}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {activeContent.standards.map((std) => (
                  <div key={std} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-off-white hover:border-prayag-red/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-prayag-red flex-shrink-0" />
                    <span className="font-body text-sm font-semibold text-gray-700">{std}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const industryIcons: Record<string, any> = {
  "Oil & Gas": LucideIcons.Droplets,
  "Petrochemical": LucideIcons.FlaskConical,
  "Chemical Processing": LucideIcons.TestTubes,
  "Fertilizer": LucideIcons.Sprout,
  "Pharmaceutical": LucideIcons.Pill,
  "Semiconductor": LucideIcons.Cpu,
  "LNG": LucideIcons.Flame,
  "Hydrogen": LucideIcons.Atom,
  "Power": LucideIcons.Zap,
  "Nuclear": LucideIcons.Radiation,
  "Desalination": LucideIcons.Waves,
  "Marine": LucideIcons.Ship,
  "Food Processing": LucideIcons.Wheat,
  "Water Treatment": LucideIcons.Droplets,
};

function getIndustryIcon(name: string) {
  for (const [key, IconComp] of Object.entries(industryIcons)) {
    if (name.includes(key)) return IconComp;
  }
  return LucideIcons.Factory;
}

function parseBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-prayag-black font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}
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
  const subcategoryGroups = useMemo(() => buildSubcategoryGroups(products, divisionTitle), [products, divisionTitle]);
  const activeSectionId = useScrollSpy(subcategoryGroups.map(g => g.id), 120);

  const heroImageSrc = `/assets/images/${divisionData.image}`;
  const content = divisionContent[div] ?? null;

  // Type-first detection: every group has exactly 1 product
  // (fittings + flanges). These get the interactive card grid layout.
  const isTypeFirst =
    subcategoryGroups.length > 0 &&
    subcategoryGroups.every((g) => g.products.length === 1);


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
                  {content?.hero?.subheading || divisionData.tagline}
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
              <ul className="flex flex-col gap-3 mb-8" aria-label="Division highlights">
                {(content?.hero?.bullets || divisionData.highlights).map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-gray-300 font-body text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-prayag-red flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-prayag-red text-white font-body font-bold uppercase tracking-widest text-[13px] hover:bg-red-700 transition-colors shadow-lg shadow-prayag-red/25"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-body font-bold uppercase tracking-widest text-[13px] hover:bg-white/10 transition-colors"
                >
                  Request Quote
                </a>
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
          INTRO SECTION (Optional)
      ══════════════════════════════════════════════════════════════════════ */}
      {content?.introSection && (
        <section className="bg-white py-16 lg:py-24" aria-label="Division Overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                  <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Overview</span>
                </div>
                <SectionHeading
                  text={content.introSection.heading}
                  highlightWords={content.introSection.highlightWords}
                  as="h2"
                  className="mb-8"
                />
                <div className="space-y-5">
                  {(Array.isArray(content.introSection.description)
                    ? content.introSection.description
                    : [content.introSection.description]
                  ).map((paragraph, i) => (
                    <p key={i} className="font-body text-gray-600 leading-relaxed text-[17px]">
                      {parseBoldText(paragraph)}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-prayag-red/10 rounded-2xl z-0" aria-hidden="true" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-prayag-red/20 rounded-full z-0" aria-hidden="true" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/15 border border-gray-100 group"
                >
                  <img
                    src={`/assets/images/${content.introSection.imagePath}`}
                    alt="Manufacturing Overview"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

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
          ) : isTypeFirst ? (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              {/* ── TYPE-FIRST LAYOUT: interactive card grid (fittings / flanges) ── */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {subcategoryGroups.map(({ products: gp, id: groupId }, i) => {
                    const p = gp[0];
                    return (
                      <ProductCard
                        key={p.id}
                        product={p}
                        div={div}
                        index={i}
                        groupId={groupId}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Sidebar TOC */}
              <aside className="hidden lg:block w-60 xl:w-64 flex-shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto" aria-label="Categories">
                <TocSidebar groups={subcategoryGroups} activeId={activeSectionId} onScrollTo={scrollToId} div={div} />
              </aside>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
              {/* ── MATERIAL-FIRST LAYOUT: subcategory group rows (pipes / tubes) ── */}
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
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-48 lg:w-56 flex-shrink-0">
                        <ImagePlaceholder
                          path={groupProducts[0].image}
                          label={label}
                          aspectRatio="square"
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 sm:hidden">
                          <h2 className="font-heading font-black text-lg uppercase text-white leading-tight">{label}</h2>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 p-5">
                        <h2 className="hidden sm:block font-heading font-black text-xl uppercase text-prayag-black leading-tight mb-4">{label}</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-0.5">
                          {groupProducts.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={`/products/${div}/${p.slug}`}
                                className="flex items-center gap-2 py-2 group transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-prayag-red flex-shrink-0 transition-colors" aria-hidden="true" />
                                <span className="font-body text-sm text-gray-600 group-hover:text-prayag-red transition-colors leading-snug">
                                  {p.name.includes("—") ? p.name.split("—")[1].trim() : p.name}
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

              <aside className="w-full lg:w-60 xl:w-64 flex-shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto" aria-label="Table of Contents">
                <TocSidebar groups={subcategoryGroups} activeId={activeSectionId} onScrollTo={scrollToId} div={div} />
              </aside>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================================
          RICH DIVISION CONTENT SECTIONS
          All sections are conditionally rendered — only appear when data
          exists in divisionContent. No hardcoded division checks.
      =================================================================== */}

      {/* ── Manufacturing Capability ───────────────────────────────────── */}
      {content?.manufacturingCapability && content.manufacturingCapability.length > 0 && (
        <section className="bg-white py-16 lg:py-24" aria-label="Manufacturing Capability">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Capabilities</span>
            </div>
            <SectionHeading text="Manufacturing Capability" as="h2" className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.manufacturingCapability.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={cardTransition(i)}
                  className="rounded-2xl border border-gray-100 bg-off-white p-6"
                >
                  <h3 className="font-heading font-black text-lg uppercase text-prayag-black mb-2">{cap.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Available Materials Grid ────────────────────────────────────── */}
      {content?.materialsTable && content.materialsTable.length > 0 && (
        <section className="bg-off-white py-16 lg:py-24" aria-label="Available Materials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Materials</span>
            </div>
            <SectionHeading text="Available Materials" as="h2" className="mb-3" />
            <p className="text-gray-500 font-body text-sm leading-relaxed mb-10 max-w-2xl">
              Available in the following material families and grades. Contact us for stock availability and lead times.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {content.materialsTable.map((family: MaterialFamily, i: number) => (
                <motion.div
                  key={family.family}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={cardTransition(i)}
                  className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-prayag-black leading-snug">{family.family}</p>
                    <p className="font-body text-[11px] text-gray-400 mt-0.5 leading-snug">{family.standard}</p>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Standards Tabs ─────────────────────────────────────────────── */}
      {content?.standardsByBody && content.standardsByBody.length > 0 && (
        <StandardsTabs content={content} />
      )}

      {/* ── Size Range & Pressure Classes ──────────────────────────────── */}
      {(content?.sizeRange || (content?.pressureClasses && content.pressureClasses.length > 0)) && (
        <section className="bg-white py-16 lg:py-20" aria-label="Size Range and Pressure Classes">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {content.sizeRange && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                    <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Sizes</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl uppercase text-prayag-black mb-3">Size Range</h2>
                  <p className="font-body text-2xl font-bold text-gray-700">{content.sizeRange}</p>
                </div>
              )}
              {content.pressureClasses && content.pressureClasses.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                    <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Pressure</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl uppercase text-prayag-black mb-4">Pressure Classes</h2>
                  <div className="flex flex-wrap gap-2">
                    {content.pressureClasses.map((pc) => (
                      <div
                        key={pc}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-prayag-red/50 hover:shadow-md transition-all group"
                      >
                        <LucideIcons.Gauge className="w-4 h-4 text-gray-400 group-hover:text-prayag-red transition-colors" />
                        <span className="text-gray-700 font-body font-bold text-sm group-hover:text-prayag-black transition-colors">{pc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Testing & Inspection ───────────────────────────────────────── */}
      {content?.testingMethods && content.testingMethods.length > 0 && (
        <section className="bg-prayag-black py-16 lg:py-24" aria-label="Testing and Inspection">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Quality</span>
            </div>
            <SectionHeading text="Testing & Inspection" as="h2" light className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.testingMethods.map((method, i) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={cardTransition(i)}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-prayag-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-body font-bold text-sm text-white leading-snug">{method.name}</p>
                      {method.description && (
                        <p className="font-body text-xs text-gray-400 mt-1 leading-relaxed">{method.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why Choose Us ──────────────────────────────────────────────── */}
      {content?.whyChooseUs && content.whyChooseUs.length > 0 && (
        <section className="bg-off-white py-16 lg:py-24" aria-label="Why Choose Prayag Steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Why Us</span>
            </div>
            <SectionHeading text="Why Choose Prayag Steel" as="h2" className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.whyChooseUs.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={cardTransition(i)}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6"
                >
                  <h3 className="font-heading font-black text-lg uppercase text-prayag-black mb-2">{card.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Industries Served ──────────────────────────────────────────── */}
      {content?.industriesServed && content.industriesServed.length > 0 && (
        <section className="bg-white py-16 lg:py-20" aria-label="Industries Served">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Industries</span>
            </div>
            <SectionHeading text="Industries Served" as="h2" className="mb-8" />
            <div className="flex flex-wrap gap-4">
              {content.industriesServed.map((industry) => {
                const Icon = getIndustryIcon(industry);
                return (
                  <div
                    key={industry}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-off-white border border-gray-100 hover:border-prayag-red/30 hover:shadow-lg hover:shadow-prayag-red/5 transition-all group text-center min-w-[140px] flex-1"
                  >
                    <Icon className="w-8 h-8 text-prayag-red mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-prayag-black font-body text-sm font-bold leading-tight group-hover:text-prayag-red transition-colors">{industry}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Technical Specifications Accordion ─────────────────────────── */}
      {content?.technicalSpecAccordion && content.technicalSpecAccordion.length > 0 && (
        <section className="bg-off-white py-16 lg:py-24" aria-label="Technical Specifications">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Technical Data</span>
            </div>
            <SectionHeading text="Technical Specifications" as="h2" className="mb-10" />
            <div className="space-y-3">
              {content.technicalSpecAccordion.map((section) => (
                <AccordionSection key={section.title} section={section} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Downloads ──────────────────────────────────────────────────── */}
      {content?.downloads && content.downloads.length > 0 && (
        <section className="bg-white py-16 lg:py-20" aria-label="Downloads">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">Downloads</span>
            </div>
            <SectionHeading text="Downloads" as="h2" className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.downloads.map((dl) => (
                <a
                  key={dl.label}
                  href={dl.href}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-off-white p-5 hover:border-prayag-red/30 hover:bg-prayag-red/5 transition-colors group"
                >
                  <FileDown className="w-8 h-8 text-prayag-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-body font-bold text-sm text-prayag-black group-hover:text-prayag-red transition-colors leading-snug">{dl.label}</p>
                    {dl.description && (
                      <p className="font-body text-xs text-gray-500 mt-1 leading-relaxed">{dl.description}</p>
                    )}
                    {dl.fileType && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-prayag-red/10 text-prayag-red">{dl.fileType}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ───────────────────────────────────────────────────────── */}
      {content?.faqs && content.faqs.length > 0 && (
        <section className="bg-off-white py-16 lg:py-24" aria-label="Frequently Asked Questions">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">FAQ</span>
            </div>
            <SectionHeading text="Frequently Asked Questions" as="h2" className="mb-10" />
            <div className="space-y-3">
              {content.faqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================
          FOOTER CTA
      =================================================================== */}
      <FooterCTA />
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper sub-components (defined after the page component)
// ─────────────────────────────────────────────────────────────────────────────
function AccordionSection({ section }: { section: { title: string; rows: { label: string; value: string }[] } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-bold text-sm text-prayag-black">{section.title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-prayag-red flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="border-t border-gray-100">
          <table className="w-full text-sm font-body">
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-3 font-semibold text-gray-500 w-2/5 border-r border-gray-100">{row.label}</td>
                  <td className="px-6 py-3 text-prayag-black font-medium">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-sm text-prayag-black pr-4">{faq.question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-prayag-red flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="border-t border-gray-100 px-6 py-4">
          <p className="font-body text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function TocSidebar({ groups, activeId, onScrollTo, div }: { groups: { label: string; id: string }[]; activeId: string; onScrollTo: (id: string) => void; div: string; }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
        <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gray-500">Categories</p>
      </div>
      <nav>
        <ul className="divide-y divide-gray-50">
          {groups.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => onScrollTo(id)}
                className={`w-full flex items-center gap-3 px-5 py-3 transition-colors text-left group ${activeId === id ? "bg-red-50" : "hover:bg-red-50"
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${activeId === id ? "bg-prayag-red" : "bg-gray-300 group-hover:bg-prayag-red"
                  }`} aria-hidden="true" />
                <span className={`font-body text-sm transition-colors leading-snug ${activeId === id ? "text-prayag-red font-semibold" : "text-gray-600 group-hover:text-prayag-red"
                  }`}>
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
        <CatalogueDownloadButton id={`${div}-sidebar-catalogue-btn`} className="w-full justify-center" />
      </div>
    </div>
  );
}

function ProductCard({ product, div, index, groupId }: { product: Product; div: string; index: number; groupId: string }) {
  // Extract only manufacturing type/process and size range for the card
  const keySpecs = product.specs.filter((spec) =>
    spec.label.toLowerCase().includes("manufacturing") ||
    spec.label.toLowerCase().includes("size range")
  ).slice(0, 2);

  return (
    <motion.div
      id={groupId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={cardTransition(index)}
      viewport={{ once: true, margin: "-60px" }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-prayag-red/10 hover:border-prayag-red/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col scroll-mt-28 group"
    >
      <Link to={`/products/${div}/${product.slug}`} className="flex flex-col flex-1 h-full focus:outline-none">
      {/* Top Image */}
      <div className="relative aspect-[4/3] bg-gray-50 border-b border-gray-100 overflow-hidden">
        <ImagePlaceholder
          path={product.image}
          label={product.name}
          aspectRatio="square"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading font-black text-lg uppercase text-prayag-black mb-3 group-hover:text-prayag-red transition-colors leading-tight">
          {product.name}
        </h3>

        <p className="font-body text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Specs list */}
        <ul className="mt-auto mb-6 space-y-2" aria-label="Key Specifications">
          {keySpecs.map((spec) => (
            <li key={spec.label} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-prayag-red/40 mt-1.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-xs text-gray-600">
                <span className="font-semibold text-gray-700 capitalize">{spec.label}:</span> {Array.isArray(spec.value) ? spec.value.join(", ") : spec.value}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-prayag-red/5 text-prayag-red border border-prayag-red/20 font-body font-bold text-sm uppercase tracking-widest group-hover:bg-prayag-red group-hover:!text-white transition-all duration-300"
        >
          <span className="group-hover:!text-white">View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:!text-white" aria-hidden="true" />
        </div>
      </div>
      </Link>
    </motion.div>
  );
}
