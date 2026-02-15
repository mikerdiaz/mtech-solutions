// sentry.server.config.js

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f2e64a66b5ea369fef3d71a1696f3ab7@o4509919749472256.ingest.us.sentry.io/4509919858458624",

  // Ajusta el muestreo de trazas (1.0 = 100%)
  tracesSampleRate: 1.0,

  // En producción, Sentry recomienda desactivar logs verbosos
  enableTracing: true,
  debug: process.env.NODE_ENV !== "production",
});