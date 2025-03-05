import React, { useState } from 'react';
import white_logo from '../assets/images/white_logo.svg'
import { CloudCog } from 'lucide';
const Footer = () => {

    const[formData, setFormData]=useState({email:""})

    const handleChange = (e) => {
        e.preventDefault()
      setFormData((prev)=>({
        ...prev, [e.target.name]: e.target.value
      }))
    }
    const handleSubmit =(e) => {
      e.preventDefault();
       alert(`Form Submit done. Your email : ${formData}`)
    }


    return (
        <div className='bg-black rounded-tr-[158px] py-24 px-6' id='contact'>
           <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className="footer_logo text-white md:max-w-[40%] mb-8">
                <img src={white_logo} alt="" />
                <p className='my-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

                <h5 className='uppercase font-semibold'>Get in touch</h5>
                <form className='w-full flex mt-3' onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={formData.email} name='email' placeholder='Enter Your Eamil' className=' flex-1 text-base uppercase text-white border-1 px-4 py-5 focus:outline-0' />
                    <button type='submit' className='bg-white cursor-pointer z-10 text-secondary font-semibold uppercase px-12 py-5 border-1 border-white '>Send</button>
                </form>
            </div>
            <div className="footer_map w-full md:max-w-[50%]">
                <div className="google_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.01853423072!2d89.22080982867797!3d25.74987366298854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1740979105719!5m2!1sen!2sbd" height="300"  width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           </div>


        </div>
    );
};

export default Footer;