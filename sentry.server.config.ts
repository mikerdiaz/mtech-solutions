// sentry.server.config.js

import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  Sentry.init({
    dsn: "https://f2e64a66b5ea369fef3d71a1696f3ab7@o4509919749472256.ingest.us.sentry.io/4509919858458624",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}