/** Static export: every page is pre-built HTML. Deploys to Cloudflare Pages for free. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};
export default nextConfig;
