'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Hello, I'm</span>
            <span className="text-primary">Muhammad Asad Khan</span>
          </h1>
            <h2 className="mb-4 text-2xl font-medium text-gray-700 dark:text-gray-300">
            Computer Science Student
          </h2>
          
          <p className="mb-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Passionate about web development, software engineering, and problem-solving. Building projects that combine creativity with technical excellence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#cv" className="btn btn-primary">
              View Resume
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 overflow-hidden rounded-full md:w-80 md:h-80 ring-4 ring-primary">            <Image 
              src="/asad/images/profile.jpg" 
              alt="Muhammad Asad Khan" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}