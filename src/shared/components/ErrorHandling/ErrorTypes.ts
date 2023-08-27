export interface ErrorBoundaryProps {
    error: { message: string };
    resetErrorBoundary: () => void;
}