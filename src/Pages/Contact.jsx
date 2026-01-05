import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id='contact' className='pb-10'>
      <div className='ml-6 mr-6'>
        <h1 className='font-semibold text-4xl text-center'>Get In Touch</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500 rounded-full'></div>
        </div>

        <div className='flex h-screen mt-16 gap-x-10'>
          <div className='w-1/2'>
            <h1 className='font-bold text-2xl'>Let's talk about your project </h1>
            <p className='text-xl text-justify mt-8 text-gray-600'>I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop me a message!</p>

            <div className='mt-10 space-y-6'>
              <div className='flex items-start gap-4'>
                <MdOutlineEmail className='bg-gray-300 rounded text-5xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Email</p>
                  <p className='font-bold text-xl text-gray-600'>bistaposhan123@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <IoCallOutline className='bg-gray-300 rounded text-5xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Whatsapp</p>
                  <p className='font-bold text-xl text-gray-600'>9800580015</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <CiLocationOn className='bg-gray-300 rounded text-5xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Location</p>
                  <p className='font-bold text-xl text-gray-600'>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <p>Connect With Me</p>
              <div className='flex gap-x-10 mt-6 pl-8'>
                <a href='https://github.com/Poshanbista' target='blank' rel='noreferrer'>
                  <FiGithub size={25} />
                </a>
                <a href='https://www.linkedin.com/in/poshan-bista-bb1064349/' target='blank' rel='noreferrer'>
                  <FaLinkedinIn size={25} />
                </a>
              </div>
            </div>

          </div>


          <div className='w-1/2 '>
           
          </div>
        </div>
      </div>
    </section>
  )
}
