export default defineAppConfig({
  title: 'JimDay Links',
  documentation: 'https://docs.sink.cool/',
  github: 'https://github.com/iJimday/Sink',
  coffee: 'https://www.jimday.cn',
  twitter: 'https://www.jimday.cn',
  telegram: 'https://www.jimday.cn',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
