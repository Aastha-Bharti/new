import React from 'react'
import Laptop from '/src/assets/laptop.jpg'

const Analytics = () => {
  return (
    <>
    <div className='text-black bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className =" w-[500px] mx-auto my-4" src={Laptop} alt='/'></img>
            <div className='flex flex-col p-4 justify-center'>
            <p className='uppercase text-green-600 font-bold mb-2'>Hello Analytics Dashboard</p>
            <h1 className='md:text-3xl sm:text-2xl text-xl mb-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate excepturi qui iure assumenda adipisci, voluptates libero quibusdam architecto consequuntur esse quisquam, laborum exercitationem repellendus amet consectetur veritatis minima sed.
            </p>
            <button className='bg-green-300 w-[150px] py-3 text-black font-medium rounded-xl mx-auto md:mx-0 mt-3'>Get Started</button>

            </div>
            
        </div>
    </div>
    </>

  )
}

export default Analytics