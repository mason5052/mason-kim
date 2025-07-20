/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // GitHub Pages subdirectory support
  basePath: process.env.NODE_ENV === 'production' ? '/mason-kim' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mason-kim/' : '',
  
  // Ensure proper routing for GitHub Pages
  experimental: {
    appDir: true,
  },
  
  // ESLint configuration
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
}

module.exports = nextConfig 