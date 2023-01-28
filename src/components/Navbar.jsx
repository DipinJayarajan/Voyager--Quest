import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>WeekAway</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex px-6 items-center'>
                <AiOutlineClockCircle className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>Mon - Fri 9:00 - 17:00</p>
            </div>
            <div className='hidden md:flex px-6 items-center' >
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]' />
                <p className='text-sm text-gray-700 '>+91-234-56-890</p>
            </div>
            <button>Get a free quote</button>
        </div>
    </div>
  )
}

export default Navbar