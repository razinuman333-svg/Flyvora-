import { useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"

function App() {
  const [theme,setTheme]=useState('light')
  
  return (
    <div className='dark:bg-black relative '>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      
    </div>
  )
}

export default App
