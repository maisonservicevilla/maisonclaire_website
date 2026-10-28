# Maison Claire Service Villa — website

The official website for Maison Claire Service Villa, Meppadi, Wayanad.
Built with Next.js as a fully static site (plain HTML and CSS, no framework
JavaScript in the browser), ready for free hosting on Cloudflare Pages.

- 22 indexable pages, plus privacy, terms and 404
- Lighthouse 100 on every page (mobile and desktop), see `docs/test-report.md`
- Every keyword from the brief mapped to a page, see `docs/keyword-map.md`
- All bookings go through Innrow (`maisonclaire`)

---

## 1. Before going live: facts the owner must confirm

Every fact on the site lives in **`src/content/site.ts`**. Anything set to
`null` there is simply **not shown** on the site, so nothing unconfirmed is ever
published. Fill these in and redeploy:

| Field | Why it matters | Current state |
|---|---|---|
| `checkIn` / `checkIn24` | Shown on FAQ, house rules, schema | Airbnb says 3 PM, MakeMyTrip says 2 PM. Hidden. |
| `sleeps` / `maxGuests` | Everywhere guests are mentioned | Confirmed: 8 standard, 12 maximum (2 + 1 extra per room). |
| `pets` | FAQ, house rules, schema | Confirmed: not allowed. |
| `events` | House rules | Unknown. Hidden. |
| `wifi`, `parking`, `powerBackup` | Amenity lists, schema, parking keywords | Unknown. Hidden. |
| `poolSize`, `poolHours` | Pool page | Unknown. Hidden. |
| `fullAddress`, `mapUrl`, `geo` | Location page, Google, AI assistants | Unknown. Hidden. |
| `phone`, `whatsapp`, `email` | Contact page, schema | Unknown. Hidden. |
| `ac: true` | Bedrooms page and keywords | AC units are visible in the bedroom photos. **Confirm all four rooms have AC**, or set to `false`. |
| Bedroom photos | Bedrooms page | Confirm which photo is which bedroom (`src/app/bedrooms/page.tsx`). |
| `ratings` | Home, reviews | Figures as of October 2026. Update every few months. |

Also set the domain (step 2). Locality: the site uses **Meppadi** everywhere.
Make the OTA listings match (some say Vythiri / Kottappadi part).

## 2. Deploy to Cloudflare Pages (free)

1. Push this repository to GitHub (private).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → choose the repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NEXT_PUBLIC_SITE_URL` = `https://your-domain` (no trailing slash), e.g. `https://maisonclaire.in`
   - Environment variable: `NODE_VERSION` = `22`
4. Save and deploy. Then **Custom domains → Set up a custom domain** and follow the DNS steps.
5. `public/_headers` sets long caching for images and fonts automatically.

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, the sitemap and structured data.
If it is wrong, Google will be pointed at the wrong address, so set it before the first deploy.

## 3. After going live (in this order)

1. **Test the booking widget** on the live site: tap *Book now* in the header and on a phone,
   scroll to *Check dates for your stay* (search bar), open `/rates-booking/` (full form). Send one test request.
2. Google Search Console: add the domain, submit `https://your-domain/sitemap.xml`.
3. Bing Webmaster Tools: import from Search Console (this also feeds ChatGPT and Copilot search).
4. Run PageSpeed Insights on the live home page.
5. Validate structured data at https://validator.schema.org and Google's Rich Results Test.
6. Add the website link to Instagram and every OTA profile that allows it.
7. Analytics (optional): add Google Tag Manager or GA4 in `src/app/layout.tsx`. Innrow sends
   `innrow_search` and `innrow_request` events to it automatically. Update `/privacy/` when you do.

## 4. How things work

**Booking (Innrow).** `src/components/Book.tsx`.
Every page has one booking area: the dates-and-guests bar (`data-mode="search"`), or the full
form on `/rates-booking/` (`data-mode="inline"`). All *Book now* buttons use
`data-innrow-open="maisonclaire"`. To keep pages fast, Innrow's script is only fetched when the
booking area scrolls near the screen, or the moment someone taps *Book now*. Without JavaScript,
every *Book now* link simply goes to `/rates-booking/`.

**Zero JavaScript.** `scripts/strip-js.mjs` runs after `next build`. It removes the Next.js runtime
from every page (nothing on the site needs it), inlines the small stylesheet, and keeps only the
structured data and the booking loader. The Day/Dusk switch, room explorer, menu and FAQ are HTML + CSS.

**Photos.** Source photos are in `assets/photos` (1800 px). `npm run images` regenerates the
AVIF and WebP sizes in `public/img`, the favicons and the social image (takes ~10 minutes).
To add a photo: drop a `.jpg` in `assets/photos`, run `npm run images`, use it with
`<Img name="file-name" alt="…" />`.

**Fonts.** Cormorant Garamond and Jost, self-hosted and subsetted to the characters the site uses
(`assets/fonts`). If you add text with new symbols (other languages, emoji), regenerate the subsets.

**Pages.** `src/app/<url>/page.tsx`. Shared pieces are in `src/components`:
`Chrome.tsx` (header, footer, phone booking bar), `Sections.tsx` (hero, room explorer, timeline,
booking band, "In short" blocks), `Bits.tsx` (FAQ, breadcrumbs, distance ribbon, ratings),
`Guide.tsx` (travel guides), `Landing.tsx` (family / group / weekend pages).

**SEO.** Each page sets its own title, description and canonical via `meta()` in `src/lib/meta.ts`.
`src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` and `robots.txt`
(search engines and AI assistants are all allowed).

**Travel guides** (`/wayanad-travel-update/`, `/900-kandi-glass-bridge/`, `/kanthanpara-waterfalls/`,
`/bangalore-to-wayanad/`, `/meppadi/`) are dated and cite their sources. Review them every few months,
and update `UPDATED` in `src/components/Guide.tsx` when you do. Distances and timings should be checked
on the ground.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000 (development mode, includes Next.js runtime)
npm run build      # production build into ./out
npm start          # serve ./out at http://localhost:3000
```

Requires Node 20+.
