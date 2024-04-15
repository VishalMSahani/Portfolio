import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";


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

  const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    

  return (
    <div className='flex font-normal
    flex-row lg:justify-evenly justify-between  items-center h-16 mt-2'>
      <div>
        <Link to={"/"}>
        <img src={Logo} alt="Logo" width={120}  />
        </Link>
      </div>
      
      <button onClick={toggleSidebar}
       className='lg:hidden mr-8 absolute right-0'>
      <IoReorderThreeOutline size={40} className={`text-Pink ${isOpen ? 'hover:text-Purple ' 
      : ''}   `} />
      </button>
      <div className={`lg:block ${isOpen ? 'hidden ' 
      : ''}`}>
          <ul className='lg:flex lg:gap-12 lg:mt-0 mt-60 lg:mr-0 mr-8 max-sm:w-[150px] lg:w-auto 
          transition-all duration-200
          cursor-pointer lg:bg-none max-sm:rounded-md max-sm:px-12 max-sm:mr-4'>
            {
              tabs.map((item, index)=>{
                return(
                  <ul  key={index}
                  className={`${currentTab === item.title ? "text-Purple":null} lg:mb-0 mb-5 `}
                  onClick={()=> setCurrenttab(item.title)}>
                   
                      <p>{item.title}</p>
                   
                  </ul>
             )
              })
            }
          </ul>
      </div>
      <div className='hidden lg:block'>
        <Button active={true} link={"/Contact"} text={"Conatct Me"}/>
      </div>
      
    </div>
  )
}

export default Navbar

