// import React from "react";
import Nav1 from "./Nav1";

// const App1 = () => {
//   return (
//     <>
//       <Nav1 user="Aditya" />
//     </>
//   );
// };

// export default App1;


import React, { Component } from 'react'

export default class App1 extends Component {
  render() {
    return (
      <div>
        <Nav1 surname = "Patil"/>
        
      </div>
    )
  }
}
