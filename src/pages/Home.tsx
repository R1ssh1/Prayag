import React from "react";
import { PageMeta } from "../seo/PageMeta";
import { HeroSection } from "../components/sections/HeroSection";
import { SnapshotSection } from "../components/sections/SnapshotSection";
import { StandardsBadgeRow } from "../components/sections/StandardsBadgeRow";
import { DivisionsSection } from "../components/sections/DivisionsSection";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { GlobalReachSection } from "../components/sections/GlobalReachSection";
import { FooterCTA } from "../components/sections/FooterCTA";

export const Home: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Prayag Steel & Engineering Co. — Pipes, Tubes, Fittings & Flanges"
        description="Manufacturer and supplier of high-performance stainless steel pipes, tubes, fittings, and flanges for nuclear, defence, aerospace, and petrochemical industries since 1994."
        canonical="https://www.prayagsteel.in/"
      />

      <main>
        <HeroSection />
        <SnapshotSection />
        <StandardsBadgeRow />
        <DivisionsSection />
        <IndustriesSection />
        <GlobalReachSection />
        <FooterCTA />
      </main>
    </>
  );
};

