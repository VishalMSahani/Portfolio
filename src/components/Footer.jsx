import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <footer className='h-auto bg-NavyBlue flex flex-col justify-center items-center z-20
    font text-white gap-3 dark:bg-DarkGrey '>
      <div>
        <SocialMedia/>
      </div>
        <div className='flex justify-center items-center gap-1 mb-5' >
           Made with<AiFillHeart/>! by <span className='text-Pink'>Vishal Sahani</span>
        </div>
    </footer>
  )
}

export default Footer