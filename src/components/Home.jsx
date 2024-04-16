import React from 'react'
import Button from './Button'
import Image from '../assets/Vishal Image.svg'
import SocialMedia from './SocialMedia';
import { BiCloudDownload } from "react-icons/bi";



function Home() {
  return (
    <div className='w-full flex justify-center items-center lg:h-screen
       max-sm:h-[500px] bg-white dark:bg-richblack-800'>
      <div className='flex flex-row justify-center w-11/12 h-screen items-center '>
        <div className='flex flex-col w-[472px] max-sm:gap-3'>
          <p className='text-lg text-NavyBlue dark:text-white text-opacity-60 font-semibold'>Hey, 
          <span className='text-Pink'> Vishal</span> here!</p>
          
          <p className=' dark:text-white text-[50px] font-bold leading-tight m-0'>
            I'm a 
            <span className='text-Purple'> FullStack </span>
             Developer
          </p>
          <p className=' dark:text-white font-light opacity-75 text-sm'>I design and develop websites with thon's of functionality including Frontend and Backend</p>

          <SocialMedia email={true}/>          
          <div className='flex mt-3'>
            
          <Button text={<>Resume <BiCloudDownload size={20}/></>} 
          active={false} link={"/Conatct"}/>
          </div>
        </div>
        <div className='lg:block max-sm:hidden flex items-center justify-center '>
          <img src={Image} alt=""  width={480} loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default Home