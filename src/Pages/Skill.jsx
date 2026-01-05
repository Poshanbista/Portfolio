import React, { useRef } from 'react'

export default function Skill() {

  const skill = [
    "Node.js",
    "Express.js",
    "React.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "WebSockets",
    "Postman",
    "Nginx",
    "Tailwind css",
    "Debian VPS"
  ]

  

  return (
    <section id='skill' className='pb-10'>
      <div className='flex flex-col ml-6 mr-6'>
          <h1 className='font-semibold text-4xl text-center'>Technical Skills</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500  rounded-full'></div>
        </div>
        <p className='text-xl mt-5 text-center text-gray-600'>My technical proficiency spans across the entire web development stack.</p>

        <div className='grid grid-cols-4 gap-8 text-center mt-16'>
          {skill.map((skill, index) => (
            <span key={index}
              className='p-14 bg-gray-100 shadow-xl hover:shadow-2xl rounded-xl text-2xl font-medium transition'
            >{skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
