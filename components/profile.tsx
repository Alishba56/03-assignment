import React from 'react'
import Image from 'next/image'
import Pic from './pic.png'

const Profile = () => {
  return (
    <div>
      <section className="pr-[12%] flex items-center justify-center">
              <div className="flex flex-col  ">
                  <h1 className='text-5xl'>Hi, Its me <span className='text-[#691d6c] text-5xl'> <strong>Alishba</strong></span></h1>
                  <p className='max-w-screen-lg  text-3xl px-2.5 py-2.5 mt-20'>
                      I m a frontend developer, passionate about technology and creating innovative solutions.<br /> I have a strong foundation in programming languages such as Html,Css,and JavaScript,<br /> I m currently working on Nextjs projects, and I m always eager to learn and grow.
                  </p>

              </div>
              <div className=''>
                  <Image
                      className="relative top-12 w-[30vw] rounded-full h-[30vw] object-cover  left-64 cursor-pointer transition-all duration-400"
                      src={Pic}
                      alt="Profile picture"
                      width={500}
                      height={500}
                  />
              </div>
          </section>
    </div>
  )
}

export default Profile
