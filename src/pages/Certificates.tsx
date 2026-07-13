import React from "react";
import { PageMeta } from "../seo/PageMeta";
import { CertificatesHeroSection } from "../components/sections/certificates/CertificatesHeroSection";
import { CertificateCardsSection } from "../components/sections/certificates/CertificateCardsSection";
import { ApprovedVendorsSection } from "../components/sections/certificates/ApprovedVendorsSection";
import { TestingStandardsSection } from "../components/sections/certificates/TestingStandardsSection";
import { FooterCTA } from "../components/sections/FooterCTA";

export const Certificates: React.FC = () => (
  <>
    <PageMeta
      title="Certifications & Approvals | Prayag Steel & Engineering Co."
      description="Prayag Steel holds ISO 9001:2015, PED, NACE, and ASME compliance certifications, and is an approved vendor to BARC, ISRO, NPCIL, IGCAR, and DRDO."
      canonical="https://www.prayagsteel.in/certificates"
    />

    <main>
      {/* 1. Page Hero */}
      <CertificatesHeroSection />

      {/* 2. Certificate Info Cards */}
      <CertificateCardsSection />

      {/* 3. Approved Vendors Grid */}
      <ApprovedVendorsSection />

      {/* 4. Per-Division Testing Standards */}
      <TestingStandardsSection />

      {/* 5. Footer CTA */}
      <FooterCTA />
    </main>
  </>
);
