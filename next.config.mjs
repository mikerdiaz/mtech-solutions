import { createSecureHeaders } from 'next-secure-headers';
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
                "https://browser.sentry-cdn.com", // Sentry scripts
              ],
              styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
              imgSrc: ["'self'", 'data:', 'https:'],
              fontSrc: ["'self'", 'https:', 'data:', "https://fonts.gstatic.com"],
              connectSrc: [
                "'self'",
                "https://api.emailjs.com",
                "https://4c80c56cbe8e.ngrok-free.app",
                "https://sentry.io",
                "https://*.ingest.sentry.io", // Sentry event ingestion
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

// Configuración de Sentry
const sentryWebpackPluginOptions = {
  silent: true, // evita logs innecesarios
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "personal-bkt",

  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true
});