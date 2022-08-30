import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'

import instaImg from '../public/assets/projects/Instagram.png'

function instagram() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={instaImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Instagram-Clone</h2>
              <h3>Next JS / Tailwind</h3>
            </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 '>
            <p className='uppercase text-xl tracking-widest text-[#5651e5] pb-2'>Project</p>
            <h2>Overview</h2>
            <p>
              This website is an Instagram clone as I have done this website to experiment Next JS as a framework, it has most of the features that Instagram provides such as posting pictures, liking other posts, and commenting on them posts. With server sided rendering that Next JS provides makes it easier for new posts to appear on the feed as it automatically updates the component for everyone. The application has been built using Next JS as the framework, Tailwind for styling components, NextAuth to authenticate users using Google accounts as this allows authenticated users to access all of the features the application provides, Firebase to store user’s posts, likes and comments and Hero icons for a user friendly interface.
            </p>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next JS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> NextAuth</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Hero Icons</p>
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

export default instagram