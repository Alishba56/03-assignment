import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className='fixed justify-center items-center bottom-0 w-[100%] p-[40px 0] bg-black'>
        <ul className=" list-inside flex justify-center items-center mt-10  p-0 text-lg gap-4 sm:gap-6 md:gap-10 mb-0 text-center">
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/">Home</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/portfolio">Portfolio</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/contact">Contact</Link></li>
            <li className='cursor-pointer ease-in duration-300 hover:text-[#691d6c]'><Link href="/about">About</Link></li>
      </ul>

      <p className="copyright mt-10 text-center text-base mb-6 text-white">@ Alishba Shahzad | All Rights Reserved</p>
        
      </footer>
  )
}

export default footer
