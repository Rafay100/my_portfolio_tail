import React from 'react'
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
          <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
            Drop me aline, give me acall, or send me a message by submitting the form.
          </p>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <LuMail  size={20} /> srafay2021@gmail.com
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <BsTelephone size={20} /> 031-6161-2741
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <CiLinkedin size={20} /> SYED ABDUL RAFAY
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
          <AiOutlineGithub size={20} /> Rafay100
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h[40px] bg-transparent boder boder-accent'
            id='name'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h[40px] bg-transparent boder boder-accent'
            id='email'/>
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='bg-transparent boder boder-accent'
            id='msg' rows={8}>
            </textarea>
          </div>
          <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
