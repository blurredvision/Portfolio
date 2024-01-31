import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#5651e5]'>Niche</span> 
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Full Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I am a Full Stack developer with expertise in crafting responsive web applications. Presently, I am delving into the capabilities of NextJS while concurrently conducting experiments with various cutting-edge technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href='https://www.linkedin.com/in/nichej'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href='https://github.com/blurredvision'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href='/#about'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main