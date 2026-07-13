import React from "react";
import { PageMeta } from "../seo/PageMeta";
import { QualityHeroSection } from "../components/sections/quality/QualityHeroSection";
import { QualityPolicySection } from "../components/sections/quality/QualityPolicySection";
import { TestingProceduresSection } from "../components/sections/quality/TestingProceduresSection";
import { StandardsBannerSection } from "../components/sections/quality/StandardsBannerSection";
import { FooterCTA } from "../components/sections/FooterCTA";

export const QualityPolicy: React.FC = () => (
  <>
    <PageMeta
      title="Quality Policy | Prayag Steel & Engineering Co."
      description="ISO 9001:2015 certified. Our quality policy covers continuous improvement, customer satisfaction, and a promise to deliver the right products with the right documents at the right time."
      canonical="https://www.prayagsteel.in/quality-policy"
    />

    <main>
      {/* 1. Page Hero */}
      <QualityHeroSection />

      {/* 2. Official Policy Statements + Philosophy */}
      <QualityPolicySection />

      {/* 3. Per-Division Testing Procedures */}
      <TestingProceduresSection />

      {/* 4. International Standards Banner */}
      <StandardsBannerSection />

      {/* 5. Footer CTA */}
      <FooterCTA />
    </main>
  </>
);
