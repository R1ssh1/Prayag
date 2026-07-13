import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

/**
 * PageWrapper — wraps each page with Navbar, Footer, and scroll-to-top.
 * HelmetProvider lives here so every nested page can use <Helmet>.
 */
export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-off-white font-body">
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
