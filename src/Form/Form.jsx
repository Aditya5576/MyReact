import React from 'react'
import "./style.css"

const Form = () => {
  return (
    <>
    <form action="post">
        <div className='main'> 
          <h1>Register</h1>
            <input type="text" className="inp" id="" placeholder='Enter your Name' required/><br />
            <input type="text" className="inp" id="" placeholder='Enter your Email' required/><br />
            <input type="number" className="inp" id="" placeholder='Enter Phone Number' required/><br />
            <br />
            <button id='button'>Submit</button>
            


        </div>









    </form>
    
    
    
    
    </>
  )
}

export default Form
