import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

    let handelChange = ()=>{
        toast.success('Form Submitted Successfully', {
            position: 'bottom-center',
            autoClose: 2000,
        });
    }

    let h1Ref = useRef()

    let changeColor = ()=>{
        h1Ref.current.style.color="red"
    }

    
  return (
    <div>
        <h1 ref={h1Ref}>Welcome</h1>
        <ToastContainer/>
        <button onClick={handelChange}>IN</button>
        <button onClick={changeColor}>ChangeColor</button>
      
    </div>
  )
}

export default App
