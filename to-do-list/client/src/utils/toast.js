// Tiny toast bus: one call site style, one visual style, no dependency.
let listeners = [];
let nextId = 0;

export function subscribeToToasts(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function emit(type, message) {
  const toast = { id: nextId++, type, message };
  listeners.forEach((l) => l(toast));
}

export const showToast = {
  success: (message) => emit("success", message),
  error: (message) => emit("error", message),
};
