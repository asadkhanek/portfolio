'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample ML projects data - replace with your own
const projects = [
  {
    id: 1,
    title: "Predictive Healthcare Analytics",
    category: "Deep Learning",
    image: "/project1.jpg",
    description: "A deep learning system for predicting patient outcomes using electronic health records, achieving 89% accuracy on test data.",
    technologies: ["TensorFlow", "Python", "Pandas", "LSTM Networks", "Flask API"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Natural Language Question Answering",
    category: "NLP",
    image: "/project2.jpg",
    description: "A transformer-based model fine-tuned on domain-specific data that extracts answers from technical documentation.",
    technologies: ["PyTorch", "BERT", "Hugging Face", "Docker", "FastAPI"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Product Recommendation System",
    category: "Recommendation",
    image: "/project3.jpg",
    description: "A hybrid recommendation engine combining collaborative filtering and content-based methods to increase user engagement by 42%.",
    technologies: ["PySpark", "MLlib", "AWS", "A/B Testing", "PostgreSQL"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Object Detection in Manufacturing",
    category: "Computer Vision",
    image: "/project4.jpg",
    description: "Real-time defect detection system for manufacturing lines using YOLOv5, processing 30 FPS with 97% precision.",
    technologies: ["PyTorch", "YOLO", "OpenCV", "NVIDIA Jetson", "Docker"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 5,
    title: "ML Model Monitoring Dashboard",
    category: "MLOps",
    image: "/project5.jpg",
    description: "A comprehensive platform for tracking ML model performance, data drift, and automated retraining triggers.",
    technologies: ["Python", "FastAPI", "React", "Prometheus", "Grafana"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: "Time Series Forecasting for Finance",
    category: "Forecasting",
    image: "/project6.jpg",
    description: "Advanced time series models to predict financial market trends with custom features and robust validation framework.",
    technologies: ["Prophet", "ARIMA", "XGBoost", "Feature Engineering", "Backtesting"],
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/yourusername/project",
  },
];

// Get unique categories from projects
const allCategories = ["All", ...new Set(projects.map(project => project.category))];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  return (
    <section id="portfolio" className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <h2 className="mb-2 text-3xl text-center md:text-4xl">ML Projects</h2>
        <p className="max-w-2xl mx-auto mb-8 text-center text-gray-600 dark:text-gray-400">
          Explore my machine learning projects across various domains and techniques
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:-translate-y-2 dark:bg-gray-800">
              {/* Project Image */}
              <div className="relative w-full h-48 bg-gray-300 dark:bg-gray-700">
                {/* Replace with actual image */}
                <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
                  Project Image
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="px-2 py-1 text-xs font-medium text-primary bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs bg-gray-100 rounded dark:bg-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a 
                    href={`/papers/paper-${project.id}.pdf`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}