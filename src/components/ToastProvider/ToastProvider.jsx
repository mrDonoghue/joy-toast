import React from "react";

import { nanoid } from "nanoid";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    const id = nanoid();
    const newToast = { variant, message, id };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => {
        return toast.id !== id;
      })
    );
  }, []);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
