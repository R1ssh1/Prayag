import React, { Suspense, lazy } from "react";
import config from "../../sanity.config";

// Lazy-load the Studio so it's completely code-split from the public site bundle
const Studio = lazy(() =>
  import("sanity").then((mod) => ({ default: mod.Studio }))
);

/**
 * SanityStudioPage — rendered at /studio/*.
 * The Studio manages its own internal routing via the wildcard.
 * This page intentionally has no Navbar or Footer (rendered outside PageWrapper).
 */
export const SanityStudioPage: React.FC = () => (
  <Suspense
    fallback={
      <div className="min-h-screen bg-[#101112] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-prayag-red/20 border-t-prayag-red rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-gray-400">Loading Studio…</p>
        </div>
      </div>
    }
  >
    <div style={{ height: "100vh" }}>
      <Studio config={config} />
    </div>
  </Suspense>
);
