import React, {useRef} from 'react'
import htmllogo from '../assets/skill/html.svg'
import js from '../assets/skill/js.svg'
import Reactlogo from '../assets/skill/React.svg'
import Tailwind from '../assets/skill/Tailwind.svg'
import css from '../assets/skill/css.svg'
import python from '../assets/skill/python.svg'
import mongo from '../assets/skill/mongo.svg'
import express from '../assets/skill/express.svg'
import git from '../assets/skill/git.svg'
import { tabs } from './Navbar'


  const skills =  [
    {
      "name": "HTML",
      "logo": htmllogo
    },
    {
      "name": "CSS",
      "logo": css
    },
    {
      "name": "JavaScript",
      "logo": js
    },
    {
      "name": "React",
      "logo": Reactlogo
    },
    {
      "name": "Express Js",
      "logo": express
    },
    {
      "name": "Taiwind CSS",
      "logo": Tailwind
    },
    {
      "name": "MongoDB",
      "logo": mongo
    },
    {
      "name": "Python",
      "logo": python
    },
    {
      "name": "Git & GitHub",
      "logo": git
    },
  ]



function Skills() {

  const skillRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionRef = {
      "skill" : skillRef
    };

    const selectedRef = sectionRef[sectionId];
    if(selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({behavior:"smooth"});
    }

  };



  return (
    <section scrollToSection={scrollToSection} ref={skillRef}
     id='skills' className="w-full flex justify-center items-center py-12 lg:py-16 xl:py-20">
    <div className="container px-4 grid max-w-3xl items-center justify-center space-y-6 text-center md:gap-10 md:px-6 md:text-left lg:grid-cols-3 lg:gap-8 lg:max-w-5xl xl:gap-10">
      <div className="space-y-3 lg:col-span-3">
        <div ref={skillRef} className="space-y-2">
          <h2 className="text-3xl dark:text-white font-semibold tracking-tighter sm:text-4xl md:text-5xl">Technical 
          <span className='text-Purple' > Skills</span></h2>
          <p className="text-NavyBlue text-opacity-60 dark:text-white
           md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of my skills and expertise.
          </p>
         
        </div>
        <div className="dark:text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
           {
            skills.map((skill, index)=>{
              return(
                <div className=' hover:bg-Pink transition-all duration-300 hover:text-white
                py-1 border border-NavyBlue border-opacity-15 dark:border-white dark:border-opacity-25 
                 dark:bg-richblack-700 dark:shadow-sm dark:shadow-white dark:hover:bg-richblack-800
                 shadow-sm flex items-center rounded gap-2'
                 key={index}>

                  <img className='hover:scale-105 transition-all duration-200'
                  src={skill.logo} alt={skill.name} width={50}  />
                  <h3 className=" font-semibold tracking-wide mr-2">{skill.name}</h3>
                </div>
              )
            })
           }
          </div>
          </div>
          </div>
          </div>
          </section>

  )
}

export default Skills