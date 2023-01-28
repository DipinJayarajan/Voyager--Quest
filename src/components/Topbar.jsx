import React from 'react'
import { useState } from 'react';
import { BsChatSquareDots } from 'react-icons/bs'
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
  } from 'react-icons/fa';

const Topbar = () => {

    const [ nav, setNav ] = useState(false);

    const Toggle = () => {
        setNav(!nav);
    }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden px-4 sm:flex'>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='#gallery'>Gallery</a>
            </li>
            <li>
                <a href='#deals'>Deals</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaFacebookF className='mx-4' />
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4' />
            <FaInstagram className='mx-4' />
            </div>
            <div className='text-xl md:hidden z-10 ' onClick={Toggle}>
            {/* hamburger icon */}
            <FaBars className='mr-4 cursor-pointer' size={20} />
            </div>
            {/* Mobile Menu */}
            <div className={ nav ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black opacity-90 w-full px-4 py-7 flex  justify-center items-center" : " absolute top-0 h-screen left-[-100%] ease-in duration-500" }>
                <ul >
                <li >
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='#gallery'>Gallery</a>
            </li>
            <li>
                <a href='#deals'>Deals</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
                </ul>
            
        </div>
    </div>
  )
}

export default Topbar