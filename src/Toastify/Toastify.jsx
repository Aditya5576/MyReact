import React from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  let useToast = () => {
    toast.success("Welcome to Toastify", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="toast">
        <ToastContainer />      
        <button onClick={useToast}>Wishhh</button>
      </div>
    </div>
  );
};

export default Toastify;
