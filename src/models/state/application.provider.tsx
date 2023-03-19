import { ErrorBoundary } from "@sentry/react";
import { createContext, PropsWithChildren, useEffect } from "react";
import { useSentry } from '@models/interactions';
import useAmplitude from "@models/interactions/use-amplitude";

export interface ApplicationInterface {

}

export const ApplicationContext = createContext<ApplicationInterface>({ });
export default function ApplicationProvider({ children }: PropsWithChildren) {
  const sentry = useSentry();
  const amplitude = useAmplitude();

  useEffect(() => {
    sentry.operations.initialize();
    amplitude.operations.initialize();
  }, [])
  
  return (
    <ErrorBoundary fallback={<p>Application failed</p>}>
      <ApplicationContext.Provider value={{}}>
        {children}
      </ApplicationContext.Provider>
    </ErrorBoundary>
  );
}