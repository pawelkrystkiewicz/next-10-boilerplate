const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  i18n: {
    locales: ['en', 'pl', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = withBundleAnalyzer(nextConfig)
