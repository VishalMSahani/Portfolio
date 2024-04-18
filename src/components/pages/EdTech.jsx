import React from 'react'
import Button from '../Button'

function EdTech() {

    const FrontEndCode = "https://github.com/VishalMSahani/EdTech-Frontend"
    const BackendCode = "https://github.com/VishalMSahani/EdTech-Backend"

  return (
    <div className='flex h-screen w-screen justify-center dark:text-white
    flex-col gap-8  items-center'>
        <p className=' text-2xl text-center'>This Project is
         <span className='bg-Red p-1 mx-1 rounded-md'> ongoing</span> <br/> Please check the repository!</p>
        <div className='flex gap-4'>
        <Button text={"Frontend Code"} link={FrontEndCode} active={true}/>
        <Button text={"Backend Code"} link={BackendCode} active={false}/>
        </div>
    </div>
  )
}

export default EdTech