import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Niche</span> 
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a Front-End developer specialised in building responsive front-end web applications. Currently, I'm exploring NextJS and the potential it has whilst learning back-end technologies. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/nichej'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursour-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                        </div>
                    </a>
                    <a href='https://github.com/blurredvision'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursour-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href='/#about'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursour-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a>
                    <a href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursour-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main