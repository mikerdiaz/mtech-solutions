const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

  headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "https://va.vercel-scripts.com",
                "https://vercel.live",
                "https://browser.sentry-cdn.com",
              ],
              styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
              imgSrc: ["'self'", 'data:', 'https:'],
              fontSrc: ["'self'", 'https:', 'data:', "https://fonts.gstatic.com"],
              connectSrc: [
                "'self'",
                "https://api.emailjs.com",
                "https://4c80c56cbe8e.ngrok-free.app",
                "https://sentry.io",
                "https://*.ingest.sentry.io",
              ],
            },
          },
          referrerPolicy: 'no-referrer',
          frameOptions: 'DENY',
          nosniff: 'nosniff',
          permissionsPolicy: {
            camera: '()',
            microphone: '()',
            geolocation: '()',
          },
          strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
        }),
      },
    ];
  },
};