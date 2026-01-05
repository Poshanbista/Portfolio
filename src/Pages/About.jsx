import React, { useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";


export default function About() {



  return (
    <section id='about' className='pt-32 pb-10'>
      <div className='flex h-screen ml-6 mr-6'>
        <div className='w-1/2 h-full'>
          <p className='bg-gray-300 rounded-full inline p-1 px-2 font-semibold text-blue-500'>
            Available for hire
          </p>
          <p className='font-bold text-7xl mt-4'>Hi, I'm <span className='text-blue-500'>Poshan Bista</span></p>

          <p className='font-semibold text-2xl mt-4'>Full Stack Developer</p>

          <p className='text-xl mt-4 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quis distinctio modi, mollitia velit sapiente excepturi qui
            beatae ea reprehenderit dolorum neque minima voluptatem
            consequatur provident laudantium. Dolor ab debitis blanditiis impedit.
            Dicta praesentium rerum atque, corrupti ea aliquam suscipit fugit
            eos tempora provident earum blanditiis quia eligendi neque impedit
            modi dolore quaerat architecto quod aut at quis nostrum aperiam!
            Ratione dolorum maxime quas eius. Deleniti accusantium corrupti
            tempora impedit a amet odio! Voluptates temporibus earum esse
            similique laborum ea magni, tempora ex vel eveniet quo nostrum, atque iste, eaque ad quidem.
            Voluptates debitis deleniti exercitationem animi unde in aliquid voluptatibus!</p>

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
