import React from 'react'

export default function Project() {

  const projects = [
    {
      title: "Smart Bazaar",
      image: "/ecommerce.png",
      description: "An Ecommerce platform for laptops",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Poshanbista/E-commerce-using-MERN"
    },
    {
      title: "chatWeb",
      image: "/chatWeb.png",
      description: "A real-time chat web app",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket"],
      link: "https://github.com/Poshanbista/chatWeb"
    },
  ]

  return (
    <section id='projects' className='pb-10'>
      <div className='mx-6 md:mx-20'>
        <h1 className='font-semibold text-4xl text-center'>Featured Projects</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {projects.map((pro, index) => (
            <div
              key={index}
              className='p-4 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col'
            >
              {pro.image && (
                <img
                  src={pro.image}
                  alt={pro.title}
                  className='w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4 border'
                />
              )}

              <h2 className='font-bold text-lg md:text-xl'>{pro.title}</h2>
              <p className='text-gray-700 mt-2 flex-1'>{pro.description}</p>

              <div className='mt-2 flex flex-wrap gap-2'>
                {pro.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='border px-2 py-1 rounded text-sm text-gray-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {pro.link && (
                <a
                  href={pro.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 text-center bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded transition'
                >
                  Code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
