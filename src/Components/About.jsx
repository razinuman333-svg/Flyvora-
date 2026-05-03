import React from 'react'
import assets from '../assets/Assets'

function About() {
  return (
     <section className="bg-white dark:bg-black py-16 px-6 md:px-16">
      <div id='About-us' className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
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
      </div>
    </section>
  )
}

export default About

