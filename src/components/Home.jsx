import React from 'react'
import Button from './Button'
import Image from '../assets/Vishal Image.svg'


function Home() {
  return (
    <div className='w-full flex justify-center items-center h-screen bg-white'>
      <div className='flex flex-row justify-center w-11/12 h-screen items-center'>
        <div className='flex flex-col w-[472px] '>
          <p className='text-sm'>Hey, Vishal here!</p>
          <p className=' text-[50px] font-bold leading-tight m-0'>
            I'm a 
            <span className='text-Purple'> FullStack </span>
             Developer
          </p>
          <p>I design and develop websites with thon's of functionality including Frontend and Backend</p>
          <div className='flex mt-3'>
          <Button text={"Get in toch"} active={false} link={"/Conatct"}/>
          </div>
        </div>
        <div className='flex items-center justify-center '>
          <img src={Image} alt=""  width={480} loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default Home