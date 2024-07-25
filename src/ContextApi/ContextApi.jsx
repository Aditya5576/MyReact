import { createContext } from "react";

export let ThemeContext = createContext()

let Theme = {
    Dark:{
        background:"#7733EF"
    },

    Light:{
        background: "#77FED3"
    }
}

const UserProvider = (children)=>{
    return(
        <ThemeContext.Provider value={Theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default UserProvider
