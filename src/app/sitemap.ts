import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
export const dynamic = 'force-static';

const pages: [string, number][] = [
  ['/', 1], ['/the-villa/', 0.9], ['/private-pool/', 0.9], ['/rates-booking/', 0.9], ['/bedrooms/', 0.8], ['/kitchen-dining/', 0.7],
  ['/living-spaces/', 0.7], ['/gallery/', 0.7], ['/family-holiday-villa-wayanad/', 0.8], ['/group-stay-villa-wayanad/', 0.8],
  ['/weekend-villa-wayanad/', 0.8], ['/location/', 0.8], ['/meppadi/', 0.7], ['/things-to-do-near-meppadi/', 0.7],
  ['/900-kandi-glass-bridge/', 0.6], ['/kanthanpara-waterfalls/', 0.6], ['/bangalore-to-wayanad/', 0.6], ['/wayanad-travel-update/', 0.6],
  ['/reviews/', 0.6], ['/faq/', 0.7], ['/house-rules/', 0.5], ['/contact/', 0.5],
];
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-27');
  return pages.map(([p, priority]) => ({ url: SITE_URL + p, lastModified, priority }));
}
