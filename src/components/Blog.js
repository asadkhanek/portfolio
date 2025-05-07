'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample blog posts data - replace with your own
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, React's framework for production.",
    date: "April 15, 2025",
    readTime: "5 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Discover how to efficiently style your applications with Tailwind CSS utility-first approach.",
    date: "March 28, 2025",
    readTime: "7 min read",
    category: "CSS",
    slug: "mastering-tailwind-css"
  },
  {
    id: 3,
    title: "The Power of Serverless Functions",
    excerpt: "Explore how serverless functions can help you build scalable applications with reduced operational costs.",
    date: "March 10, 2025",
    readTime: "8 min read",
    category: "Cloud",
    slug: "power-of-serverless-functions"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Learn advanced techniques to optimize your React applications for better user experience.",
    date: "February 22, 2025",
    readTime: "10 min read",
    category: "React",
    slug: "optimizing-react-performance"
  }
];

// Posts per page for pagination
const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="mb-2 text-3xl text-center md:text-4xl">Blog</h2>
        <p className="max-w-2xl mx-auto mb-8 text-center text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights from my journey as a developer.
        </p>
        
        {/* Blog Posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map(post => (
            <article key={post.id} className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-md hover:-translate-y-1 dark:bg-gray-900">
              <div className="p-6">
                <div className="flex items-center mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="mb-2 text-xl font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium bg-white rounded-md disabled:opacity-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === number
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {number}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium bg-white rounded-md disabled:opacity-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}