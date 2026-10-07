import { Button } from "./Button";

export function ErrorMessage({ message = "Something went wrong", onRetry }) {
  return (
    <div className="error-box" role="alert">
      <p>{message}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
