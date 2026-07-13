import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema } from "../../seo/StructuredData";
import type { Division, Product } from "../../data/products/types";

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

import { getProductsByDivision } from "../../data/products";

export const DivisionPage: React.FC = () => {
  const { division } = useParams<{ division: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const div = division as Division;
  const meta = divisionMeta[div];

  useEffect(() => {
    if (!div) return;
    setLoading(true);
    // Simulate slight loading delay for skeleton effect if desired, 
    // or just load instantly since it's statically imported now.
    const divisionProducts = getProductsByDivision(div);
    setProducts(divisionProducts);
    setLoading(false);
  }, [div]);

  if (!meta) {
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

  const divisionTitle = div
    ? div.charAt(0).toUpperCase() + div.slice(1)
    : "";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb UI */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-body text-gray-500">
            <li><Link to="/" className="hover:text-prayag-red transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/products" className="hover:text-prayag-red transition-colors">Products</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-prayag-red font-medium" aria-current="page">{divisionTitle}</li>
          </ol>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 mb-6">
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">
            Phase 5 — Skeleton
          </span>
        </div>

        <h1 className="font-heading font-black text-5xl uppercase text-prayag-black mb-2">
          {divisionTitle}
        </h1>
        <p className="text-gray-500 font-body mb-12">
          Division landing page — full capabilities and product listing build in Phase 5.
        </p>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-prayag-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${div}/${product.slug}`}
                className="group block rounded-xl border border-gray-100 bg-white p-6 hover:border-prayag-red/30 hover:shadow-lg hover:shadow-prayag-red/10 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center border border-dashed border-gray-300">
                  <span className="text-gray-400 text-xs font-body text-center px-2">
                    Image: assets/images/{product.image}
                  </span>
                </div>
                <h2 className="font-heading font-black text-lg uppercase text-prayag-black mb-1 group-hover:text-prayag-red transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm font-body line-clamp-2">
                  {product.shortDescription}
                </p>
                <span className="inline-block mt-3 text-prayag-red text-xs font-heading font-bold uppercase tracking-wider">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
