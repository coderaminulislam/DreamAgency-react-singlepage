import React from 'react';

import borderdot from '../assets/images/dot-border.svg'
import ServicesSlider from './ServicesSlider';
import { motion } from "framer-motion";
import{fadeIn} from '../variants'

const Services = () => {
    return (
        <section className='w-full relative py-24 min-h-[652px]' id='services'>
            <div className="container mx-auto">
            <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className="section_title flex justify-center">
                <h2 className="title text-5xl text-secondary text-center leading-none"><span className='font-black block'>What We Do</span> For Your <span className='relative title_bottom_border '>Business</span></h2>
            </motion.div>
            </div>
           
              <div className='mt-16 ml-auto relative px-6 md:px-0 md:max-w-[80%]'>
              <ServicesSlider/>
              </div>
         
            <div className="bg-primary-bg h-[500px] absolute top-0 left-0 right-24 -z-10 bottom-0 rounded-tr-full"></div>
            <img className='absolute -z-20 right-0 bottom-0 top-50 transform translateY-10 w-fit' src={borderdot} alt="" />

            
        </section>
    );
};

export default Services;