import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";


const Nav = () => {
  return (
    <nav>
        <Link className='content' to={"/"}>HOME</Link>
        <Link className='content' to={"/login"}>LOGIN</Link>
        <Link className='content' to={"/signup"}>SIGNUP</Link>

    </nav>

  )
}

export default Nav
