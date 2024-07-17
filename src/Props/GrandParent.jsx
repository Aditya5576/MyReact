import React from 'react'
import Parent from './Parent'

const GrandParent = (props) => {
  return (
    <div>
        <h2>GRANDPARENT COMPONENT</h2>
        <Parent company = {props.company}/>
      
    </div>
  )
}

export default GrandParent
