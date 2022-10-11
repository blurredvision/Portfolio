import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'

import valipsImg from '../public/assets/projects/Valips.png'

function valips() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={valipsImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Valips</h2>
              <h3>Next JS / Tailwind</h3>
            </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 '>
            <p className='uppercase text-xl tracking-widest text-[#5651e5] pb-2'>Project</p>
            <h2>Overview</h2>
            <p>
              Valips is my final year project to finish my degree, this website is meant to be a similar platform such as TikTok and Instagram where players that play Valorant can upload their clips to the website to showcase to others, as people can like and comment on the video. The main part of the project is the machine learning body that has been developed to recognise the videos if they are appropriate to be uploaded to the server, this has been achieved using TenserFlow which is a machine learning library used to develop programs that have various features such as image and voice recognition. The technologies used for this application are NextJS for the framework, Tailwind to style the components, NextAuth to authenticate users to the application, Firebase is used to store all of the videos posted by the users, TenserFlow to detect if the video that is being posted is appropriate and Hero Icons for the icons.
            </p>
            <Link href='https://github.com/blurredvision/valips'>
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </Link>
            <Link href='https://valips.vercel.app/'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </Link>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next JS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> NextAuth</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TenserFlow</p>
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

export default valips