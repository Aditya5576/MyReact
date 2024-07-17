import React, { Component } from 'react'
import "./style.css"
import Nav from './Nav'
import Employee from './Employee'



export default class App extends Component {
  render() {

    return (
      <div>
        <Nav/>
        <Employee/>
        
      </div>
    )
  }
}
