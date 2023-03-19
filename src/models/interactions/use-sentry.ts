import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const DSN = import.meta.env.VITE_SENTRY_DSN as string;

export default function useSentry() {
  const initialize = () => {
    if (!DSN) {
      console.log('Sentry DNS Env variable is not define');
    }

    Sentry.init({
      dsn: DSN,
      integrations: [new BrowserTracing()],
    
      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
    });
  }

  const report = (e: Error) => Sentry.captureException(e);

  return {
    operations: {
      initialize,
      report,
    }
  };
}