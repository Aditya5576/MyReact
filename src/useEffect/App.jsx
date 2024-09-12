import React, { useEffect, useState } from 'react'

const App = () => {

    let [userData, setUserData] = useState([])


    useEffect(()=>{
        window.fetch("https://api.github.com/users").then((x)=>x.json).then((y)=>console.log(y))
    },[])

  return (
    <div>
        {userData.map((x)=>{
            return(
                <h1>{x.id}</h1>
            )
        })}
    </div>
  )
}

export default App
