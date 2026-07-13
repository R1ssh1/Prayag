import React from "react";
import { Helmet } from "react-helmet-async";
import type { Product } from "../data/products/types";
import { companyInfo } from "../data/company";

const SITE_URL = "https://www.prayagsteel.in";

// ── Organization Schema ───────────────────────────────────────────────────────

/**
 * OrganizationSchema — site-wide JSON-LD. Include on every page via App.tsx.
 */
export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: `https://${companyInfo.website}`,
    logo: `${SITE_URL}/logo/prayag-logo.webp`,
    foundingDate: String(companyInfo.founded),
    description:
      "Manufacturer and supplier of high-performance pipes, tubes, fittings, and flanges for nuclear, defence, aerospace, petrochemical, and pharmaceutical industries. Est. 1994.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: companyInfo.registeredOffice.address,
        addressLocality: companyInfo.registeredOffice.city,
        addressRegion: companyInfo.registeredOffice.state,
        postalCode: companyInfo.registeredOffice.pincode,
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: companyInfo.factory.address,
        addressLocality: companyInfo.factory.area,
        addressRegion: companyInfo.factory.state,
        postalCode: companyInfo.factory.pincode,
        addressCountry: "IN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.phone,
      email: companyInfo.email,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [`https://${companyInfo.website}`],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbSchema — for division and product detail pages.
 */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// ── Product Schema ────────────────────────────────────────────────────────────

interface ProductSchemaProps {
  product: Product;
}

/**
 * ProductSchema — for individual product detail pages.
 * Data is pulled directly from the Product record — no duplication.
 */
export const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE_URL}/src/assets/images/${product.image}`,
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyInfo.name,
      url: `https://${companyInfo.website}`,
    },
    material: product.materials.join(", "),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: companyInfo.name,
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
