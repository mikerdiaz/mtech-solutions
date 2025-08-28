import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

class SentryExampleAPIError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}

// A faulty API route to test Sentry's error monitoring
export function GET() {
  throw new SentryExampleAPIError(
    "This error is raised on the backend called by the example page."
  );

  // This line won't be reached unless the error is removed
  return NextResponse.json({ data: "Testing Sentry Error..." });
}