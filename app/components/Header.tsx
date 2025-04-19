'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#f8f3eb] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/weblogo.png" 
            alt="Save the Crying Child Foundation" 
            width={180} 
            height={60} 
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            About Us
          </Link>
          <Link href="/our-work" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Our Work
          </Link>
          <Link href="/get-involved" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Get Involved
          </Link>
          <Link href="/impact" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Impact
          </Link>
          <Link href="/blog" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/donate" className="bg-[#c95d63] text-white px-5 py-2 rounded-full hover:bg-[#932327] transition-colors">
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#c95d63]" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f3eb] pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Home
            </Link>
            <Link href="/about" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              About Us
            </Link>
            <Link href="/our-work" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Our Work
            </Link>
            <Link href="/get-involved" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Get Involved
            </Link>
            <Link href="/impact" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Impact
            </Link>
            <Link href="/blog" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Blog
            </Link>
            <Link href="/contact" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors py-2 border-b border-[#e9d5c2]">
              Contact
            </Link>
            <Link href="/donate" className="bg-[#c95d63] text-white font-medium py-2 rounded-full text-center hover:bg-[#932327] transition-colors">
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 