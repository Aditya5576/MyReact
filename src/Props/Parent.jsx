import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
      <h3>PARENT COMPONENT</h3>
        <Child company = {props.company}/>
      
    </div>
  )
}

export default Parent
