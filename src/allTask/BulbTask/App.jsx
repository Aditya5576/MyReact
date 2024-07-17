import React, { useState } from 'react'
import './style.css'
import img1 from './bulb1.png'



const App = () => {

    let [toggle, setToggle] = useState(false)

    let handleChange = () =>{
        if(!toggle)
        {
            setToggle(true)
        }
        else{
            setToggle(false)
        }
    }

  return (
    <>
    <div className="main">
    <div className="container">

        {/* <img onClick={handleChange} 
        height={"250px"} width={"250px"} alt="" 
        src={!toggle ? {img1} : {img1}}/> */}

        <button onClick={handleChange}>ON</button>
        <button onClick={handleChange}>OFF</button>





    </div>








  </div>
  </>
  )
}

export default App


