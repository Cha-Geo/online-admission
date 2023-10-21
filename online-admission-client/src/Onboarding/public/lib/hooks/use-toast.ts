import toast from "react-hot-toast";

const UseSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: "10px",
      background: "#272",
      color: "#fff",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    iconTheme: {
      primary: "white",
      secondary: "green",
    },
    duration: 2000,
  });
};

const UseErrorToast = (message: string) => {
  toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#722",
      color: "#fff",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    iconTheme: {
      primary: "white",
      secondary: "red",
    },
    duration: 2000,
  });
};

const UseWarningToast = (message: string) => {
  toast.loading(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    iconTheme: {
      primary: "white",
      secondary: "black",
    },
    duration: 2000,
  });
};

export {
  UseSuccessToast,
  UseErrorToast,
  UseWarningToast,
}