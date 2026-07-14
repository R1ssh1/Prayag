import React from "react";

// Only material names are needed for the text ticker
const materialsRow1 = [
  "SS 304", "SS 316L", "Duplex 2205", "Super Duplex 2507", "Inconel 625", 
  "Inconel 600", "Monel 400", "Hastelloy C276", "Hastelloy C22", "Titanium Gr. 2"
];

const materialsRow2 = [
  "Carbon Steel A105", "Alloy Steel F11", "Alloy Steel F22", "SS 321", "SS 347", 
  "SS 904L", "Zirconium", "Tantalum", "Nickel 200", "Nickel 201"
];

const MarqueeRow = ({ items, solid = true, reverse = false }: { items: string[], solid?: boolean, reverse?: boolean }) => {
  // Build the repeated content using a common gap.
  // The parent wrapper and child wrappers all use gap-6 (24px) 
  // so the spacing between the copies is identical to the spacing between the items.
  const content = items.map((item, index) => (
    <React.Fragment key={index}>
      <span className="text-center inline-block">{item}</span>
      <span className="text-prayag-red">✦</span>
    </React.Fragment>
  ));

  const textStyle = solid 
    ? "text-white/80" 
    : "text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)]";

  return (
    <div className="relative w-full overflow-hidden flex items-center select-none py-2">
      <div 
        className={`${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} flex items-center w-max gap-6 px-3 font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest ${textStyle}`}
      >
        <div className="flex items-center gap-6">
          {content}
        </div>
        <div className="flex items-center gap-6">
          {content}
        </div>
        <div className="flex items-center gap-6">
          {content}
        </div>
      </div>
    </div>
  );
};

export const MaterialsMarqueeSection: React.FC = () => {
  return (
    <section className="bg-prayag-charcoal py-24 lg:py-36 relative overflow-hidden" aria-label="Materials We Work With">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <div className="text-center">
          <h2 className="text-gray-400 font-body text-sm font-semibold uppercase tracking-[0.2em]">
            Materials We Work With
          </h2>
        </div>
      </div>

      <div className="space-y-6 lg:space-y-10">
        <MarqueeRow items={materialsRow1} solid={false} reverse={false} />
        <MarqueeRow items={materialsRow2} solid={true} reverse={true} />
      </div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-prayag-charcoal to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-prayag-charcoal to-transparent pointer-events-none" />
    </section>
  );
};
