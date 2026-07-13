import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components/layout/PageWrapper";
import { ScrollToTopButton } from "./components/ui/ScrollToTopButton";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { OrganizationSchema } from "./seo/StructuredData";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { QualityPolicy } from "./pages/QualityPolicy";
import { Certificates } from "./pages/Certificates";
import { Contact } from "./pages/Contact";
import { ProductsOverview } from "./pages/products/ProductsOverview";
import { DivisionPage } from "./pages/products/DivisionPage";
import { ProductDetailPage } from "./pages/products/ProductDetailPage";

/**
 * App — root router. PageWrapper adds Navbar + Footer to every route.
 * OrganizationSchema is rendered site-wide via Helmet.
 */
function App() {
  return (
    <>
      {/* Site-wide JSON-LD */}
      <OrganizationSchema />
      <ScrollToTop />
      <ScrollToTopButton />

      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/:division" element={<DivisionPage />} />
          <Route path="/products/:division/:slug" element={<ProductDetailPage />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 catch-all */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                  <p className="font-heading font-black text-8xl text-prayag-red mb-4">404</p>
                  <h1 className="font-heading font-black text-3xl uppercase text-prayag-black mb-3">
                    Page Not Found
                  </h1>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg bg-prayag-red text-white font-heading font-bold uppercase tracking-wide text-sm hover:bg-red-700 transition-colors"
                  >
                    ← Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
