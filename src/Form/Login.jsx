import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./style.css";

function Login() {

  let[username, setUsername] = useState();

  let[password, setpassword] = useState();


  let navigation = useNavigate();


  let handelSubmit= (e)=>{
        e.preventDefault();
        console.log(username, password);
        

        let user=localStorage.getItem("user", username);
        let pass=localStorage.getItem("password", password);

        let storeUser=document.getElementById("user").value;
        let storePass=document.getElementById("pass").value;


        if(storePass === pass && storeUser === user){

          toast.success(`Login Successfully`,{
            position: "top-center",
            autoClose: 2000,
          });

          navigation("/");
        }
        else{
          toast.error(`Invalid Credentials`,{
            position: "top-center",
            autoClose: 2000,
          });

        }
       
      
  }


  return (
    <>
    <h1 className='header'>Login Form</h1>
    <div className='login-cont'>

      <form action="" style={{ alignItems: "center" }} onSubmit={handelSubmit}>
        <input id='user' type="text" placeholder='Enter Username' name='username' onChange={(e)=>{
          setUsername(e.target.value);
        }}/><br /><br />


        <input id='pass' type="password" placeholder='Enter Password' name='password'onChange={(e)=>{
          setpassword(e.target.value);
        }} /> <br /><br />

        <button>Login</button><br /><br />

        <Link className='link' to={"/signup"}>Create new account?</Link><br />

        <Link  className='link' to={"/reset"}>Forgot Password? Click here</Link>


      </form>
      
    </div>
    </>
  )
}

export default Login
