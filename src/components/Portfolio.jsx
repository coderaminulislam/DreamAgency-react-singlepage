import React from 'react';
import portfolioData from '../dummyApi/PortfolioData';
import { motion } from "framer-motion";
import{fadeIn} from '../variants'

const Portfolio = () => {
    return (
        <section  className='portfolio w-full relative py-24'>
            <div className="container mx-auto">
                <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className="grid grid-cols-12 justify-between items-center px-8">
                    <div className="title_part col-span-12 lg:col-span-8 mb-5">
                        <h2 className='text-5xl text-secondary'><span className='font-black'>Our Recent Work</span> <br/> By Our <span className='relative title_bottom_border'>Experts</span></h2>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <p className='text-text-color text-base'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className="grid grid-cols-12 mt-10 gap-6 px-8">
                    {
                        portfolioData.map((item, i)=>(
                            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={item.id}>
                                <div className="port_card shadow-lg rounded-lg p-5 bg-white hover:scale-105 ease-in-out cursor-pointer duration-300">
                                    <img src={item.image} alt="image" />
                                    <div className="title_btn py-9 flex justify-between">
                                        <h4 className='font-bold text-secondary text-xl flex-1'>{item.title}</h4>
                                    <a href={item.link} className='border-1 rounded-full border-border-color text-secondary text-sm px-3 py-2 capitalize font-medium hover:shadow-lg hover:border-primary hover:bg-primary hover:text-white ease-in-out duration-300 '>view work</a>
                                
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                  
                    
                </motion.div>
            </div>
            <span className="background_bg bg-secondary-bg absolute top-0 right-0 bottom-0 left-24 rounded-tl-full -z-10"></span>
            
        </section>
    );
};

export default Portfolio;