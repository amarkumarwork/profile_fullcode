import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showToast(message, type = "success") {
  if (type === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      style: {
        background: "linear-gradient(to right, #7F00FF, #FF00FF)",
        color: "white",
      },
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      style: {
        background: "#FF0000",
        color: "white",
      },
    });
  }
}
