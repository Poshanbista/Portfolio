import React, { useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


export default function About() {



  return (
    <section id='about' className='pt-32 pb-20'>
      <div className='flex h-screen ml-6 mr-6'>
        <div className='w-1/2 h-full'>
          <p className='bg-gray-300 rounded-full inline p-1 px-2 font-semibold text-blue-500'>
            Available for hire
          </p>
          <p className='font-bold text-7xl mt-4'>Hi, I'm <span className='text-blue-500'>Poshan Bista</span></p>

          <p className='font-semibold text-2xl mt-4'>Full Stack Developer</p>

          <p className='text-xl mt-4 text-gray-600'>I have some experience as a full stack
            developer from internships and stuff I built on my own. It feels good to work
            on web apps that actually respond well and can handle more users,using things
            like React.js for the front and Node.jswith Express.js on the back end. MongoDB
            comes in for the database part too.I get the basics of frontend pretty well, HTML
            and CSS are straightforward, and I like how Tailwind CSS makes styling faster, plus
            JavaScript ties it alltogether. Backend wise, Ive done RESTful APIs and figured out
            authentication, which was tricky at first. Database design is something Im still
            getting comfortable with.</p>

          <div className='mt-8 flex gap-8 '>
            <a href='#contact'
              className='flex justify-center items-center gap-3 bg-blue-500 p-3 text-white font-semibold rounded-xl'>
              Contact Me
              <FaArrowRightLong size={20} />
            </a>
            <a
              href='/files/PoshanBista_FullStackDeveloper_Resume.pdf'
              download
              className='flex justify-center items-center gap-3 border p-3 font-semibold rounded-lg'>
              Download Resume
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        <div className='w-1/2 flex justify-center items-center '>
          <img
            src='/profile.jpg'
            alt='profile'
            className='mt-1'
          />
        </div>
      </div>
    </section>
  )
}
