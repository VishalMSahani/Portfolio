import React from 'react'
import Button from '../Button'

function Extra() {
  return (
    <div className='flex h-screen w-screen justify-center dark:text-white
    flex-col gap-8  items-center'>
        <p className=' text-2xl'>Under Process Coming Soon!</p>
        <div className='flex gap-4'>
        <Button text={"Go to code"} active={true}/>
        <Button text={"Home"} link={"/"} active={false}/>
        </div>
    </div>
  )
}

export default Extra