import React from 'react'

export default function Skill() {

  const skills = [
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
    "Tailwind CSS",
    "Debian VPS"
  ]

  return (
    <section id='skill' className='pb-10'>
      <div className='flex flex-col mx-6 md:mx-20'>
        <h1 className='font-semibold text-4xl text-center'>Technical Skills</h1>

        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500 rounded-full'></div>
        </div>

        <p className='text-xl mt-5 text-center text-gray-600'>
          My technical proficiency spans across the entire web development stack.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='p-6 sm:p-8 bg-gray-100 shadow-xl hover:shadow-2xl rounded-xl text-lg sm:text-xl md:text-2xl font-medium transition transform hover:-translate-y-1'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
