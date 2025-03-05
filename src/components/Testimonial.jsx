import React from 'react';
import quote from '../assets/images/quote.svg'
import testimonialData from '../dummyApi/TestimonialData';

const Testimonial = () => {
    return (
        <section className='py-16 px-8'>
            <div className="max-w-5xl mx-auto">
                <h2 className='text-5xl text-center leading-1.2'><span className='font-black'>Our Testimonials</span><br/> What Our Clients Are <span className='relative title_bottom_border'>Saying</span></h2>

                <div className="testimonai_cards flex-col flex md:flex-row gap-14 mt-14">
                    {
                        testimonialData.map((item, i)=>(
                            <div className="card_one shadow-lg px-5 py-7 hover:scale-105 transition-all duration-600 cursor-pointer" key={item.id}>
                                <img src={quote} alt="quote" />
                                <p className='text-text-color text-base mt-6 mb-3'>{item.desc}</p>
                                <h5 className="testimonial_name pl-6 relative font-semibold text-black text-base">{item.name}</h5>
                            </div>
                        ))
                    }
            

                    
                </div>

            </div>
            
        </section>
    );
};

export default Testimonial;