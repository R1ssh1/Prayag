# Documents Manifest

This file lists every expected document slot in the application (like PDFs for download). Once you have the final documents, place them at the exact paths listed below (relative to `public/`).

Since they are placed in `public/`, they will be served directly and can be linked to simply via their path (e.g., `/catalogue/prayag-steel-catalogue.pdf`).

## Catalogues & Brochures
| Path | Description | Component |
| --- | --- | --- |
| `catalogue/prayag-steel-catalogue.pdf` | The main company brochure/catalogue | `CatalogueDownloadButton` |

*Note: Drop the real PDF at `public/catalogue/prayag-steel-catalogue.pdf`. No code changes will be required — the Download Catalogue buttons in the Navbar and Hero section will automatically download this file.*
