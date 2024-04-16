import React from 'react'
import { Link } from 'react-router-dom'

function Button({link , text, active, iconLink}) {
  return (
    <div>
        <Link to={link}>
        <div className={`border-[1px] px-4 py-[0.4rem] rounded-[4px] flex items-center gap-2 dark:border-none 
        hover:scale-105 transition-all duration-150
        ${active ? "border-Purple text-Purple dark:bg-Pink dark:text-white dark:border-white" 
        : "bg-Purple text-white"}
         `}>
                {text}
            
        </div>
        </Link>
    </div>
  )
}

export default Button