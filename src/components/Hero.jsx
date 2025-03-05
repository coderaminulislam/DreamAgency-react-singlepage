import React from 'react';
import hero_img from '../assets/images/hero_img.png';
import hero_bg from '../assets/images/hero_bg.svg';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className='relative'>
            <div className="container mx-auto" id='home'>
            <Navbar/>
            <div className="grid grid-cols-12 gap-7 justify-between items-center w-full h-[100vh] lg:h-[90vh] md:h-[60vh] px-6 md:px-0" >
                <div className="col-span-12 md:col-span-5 pt-12 md:pt-0">
                    <h1 className="title text-secondary text-5xl lg:text-7xl leading-none ">
                    <span className='font-black'>We Help you</span> <br/> to grow your <br/>
                    <span className='relative'> Business</span>
                    </h1>
                    <p className='text-[17px] text-text-color my-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#" type='button' className="btn hover:bg-primary duration-300 ease-in-out hover:shadow-lg uppercase bg-secondary text-white rounded-lg px-9 py-5 inline-block font-bold">get started</a>
                </div>
                <div className="md:col-span-7 col-span-12 flex justify-end items-center">
                    <img src={hero_img} alt="" />
                </div>
            </div>
            </div>
            <div className="hero_bg absolute top-0 right-0 -z-1">
                <img src={hero_bg} alt="" />
            </div>
        </div>
    );
};

export default Hero;