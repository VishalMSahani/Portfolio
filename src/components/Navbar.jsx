import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import DarkLogo from '../assets/Logo Dark.png'
import { TbMoonStars } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";





function Navbar({toogleDark , isDarkMode}) {

  const tabs= [
    {
      "title": "Home",
      "path" : "/"
      
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
    <div className='flex font-normal dark:bg-richblack-700
    flex-row lg:justify-evenly justify-between  items-center h-16 pt-4 pb-1'>
      <div>
        <Link to={"/"}>
        <img  src={isDarkMode? DarkLogo : Logo}  alt="Logo" width={120}  />
        </Link>
      </div>
      
      <button onClick={toggleSidebar}
       className='lg:hidden mr-14 absolute right-0'>
      <IoReorderThreeOutline size={40} className={`text-Pink ${isOpen ? 'hover:text-Purple ' 
      : ''}   `} />
      </button>
      <div className={`lg:block ${isOpen ? 'hidden ' 
      : ''}`}>
          <ul className='lg:flex lg:gap-12 lg:mt-0 mt-60 lg:mr-0 mr-8 max-sm:w-[150px] lg:w-auto 
          transition-all duration-200 dark:text-white
          cursor-pointer lg:bg-none max-sm:rounded-md max-sm:px-12 max-sm:mr-4'>
            {
              tabs.map((item, index)=>{
                return(
                  <ul  key={index}
                  className={`${currentTab === item.title ? "text-Purple dark:text-Pink ":null} lg:mb-0 mb-5  `}
                  onClick={()=> setCurrenttab(item.title)}>
                   
                      <Link to={item?.path}>
                      <p>{item.title}</p>
                      </Link>
                   
                  </ul>
             )
              })
            }
          </ul>
      </div>
      <div className='flex items-center gap-3 '>
      <div className='hidden lg:block'>
        <Button active={true} link={"/Contact"} text={"Conatct Me"}/>
      </div>
      <button className='px-4' onClick={toogleDark}>
        {
          isDarkMode? <TbMoonStars className=' text-white text-opacity-90' size={30}/> :  <IoIosSunny size={30}/>
        }
      </button>
      
      </div>
    </div>
  )
}

export default Navbar

