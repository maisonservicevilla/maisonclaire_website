import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SITE_URL, site } from '@/content/site';
import { Footer, StickyBar } from '@/components/Chrome';
import { JsonLd } from '@/components/Bits';
import { bookingLoader, headerScript } from '@/components/Book';

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
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: false },
};
export const viewport: Viewport = { themeColor: '#393225', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Footer />
        <StickyBar />
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE_URL + '/#website', name: site.name, alternateName: 'Maison Claire Wayanad', url: SITE_URL + '/', inLanguage: 'en-IN', publisher: { '@id': SITE_URL + '/#villa' } }} />
        <script id="bk-loader" dangerouslySetInnerHTML={{ __html: bookingLoader + headerScript }} />
      </body>
    </html>
  );
}
