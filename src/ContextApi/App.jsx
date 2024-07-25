import React from 'react'
import UserProvider, { ThemeContext } from './ContextApi'

const App = () => {
  return (
    <div>
        <UserProvider>
        <ThemeContext></ThemeContext>
        </UserProvider>
        

    </div>
  )
}

export default App
