import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

function Signup() {
  let [username, setUser] = useState();
  let [phone, setPhone] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();

  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(username, phone, email, password);

    localStorage.setItem("user", username);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/");
  };

  return (
    <div className="signup-cont">
    <form action="" style={{ alignItems: "center" }} onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      /> <br /><br />
      <input
        type="number"
        placeholder="Enter Phone_no"
        name="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      /><br /><br />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      /><br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      /><br /><br /><br />

      <button>Signup</button>
    </form>
    </div>
  );
}

export default Signup;
