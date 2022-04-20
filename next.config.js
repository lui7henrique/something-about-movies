/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'loremflickr.com',
      'm.media-amazon.com',
      'github.com',
      'images.igdb.com',
      'i.ibb.co'
    ]
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  }
}
