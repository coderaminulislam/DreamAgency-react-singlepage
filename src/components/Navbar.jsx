import React, { useState } from 'react';
import logo from '../assets/images/Dream Agency.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBars    } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false)
    //Smooth Scroll Handler
    const handleScroll =(e, targetId)=>{
        e.preventDefault();
        const targetelement = document.getElementById(targetId);
        if(targetelement){
            targetelement.scrollIntoView({behavior: "smooth"})
        }
    }
    return (
        <div className='w-full mx-auto pt-6 md:py-12 px-6 md:px-0'>
        
            <div className="grid grid-cols-12 justify-between items-center">
                <div className="col-span-6 lg:col-span-5">
                    <nav className='flex justify-between'>
                        <button className='z-50 md:hidden' onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ?<IoMdClose />: <FaBars />}</button>
                        <ul className={` px-8 pt-16 ${menuOpen ? "absolute left-0 right-0 bg-orange-50 top-0 h-screen z-10 w-[60%] block visible": "hidden"}`}>
                            <li className='mb-5'><a onClick={(e)=>handleScroll(e,"home")} className='relative hover:font-bold transition-all duration-300' href="">Home</a></li>
                            <li className='mb-5'><a onClick={(e)=>handleScroll(e,"about")} className='relative hover:font-bold transition-all duration-300' href="">About Us</a></li>
                            <li className='mb-5'><a onClick={(e)=>handleScroll(e,"services")} className='relative hover:font-bold transition-all duration-300' href="">Services</a></li>
                            <li className='mb-5'><a onClick={(e)=>handleScroll(e,"contact")} className='relative hover:font-bold transition-all duration-300' href="">Contact Us</a></li>
                        </ul>
                        <ul className='space-x-9 font-hind text-base hidden md:inline-flex'>
                            <li><a onClick={(e)=>handleScroll(e,"home")} className='relative hover:font-bold transition-all duration-300' href="">Home</a></li>
                            <li><a onClick={(e)=>handleScroll(e,"about")} className='relative hover:font-bold transition-all duration-300' href="">About Us</a></li>
                            <li><a onClick={(e)=>handleScroll(e,"services")} className='relative hover:font-bold transition-all duration-300' href="">Services</a></li>
                            <li><a onClick={(e)=>handleScroll(e,"contact")} className='relative hover:font-bold transition-all duration-300' href="">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-span-6 lg:col-span-4 flex justify-end lg:justify-center items-center">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className="hidden lg:block col-span-12  lg:col-span-3 ">
                    <div className="social_icons flex space-x-6 justify-end items-center">
                        <a className='hover:scale-105 hover:border-primary duration-300 ease-linear w-[43px] h-[49px] border-2 border-border-color inline-flex items-center justify-center rounded-full rotate-[30deg]' href="">
                        <FaFacebookF className='rotate-[-30deg] text-text-color' />
                        </a>
                        <a className='hover:scale-105 hover:border-primary duration-300 ease-linear w-[43px] h-[49px] border-2 border-border-color inline-flex items-center justify-center rounded-full rotate-[30deg]' href="">
                        <FaInstagram  className='rotate-[-30deg] text-text-color' />
                        </a>
                        <a className='hover:scale-105 hover:border-primary duration-300 ease-linear w-[43px] h-[49px] border-2 border-border-color inline-flex items-center justify-center rounded-full rotate-[30deg]' href="">
                        <FaLinkedinIn  className='rotate-[-30deg] text-text-color' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Navbar;