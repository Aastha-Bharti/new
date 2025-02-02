import React from 'react'
import {ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] h-screen flex flex-col mt-50 w-full mx-auto text-center'>
            <p className='text-green-300  uppercase p-2 text-md'>Something written here</p>
            <h1 className='font-bold md:text-5xl sm:text-4xl text-3xl mb-2'>Grow with Data</h1>
            <div className='flex justify-center items-center'>
                <p className=' font-bold md:text-5xl sm:text-4xl text-3xl mb-2'>Fast flexible financing for</p>
                <ReactTyped
                className='font-bold md:text-5xl sm:text-4xl text-3xl mb-2 p-3'
                strings= {['BTB','BTC','SASS']} 
                typeSpeed = {100}
                backSpeed = {50}
                loop
                />

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-green-300 w-[150px] py-3 text-black font-medium rounded-xl mx-auto mt-3'>Get Started</button>

        

        </div>
        

    </div>
  )
}

export default Hero