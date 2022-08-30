import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'

import Hulu from '../public/assets/projects/Hulu.png'
import Instagram from '../public/assets/projects/Instagram.png'
import Valips from '../public/assets/projects/Valips.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title='Hulu-Clone' image={Hulu} url='/hulu' />
            <ProjectItem title='Instagram-Clone' image={Instagram} url='/instagram' />
            <ProjectItem title='Valips' image={Valips} url='/valips' />
            
            </div>
        </div>
    </div>
  )
}

export default Projects