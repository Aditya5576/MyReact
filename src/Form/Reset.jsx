import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

const Reset = () => {
  return (
    <>
    <h1 className="header">Signup Form</h1>
    <div className='reset-cont'>
        <form action="">
            <input type="email" name='email' placeholder='Enter Email' /><br /><br />

            <button>Click</button>

            
        </form>
      
    </div>
    </>
  )
}

export default Reset
