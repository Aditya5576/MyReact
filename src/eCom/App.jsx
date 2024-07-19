import React from 'react'
import Nav from './Nav'
import "./style.css"
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer/>
        <Nav/>
        <Product/>
      
    </div>
  )
}

export default App
