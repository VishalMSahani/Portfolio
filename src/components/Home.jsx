import React from 'react'
import Button from './Button'
import Image from '../assets/Vishal Image.svg'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { BiCloudDownload } from "react-icons/bi";



function Home() {
  return (
    <div className='w-full flex justify-center items-center lg:h-screen
       max-sm:h-[500px] bg-white'>
      <div className='flex flex-row justify-center w-11/12 h-screen items-center '>
        <div className='flex flex-col w-[472px] max-sm:gap-3'>
          <p className='text-lg text-NavyBlue text-opacity-60 font-semibold'>Hey, 
          <span className='text-Pink'> Vishal</span> here!</p>
          
          <p className=' text-[50px] font-bold leading-tight m-0'>
            I'm a 
            <span className='text-Purple'> FullStack </span>
             Developer
          </p>
          <p className='font-light opacity-75 text-sm'>I design and develop websites with thon's of functionality including Frontend and Backend</p>

          <div className='  mt-4'>  
          
          
          <div className='flex px-4 py-2 rounded-md items-center gap-3 border border-opacity-20
           border-Pink opacity-70 shadow-md '>
            <Link to={"https://github.com/VishalMSahani"}>
              <BsGithub  size={35}/>
            </Link>

            <Link to={"https://github.com/VishalMSahani"}>
              <BsLinkedin  size={32}/>
            </Link>

            <Link to={"https://github.com/VishalMSahani"} className='flex items-center gap-2 text'>
              <MdEmail   size={40}/> <p>vishalsahani0808@gmail.com</p> </Link>
 
            </div>
          </div>
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