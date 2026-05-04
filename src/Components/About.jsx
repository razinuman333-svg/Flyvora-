import React from 'react'
import assets from '../assets/Assets'
import { motion } from 'framer-motion'

function About() {
  return (
     <section className="bg-white dark:bg-black py-16 px-6 md:px-16">
      <motion.div
      initial={{opacity:0,y:30}}
     whileInView={{opacity : 1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
     id='About-us' className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Image */}
        <div>
          <img
            src={assets.grppic}
            alt="Travel"
            className="rounded-2xl shadow-lg w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="  dark:text-white text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>

          <p className=" dark:text-white text-gray-600 mb-4">
            We are a modern travel agency designed to help you explore the world
            with ease and confidence. From relaxing beach holidays to thrilling
            adventures, we offer experiences tailored to your needs.
          </p>

          <p className="  dark:text-white text-gray-600 mb-6">
            Our platform provides curated travel packages, seamless booking, and
            personalized plans — making travel simple, efficient, and enjoyable.
          </p>

          

         
        </div>
      </motion.div>
    </section>
  )
}

export default About

