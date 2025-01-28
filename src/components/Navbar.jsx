import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    let Links = [
        {name:"HOME", link:"/"},
        {name:"SERVICES", link:"/services"},
        {name:"PROJECTS", link:"/projects"},
        {name:"CONTACT", link:"/contact"},
    ]
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="nav w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-black md:bg-transparent py-4 md:px-10">
        <div className="w-full md:w-[15%] md:pl-9 px-3 text-2xl cursor-pointer flex items-center font-semibold text-white">
         Newel Residential Remodeling
        </div>
        <div onClick={()=>setShowMenu(!showMenu)} className="absolute right-8 top-6 cursor-pointer md:hidden">
            {showMenu ? 
        <img width={22} height={22} src={assets.close_icon} alt="" />
            :
        <img width={25} height={25}  src={assets.menu_icon} alt="" />
        }
        </div>
        <div className={`flex flex-col gap-5 md:flex-row pt-5 md:items-center md:pb-0 pb-12 absolute md:static bg-black md:bg-transparent md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${showMenu ? 'top-20 opacity-100':'top-[-490px] opacity-0 md:opacity-100'}`}>
            {
                Links.map((link)=>(
                    <Link to={link.link} className="md:ml-8 font-semibold text-white hover:text-[#feae97] duration-500">{link.name}</Link>
                ))
            }
             <button type='submit' className='md:ml-4 font-semibold w-2/4 md:w-full text-white px-5 py-2 hover:bg-white duration-500 hover:text-[#feae97]'
                style={{border:"1px solid white"}}>CALL NOW</button>
        </div>
        </div>
    </div>

  );
};

export default Navbar;
