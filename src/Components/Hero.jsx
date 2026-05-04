import React from 'react'
import assets from '../assets/Assets'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
    whileInView={{opacity : 1,y:0}}
    transition={{duration:0.5,delay:0.7}}
    viewport={{once:true}}
    
    
    
    id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700
    dark:text-white'>

         <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
        xl:leading-[95px] max-w-5xl'>Your Dream <span className='bg-gradient-to-r from-[#16A34A] to-[#86EFAC] bg-clip-text
        text-transparent'>Vacation</span>Starts here</h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/
        75 max-w-4/5 sm:max-w-lg pb-3'>From relaxing beaches to exciting adventures, we help you plan the perfect trip with ease and comfort.</p>
        
        <div className='relative w-full flex justify-center'>
            <img className='w-full max-w-6xl z-10' src={assets.hero}/>
           


        </div>
      
    </motion.div>
  )
}

export default Hero
