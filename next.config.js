const path = require("path");
const { createSecureHeaders } = require("next-secure-headers");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "app");
    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
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
                // CDN de Sentry (opcional pero recomendado)
                "https://browser.sentry-cdn.com",
              ],

              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com",
              ],

              imgSrc: ["'self'", "data:", "https:"],

              fontSrc: [
                "'self'",
                "https:",
                "data:",
                "https://fonts.gstatic.com",
              ],

              connectSrc: [
                "'self'",
                "https://api.emailjs.com",
                "https://4c80c56cbe8e.ngrok-free.app",

                // 🔥 Sentry habilitado en producción y desarrollo
                "https://sentry.io",
                "https://*.ingest.sentry.io",
              ],
            },
          },

          referrerPolicy: "no-referrer",
          frameOptions: "DENY",
          nosniff: "nosniff",

          permissionsPolicy: {
            camera: "()",
            microphone: "()",
            geolocation: "()",
          },

          strictTransportSecurity:
            "max-age=63072000; includeSubDomains; preload",
        }),
      },
    ];
  },
};

module.exports = nextConfig;