'use client';

import Image from 'next/image';

// CS Student skills data
const skills = [
  { name: "JavaScript", icon: "🌐", level: 85 },
  { name: "HTML/CSS", icon: "🎨", level: 90 },
  { name: "React.js", icon: "⚛️", level: 75 },
  { name: "Python", icon: "🐍", level: 80 },
  { name: "Java", icon: "☕", level: 70 },
  { name: "Data Structures", icon: "🏗️", level: 85 },
  { name: "SQL", icon: "🗃️", level: 75 },
  { name: "Git", icon: "📊", level: 80 },
  { name: "Node.js", icon: "📡", level: 70 },
  { name: "Problem Solving", icon: "🧩", level: 85 },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    content: "Muhammad is one of the most dedicated students I've taught. His problem-solving skills and ability to grasp complex programming concepts quickly are impressive. His projects consistently demonstrate creativity and technical excellence.",
    author: "Dr. Ahmed Khan",
    position: "Computer Science Professor, Virtual University",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    content: "Working with Muhammad on our group project was a great experience. He's knowledgeable, reliable, and always willing to help teammates understand difficult concepts. His contributions were key to our successful project submission.",
    author: "Sarah Rahman",
    position: "Fellow CS Student & Project Partner",
    avatar: "/avatar2.jpg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container">        <h2 className="mb-2 text-3xl text-center md:text-4xl">About Me</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-400">
          Computer Science student with a passion for software development and problem-solving
        </p>
        
        {/* Biography */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          <div className="order-2 md:order-1">            <h3 className="mb-4 text-2xl">My Journey</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                I am a dedicated Computer Science student at Virtual University, passionate about programming, web development, 
                and exploring emerging technologies. My journey in tech began with self-learning coding through online tutorials 
                and gradually evolved into formal education in computer science.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Throughout my academic career, I've maintained a strong focus on both theoretical knowledge and practical applications. 
                I've participated in various student coding competitions, worked on collaborative projects with peers, and served as a 
                teaching assistant to help other students master programming concepts.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I enjoy tackling challenging problems and building solutions that make a positive impact. My coursework has given me a 
                strong foundation in algorithms, data structures, and software engineering principles. I'm constantly expanding my skill set 
                through additional online courses, personal projects, and engaging with the developer community.
              </p>
            </div>
          </div>
            <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg md:w-full md:h-80 ring-4 ring-primary">
              <Image 
                src="/images/about.jpg"
                alt="Muhammad Asad Khan - CS Student"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl text-center">Technical Skills</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-2xl">{skill.icon}</span>
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div 
                    className="h-2 rounded-full bg-primary" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Areas of Interest */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl text-center">Areas of Interest</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 text-center bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-primary">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="mb-2 text-xl font-bold">Web Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Creating modern, responsive web applications using React, Next.js and other cutting-edge frameworks
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-primary">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="mb-2 text-xl font-bold">Mobile App Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Building cross-platform mobile applications with React Native and exploring native development
              </p>
            </div>
            
            <div className="p-6 text-center bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white rounded-full bg-primary">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="mb-2 text-xl font-bold">Cyber Security</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Learning about secure coding practices, ethical hacking techniques, and network security principles
              </p>
            </div>
          </div>
        </div>
          {/* Testimonials */}
        <div>
          <h3 className="mb-6 text-2xl text-center">What My Professors & Peers Say</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="p-6 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
                <blockquote className="mb-4 italic text-gray-600 dark:text-gray-400">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gray-300">
                    {/* Replace with actual avatar images */}
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-xs text-gray-500">Avatar</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}