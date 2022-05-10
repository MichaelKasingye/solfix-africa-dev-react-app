import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const className = "sidebar-text"
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <IoIcons.IoIosPaper className="icon"/>,
        cName: className
    },
    {
        title: 'Factorial',
        path: '/factorial',
        icon: <AiIcons.AiFillHome className="icon"/>,
        cName: className
    },
    
    {
        title: 'Square root',
        path: '/squareroot',
        icon: <IoIcons.IoIosPaper className="icon"/>,
        cName: className
    },
    {
        title: 'Results',
        path: '/results',
        icon: <FaIcons.FaCartPlus className="icon"/>,
        cName: className
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoMdPeople className="icon"/>,
        cName: className
    },
    {
        title: 'Sign out',
        path: '/login',
        icon: <IoIcons.IoMdPeople className="icon"/>,
        cName: className
    }
]