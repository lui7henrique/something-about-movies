/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'ui-avatars.com']
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false
  }
}
