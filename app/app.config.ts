export default defineAppConfig({
  title: 'JimDay Links',
  documentation: ' ',
  github: 'https://github.com/iJimday/Sink',
  coffee: 'https://jimday.cn/',
  twitter: 'https://jimday.cn/',
  telegram: 'https://jimday.cn/',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
