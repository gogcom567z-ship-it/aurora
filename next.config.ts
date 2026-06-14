import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Optimierte Images
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Compression
  compress: true,

  // Headers für Performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/dashboard/:path*',
        destination: '/auth/login?redirect=/dashboard/:path*',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'auth_token',
            value: '(?!.*)',
          },
        ],
      },
    ]
  },

  // Experimental
  experimental: {
    optimizePackageImports: ['@radix-ui/react-dialog', 'lucide-react'],
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Webpack optimization
  webpack: (config, { isServer }) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
    }
    return config
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'Aurora Quant AI X',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Production Source Maps
  productionBrowserSourceMaps: false,

  // SWC Minification
  swcMinify: true,

  // Modules
  modules: ['node_modules'],

  // Output Standalone für Vercel
  output: 'standalone',

  // API Routes
  api: {
    responseLimit: '4mb',
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default nextConfig
