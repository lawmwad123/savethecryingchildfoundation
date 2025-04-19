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
        <Link href="/" className="flex items-center">
          <div className="relative w-[100px] h-[36px]">
            <Image 
              src="/weblogo.png" 
              alt="Save the Crying Child Foundation" 
              fill
              priority
              style={{ objectFit: 'contain' }}
              className="h-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
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
              className="bg-[#00a269] hover:bg-[#007a50] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-colors"
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#00c680]" 
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
        <div className="md:hidden bg-white/95 backdrop-blur-md py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2">
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
                className="bg-[#00a269] text-white font-medium py-2 rounded-full text-center hover:bg-[#007a50] transition-colors block shadow-sm"
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

// Helper components for cleaner code
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-[#00a269] font-medium px-3 py-2 text-sm hover:text-[#00c680] transition-colors rounded-md hover:bg-[#f8f3eb]/50"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="text-[#00a269] font-medium hover:text-[#00c680] transition-colors py-2 border-b border-[#00a269]/10"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}