import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema, ProductSchema } from "../../seo/StructuredData";
import { getProductBySlug } from "../../data/products/index";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { Badge } from "../../components/ui/Primitives";
import type { Division } from "../../data/products/types";

export const ProductDetailPage: React.FC = () => {
  const { division, slug } = useParams<{ division: string; slug: string }>();
  const div = division as Division;

  const product = div && slug ? getProductBySlug(div, slug) : undefined;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb UI */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-body text-gray-500">
            <li><Link to="/" className="hover:text-prayag-red transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/products" className="hover:text-prayag-red transition-colors">Products</Link></li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to={`/products/${div}`} className="hover:text-prayag-red transition-colors">
                {divisionTitle}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-prayag-red font-medium truncate max-w-[200px]" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image column */}
          <div>
            <ImagePlaceholder
              path={product.image}
              label={`${product.name} — ${product.materials[0]}`}
              aspectRatio="video"
              className="rounded-xl"
            />
          </div>

          {/* Details column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 mb-4">
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">
                {divisionTitle}
              </span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase text-prayag-black leading-tight mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 font-body leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Quick stats */}
            {(product.sizeRange || product.pressureRating) && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.sizeRange && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Size Range
                    </p>
                    <p className="font-heading font-black text-prayag-black text-sm">
                      {product.sizeRange}
                    </p>
                  </div>
                )}
                {product.pressureRating && (
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Pressure Rating
                    </p>
                    <p className="font-heading font-black text-prayag-black text-sm">
                      {product.pressureRating}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Materials */}
            <div className="mb-6">
              <h2 className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-3">
                Available Materials
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((mat) => (
                  <Badge key={mat} label={mat} variant="gray" />
                ))}
              </div>
            </div>

            {/* Standards */}
            <div className="mb-6">
              <h2 className="text-xs font-heading font-bold uppercase tracking-widest text-gray-400 mb-3">
                Standards
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((std) => (
                  <Badge key={std} label={std} variant="outline" />
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-prayag-red text-white font-heading font-bold uppercase tracking-wide text-sm hover:bg-red-700 transition-colors shadow-lg shadow-prayag-red/30"
              >
                Request a Quote
              </Link>
              <Link
                to={`/products/${div}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-700 font-heading font-bold uppercase tracking-wide text-sm hover:border-prayag-red hover:text-prayag-red transition-colors"
              >
                ← {divisionTitle}
              </Link>
            </div>
          </div>
        </div>

        {/* Spec table */}
        {product.specs.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-black text-2xl uppercase text-prayag-black mb-6">
              Specifications
            </h2>
            <div className="rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm font-body">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-3 font-medium text-gray-500 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-3 text-prayag-black font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
