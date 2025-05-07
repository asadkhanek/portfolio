'use client';

import Link from 'next/link';

// Sample ML Engineer resume data - replace with your own
const resumeData = {
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Virtual University",
      location: "Lahore, Pakistan",
      period: "2018 - 2022",
      description: "Specialized in Machine Learning and Artificial Intelligence. Focus on algorithm design and data analysis."
    }
  ],  experience: [
    {
      id: 1,
      position: "Teaching Assistant - Data Structures",
      company: "Virtual University",
      location: "Lahore, Pakistan",
      period: "2023 - Present",
      description: "Supporting professor and students in data structures and algorithms course with lab sessions and grading.",
      achievements: [
        "Created supplementary learning materials that improved student performance by 25%",
        "Conducted weekly programming lab sessions for 30+ students",
        "Developed automated grading scripts to efficiently evaluate student assignments",
        "Organized coding competitions to enhance problem-solving skills"
      ]
    },
    {
      id: 2,
      position: "Software Development Intern",
      company: "TechMinds Solutions",
      location: "Islamabad, Pakistan",
      period: "2022 - 2023",
      description: "Developed and maintained web applications using React.js and Node.js for educational platforms.",
      achievements: [
        "Built responsive front-end components that improved user engagement by 20%",
        "Contributed to backend API development for user authentication system",
        "Fixed 15+ critical bugs improving application stability",
        "Participated in agile development process with daily standups and sprint planning"
      ]
    },
    {
      id: 3,
      position: "Campus Ambassador",
      company: "Google Developer Student Club",
      location: "Virtual Community",
      period: "2021 - 2022",
      description: "Promoted technical events and workshops to enhance student engagement with modern technologies.",
      achievements: [
        "Organized 5 workshops on web development and machine learning basics",
        "Grew the campus developer community from 20 to 100+ active members",
        "Led a team project that won 2nd place in a national hackathon",
        "Created technical content and tutorials shared across social media platforms"
      ]
    },
  ],  certifications: [
    "Introduction to Machine Learning - Coursera (2023)",
    "Full Stack Web Development - Udemy (2022)",
    "Python for Data Science - DataCamp (2022)",
    "Responsive Web Design - freeCodeCamp (2021)"  ]
};

export default function CV() {
  return (
    <section id="cv" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">        <h2 className="mb-2 text-3xl text-center md:text-4xl">Resume</h2>
        <p className="max-w-2xl mx-auto mb-8 text-center text-gray-600 dark:text-gray-400">
          My academic achievements and experience in computer science
        </p>
        
        {/* Download CV Button */}
        <div className="flex justify-center mb-12">
          <Link 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center btn btn-primary"
            aria-label="Download CV"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </Link>
        </div>
        
        {/* Resume Content */}
        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <div className="mb-10">
            <h3 className="flex items-center mb-6 text-2xl font-bold">
              <span className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {resumeData.experience.map(job => (
                <div key={job.id} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute w-4 h-4 bg-white border-2 rounded-full -left-[9px] border-primary"></div>
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{job.period}</div>
                  <h4 className="mb-1 text-xl font-medium">{job.position}</h4>
                  <div className="mb-2 text-gray-600 dark:text-gray-300">
                    {job.company} • {job.location}
                  </div>
                  <p className="mb-2 text-gray-600 dark:text-gray-400">{job.description}</p>
                  <ul className="pl-5 mb-4 space-y-1 text-gray-600 list-disc dark:text-gray-400">
                    {job.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mb-10">
            <h3 className="flex items-center mb-6 text-2xl font-bold">
              <span className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {resumeData.education.map(edu => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute w-4 h-4 bg-white border-2 rounded-full -left-[9px] border-primary"></div>
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">{edu.period}</div>
                  <h4 className="mb-1 text-xl font-medium">{edu.degree}</h4>
                  <div className="mb-2 text-gray-600 dark:text-gray-300">
                    {edu.institution} • {edu.location}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
            {/* Certifications Section */}
          <div>
            <h3 className="flex items-center mb-6 text-2xl font-bold">
              <span className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Certifications
            </h3>
            
            <ul className="pl-8 mb-4 space-y-2 list-disc">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}