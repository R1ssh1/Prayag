import React from "react";
import { PageMeta } from "../../seo/PageMeta";
import { BreadcrumbSchema } from "../../seo/StructuredData";
import { ProductsHeroSection } from "../../components/sections/products/ProductsHeroSection";
import { DivisionsGridSection } from "../../components/sections/products/DivisionsGridSection";
import { MaterialsMarqueeSection } from "../../components/sections/products/MaterialsMarqueeSection";
import { ProductsTrustBand } from "../../components/sections/products/ProductsTrustBand";
import { FooterCTA } from "../../components/sections/FooterCTA";

export const ProductsOverview: React.FC = () => (
  <>
    <PageMeta
      title="Products — Pipes, Tubes, Fittings & Flanges | Prayag Steel"
      description="Explore Prayag Steel's complete product range: stainless steel flanges, fittings, pipes, and tubes in exotic alloys for nuclear, defence, aerospace, and industrial applications."
      canonical="https://www.prayagsteel.in/products"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
      ]}
    />
    <main>
      <ProductsHeroSection />
      <DivisionsGridSection />
      <MaterialsMarqueeSection />
      <ProductsTrustBand />
      <FooterCTA />
    </main>
  </>
);
