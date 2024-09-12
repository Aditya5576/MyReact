import React from 'react'
import './resource/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Viewproduct from './components/Viewproduct'
import Addproduct from './components/Addproduct'
import Updateproduct from './components/Updateproduct'

const App = () => {
  return (
    <Router>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/viewproduct' element={<Viewproduct/>}/>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path="/updateproduct/:id" element={<Updateproduct/>}/>
        </Routes>
    </Router>
  )
}

export default App
