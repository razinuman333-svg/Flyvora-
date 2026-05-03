import React from 'react'

function Title({title,desc}) {
  return (
    <div className='flex flex-col items-center justify-center text-center' >
      <h1  className=' pt-10 text-3xl sm:text-5xl font-medium '>{title}</h1>
      <p className='  pt-7 max-w-lg  text-gray-500 dark:text-white/75 mb-4'>{desc}</p>
    </div>
  )
}

export default Title
