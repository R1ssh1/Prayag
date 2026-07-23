import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { companyInfo } from "../../data/company";
import logoDark from "../../assets/images/logo/logo-2.webp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#221f1f] text-white" role="contentinfo">
      {/* Red accent bar at top */}
      <div className="h-1 bg-gradient-to-r from-prayag-red via-red-400 to-prayag-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoDark} 
                alt="Prayag Steel & Engineering Co. Logo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm font-body leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="mt-3 text-xs text-gray-500 font-body">
              Est. {companyInfo.founded}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-body font-bold uppercase text-sm tracking-widest text-gray-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Quality Policy", to: "/quality-policy" },
                { label: "Products", to: "/products" },
                { label: "Certificates", to: "/certificates" },
                { label: "Blogs", to: "/blogs" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="text-gray-400 hover:text-prayag-red text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-body font-bold uppercase text-sm tracking-widest text-gray-300 mb-5">
              Products
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Flanges", to: "/products/flanges" },
                { label: "Fittings", to: "/products/fittings" },
                { label: "Pipes", to: "/products/pipes" },
                { label: "Tubes", to: "/products/tubes" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => handleNavClick(link.to)}
                    className="text-gray-400 hover:text-prayag-red text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-bold uppercase text-sm tracking-widest text-gray-300 mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-prayag-red mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-body font-bold uppercase tracking-widest text-gray-500 mb-0.5">
                    Registered Office
                  </p>
                  <address className="text-gray-400 text-xs font-body leading-relaxed not-italic">
                    {companyInfo.registeredOffice.full}
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-prayag-red mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[10px] font-body font-bold uppercase tracking-widest text-gray-500 mb-0.5">
                    Factory
                  </p>
                  <address className="text-gray-400 text-xs font-body leading-relaxed not-italic">
                    {companyInfo.factory.full}
                  </address>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-prayag-red text-sm font-body transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-prayag-red flex-shrink-0" aria-hidden="true" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-prayag-red text-sm font-body transition-colors duration-200 break-all"
                >
                  <Mail className="w-4 h-4 text-prayag-red flex-shrink-0" aria-hidden="true" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${companyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-prayag-red text-sm font-body transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 text-prayag-red flex-shrink-0" aria-hidden="true" />
                  {companyInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-xs font-body text-center sm:text-left">
            <p>© {currentYear} Prayag Steel &amp; Engineering Co. All rights reserved.</p>
            <p className="mt-1">Designed &amp; Developed at SunMarg</p>
          </div>
          <p className="text-gray-600  font-body font-semibold uppercase tracking-widest">
            Steel. Strength. Prayag.
          </p>
        </div>
      </div>
    </footer>
  );
};
