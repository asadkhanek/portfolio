'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend or a service like Formspree
    // For demo purposes, we'll just simulate a successful submission
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  // Project collaboration options
  const collaborationTypes = [
    "ML Model Development",
    "Data Science Consulting",
    "ML System Architecture",
    "Research Collaboration",
    "Technical Workshop/Training",
    "Other"
  ];

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <h2 className="mb-2 text-3xl text-center md:text-4xl">Contact Me</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-400">
          Interested in discussing ML projects, research collaboration, or technical consulting? Let's connect!
        </p>
        
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-medium">Send a Message</h3>
            
            {formStatus.submitted && (
              <div className={`p-4 mb-4 text-sm rounded-md ${
                formStatus.success 
                  ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800'
                  : 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  required
                >
                  <option value="">Select an option</option>
                  {collaborationTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  required
                  placeholder="Please describe your project or inquiry. Include relevant details like data availability, project timeline, or specific ML challenges you're facing."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white transition-colors rounded-md bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800">
            <div>
              <h3 className="mb-4 text-xl font-medium">Contact Information</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                I'm open to ML consulting opportunities, research collaborations, and speaking engagements related to machine learning and AI.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-white rounded-full bg-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Email</h4>
                    <a href="mailto:Masadkhanek@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                      Masadkhanek@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-white rounded-full bg-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Schedule a Call</h4>
                    <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                      Book a 30-minute consultation
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-white rounded-full bg-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lahore Punjab, Pakistan (Remote work available worldwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="mb-3 text-lg font-medium">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/asadkhanek" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.comhttps://www.linkedin.com/in/masadkhanek/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                
                <a 
                  href="https://twitter.comhttps://x.com/Masadkhanek" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>

                <a 
                  href="https://scholar.google.com/citations?user=UjuMGZEAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-label="Google Scholar"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}