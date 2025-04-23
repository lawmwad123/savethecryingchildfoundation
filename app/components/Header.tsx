'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden border-2 border-[#e74c3c]">
              <Image 
                src="/weblogo.png" 
                alt="STCCF Logo" 
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#c0392b] font-semibold text-sm leading-tight">Save the Crying Children</span>
              <span className="text-gray-500 text-[10px] leading-tight">Foundation</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/our-work" label="Our Work" />
          <NavLink href="/get-involved" label="Get Involved" />
          <NavLink href="/impact" label="Impact" />
          <NavLink href="/news" label="News" />
          <NavLink href="/contact" label="Contact" />
          
          <div className="ml-2">
            <Link 
              href="/donate" 
              className="bg-[#c0392b] hover:bg-[#962d22] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-colors"
            >
              Donate
            </Link>
          </div>
        </nav>

        <button 
          className="md:hidden text-[#e74c3c]" 
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            <div className="flex justify-center mb-4 items-center gap-2">
              <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-[#e74c3c]">
                <Image 
                  src="/weblogo.png" 
                  alt="STCCF Logo" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#c0392b] font-semibold text-sm">Save the Crying Children</span>
                <span className="text-gray-500 text-xs">Foundation</span>
              </div>
            </div>
            <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/our-work" label="Our Work" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/get-involved" label="Get Involved" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/impact" label="Impact" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/news" label="News" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
            
            <div className="pt-2">
              <Link 
                href="/donate" 
                className="bg-[#c0392b] text-white font-medium py-2 rounded-full text-center hover:bg-[#962d22] transition-colors block shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-gray-700 font-normal px-3 py-2 text-xs hover:text-[#e74c3c] transition-colors rounded-md hover:bg-[#f8f3eb]/50"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="text-gray-700 font-normal hover:text-[#e74c3c] transition-colors py-2 border-b border-[#c0392b]/10 text-xs"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}