import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="w-full ">
      <header className='flex flex-wrap justify-between items-center bg-black py-8 px-[5%] w-full'>
        <a href="/" className="text-white font-extrabold  text-3xl sm:text-4xl md:text-5xl cursor-pointer ease-in duration-300 hover:scale-[1.1] mb-4 sm:mb-0">
          Alishba
          <span className='text-[#691d6c]'> Shahzad</span>
        </a> 
        
        <nav className="w-full sm:w-auto ">
          <ul className='flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 md:gap-10 text-white text-lg sm:text-xl md:text-2xl font-bold '>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/">Home</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/portfolio">Portfolio</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/contact">Contact</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
