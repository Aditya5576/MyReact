// import React from 'react'

// const Nav1 = (props) => {
//   return (
//     <div>
//         <h1>{props.user}</h1>
      
//     </div>
//   )
// }

// export default Nav1


import React, { Component } from 'react'

export default class Nav1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.surname}</h1>
      </div>
    )
  }
}
