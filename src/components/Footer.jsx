import React from 'react'
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <footer className='h-10 bg-NavyBlue flex justify-center items-center
    font text-white'>
        <div className='flex justify-center items-center gap-1' >
           Made with<AiFillHeart/>! by <span className='text-Pink'>Vishal Sahani</span>
        </div>
    </footer>
  )
}

export default Footer