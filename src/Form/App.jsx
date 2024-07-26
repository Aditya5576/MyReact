import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify'
import "./style.css";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path='/'element={<ResetPass/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
