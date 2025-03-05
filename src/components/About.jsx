import React from 'react';
import about_img from '../assets/images/about-img.png'
const About = () => {
    return (
        <section>
            <div className="container mx-auto" id='about'>
                <div className="grid grid-cols-12 gap-6 justify-between items-center">
                    <div className=" col-span-12 lg:col-span-6">
                        <img className='max-h-[700px]' src={about_img} alt="img" />
                    </div>
                    <div className=" col-span-12 lg:col-span-6 px-10">
                        <h2 className="title font-light text-secondary text-left text-5xl"><span className='font-black'>About Us</span> <br/> Fake or <span className='relative title_bottom_border'>Real</span></h2>

                        <p className='text-text-color mt-7 leading-normal text-base mb-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='text-text-color leading-normal text-base mb-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <a href="#" className='bg-secondary text-white text-base font-bold px-9 py-5 hover:shadow-lg hover:bg-primary duration-300 ease-in-out rounded-lg inline-block mt-4'>Explore More</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default About;