import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Button from './Button';
import { Link } from 'react-router-dom';

function Navbar() {

  const tabs= [
    {
      "title": "Home",
      
    },
    {
      "title": "About",
      
    },
    {
      "title": "Project",
      
    },
    {
      "title": "Skills",
      
    }
  ]
  

  const [currentTab, setCurrenttab] = useState(tabs[0].title);

  return (
    <div className='flex font-normal
    flex-row justify-evenly items-center h-16 mt-2'>
      <div>
        <Link to={"/"}>
        <img src={Logo} alt="Logo" width={120}  />
        </Link>
      </div>
      <div>
          <ul className='flex gap-6 cursor-pointer'>
            {
              tabs.map((item, index)=>{
                return(
                  <ul key={index}
                  className={`${currentTab === item.title ? "text-Purple":null} `}
                  onClick={()=> setCurrenttab(item.title)}>
                   
                      <p>{item.title}</p>
                   
                  </ul>
             )
              })
            }
          </ul>
      </div>
      <div>
        <Button active={true} link={"/Contact"} text={"Conatct Me"}/>
      </div>
    </div>
  )
}

export default Navbar

