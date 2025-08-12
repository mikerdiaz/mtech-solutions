import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    allowedDevOrigins: ['https://15ba62ef90fe.ngrok-free.app'],
  },

  headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
              styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
              imgSrc: ["'self'", 'data:', 'https:'],
              fontSrc: ["'self'", 'https:', 'data:', "https://fonts.gstatic.com"],
              connectSrc: [
                "'self'",
                "https://api.emailjs.com",
                "https://4c80c56cbe8e.ngrok-free.app",
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
        }),
      },
    ];
  },
};

export default nextConfig;