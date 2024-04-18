import React from 'react'
import Button from '../Button'

function Graphic() {

    const portfolioLink = "https://www.behance.net/gallery/187651867/Graphic-Design-Portfolio"

  return (
    <div className=' dark:bg-richblack-700 rounded-t-3xl 
     flex flex-col justify-center items-center mt-4 z-10  '>
    <div className='z-20 flex lg:flex-row max-md:flex-col justify-center items-center gap-5 mt-8 mb-12'>
        <div className="space-y-1 max-sm:flex max-sm:flex-col max-sm:items-center">
          <h2 className="text-3xl text-Pink  font-semibold tracking-tighter sm:text-4xl md:text-5xl">Gaphic Design 
          <span className='dark:text-white text-black' > Portfolio</span></h2>
          <p className="text-NavyBlue text-opacity-60 dark:text-richblack-5 w-[490px] max-sm:text-center
           text dark:text-gray-400 max-sm:w-[80%] ">
            Explore my graphic design portfolio showcasing 
            vibrant and innovative creations. Let my work speak for itself - 
            inspiring, engaging, and always pushing boundaries
          </p>
         </div>
        <div className=' flex flex-row z-10'>
        <iframe src="https://www.behance.net/embed/project/187651867?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"
         title="DesignPortfolio"></iframe>
        </div>
    </div>
        <div className='lg:hidden max-sm:block mt-3 mb-10'>
            <Button text={"Know More"} link={portfolioLink}/>
        </div>
        
    </div>
  )
}

export default Graphic