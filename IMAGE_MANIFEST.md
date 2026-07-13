# Image Manifest

This file lists every expected image slot in the application. Once you have real photography or product renders, place them at the exact paths listed below (relative to `src/assets/images/`). The app will automatically render them without any code changes.

All images should ideally be optimized `.webp` or high-quality `.jpg`.

## Hero & General Pages
| Path | Description | Dimensions/Aspect | Component |
| --- | --- | --- | --- |
| `hero/hero-banner.webp` | Main hero background (home) | 21:9 or 16:9 (Hero) | `HeroSection` (Phase 2) |
| `about/pj-patel-portrait.webp` | Portrait: Shri P. J. Patel | Square or Portrait | `About` (Phase 3) |
| `about/harish-patel-portrait.webp` | Portrait: Harish Patel | Square or Portrait | `About` (Phase 3) |
| `about/jayesh-patel-portrait.webp` | Portrait: Jayesh Patel | Square or Portrait | `About` (Phase 3) |
| `about/facility-umergaon.webp` | Umergaon factory exterior/interior | 16:9 | `About` (Phase 3) |
| `about/facility-mumbai.webp` | Mumbai facility exterior/interior | 16:9 | `About` (Phase 3) |
| `logo/prayag-logo.webp` | Main company logo | Square or Wide | `Navbar`, `Footer` |

## Divisions Overview
| Path | Description | Dimensions/Aspect | Component |
| --- | --- | --- | --- |
| `divisions/flanges-hero.webp` | Flanges division card/hero | 16:9 | `ProductsOverview` |
| `divisions/fittings-hero.webp` | Fittings division card/hero | 16:9 | `ProductsOverview` |
| `divisions/pipes-hero.webp` | Pipes division card/hero | 16:9 | `ProductsOverview` |
| `divisions/tubes-hero.webp` | Tubes division card/hero | 16:9 | `ProductsOverview` |

## Products (Flanges)
| Path | Description | Dimensions/Aspect | Data Entry |
| --- | --- | --- | --- |
| `products/flanges/weld-neck-raised-face-wnrf.webp` | WNRF Flange | Square or 16:9 | `flanges.ts` |
| `products/flanges/blind-raised-face-blrf.webp` | BLRF Flange | Square or 16:9 | `flanges.ts` |
| `products/flanges/slip-on-raised-face-sorf.webp` | SORF Flange | Square or 16:9 | `flanges.ts` |

## Products (Fittings)
| Path | Description | Dimensions/Aspect | Data Entry |
| --- | --- | --- | --- |
| `products/fittings/seamless-butt-weld-elbow-90deg.webp` | Seamless 90° Elbow | Square or 16:9 | `fittings.ts` |
| `products/fittings/seamless-butt-weld-equal-tee.webp` | Seamless Equal Tee | Square or 16:9 | `fittings.ts` |
| `products/fittings/forged-socket-weld-elbow-90deg.webp` | Forged SW 90° Elbow | Square or 16:9 | `fittings.ts` |

## Products (Pipes)
| Path | Description | Dimensions/Aspect | Data Entry |
| --- | --- | --- | --- |
| `products/pipes/seamless-stainless-steel-pipe-ss316l.webp` | Seamless SS316L Pipe | Square or 16:9 | `pipes.ts` |
| `products/pipes/seamless-inconel-625-pipe.webp` | Seamless Inconel 625 Pipe | Square or 16:9 | `pipes.ts` |
| `products/pipes/welded-duplex-stainless-steel-pipe-2205.webp` | Welded Duplex 2205 Pipe | Square or 16:9 | `pipes.ts` |

## Products (Tubes)
| Path | Description | Dimensions/Aspect | Data Entry |
| --- | --- | --- | --- |
| `products/tubes/seamless-stainless-steel-tube-ss304.webp` | Seamless SS304 Tube | Square or 16:9 | `tubes.ts` |
| `products/tubes/seamless-hastelloy-c276-tube.webp` | Seamless Hastelloy C-276 Tube | Square or 16:9 | `tubes.ts` |
| `products/tubes/welded-titanium-tube-grade-2.webp` | Welded Titanium Gr.2 Tube | Square or 16:9 | `tubes.ts` |

## Certificates
| Path | Description | Dimensions/Aspect | Data Entry |
| --- | --- | --- | --- |
| `certificates/iso-9001-2015.webp` | ISO 9001 Certificate scan | Portrait | `certificates.ts` |
| `certificates/ped-directive.webp` | PED Certificate scan | Portrait | `certificates.ts` |
| `certificates/nace-mr0175-mr0103.webp` | NACE Certificate scan | Portrait | `certificates.ts` |
| `certificates/asme-compliance.webp` | ASME Certificate scan | Portrait | `certificates.ts` |
