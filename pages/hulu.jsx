import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'

import huluImg from '../public/assets/projects/Hulu.png'

function hulu() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={huluImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Hulu-Clone</h2>
              <h3>Next JS / Tailwind</h3>
            </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 '>
            <p className='uppercase text-xl tracking-widest text-[#5651e5] pb-2'>Project</p>
            <h2>Overview</h2>
            <p>
              This application is about a Hulu clone as this was done to experiment with Next JS since it was the first application built using Next JS. Within the application is allows users to browse through different movies according to its genre and view information about the movie. It was built using Next JS, Tailwind to style the components, Hero icons for a user-friendly interface and The Movie Database API to gather all the movies from its database and display it on the website.  
            </p>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next JS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Hero Icons</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Movie Database API</p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
    </div>
  )
}

export default hulu