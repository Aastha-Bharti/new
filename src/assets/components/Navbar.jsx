import React, { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between h-24 mx-auto max-w-[1240px] px-4 items-center'>
      <h1 className='text-green-300 font-bold text-3xl w-full '>Example One</h1>
      <ul className=' hidden text-white md:flex'>
        <li className='px-3' >Home</li>
        <li className='px-3'>Company</li>
        <li className='px-3'>Resources</li>
        <li className='px-3'>About</li>
        <li className='px-3'>Contact</li>
      </ul>
      
      {/* mobile menu */}

      <div className='text-white block md:hidden' onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} />  : <AiOutlineMenu size={22}/>}
    </div>

    <div className= {!nav ? 'fixed left-0 top-0 h-full w-[60%] bg-black border-r border-r-gray-900 p-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='text-green-300 font-bold text-3xl w-full '>Example One</h1>

        <ul className='text-white pt-24 uppercase'>
        <li className='p-4 border-b border-b-gray-600' >Home</li>
        <li className='p-4 border-b border-b-gray-600'>Company</li>
        <li className='p-4 border-b border-b-gray-600'>Resources</li>
        <li className='p-4 border-b border-b-gray-600'>About</li>
        <li className='p-4 '>Contact</li>
        </ul>
    </div>

      
    
    </div>
    
    
  )
}

export default Navbar