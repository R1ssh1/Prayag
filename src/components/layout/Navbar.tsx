import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { CatalogueDownloadButton } from "../ui/CatalogueDownloadButton";
import logoLight from "../../assets/images/logo/logo.webp";
import { divisions } from "../../data/company";
import { getProductsByDivision, buildSubcategoryGroups } from "../../data/products";
import type { Division } from "../../data/products/types";

interface NavItem {
  label: string;
  to: string;
  isMegaMenu?: boolean;
  children?: { label: string; to: string }[];
}

const navItems: NavItem[] = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT US",
    to: "/about",
    children: [
      { label: "Our Journey", to: "/about#journey" },
      { label: "The Steel Legacy of Prayag", to: "/about#legacy" },
      { label: "Leadership at Prayag", to: "/about#leadership" },
    ]
  },
  { label: "QUALITY POLICY", to: "/quality-policy" },
  {
    label: "PRODUCTS",
    to: "/products",
    isMegaMenu: true,
    children: [
      { label: "FLANGES", to: "/products/flanges" },
      { label: "FITTINGS", to: "/products/fittings" },
      { label: "PIPES", to: "/products/pipes" },
      { label: "TUBES", to: "/products/tubes" },
    ],
  },
  { label: "CERTIFICATES", to: "/certificates" },
  { label: "BLOGS", to: "/blogs" },
  { label: "CONTACT US", to: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const currentPathWithHash = location.pathname + location.hash;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  // Detect scroll for sticky shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard: close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body font-semibold tracking-normal text-[15px] transition-colors duration-200 ${isActive
      ? "text-prayag-red"
      : "text-gray-800 hover:text-prayag-red"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-lg" : "shadow-sm"
          }`}
        role="banner"
      >
        <nav
          className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="Prayag Steel & Engineering Co. — Home"
            >
              <img
                src={logoLight}
                alt="Prayag Steel & Engineering Co. Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="flex-1 flex justify-center">
            <ul className="hidden lg:flex items-center gap-0.5" role="list">
              {navItems.map((item) =>
                item.children ? (
                  // Dropdown menu
                  <li
                    key={item.to}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-1 font-body font-semibold tracking-normal text-[15px] transition-colors duration-200 px-3 py-2 rounded-lg whitespace-nowrap ${isActive || activeDropdown === item.label
                          ? "text-prayag-red bg-red-50"
                          : "text-gray-800 hover:text-prayag-red hover:bg-red-50"
                        }`
                      }
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                      id={`${item.label.toLowerCase().replace(/\s+/g, '-')}-menu-btn`}
                      onClick={() => handleNavClick(item.to)}
                      onFocus={() => setActiveDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                    </NavLink>

                    <AnimatePresence>
                      {activeDropdown === item.label && item.isMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          role="menu"
                          aria-labelledby={`${item.label.toLowerCase().replace(/\s+/g, '-')}-menu-btn`}
                        >
                          <div className="grid grid-cols-4 gap-4 p-4">
                            {divisions.map((div) => {
                              const allDivProducts = getProductsByDivision(div.id as Division);
                              const categoryGroups = buildSubcategoryGroups(allDivProducts, div.name).slice(0, 5);

                              return (
                                <div key={div.id} className="relative flex flex-col p-5 rounded-xl overflow-hidden group/col border border-gray-100 hover:border-prayag-red/30 transition-colors">
                                  {/* Background Image */}
                                  <img
                                    src={`/assets/images/${div.image}`}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover/col:scale-110"
                                    aria-hidden="true"
                                  />
                                  {/* Gradient Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-b from-prayag-black/85 via-prayag-black/85 to-prayag-black/95 z-0 transition-opacity duration-300 group-hover/col:opacity-90" />
                                  
                                  <div className="relative z-10 flex flex-col h-full">
                                    <Link
                                      to={`/products/${div.slug}`}
                                      className="flex items-center gap-3 mb-5 group/head"
                                      onClick={() => handleNavClick(`/products/${div.slug}`)}
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-prayag-red/20 border border-prayag-red/30 flex items-center justify-center text-white font-heading font-black transition-colors group-hover/head:bg-prayag-red group-hover/head:text-white group-hover/head:border-prayag-red">
                                        {div.name[0]}
                                      </div>
                                      <h3 className="font-heading font-black uppercase text-white text-[15px] transition-colors group-hover/head:text-prayag-red">
                                        {div.name}
                                      </h3>
                                    </Link>
                                    <ul className="flex flex-col space-y-3 mb-6 flex-1">
                                      {categoryGroups.map(group => (
                                        <li key={group.id}>
                                          <Link
                                            to={`/products/${div.slug}#${group.id}`}
                                            className="text-[13px] font-body text-gray-300 hover:text-white transition-colors line-clamp-2 leading-snug flex items-start gap-2 group/link"
                                            onClick={() => handleNavClick(`/products/${div.slug}#${group.id}`)}
                                          >
                                            <span className="w-1 h-1 rounded-full bg-prayag-red/50 mt-1.5 flex-shrink-0 group-hover/link:bg-prayag-red transition-colors" />
                                            {group.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                    <Link
                                      to={`/products/${div.slug}`}
                                      className="text-[12px] font-body font-bold uppercase tracking-[0.1em] text-prayag-red hover:text-red-400 transition-colors mt-auto inline-flex items-center gap-1.5"
                                      onClick={() => handleNavClick(`/products/${div.slug}`)}
                                    >
                                      Explore <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {activeDropdown === item.label && !item.isMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 min-w-[260px] w-max bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                          role="menu"
                          aria-labelledby={`${item.label.toLowerCase().replace(/\s+/g, '-')}-menu-btn`}
                        >
                          {item.children.map((child) => {
                            const isChildActive = currentPathWithHash === child.to;
                            return (
                              <Link
                                key={child.to}
                                to={child.to}
                                className={`block px-4 py-2.5 text-[15px] font-body font-medium transition-colors duration-150 whitespace-nowrap ${isChildActive
                                  ? "text-prayag-red bg-red-50"
                                  : "text-gray-700 hover:text-prayag-red hover:bg-red-50"
                                  }`}
                                onClick={() => handleNavClick(child.to)}
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `${activeLinkClass({ isActive })} px-3 py-2 rounded-lg hover:bg-red-50 block whitespace-nowrap`
                      }
                      onClick={() => handleNavClick(item.to)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right side: Catalogue button + mobile hamburger */}
          <div className="flex-shrink-0 flex justify-end items-center gap-3">
            {/* Catalogue button — desktop only in navbar */}
            <div className="hidden lg:block">
              <CatalogueDownloadButton id="navbar-catalogue-btn" />
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-prayag-red hover:bg-red-50 transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.nav
              key="mobile-nav"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl overflow-y-auto lg:hidden"
              aria-label="Mobile navigation"
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-2" onClick={() => { setMobileOpen(false); handleNavClick("/"); }}>
                  <img
                    src={logoLight}
                    alt="Prayag Steel Logo"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-prayag-red hover:bg-red-50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile links */}
              <ul className="p-4 space-y-1" role="list">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-body font-semibold tracking-wide text-base transition-colors ${isActive
                          ? "text-prayag-red bg-red-50"
                          : "text-gray-700 hover:text-prayag-red hover:bg-red-50"
                        }`
                      }
                      onClick={() => { setMobileOpen(false); handleNavClick(item.to); }}
                    >
                      {item.label}
                    </NavLink>
                    {/* Mobile sub-links for Products */}
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-red-100 pl-4">
                        {item.children.map((child) => {
                          const isChildActive = currentPathWithHash === child.to;
                          return (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                className={`block py-2 text-sm font-body font-medium transition-colors ${isChildActive ? "text-prayag-red" : "text-gray-500 hover:text-prayag-red"
                                  }`}
                                onClick={() => { setMobileOpen(false); handleNavClick(child.to); }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile catalogue button */}
              <div className="p-4 border-t border-gray-100">
                <CatalogueDownloadButton
                  id="mobile-catalogue-btn"
                  className="w-full justify-center"
                />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Navbar height spacer — 64px mobile, 80px desktop */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  );
};
