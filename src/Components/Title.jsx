import React from 'react'
import { motion } from 'framer-motion'

function Title({title,desc}) {
  return (
    <motion.div 
    initial={{opacity:0,y:30}}
     whileInView={{opacity : 1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    
    
    
    className='flex flex-col items-center justify-center text-center' >
      <motion.h1 
      initial={{opacity:0,y:20}}
       whileInView={{opacity : 1,y:0}}
    transition={{duration:0.5}}
    viewport={{once:true}}
    
      
      
      className=' pt-10 text-3xl sm:text-5xl font-medium '>{title}</motion.h1>
      <p className='  pt-7 max-w-lg  text-gray-500 dark:text-white/75 mb-4'>{desc}</p>
    </motion.div>
  )
}

export default Title
