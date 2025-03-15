"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll event for navbar background change and close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Close the menu when the user scrolls down
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenuAndScroll = (target: string) => {
    // Ensure smooth scroll after closing the mobile menu
    setIsOpen(false);  // Close the mobile menu when a link is clicked
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);  // Delay scroll to allow menu to close
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#F8F3D9] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className={`text-2xl font-bold transition-all duration-300 ${
            isScrolled ? 'text-black' : 'text-black'
          }`}
        >
          <Link
            href="#home"
            scroll={false}
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
            className="flex items-center hover:text-amber-600 transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            Mahadewabox
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'characters', 'content', 'contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`font-medium transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400 hover:text-amber-600 ${
                isScrolled ? 'text-black' : 'text-yellow'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-yellow'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes size={32} className="text-yellow" />
          ) : (
            <FaBars size={32} className="text-yellow" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-opacity-90 backdrop-blur-md z-40
          transition-transform duration-500 ease-in-out transform
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {['home', 'about', 'characters', 'content', 'contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => closeMenuAndScroll(item)} // Close the mobile menu and scroll
              className="text-yellow text-2xl font-medium hover:text-yellow-400 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
