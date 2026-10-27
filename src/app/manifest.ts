import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest {
  return { name: 'Maison Claire Service Villa, Wayanad', short_name: 'Maison Claire', start_url: '/', display: 'standalone', background_color: '#F4EFE6', theme_color: '#393225', icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }] };
}
