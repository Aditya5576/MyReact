import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../Css/style.css'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Profile from './Profile'

const App = () => {
  return (
    <>
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </Router>
      
    </>
  )
}

export default App
