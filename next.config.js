/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org']
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  }
}
