import React, { useState } from 'react'
import assets from '../assets/Assets'
import {db} from '../Config'
import { toast } from 'react-toastify'
import { collection,addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Book() {
    const navigate = useNavigate()
      const handleBook = () => {
        navigate("/")
     }

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [plan,setPlan]=useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
         try {
    await addDoc(collection(db, "bookings"), {
      name: name,
      email: email,
      packageName: plan,
      createdAt: new Date(),
      mobileNo : mobile
    });

    toast.success("Booking successful! 🎉");

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong ❌");
  }
    }

  return (
    <div className='h-200 flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

         <form onSubmit={onSubmit} className=' grid sm:grid-cols-2  gap-3 sm:gap-5 max-w-2xl w-full'>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon}/>
                    <input value={name} onChange={(e)=>{ setName(e.target.value)}}  name='name' required className='w-full p-3 text-sm outline-none ' type='text' placeholder='Enter your name'/>
                </div>
            </div>

             <div>
                <p className='mb-2 text-sm font-medium'>Your Email</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon}/>
                    <input onChange={(e)=>{ setEmail(e.target.value)}} value={email} name='email' required className='w-full p-3 text-sm outline-none' type='email' placeholder='Enter your email'/>
                </div>
            </div> 

             <div>
                <p className='mb-2 text-sm font-medium'>Your Mobile Number</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    
                    <input onChange={(e)=>{ setMobile(e.target.value)}} value={mobile} name='mobile' required className='w-full p-3 text-sm outline-none' type='tel' placeholder='Enter your mobile number'/>
                </div>
            </div> 

        <div>
                <p className='mb-2 text-sm font-medium'>Your package</p>
                <div className=' focus-within:border-blue-500 flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    
                    <input onChange={(e)=>{ setPlan(e.target.value)}} value={plan} name='plan' required className='w-full p-3 text-sm outline-none' type='text' placeholder='Enter your package name , eg: italy,dubai'/>
                </div>
            </div> 

             <button onClick={handleBook} className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103
            transition-all' type='submit'>
                Submit
                <img className='w-4' src={assets.arrow_icon}/>
            </button>

             </form>



      
    </div>
  )
}

export default Book