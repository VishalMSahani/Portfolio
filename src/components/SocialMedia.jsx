import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

function SocialMedia({email}) {

  const emailid = "vishalsahani0808@gmail.com";

  return (
    <div className='  mt-4'>  
          
          
          <div className='flex px-4 py-2 rounded-md items-center gap-3 border border-opacity-20
           border-Pink dark:border-white opacity-70 shadow-md dark:text-white dark:border-opacity-20'>
            <Link to={"https://github.com/VishalMSahani"}>
              <BsGithub  size={35}/>
            </Link>

            <Link to={"https://www.linkedin.com/in/vishal-sahani-208250197/"}>
              <BsLinkedin  size={32}/>
            </Link>

            <Link to={`mailto:${emailid}`} className='flex items-center gap-2 text'>
              <MdEmail   size={40}/> {
                email ? <p>{emailid}</p> : null
              } </Link>
 
            </div>
          </div>
  )
}

export default SocialMedia