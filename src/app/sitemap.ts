import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
export const dynamic = 'force-static';

// [path, priority, last changed]
const launch = '2026-11-04';
const phase2 = '2026-11-22';
const pages: [string, number, string][] = [
  ['/', 1, phase2], ['/the-villa/', 0.9, launch], ['/private-pool/', 0.9, launch], ['/rates-booking/', 0.9, launch], ['/bedrooms/', 0.8, launch], ['/kitchen-dining/', 0.7, launch],
  ['/living-spaces/', 0.7, launch], ['/gallery/', 0.7, launch], ['/family-holiday-villa-wayanad/', 0.8, launch], ['/group-stay-villa-wayanad/', 0.8, launch],
  ['/weekend-villa-wayanad/', 0.8, launch], ['/location/', 0.8, phase2], ['/meppadi/', 0.7, launch], ['/things-to-do-near-meppadi/', 0.7, phase2],
  ['/900-kandi-glass-bridge/', 0.6, launch], ['/kanthanpara-waterfalls/', 0.6, launch], ['/bangalore-to-wayanad/', 0.6, launch], ['/wayanad-travel-update/', 0.6, launch],
  ['/reviews/', 0.6, launch], ['/faq/', 0.7, launch], ['/house-rules/', 0.5, launch], ['/contact/', 0.5, launch],
  ['/christmas-new-year-villa-wayanad/', 0.8, phase2],
  ['/nri-family-holiday-wayanad/', 0.8, phase2],
  ['/friends-trip-villa-wayanad/', 0.8, phase2],
  ['/celebration-villa-wayanad/', 0.8, phase2],
  ['/corporate-offsite-villa-wayanad/', 0.8, phase2],
  ['/villa-with-pool-near-kalpetta/', 0.8, phase2],
  ['/villa-for-12-guests-wayanad/', 0.8, phase2],
  ['/calicut-to-wayanad/', 0.6, phase2],
  ['/kochi-to-wayanad/', 0.6, phase2],
  ['/mysore-to-wayanad/', 0.6, phase2],
  ['/kannur-to-wayanad/', 0.6, phase2],
  ['/malappuram-to-wayanad/', 0.6, phase2],
  ['/ooty-to-wayanad/', 0.6, phase2],
  ['/how-to-reach-wayanad/', 0.6, phase2],
  ['/chembra-peak-trek/', 0.6, phase2],
  ['/soochipara-waterfalls/', 0.6, phase2],
  ['/edakkal-caves/', 0.6, phase2],
  ['/banasura-sagar-dam/', 0.6, phase2],
  ['/pookode-lake/', 0.6, phase2],
  ['/karapuzha-dam/', 0.6, phase2],
  ['/lakkidi-viewpoint/', 0.6, phase2],
  ['/villa-vs-resort-wayanad/', 0.6, phase2],
  ['/where-to-stay-in-wayanad/', 0.6, phase2],
  ['/best-time-to-visit-wayanad/', 0.6, phase2],
  ['/wayanad-in-december/', 0.6, phase2],
  ['/monsoon-in-wayanad/', 0.6, phase2],
  ['/wayanad-3-day-itinerary/', 0.6, phase2],
  ['/wayanad-with-kids/', 0.6, phase2],
];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([p, priority, d]) => ({ url: SITE_URL + p, lastModified: new Date(d), priority }));
}
