/** @type {import('next').NextConfig} */
const nextConfig = {
  // Untuk static export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable ESLint selama build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig