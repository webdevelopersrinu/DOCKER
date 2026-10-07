import { useEffect, useState } from "react";
import { subscribeToToasts } from "../utils/toast";

const TOAST_DURATION = 3000;

export function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    return subscribeToToasts((toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, TOAST_DURATION);
    });
  }, []);

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.message}
        </div>
      ))}
    </div>
  );
}
