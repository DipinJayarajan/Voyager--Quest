import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80' alt='/' 
        className='w-full h-full object-cover ' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute  top-[40%] w-full md:-[50%] text-white max-w-[600px] h-full flex flex-col p-5'>
                <h1 className='font-bold text-4xl italic'>Find your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et illo atque animi accusamus iure aspernatur labore enim consequuntur dicta doloremque, quo ipsum, qui modi? Eaque voluptates doloribus quas optio? Ipsum!</p>
            </div>
        </div>
        
    </div>
  )
}

export default Hero