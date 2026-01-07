import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id='contact' className='pb-20'>
      <div className='mx-6 md:mx-20'>
        <h1 className='font-semibold text-4xl text-center'>Get In Touch</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500 rounded-full'></div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 mt-16'>
          {/* Left Column - Contact Info */}
          <div className='flex-1'>
            <h1 className='font-bold text-2xl'>Let's talk about your project</h1>
            <p className='text-gray-600 mt-6 text-justify text-base sm:text-lg'>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop me a message!
            </p>

            <div className='mt-10 space-y-6'>
              <div className='flex items-start gap-4'>
                <MdOutlineEmail className='bg-gray-300 rounded p-2 text-4xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Email</p>
                  <p className='font-bold text-lg sm:text-xl text-gray-600'>bistaposhan123@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <IoCallOutline className='bg-gray-300 rounded p-2 text-4xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Whatsapp</p>
                  <p className='font-bold text-lg sm:text-xl text-gray-600'>9800580015</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <CiLocationOn className='bg-gray-300 rounded p-2 text-4xl text-blue-500 mt-1' />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-500'>Location</p>
                  <p className='font-bold text-lg sm:text-xl text-gray-600'>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <p className='font-semibold'>Connect With Me</p>
              <div className='flex gap-6 mt-4'>
                <a href='https://github.com/Poshanbista' target='_blank' rel='noreferrer'>
                  <FiGithub size={28} className='hover:text-blue-500 transition' />
                </a>
                <a href='https://www.linkedin.com/in/poshan-bista-bb1064349/' target='_blank' rel='noreferrer'>
                  <FaLinkedinIn size={28} className='hover:text-blue-500 transition' />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Optional: Contact Form or Image */}
          <div className='flex-1'>
            {/* Example: simple contact form */}
            <form className='flex flex-col gap-4'>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
