import React from 'react'

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto md:flex mt-[-75px]">
        <div className='relative p-4'>
            <h3 className='text-white text-2xl font-bold absolute  top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] '>Resorts</h3>
        <img src='https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' className='w-full h-full border-4 object-cover border-white shadow-md relative ' />
        </div>
        <div className='relative p-4'>
            <h3 className='text-white text-2xl font-bold absolute  top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] ' >Cruises</h3>
        <img src='https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' className='w-full h-full border-4 object-cover border-white shadow-md relative ' />
        </div>
        <div className='relative p-4'>
            <h3 className='text-white text-2xl font-bold absolute  top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] '>Excursions</h3>
        <img src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='' className='w-full h-full border-4 object-cover border-white shadow-md relative ' />
        </div>
    </div>
  )
}

export default Activities