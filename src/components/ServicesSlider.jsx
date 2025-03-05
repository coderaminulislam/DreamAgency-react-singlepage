import React from 'react';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { FcNext, FcPrevious  } from "react-icons/fc";


import { Navigation } from 'swiper/modules';
import ServicesData from '../dummyApi/ServicesData';
const ServicesSlider = () => {
    return (
        <>
        <Swiper 
          
          spaceBetween={30}  
          pagination={false}
          breakpoints={{
           0: {
            slidesPerView: 1,
           
          },
          768: {
            slidesPerView: 2,
          
          },
          1024: {
            slidesPerView: 4,
        
          },
        }} 
        navigation={{
          nextEl: ".next_icon_btn", 
          prevEl: ".prev_icon_btn", 
          clickable:true}}   
        modules={[Navigation]} className="services-swiper md:mb-12 ">
      
            {
              ServicesData.length> 0 ? ServicesData.map((item, i)=>(
                  <SwiperSlide key={item.id} className="bg-white px-6 py-5 shadow-lg ">
                      <img className="inline-block" src={item.icon} alt="icon" />
                      <h3 className='text-base text-secondary font-bold uppercase my-3'>{item.title}</h3>
                      <p className='font-light text-base'>{item.des}</p>
                  </SwiperSlide>
              )) : "Empty Data"
            }
              <div className="swiper-nav-btn inline-flex gap-6 mt-6 z-10">
              <button className='prev_icon_btn border-1 border-gray-700 outline-0 ring-0 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full'><FcPrevious size={20} /></button>
              <button className='next_icon_btn border-1 border-gray-700 outline-0 ring-0 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full'><FcNext  size={20}/></button>
              </div>
       
      
      </Swiper>
        </>
    );
};

export default ServicesSlider;