import { useState } from "react"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Packages from "./Components/Packages"
import Title from "./Components/Title"
import Team from "./Components/Team"
import Book from "./Components/Book"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import About from "./Components/About"

function App() {
  const [theme,setTheme]=useState('light')
  
  return (
  <div className='dark:bg-black relative '>
    <ToastContainer/>
         <BrowserRouter>
         
    <Routes>

     
  
   <Route path="/" element={
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Title title='Our Packages' desc='Explore our curated collection of global destinations, tailored for every type of traveler.'/>
      <Packages/>
      <Title title='Meet our Team' desc='Our dedicated travel experts bring years of global experience to help you navigate the world with confidence and ease.'/>
      <Team/>
      <About/>
   </>} />  
   <Route path="/book" element={<Book/>}/>
  
     
   </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default App
