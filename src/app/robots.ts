import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
export const dynamic = 'force-static';
// Every search engine and answer engine is welcome: being found is the point.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Perplexity-User', 'meta-externalagent', 'CCBot', 'DuckAssistBot', 'Amazonbot'], allow: '/' },
    ],
    sitemap: SITE_URL + '/sitemap.xml',
  };
}
