import React,{useState,useEffect} from 'react'
import assets from '../assets/Assets'
import ThemeToglebtn from './ThemeToglebtn'
import { GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged } from 'firebase/auth'
import {auth} from '../Config'
import { motion } from 'framer-motion'





function Navbar( {theme,setTheme}) {

 const [sideBarOpen,setSideBarOpen]=useState(false)
  const [user,setUser]=useState(null)

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
    return() => unsubscribe()


  },[])


   const provider = new GoogleAuthProvider();
   const handlelogin = async ()=>{
    const result=await signInWithPopup(auth,provider)
    
   }

   
    

  return (

    <motion.div 

    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    
    
    className='flex justify-between items-center  px-4 sm:px-12 lg:px-24
    xl:px-40 py-0 -mt-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50
    dark:bg-black'>

        <img className=' h-30 w-32 sm:w-40' src={assets.whitebg}></img>


        <div className={`text-gray-700 dark:text-white sm:text-sm ${sideBarOpen ? 'max-sm:w-60 max-sm:pl-10':' max-sm:w-0 overflow-hidden'} max-sm:fixed
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
        max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

                   <img className='w-5 absolute right-4 top-4 sm:hidden' src={assets.close_icon} onClick={()=> setSideBarOpen(false)}/>

          <a onClick={()=>setSideBarOpen(false)} href='#' className='sm:hover:border-b'>Home</a>
          <a onClick={()=>setSideBarOpen(false)} href='#packages' className='sm:hover:border-b'>Packages</a>
          <a onClick={()=>setSideBarOpen(false)} href='#About-us' className='sm:hover:border-b'>About us</a>
          <a onClick={()=>setSideBarOpen(false)} href='#meet-team' className='sm:hover:border-b'>Meet Team</a>

        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
         
             
             <ThemeToglebtn theme={theme} setTheme={setTheme}/>
    

             {!user ? (<a onClick={()=>{
                handlelogin()
              }}  className='text-sm  flex
          items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
          cursor-pointer hover:scale-103 transition-all'>Login</a>) :  (<a onClick={()=>{
            signOut(auth)
            
                
              }}  className='text-sm  flex
          items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
          cursor-pointer hover:scale-103 transition-all'>Logout</a>)
          }
          
           <img onClick={()=> setSideBarOpen(true)} className='w-8 sm:hidden' src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}/>



        </div>
      
    </motion.div>
  )
}

export default Navbar
