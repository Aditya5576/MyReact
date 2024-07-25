import React, { useContext, useRef, useState } from "react"
import {ThemeContext} from './ContextApi'


const Theme =()=>{

    let {state, setState} = useState(false)

    let {Dark, Light} = useContext(ThemeContext)

    let ChangeRef = useRef

    let handelRef = useRef()

    let handleChange = ()=>{
        setState(!state)

        if(state === false){
            ChangeRef.current.style.background = Dark.background
        }
        else{
            ChangeRef.current.style.background = Light.background
        }
    }

    return(
        <div>
            <h1 ref={ChangeRef}>I AM COLOR CHANGER</h1>
            <button onClick={handleChange}>{state ? "Dark" : "Light"}Change</button>
        </div>
    )   
}