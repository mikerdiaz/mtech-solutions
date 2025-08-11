import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Agrega experimental.allowedDevOrigins para tu URL ngrok
  experimental: {
    allowedDevOrigins: ['https://4c80c56cbe8e.ngrok-free.app'], // pon aquí tu URL ngrok exacta
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
              styleSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", 'data:', 'https:'],
              fontSrc: ["'self'", 'https:', 'data:'],
              connectSrc: ["'self'"],
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
