import React, { useState } from 'react'
import "./style.css"

const App = () => {

  let [toggle , setToggle] = useState(false)

  let handleChange = ()=>{
      if(!toggle)
      {
        setToggle(true)
      }
      else
      {
        setToggle(false)
      }
  }

  return (
    <div>
      <input type={toggle ? "text" : "password"} /> <br /> <br />
      <img onClick={handleChange} 
      style={{height:"50px" , width:"50px" }}
      src={!toggle ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoZ_Tkcz2IaN9qZAQLzxxHCqxwqg4eRRhcmjJUkhBnypulJekk7sMf1o_XL-VfPtC6Ck&usqp=CAU" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbYrpuP5oTHQXP5dHsn2Oym_cW-yjwdr4wQ&s"} alt="" />
    </div>
  )
}

export default App