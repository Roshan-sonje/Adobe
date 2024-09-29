import React from 'react'
import Navbar1 from './Navbar1'
import { IoIosArrowDown } from 'react-icons/io'

const Sidebar = () => {
  return (
    <div className=' w-screen h-screen flex'>
        <ul className='w-full'>
            <li className='text-sm border border-y-gray-100 border-x-transparent py-3 px-2'>Home  /  Adobe Creative Cloud</li>
            <li className='text-[13px] font-medium border border-y-gray-100 flex justify-between items-center px-2 py-3'>
                <h1>Creative & Design</h1>
                <IoIosArrowDown/>
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 border-x-transparent py-3 px-2'>
                Adobe Creative Cloud
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 flex justify-between items-center px-2 py-3'>
                <h1>Explore</h1>
                <IoIosArrowDown/>
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 border-x-transparent py-3 px-2'>
                Features
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 border-x-transparent py-3 px-2'>
                For Business
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 border-x-transparent py-3 px-2'>
                Compare Plans
            </li>
            <li className='text-[13px] font-medium border border-y-gray-100 flex justify-between items-center px-2 py-3'>
                <h1>Learn & Support</h1>
                <IoIosArrowDown/>
            </li>
            <li className='ml-2 mt-4 bg-[#1473E6] text-white text-[13px] font-semibold w-fit py-2 px-3 rounded-3xl'>Buy now</li>
        </ul>
        <div className='bg-[#7F7F7F] w-[23px]'></div>
    </div>
  )
}

export default Sidebar