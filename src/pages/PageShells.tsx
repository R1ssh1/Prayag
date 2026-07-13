import React from "react";
import { PageMeta } from "../seo/PageMeta";

const PageShell: React.FC<{
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  phase: number;
}> = ({ title, metaTitle, metaDescription, canonical, phase }) => (
  <>
    <PageMeta title={metaTitle} description={metaDescription} canonical={canonical} />
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prayag-red/10 border border-prayag-red/20 mb-6">
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-widest">
            Phase {phase} — Coming Soon
          </span>
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl uppercase text-prayag-black">
          {title}
        </h1>
        <p className="mt-4 text-gray-500 font-body">
          This page will be built in Phase {phase}.
        </p>
      </div>
    </div>
  </>
);

export const About: React.FC = () => (
  <PageShell
    title="About Us"
    metaTitle="About Prayag Steel & Engineering Co. — 30 Years of Steel Excellence"
    metaDescription="Learn about Prayag Steel's 30-year journey from a Mumbai trading firm to a leading manufacturer of stainless steel pipes, tubes, fittings, and flanges."
    canonical="https://www.prayagsteel.in/about"
    phase={3}
  />
);

export const QualityPolicy: React.FC = () => (
  <PageShell
    title="Quality Policy"
    metaTitle="Quality Policy | Prayag Steel & Engineering Co."
    metaDescription="ISO 9001:2015 certified. Our commitment to quality covers visual inspection, hydrostatic testing, PMI, mechanical testing, and full ASTM/ASME/DIN compliance."
    canonical="https://www.prayagsteel.in/quality-policy"
    phase={4}
  />
);

export const Certificates: React.FC = () => (
  <PageShell
    title="Certificates"
    metaTitle="Quality Certificates | Prayag Steel & Engineering Co."
    metaDescription="ISO 9001:2015, PED, NACE MR0175/MR0103 and ASME compliance certificates from Prayag Steel & Engineering Co."
    canonical="https://www.prayagsteel.in/certificates"
    phase={6}
  />
);

export const Contact: React.FC = () => (
  <PageShell
    title="Contact Us"
    metaTitle="Contact Prayag Steel & Engineering Co. | Mumbai & Umergaon"
    metaDescription="Contact Prayag Steel & Engineering Co. — registered office in Mumbai, manufacturing facility in Umergaon, Gujarat. +91-22-6636 2417 | prayagsteelindia@yahoo.co.in"
    canonical="https://www.prayagsteel.in/contact"
    phase={7}
  />
);
