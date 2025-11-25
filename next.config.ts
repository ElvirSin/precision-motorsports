import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Enable static page generation where possible
  output: 'standalone',
  // Optimize fonts
  optimizeFonts: true,
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Power optimizations
  poweredByHeader: false,
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

export default nextConfig
