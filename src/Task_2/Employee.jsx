import React, { Component } from 'react'
import userDetails from "./data.json"

export default class Employee extends Component {

    constructor(){
        super()
        this.state ={
            employeeDetails : userDetails
        }
    }
  render() {
    return (
      <div className='holder'>
        {this.state.employeeDetails.map((x)=>{
            return(
                <div className="cards">
                    <h1>{x.login}</h1>
                    <h2>{x.id}</h2>
                    <h3>{x.type}</h3>
                    <h4>{x.site_admin}</h4>
                    <img src={x.avatar_url} alt="" height={"250px"} width={"250px"} />
                </div>
            )
        })}
        
      </div>
    )
  }
}
