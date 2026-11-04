import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SITE_URL, site } from '@/content/site';
import { Footer, StickyBar } from '@/components/Chrome';
import { JsonLd } from '@/components/Bits';
import { bookingLoader, headerScript } from '@/components/Book';

const GTM_ID = 'GTM-P49QK3W3';
/** Google Tag Manager, loaded after the page has finished loading so it never slows the first view.
 *  Also sends the enquiry clicks to the dataLayer: book_click, whatsapp_click, phone_click, email_click, directions_click. */
const gtmScript = `window.dataLayer=window.dataLayer||[];dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
(function(){function l(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';document.head.appendChild(s)}
if(document.readyState==='complete')l();else addEventListener('load',l,{once:true});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'',ev=null;
var u=h.toLowerCase();if(u.indexOf('wa.me')>-1||u.indexOf('whatsapp')>-1)ev='whatsapp_click';else if(u.indexOf('tel:')===0)ev='phone_click';else if(u.indexOf('mailto:')===0)ev='email_click';
else if(u.indexOf('maps.google')>-1||u.indexOf('/maps')>-1||u.indexOf('goo.gl/maps')>-1)ev='directions_click';else if(u.indexOf('rates-booking')>-1||a.hasAttribute('data-book'))ev='book_click';
if(ev)dataLayer.push({event:ev,link_text:(a.textContent||'').trim().slice(0,60),link_url:a.href,page_path:location.pathname})},true)})();`;

const serif = localFont({
  src: [
    { path: '../../assets/fonts/cormorant-garamond-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: '../../assets/fonts/cormorant-garamond-latin-300-italic.woff2', weight: '300', style: 'italic' },
    { path: '../../assets/fonts/cormorant-garamond-latin-400-normal.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-serif', display: 'swap', fallback: ['Georgia', 'serif'], adjustFontFallback: 'Times New Roman',
});
const sans = localFont({
  src: [
    { path: '../../assets/fonts/jost-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../assets/fonts/jost-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-sans', display: 'swap', fallback: ['system-ui', 'Arial', 'sans-serif'], adjustFontFallback: 'Arial',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: site.name,
  icons: { icon: [{ url: '/favicon.ico', sizes: '16x16 32x32 48x48' }, { url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }, { url: '/icon-96.png', sizes: '96x96', type: 'image/png' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: false },
};
export const viewport: Viewport = { themeColor: '#393225', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>
        {children}
        <Footer />
        <StickyBar />
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE_URL + '/#website', name: site.name, alternateName: 'Maison Claire Wayanad', url: SITE_URL + '/', inLanguage: 'en-IN', publisher: { '@id': SITE_URL + '/#villa' } }} />
        <script id="gtm" dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <script id="bk-loader" dangerouslySetInnerHTML={{ __html: bookingLoader + headerScript }} />
      </body>
    </html>
  );
}
