import React from 'react'
import Title from './Title'
import assets from '../assets/Assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Packages() {
  const navigate = useNavigate()
  const handleBook = () => {
    navigate("/book")
  }

    const pkges =[
        {
            name : "italy",
            description : "Timeless art, sun-drenched vineyards, and the world’s finest flavors." ,
            image : assets.italy,
            price : 50000

        },
        {
             name : "dubai",
            description : "Futuristic skylines meet golden sands in the lap of luxury." ,
            image : assets.dubai,
            price : 10000
        },
         {
            name : "swizerland",
            description : "Storybook landscapes of pristine lakes and majestic alpine peaks." ,
            image : assets.swiz,
            price : 90000

        },
         {
            name : "Manali",
            description : "Sacred peaks, soul-stirring views, and the ultimate mountain escape." ,
            image : assets.himalaya,
            price : 20000

        },
        {
            name : "Norway",
            description : "Dramatic fjords, midnight suns, and the magic of the Northern Lights." ,
            image : assets.norway,
            price : 100000

        },
          {
            name : "Thailand",
            description : "Golden temples, vibrant street food, and tropical island bliss." ,
            image : assets.thailand,
            price : 30000

        },
        {
            name : "Bali",
            description : "Spiritual sanctuaries, lush jungles, and world-class surf breaks." ,
            image : assets.bali,
            price : 20000

        },
        {
            name : "Australia",
            description : "Iconic reefs, vast outback wonders, and sun-soaked coastal cities." ,
            image : assets.aus,
            price : 90000

        },
        
        
        
    ]


  return (
    <div 
     
    
   

    
    
    className=" relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white" id='packages'>
      

      {pkges.map((pkg,index) => (
    <motion.div
    initial={{opacity:0,y:30}}
    whileInView={{opacity : 1,y:0}}
    transition={{duration:0.5,delay:index*0.2}}
    viewport={{once:true}}
      key={index}
      className="  dark: bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      
      {/* Image */}
      <div
      className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-74 object-cover hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 right-3 bg-white dark:bg-black px-3 py-1 text-sm font-semibold rounded-full">
          ₹{pkg.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold dark:text-black">{pkg.name}</h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {pkg.description}
        </p>

        <button onClick={handleBook} className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
          Book Now
        </button>
      </div>
    </motion.div>
  ))}
</div>


    
  )
}

export default Packages
