// sentry.server.config.js

import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: "https://f2e64a66b5ea369fef3d71a1696f3ab7@o4509919749472256.ingest.us.sentry.io/4509919858458624",

  tracesSampleRate: isProd ? 0.1 : 1.0,

  debug: !isProd,
});