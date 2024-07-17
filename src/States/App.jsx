import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Aditya",
      userSkills: ["Web", "Core Java", "MySQL", "Spring"],
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <ol>
          {this.state.userSkills.map((x) => {       //using map() how to display arry data
            return(

                 <li>{x}</li>

            )
          })}
        </ol>
      </div>
    );
  }
}
