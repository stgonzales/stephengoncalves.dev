/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/about-me',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
