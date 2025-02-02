import React from 'react'

const News = () => {
  return (
    
    <div className='bg-black w-full text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3' >
            <div className='lg:col-span-2 '>
           
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 '>Want tips & tricks to optimize your flow?</h1>
                <p className='py-0 font-medium'>Sign up to our newsletter and stay up to date.</p>
            </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
                <input type="email" placeholder='Enter your email' className='p-3 flex text-gray-500 bg-white w-full font-medium rounded-lg mb-5 mt-6 '></input>
                <button className='bg-green-300 w-[200px] py-3 px-6 my-3 text-black font-medium rounded-xl mx-auto ml-3'>Notify me</button>
            </div>
            <p>We care about the protection of your data.Read our <span className='text-green-400'>Privacy Policy</span></p>
         </div>
        </div>
    

    </div>
    

    
  )
}

export default News