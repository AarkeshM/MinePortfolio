import React from 'react'
import { education, skills } from '../constants'

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow '>
          {" "}
          Aarkesh
        </span>{" "}
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p >
          Seeking to kickstart my career in a dynamic and growth-oriented organization where I can apply my
          academic knowledge, enhance my professional skills, and make meaningful contributions to the
          company's objectives while continuously growing both personally and professionally.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text bg-gradient-to-r from-orange-300 via-pink-500 to-green-500 bg-clip-text text-transparent font-semibold drop-shadow'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-14'>
          {skills.map((skill, index) => {
            return (
              <div className='block-container w-20 h-20' key={index} >
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='suhead-text'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            📚 "Education isn’t just about learning facts; it's about understanding how to apply them in real life."
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((edu, index) => {
              return (
                <VerticalTimelineElement key={index} date={edu.data} iconStyle={{background: edu.iconBg}}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img src={edu.icon} alt={edu.school_name}  className='w-[60%] h-[60%] object-contain'/>
                  </div>
                } 
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: edu.iconBg,
                  boxShadow: "none",
                }}
                >
                  <div>
                    <h3 className='text-gray-500 text-xl font-poppins font-semibold'>{edu.title}</h3>
                    <p className='text-slate-500/30 font-medium text-base' style={{margin: 0}}>{edu.school_name}</p>
                    <p className='text-slate-500/30 font-medium text-base' style={{margin: 0}}>{edu.location}</p>
                    <p className='text-slate-500/30 font-medium text-base' style={{margin: 0}}>{edu.group}</p>
                    <p className='text-slate-500/30 font-medium text-base' style={{margin: 0}}>{edu.percentage}</p>
                    
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" /> 
      <CTA />
    </section>
  )
}


export default About