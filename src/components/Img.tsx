import manifest from '@/content/images.json';

type Name = keyof typeof manifest;

/**
 * Responsive photo: AVIF + WebP at several widths.
 * `priority` is only for the one big image at the top of a page (LCP).
 */
export function Img({
  name, alt, sizes = '100vw', priority = false, className, style,
}: { name: Name | string; alt: string; sizes?: string; priority?: boolean; className?: string; style?: React.CSSProperties }) {
  const m = (manifest as Record<string, { w: number; h: number; widths: number[] }>)[name];
  if (!m) throw new Error(`Unknown image: ${name}`);
  // AVIF at every size; WebP (fallback for older browsers) only up to 800 px to keep the site light
  const set = (ext: string) => m.widths.filter((w) => ext === 'avif' || w <= 800).map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ');
  const fallbackW = 800;
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`/img/${name}-${fallbackW}.webp`}
        alt={alt}
        width={m.w}
        height={m.h}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        className={className}
        style={style}
      />
    </picture>
  );
}

export function preloadHero(name: string) {
  const m = (manifest as Record<string, { widths: number[] }>)[name];
  return {
    srcSet: m.widths.map((w) => `/img/${name}-${w}.avif ${w}w`).join(', '),
    href: `/img/${name}-${m.widths[0]}.avif`,
  };
}
