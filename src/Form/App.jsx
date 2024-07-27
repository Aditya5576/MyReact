import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./style.css";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import Reset from "./Reset";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
