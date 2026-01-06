import React from 'react'

export default function Education() {

  const education = [
    {
      degree: "Bachelor of computer Application (BCA)",
      institute: "Patan Multiple Campus",
      year: "2021 – Present",
      location: "Patandhoka, lalitpur Nepal"
    },
    {
      degree: "+2",
      institute: "Gorkha College Dang",
      year: "Completed",
      location: "Tulsipur, Dang Nepal"
    },
    {
      degree: "SEE",
      institute: "Deep Jyoti Vidyashram",
      year: "Completed",
      location: "Chapergaudi, Banke Nepal"
    }
  ]

  const experience = [
    {
      role: "Full Stack Intern",
      company: "NepDev Technology",
      year: "2025 – Present",
      description: "Worked on MERN stack projects."
    },
    {
      role: "DevOps Intern",
      company: "NepDev Technology",
      year: "1 month",
      description: "Deploy Website"
    }
  ];

  return (
    <section id='education' className='mb-10'>
      <div className='ml-6 mr-6'>
        <h1 className='font-semibold text-4xl text-center'>My Qualification</h1>
        <div className='flex justify-center mt-4'>
          <div className='w-32 h-1 bg-blue-500  rounded-full'></div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">🎓 Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institute}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-6">💼 Experience</h2>

          <div className="grid grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border rounded-lg p-5 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.year}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
