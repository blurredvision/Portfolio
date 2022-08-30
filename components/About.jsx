import React from 'react'
import Image from 'next/image'

import Selfie from '../public/assets/2019.jpg'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I have recently finished my bachelor’s degree in Software Engineering at Sheffield Hallam University and thrive to build applications. I mainly focus on web development as I try to be a full stack developer, however, my strengths are in the front-end department currently as I am trying to get used to more back-end technologies. I have started to code back in 2015 using HTML & CSS whilst using PHP. Throughout the years, I have improved my skill sets and started to explore other technologies such as Python, JavaScript, React and few others. Which I have made the decision to purse web development.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={Selfie} alt="/"  />
            </div>
        </div>
    </div>
  )
}

export default About