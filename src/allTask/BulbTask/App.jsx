import React, { useState } from 'react'
import "./style.css"

const App = () => {

    let [toggle, setToggle] = useState(false)

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
    <>
    
    <div className="main">
    
        <div className='main_1'>
            
       
                <img onClick={handleChange}  className='img2'src={!toggle ? "https://png.pngtree.com/png-vector/20220529/ourmid/pngtree-vector-icon-of-flat-design-light-bulb-reflecting-lighting-innovation-and-creativity-vector-png-image_46149726.jpg" : "https://thumb.ac-illust.com/bb/bb7ebd3add42ffefa5f8b3471ec4baa8_t.jpeg"} alt="" />
           



            <button onClick={handleChange}>ON</button>
            <button onClick={handleChange}>OFF</button>
        </div>






    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default App
