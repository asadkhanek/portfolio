'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-dark/90' 
        : 'bg-white dark:bg-dark'
    }`}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="gradient-text text-xl font-bold">
            Muhammad Asad Khan
          </Link>
          <span className="ml-2 hidden text-sm text-gray-600 md:block dark:text-gray-300">
            Machine Learning Engineer
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#portfolio" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="#blog" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#cv" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                CV
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="relative font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Theme Toggle Button */}
          <div className="ml-6">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center md:hidden">
          {/* Theme Toggle for Mobile */}
          <div className="mr-2">
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-light"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="rounded-lg bg-gray-50 p-4 shadow-lg dark:bg-dark-paper">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#portfolio" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="#blog" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#cv" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  CV
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="block font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary-400" 
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}