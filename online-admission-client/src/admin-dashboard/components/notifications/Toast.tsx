import React from "react";
import { toast, ToastContent } from "react-toastify";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";

interface ToastMessageProps {
  type: ToastType;
  message: string;
}

export const displayIcon = (type: ToastType) => {
  switch (type) {
    case "success":
      return <FaCheck />;
    case "info":
      return <FaInfo />;
    case "error":
      return <FaExclamationCircle />;
    case "warning":
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};


const ToastMessage: React.FC<ToastMessageProps> = ({ type, message }) => {
  const content: ToastContent = (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>
  );

  const toastId = toast(content, { type });

  const dismiss = () => {
    toast.dismiss(toastId);
  };

  return null;
};

export default ToastMessage;
