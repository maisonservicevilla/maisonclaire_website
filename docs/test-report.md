# Test report

Run on 28 October 2026 against the production build (`npm run build`), served locally.

## Lighthouse 12 (mobile = Moto G emulation with slow 4G; desktop preset)

| Page | Mobile performance | Accessibility | Best practices | SEO | Desktop performance | Mobile LCP | CLS |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 100 | 1.8 s | 0 |
| `/the-villa/` | 100 | 100 | 100 | 100 | 100 | 1.6 s | 0 |
| `/private-pool/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/bedrooms/` | 100 | 100 | 100 | 100 | 100 | 1.7 s | 0 |
| `/kitchen-dining/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/living-spaces/` | 100 | 100 | 100 | 100 | 100 | 1.2 s | 0 |
| `/gallery/` | 100 | 100 | 100 | 100 | 100 | 1.7 s | 0 |
| `/rates-booking/` | 100 | 100 | 100 | 100 | 100 | 1.7 s | 0 |
| `/reviews/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/faq/` | 100 | 100 | 100 | 100 | 100 | 1.2 s | 0 |
| `/house-rules/` | 100 | 100 | 100 | 100 | 100 | 1.2 s | 0 |
| `/contact/` | 100 | 100 | 100 | 100 | 100 | 1.5 s | 0 |
| `/family-holiday-villa-wayanad/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/group-stay-villa-wayanad/` | 100 | 100 | 100 | 100 | 100 | 1.9 s | 0 |
| `/weekend-villa-wayanad/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/location/` | 100 | 100 | 100 | 100 | 100 | 1.6 s | 0 |
| `/meppadi/` | 100 | 100 | 100 | 100 | 100 | 1.6 s | 0 |
| `/bangalore-to-wayanad/` | 100 | 100 | 100 | 100 | 100 | 1.5 s | 0 |
| `/wayanad-travel-update/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/things-to-do-near-meppadi/` | 100 | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| `/900-kandi-glass-bridge/` | 100 | 100 | 100 | 100 | 100 | 1.6 s | 0 |
| `/kanthanpara-waterfalls/` | 100 | 100 | 100 | 100 | 100 | 1.7 s | 0 |

Lab scores. Real-world scores depend on the visitor's device and network, and on the Innrow script once it loads (it is only fetched when the booking area comes into view or someone taps Book now).

## Responsive and functional checks

- All 24 URLs checked at 320, 360, 390, 430, 768, 1024 and 1440 px: no sideways scrolling, one H1 per page, every image has alt text, no console errors.
- Day/Dusk switch, room explorer, mobile menu and FAQ all work with no JavaScript (HTML + CSS only).
- 120 internal links and image URLs checked: all return 200.
- Booking loader: Innrow is not fetched on page load; it loads when the booking area is near the screen, and a tap on any "Book now" fetches it and opens the pop-up without leaving the page.
- Every character used on the site is covered by the subsetted fonts.
- Structured data: JSON-LD on every page parses as valid JSON (LodgingBusiness/VacationRental, WebSite, BreadcrumbList, FAQPage, Article, ItemList, ImageGallery). Validate once live with Google's Rich Results Test and validator.schema.org.

## Not testable here (do after deploy)

1. The Innrow widget itself (this test machine cannot reach app.innrow.com). Check: Book now opens the pop-up, the search bar and the full form render, a test request arrives.
2. Lighthouse on the live URL (PageSpeed Insights).
3. Real phones: one iPhone (Safari) and one Android (Chrome).
