import { lazy, Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ToastContainer } from "./components/ToastContainer";
import { Shimmer } from "./components/Shimmer";

const TodosPage = lazy(() => import("./pages/TodosPage"));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Shimmer count={3} />}>
        <TodosPage />
      </Suspense>
      <ToastContainer />
    </ErrorBoundary>
  );
}
