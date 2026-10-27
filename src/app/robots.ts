import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
export const dynamic = 'force-static';
// Search engines and AI assistants are all welcome: being found is the point.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended', 'Applebot'], allow: '/' },
    ],
    sitemap: SITE_URL + '/sitemap.xml',
    host: SITE_URL,
  };
}
