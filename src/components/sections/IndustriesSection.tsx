import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

const industries = [
  { name: "Chemical Industry", slug: "chemical" },
  { name: "Nuclear Industry", slug: "nuclear" },
  { name: "Defence Industry", slug: "defence" },
  { name: "Fertilizer Industry", slug: "fertilizer" },
  { name: "Power Industry", slug: "power" },
  { name: "Instrumentation & Control Systems", slug: "instrumentation" },
  { name: "Petrochemical Industry", slug: "petrochemical" },
  { name: "Heat Exchangers & Condensors", slug: "heat-exchangers" },
  { name: "Refineries", slug: "refineries" },
  { name: "Aerospace Industry", slug: "aerospace" },
];

export const IndustriesSection: React.FC = () => {
  // We duplicate the list to create a seamless infinite scroll loop
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="bg-white py-24 lg:py-36 relative overflow-hidden" aria-label="Industries We Serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <div className="text-center">
          <SectionHeading
            text="Industries We Serve"
            highlightWords={["Industries"]}
            as="h2"
            className="mb-6"
          />
          <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto">
            From the depths of the ocean to the vacuum of space, Prayag Steel delivers mission-critical components where failure is not an option.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden group">
        <div className="animate-marquee flex w-max gap-6 px-3 hover:[animation-play-state:paused]">
          {duplicatedIndustries.map((industry, index) => (
            <div
              // using index in key because of duplicates
              key={`${industry.slug}-${index}`}
              className="relative shrink-0 w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden group/card bg-prayag-charcoal/10"
            >
              {/* Background Image */}
              <img
                src={`/assets/images/industries/${industry.slug}.webp`}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-prayag-black/90 via-prayag-black/40 to-transparent transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end h-full">
                <h3 className="font-body font-bold text-white leading-tight uppercase transition-all duration-500 origin-bottom-left text-xl tracking-wider group-hover/card:text-2xl group-hover/card:text-prayag-red">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Optional fade edges for marquee */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
