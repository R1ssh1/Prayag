import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { CatalogueDownloadButton } from "../ui/CatalogueDownloadButton";
import logoLight from "../../assets/images/logo/logo.webp";
import { divisions } from "../../data/company";
import { getProductsByDivision } from "../../data/products";
import type { Division } from "../../data/products/types";

interface NavItem {
  label: string;
  to: string;
  isMegaMenu?: boolean;
  children?: { label: string; to: string }[];
}

const navItems: NavItem[] = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
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
  { label: "CONTACT US", to: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

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
        setProductsOpen(false);
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
    `font-body font-semibold tracking-wide text-base transition-colors duration-200 ${isActive
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
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

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2" role="list">
            {navItems.map((item) =>
              item.children ? (
                // Products dropdown
                <li
                  key={item.to}
                  className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-body font-semibold tracking-wide text-base transition-colors duration-200 px-2 py-2 rounded-lg ${isActive || productsOpen
                        ? "text-prayag-red bg-red-50"
                        : "text-gray-800 hover:text-prayag-red hover:bg-red-50"
                      }`
                    }
                    aria-haspopup="true"
                    aria-expanded={productsOpen}
                    id="products-menu-btn"
                    onClick={() => handleNavClick(item.to)}
                    onFocus={() => setProductsOpen(true)}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                  </NavLink>

                  <AnimatePresence>
                    {productsOpen && item.isMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        role="menu"
                        aria-labelledby="products-menu-btn"
                      >
                        <div className="grid grid-cols-4 gap-6 p-6">
                          {divisions.map((div) => {
                            const divProducts = getProductsByDivision(div.id as Division).slice(0, 5);
                            return (
                              <div key={div.id} className="flex flex-col">
                                <Link 
                                  to={`/products/${div.slug}`}
                                  className="flex items-center gap-2 mb-4 group/head"
                                  onClick={() => handleNavClick(`/products/${div.slug}`)}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-prayag-red/10 flex items-center justify-center text-prayag-red font-heading font-black transition-colors group-hover/head:bg-prayag-red group-hover/head:text-white">
                                    {div.name[0]}
                                  </div>
                                  <h3 className="font-heading font-black uppercase text-prayag-black text-[15px] transition-colors group-hover/head:text-prayag-red">
                                    {div.name}
                                  </h3>
                                </Link>
                                <ul className="flex flex-col space-y-2.5 mb-4 flex-1">
                                  {divProducts.map(p => (
                                    <li key={p.id}>
                                      <Link 
                                        to={`/products/${div.slug}/${p.slug}`}
                                        className="text-[13px] font-body text-gray-500 hover:text-prayag-red transition-colors line-clamp-2 leading-snug"
                                        onClick={() => handleNavClick(`/products/${div.slug}/${p.slug}`)}
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                <Link
                                  to={`/products/${div.slug}`}
                                  className="text-[12px] font-body font-bold uppercase tracking-[0.1em] text-prayag-red hover:text-prayag-black transition-colors mt-auto inline-flex items-center gap-1"
                                  onClick={() => handleNavClick(`/products/${div.slug}`)}
                                >
                                  Explore <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {productsOpen && !item.isMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        role="menu"
                        aria-labelledby="products-menu-btn"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-[15px] font-body font-medium transition-colors duration-150 ${isActive
                                ? "text-prayag-red bg-red-50"
                                : "text-gray-700 hover:text-prayag-red hover:bg-red-50"
                              }`
                            }
                            onClick={() => handleNavClick(child.to)}
                            role="menuitem"
                          >
                            {child.label}
                          </NavLink>
                        ))}
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
                      `${activeLinkClass({ isActive })} px-2 py-2 rounded-lg hover:bg-red-50 block`
                    }
                    onClick={() => handleNavClick(item.to)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Right side: Catalogue button + mobile hamburger */}
          <div className="flex items-center gap-3">
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
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `block py-2 text-sm font-body font-medium transition-colors ${isActive ? "text-prayag-red" : "text-gray-500 hover:text-prayag-red"
                                }`
                              }
                              onClick={() => { setMobileOpen(false); handleNavClick(child.to); }}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
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
