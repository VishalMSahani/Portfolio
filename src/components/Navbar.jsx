import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import DarkLogo from '../assets/Logo Dark.png'
import { TbMoonStars } from "react-icons/tb";
import { IoIosSunny } from "react-icons/io";
import './NavBar.css'


export  const tabs= [
    {
      "title": "Home",
      "path" : "/",
      "id" : "home"
      
    },
    {
      "title": "About",
      "id" : "about"
      
    },
    {
      "title": "Project",
      "id" : "project"
      
    },
    {
      "title": "Skills",
      "id" : "skills"
      
      
    }
  ]

function Navbar({toogleDark , isDarkMode , scrollToSection}) {
  
  const [currentTab, setCurrentTab] = useState(tabs[0].title);
  const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    

  return (
    <div className='flex font-normal dark:bg-richblack-700 
    flex-row lg:justify-evenly justify-between  items-center h-16 pt-4 pb-1'>
      <div className='max-sm:ml-40' >
        <Link to={"/"}>
        <img  src={isDarkMode? DarkLogo : Logo}  alt="Logo" width={120}  />
        </Link>
      </div>
      
      
      <div >
          <ul className='lg:flex lg:gap-12 lg:mt-0 mt-60 lg:mr-0 mr-8 max-sm:w-[150px] lg:w-auto 
          transition-all duration-200 dark:text-white
          lg:bg-none max-md:hidden '>
            {
              tabs.map((item, index)=>{
                return(
                  <ul  key={index}
                  className={`${currentTab === item.title ? "text-Purple dark:text-Pink ":null} lg:mb-0 mb-5  `}
                  onClick={()=> setCurrentTab(item.title)}>
                   
                      <Link to={item?.path} onClick={()=> scrollToSection(item.id)} >
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


        {/* Mobile NavBar Design */}
        <div className='lg:hidden xl:hidden'>
      {/* Sidebar toggle button */}
      <button onClick={toggleSidebar} className="toggle-button text-Purple">
        <IoReorderThreeOutline size={40} />
      </button>

      {/* Overlay and sidebar */}
      {isOpen && (
        <div>
          <div className="overlay" onClick={toggleSidebar}></div>
          <div className="sidebar open">
            <ul className="mt-20">
              {tabs.map((item, index) => (
                <li key={index} className="mb-5" onClick={() => setCurrentTab(item.title)}>
                  <Link
                    to={item?.path}
                    className={`block  ${currentTab === item.title ? 'text-Pink font-semibold' : ''} `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>



      <button className='px-4 ' onClick={toogleDark}>
        {
          isDarkMode? <TbMoonStars className=' text-white text-opacity-90' size={30}/> :  <IoIosSunny size={30}/>
        }
      </button>
      
      </div>



        
      
       


    </div>
  )
}

export default Navbar

