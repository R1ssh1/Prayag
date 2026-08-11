
import { SectionHeading } from "../../ui/SectionHeading";
import { MaterialCard } from "../../ui/MaterialCard";
import type { MaterialFamily } from "../../../data/products/types";

interface AvailableMaterialsProps {
  materials: MaterialFamily[];
}

export function AvailableMaterials({ materials }: AvailableMaterialsProps) {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 border-y border-gray-200" aria-label="Available Materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
          <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
            Materials
          </span>
        </div>
        
        <SectionHeading text="Available Materials" as="h2" className="mb-4" />
        
        <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed mb-12 max-w-2xl">
          Engineered from high-grade alloys, our components are available in the following metallurgical families and specifications. Contact us for precise stock availability and custom metallurgical requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((family, i) => (
            <MaterialCard key={family.family} family={family} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
