import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading";
import { leadership } from "../../../data/company";

export const LeadershipSection: React.FC = () => {
  const [active, setActive] = useState<string>(leadership[0].id); // Default: Founder
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const activeLeader = leadership.find((l) => l.id === active) ?? leadership[2];

  return (
    <section className="bg-off-white py-24 lg:py-36 relative overflow-x-hidden" aria-label="Leadership">
      <style>{`
        @keyframes border-pulse {
          0%, 100% { border-color: #f3f4f6; }
          50% { border-color: rgba(227,30,36,0.8); }
        }
        @keyframes border-pulse-mobile {
          0%, 100% { 
            border-color: #f3f4f6; 
            box-shadow: inset 0 0 0 0 rgba(150,150,150,0); 
          }
          50% { 
            border-color: rgba(227,30,36,0.8); 
            box-shadow: inset 0 0 40px 10px rgba(150,150,150,0.1); 
          }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 1.5s infinite;
        }
        .card-glow {
          animation: border-pulse-mobile 2.5s infinite ease-in-out;
          animation-delay: 1s;
          animation-fill-mode: both; 
        }
        @media (min-width: 1024px) {
          .card-glow {
            animation: border-pulse 2.5s infinite ease-in-out;
            animation-delay: 1s;
            animation-fill-mode: both;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading & Image Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-14 lg:mb-20 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:order-2"
          >
            <div className="relative aspect-[16/9] lg:aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/about/leadership.webp"
                alt="Prayag Leadership"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[90%] lg:w-1/2 lg:order-1 relative z-10 -mt-16 lg:mt-0 bg-white/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl shadow-lg lg:shadow-none mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
              <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                The Legacy of Visionaries
              </span>
            </div>
            <SectionHeading
              text="Leadership at Prayag"
              highlightWords={["Leadership"]}
              as="h2"
              subtitle="Three generations of vision — each building upon the last, forging a legacy as enduring as the steel they champion."
            />
          </motion.div>
        </div>

        {/* Mobile Scroll Indicator */}
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="lg:hidden flex justify-end mb-4 pr-2"
          >
            <span className="flex items-center gap-2 text-prayag-red font-body text-[10px] font-bold uppercase tracking-[0.2em] animate-scroll-bounce">
              Scroll <span className="text-sm leading-none">&rarr;</span>
            </span>
          </motion.div>
        )}

        <div className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-6 lg:gap-8 snap-x snap-mandatory lg:snap-none pb-8 lg:pb-0">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex-none w-[280px] sm:w-[320px] lg:w-auto snap-center"
            >
              <button
                className={`group w-full text-left rounded-2xl border overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prayag-red ${active === leader.id
                    ? "bg-prayag-black border-prayag-red/50 shadow-xl"
                    : "bg-white border-gray-100 hover:border-prayag-red/30 hover:shadow-lg"
                  } ${(!hasInteracted && active !== leader.id) ? "card-glow" : ""}`}
                onClick={() => {
                  setActive(leader.id);
                  setHasInteracted(true);
                }}
                aria-pressed={active === leader.id}
                aria-label={`Learn about ${leader.name}`}
              >
                {/* Portrait */}
                <div className="relative bg-prayag-charcoal/5 aspect-[9.5/10] flex items-center justify-center border-b border-gray-100">
                  <User className="w-1/3 h-1/3 text-gray-300" strokeWidth={1} />
                  {/* Active red overlay */}
                  {active === leader.id && (
                    <div className="absolute inset-0 bg-prayag-red/10" aria-hidden="true" />
                  )}
                  {/* Tenure badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-prayag-black/80 text-white text-[10px] font-body uppercase tracking-widest">
                      {leader.tenure}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className={`text-xs font-body uppercase tracking-[0.2em] mb-1 ${active === leader.id ? "text-prayag-red" : "text-gray-400"
                    }`}>
                    {leader.role}
                  </p>
                  <h3 className={`font-body font-bold text-xl uppercase mb-3 ${active === leader.id ? "text-white" : "text-prayag-black"
                    }`}>
                    {leader.name}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed ${active === leader.id ? "text-gray-300" : "text-gray-500"
                    }`}>
                    {leader.experience}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Philosophy */}
              <div>
                <h4 className="font-body font-bold  uppercase tracking-widest text-gray-400 mb-3">
                  Philosophy
                </h4>
                <p className="font-body text-gray-700 leading-relaxed italic">
                  "{activeLeader.philosophy}"
                </p>
              </div>
              {/* Legacy */}
              <div>
                <h4 className="font-body font-bold  uppercase tracking-widest text-gray-400 mb-3">
                  Legacy
                </h4>
                <p className="font-body text-gray-700 leading-relaxed">
                  {activeLeader.legacy ?? activeLeader.goal}
                </p>
              </div>
              {/* Title */}
              <div className="flex flex-col justify-center">
                <div className="bg-prayag-red/5 border border-prayag-red/20 rounded-xl p-6">
                  <p className="text-prayag-red font-heading font-black text-3xl uppercase leading-none">
                    {activeLeader.title}
                  </p>
                  <p className="text-gray-500 font-body text-xs mt-2">{activeLeader.tenure}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center font-body font-bold text-xl uppercase text-gray-300 tracking-widest"
        >
          Guided by Experience.{" "}
          <span className="text-prayag-red">Driven by Innovation.</span>
        </motion.p>

      </div>
    </section>
  );
};
