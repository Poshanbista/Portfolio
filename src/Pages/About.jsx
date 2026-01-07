import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section id='about' className='pt-32 pb-20'>
      <div className='flex flex-col-reverse md:flex-row items-center md:items-start mx-6 md:mx-20 gap-10 md:gap-20'>

        {/* Text Section */}
        <div className='flex-1'>
          <p className='bg-gray-300 rounded-full inline p-1 px-2 font-semibold text-blue-500'>
            Available for hire
          </p>

          <p className='font-bold text-5xl sm:text-6xl md:text-7xl mt-4'>
            Hi, I'm <span className='text-blue-500'>Poshan Bista</span>
          </p>

          <p className='font-semibold text-xl sm:text-2xl mt-4'>Full Stack Developer</p>

          <p className='text-gray-600 text-base sm:text-lg mt-4 leading-relaxed'>
            I have some experience as a full stack developer from internships and personal projects.
            I enjoy building web apps that respond well and handle multiple users, using React.js for the frontend
            and Node.js with Express.js for the backend. MongoDB handles the database. I understand the basics of
            frontend development with HTML, CSS, and Tailwind CSS for fast styling. Backend-wise, I've worked with
            RESTful APIs and authentication. Database design is something I’m continuously improving.
          </p>

          <div className='mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8'>
            <a href='#contact'
              className='flex justify-center items-center gap-3 bg-blue-500 p-3 text-white font-semibold rounded-xl hover:bg-blue-600 transition'>
              Contact Me
              <FaArrowRightLong size={20} />
            </a>

            <a
              href='/files/PoshanBista_FullStackDeveloper_Resume.pdf'
              download
              className='flex justify-center items-center gap-3 border p-3 font-semibold rounded-lg hover:bg-gray-100 transition'>
              Download Resume
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex-1 flex justify-center md:justify-end'>
          <img
            src='/profile.jpg'
            alt='profile'
            className='w-64 sm:w-80 md:w-96 rounded-full shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}
