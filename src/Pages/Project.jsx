import React from 'react'

export default function Project() {

  const project = [
    {
      title: "Smart Bazaar",
      image: "/ecommerce.png",
      description: "An Ecommerce platform for laptop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Poshanbista/E-commerce-using-MERN"
    },
    {
      title: "chatWeb",
      description: "A real time Chat web",
      image: "/chatWeb.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket"],
      link: "https://github.com/Poshanbista/chatWeb"
    },
  ]

  return (
    <section id='projects' className='pb-10'>
      <div className='ml-6 mr-6'>
        <h1 className='font-semibold text-4xl text-center'>Featured Projects</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500 rounded-full'></div>
        </div>

        <div className='grid grid-cols-3 gap-10 mt-10'>
          {project.map((pro, index) => (
            <div
              key={index}
              className='p-4  rounded shadow-xl hover:shadow-2xl grid gap-2'
            >
              {pro.image && (
                <img
                  src={pro.image}
                  alt={pro.title}
                  className='w-full h-48 object-cover border rounded mb-4'
                />
              )}

              <h1 className='font-bold'>{pro.title}</h1>
              <p>{pro.description}</p>

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
                  className='border bg-green-600 text-center p-2 rounded'
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
