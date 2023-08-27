import { ErrorBoundaryProps } from "./ErrorTypes";

const ErrorBoundaryFallback :React.FC<ErrorBoundaryProps> = ({error, resetErrorBoundary}) => {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

return (
  <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="text-center">
      <p className="fs-3">
        <span className="text-danger">Oops!</span>
      </p>
      <p className="lead">{error.message || 'Something went wrong!'}</p>
      <button onClick={resetErrorBoundary} className="btn btn-primary">
        Retry Again!
      </button>
    </div>
  </div>
);
};

export default ErrorBoundaryFallback;