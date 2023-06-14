/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/me',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
