import React from 'react'
import assets from '../assets/Assets'
import { motion } from 'framer-motion'

function Footer({theme}) {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity : 1,y:0}}
    transition={{duration:0.8,}}
    viewport={{once:true}}
    
    
    className='bg-slate-50 dark:bg-black pt-10 sm:pt-10
    mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/*Footer Top*/}
        <div className='flex justify-between lg:items-center
        max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700 dark:text-white'>
                <img className='w-32 sm:w-44' src={assets.whitebg}/>
                <p className='max-w-md'>From strategy execution,we craft digital solutions that move your business forward</p>
                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href='#hero'>Home</a></li>
                    <li><a className='hover:text-primary' href='#packages'>packages</a></li>
                    <li><a className='hover:text-primary' href='#About-us'>About us</a></li>
                    
                </ul>
            </div>
            <div className='text-gray-600 dark:text-white'>
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news,articles and resources, sent to your inbox weekly</p>
                <div className='flex gap-2 text-sm'>
                    <input placeholder='Enter your email' type='email' className='w-full p-3 text-sm outline-none rounded dark:text-white bg-transparent border
                    border-gray-300 dark:border-white-500'/>
                    <button className='bg-primary text-white rounded px-6'>Subscribe</button>

                </div>


            </div>


        </div>


        <hr className='border-gray-300 dark:border-white my-6'/>
        {/*footer bottom*/}
        <div className='pb-6 text-sm text-gray-500 flex
        justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2026 flyvora - All Right Reserved</p>
            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
                <img src={assets.instagram_icon}/>

            </div>

        </div>
      
    </motion.div>
  )
}

export default Footer
