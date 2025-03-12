import React from 'react'
import { projects } from '../constants'
import { arrow } from '../assets/icons'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-orange-200'>
        My{" "} 
        <span className='bg-gradient-to-r from-orange-300 via-pink-500 to-green-500 bg-clip-text text-transparent drop-shadow-2xl font-semibold'>Projects</span>
      </h1>
      
      <p className='mt-5'>
      I am passionate about developing projects that combine functionality with user-friendly design.
      My skills include building responsive web applications, implementing efficient features, and ensuring smooth performance. 
      I focus on delivering practical solutions that meet real-world needs!
      </p>
      <div className='flex flex-wrap my-20 gap-20'>
        {
          projects.map((project,index)=>{
            return (
              <div className='lg:w-[400px] w-full' key={index}>
                <div className='block-container w-12 h-12'> 
                  <div className={`btn-back roundex-xl ${project.theme}`}>
                    <div className='btn-front rounded-xl flex justify-center items-center'> 
                      <img src={project.iconUrl} alt="project" className='w-1/2 h-1/2 object-contain' />
                    </div>
                  </div>
                </div>
                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-poppins bg-gradient-to-r from-pink-300 via-purple-500 to-green-600 bg-clip-text text-transparent drop-shadow-2xl font-semibold'>{project.name} </h4>
                  <p className='mt-2 text-slate-500'>{project.description}</p>
                  <div className='mt-5 items-center gap-8j font-poppins'>
                    <Link to={project.link} rel='noopener noreferrer' className='font-semibold text-blue-600'>
                      Live Link
                    </Link>
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects