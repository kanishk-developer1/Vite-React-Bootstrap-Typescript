import { ErrorInfo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ConsoleLogsService from './shared/services/console-logs.service';
import ErrorBoundaryFallback from './shared/components/ErrorHandling/ErrorBoundaryFallback';
import AlertContainer from './shared/components/Alerts/AlertContainer';

const App = () => {

  const [errorBoundaryReset, callErrorBoundaryReset] = useState<string[]>([]);

  // Error logging function
  const sendErrorToLogger = (error: Error, info: ErrorInfo) => {
    // Use your preferred error logging service
    ConsoleLogsService.printError(error?.message);
    ConsoleLogsService.printInfo(info.componentStack);
  }

  return (
  <ErrorBoundary
    FallbackComponent={ErrorBoundaryFallback}
    onError={sendErrorToLogger}
    onReset={(details) => {
      callErrorBoundaryReset([details.reason])
    }}
    resetKeys={errorBoundaryReset}>
    <AlertContainer />
    App Component
  </ErrorBoundary>
  )
}

export default App;