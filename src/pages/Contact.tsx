import React from "react";
import { PageMeta } from "../seo/PageMeta";
import { ContactHeroSection } from "../components/sections/contact/ContactHeroSection";
import { ContactContentSection } from "../components/sections/contact/ContactContentSection";

export const Contact: React.FC = () => (
  <>
    <PageMeta
      title="Contact Us | Prayag Steel & Engineering Co."
      description="Get in touch with Prayag Steel for inquiries regarding stainless steel flanges, fittings, pipes, and tubes. Our manufacturing facility and headquarters are ready to assist you."
      canonical="https://www.prayagsteel.in/contact"
    />

    <main>
      {/* 1. Page Hero */}
      <ContactHeroSection />

      {/* 2. Combined Contact Info and Form Grid */}
      <ContactContentSection />
    </main>
  </>
);
