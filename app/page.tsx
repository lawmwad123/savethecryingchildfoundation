'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import WhatPeopleSay from './components/WhatPeopleSay';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    children: 0,
    volunteers: 0
  });
  const statsAnimated = useRef(false);
  const statsSection = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Volunteer",
      quote: "Working with the foundation has been one of the most rewarding experiences of my life. The impact on these children's lives is immeasurable.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "David Mutesa",
      role: "Former Beneficiary",
      quote: "The foundation gave me hope when I had none. Today, I have a career and a future because of their support and belief in me.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      id: 3,
      name: "Rachel Nakato",
      role: "Donor",
      quote: "I've seen firsthand how every contribution makes a difference. This organization truly puts children first in everything they do.",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Stats counter animation 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true; // Prevent re-animation on scroll
          
          // Animate years
          let start = 0;
          const end = 10;
          const duration = 2000; // 2 seconds
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;
          
          const animateYears = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.floor(progress * end);
            
            if (currentCount <= end) {
              setAnimatedStats(prev => ({ ...prev, years: currentCount }));
            }
            
            if (frame < totalFrames) {
              requestAnimationFrame(animateYears);
            }
          };
          
          // Animate children
          let startChildren = 0;
          const endChildren = 200;
          let frameChildren = 0;
          
          const animateChildren = () => {
            frameChildren++;
            const progress = frameChildren / totalFrames;
            const currentCount = Math.floor(progress * endChildren);
            
            if (currentCount <= endChildren) {
              setAnimatedStats(prev => ({ ...prev, children: currentCount }));
            }
            
            if (frameChildren < totalFrames) {
              requestAnimationFrame(animateChildren);
            }
          };
          
          // Animate volunteers
          let startVolunteers = 0;
          const endVolunteers = 500;
          let frameVolunteers = 0;
          
          const animateVolunteers = () => {
            frameVolunteers++;
            const progress = frameVolunteers / totalFrames;
            const currentCount = Math.floor(progress * endVolunteers);
            
            if (currentCount <= endVolunteers) {
              setAnimatedStats(prev => ({ ...prev, volunteers: currentCount }));
            }
            
            if (frameVolunteers < totalFrames) {
              requestAnimationFrame(animateVolunteers);
            }
          };
          
          requestAnimationFrame(animateYears);
          requestAnimationFrame(animateChildren);
          requestAnimationFrame(animateVolunteers);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsSection.current) {
      observer.observe(statsSection.current);
    }
    
    return () => {
      if (statsSection.current) {
        observer.unobserve(statsSection.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/002.jpeg"
            alt="Happy children"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/80 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">No Child Is Born to Cry</h1>
            <p className="text-xl md:text-2xl mb-8">Join us in creating a world where every child can smile, learn, and thrive.</p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-full font-medium text-lg transition-colors shadow-md">
                Donate Now
              </Link>
              <Link href="/get-involved" className="bg-white hover:bg-[#f8f3eb] text-[#c0392b] px-6 py-3 rounded-full font-medium text-lg transition-colors shadow-md">
                Sponsor a Child
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-16 bg-gradient-to-br from-[#f8f3eb] to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
            <Image
                src="/selfie.jpeg" 
                alt="Children playing" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 gradient-text">Our Mission</h2>
              <p className="text-lg mb-6">
                Since 2015, Save the Crying Children Foundation has been committed to rescuing, nurturing, and empowering vulnerable children across Uganda. We believe in creating sustainable solutions that transform lives and communities.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">
                Read more about our story
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsSection} className="py-20 bg-gradient-to-r from-[#c0392b] to-[#e74c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="text-5xl font-bold mb-2">{animatedStats.years}+</div>
              <div className="text-2xl font-medium text-white">Years of Impact</div>
              <p className="mt-3 text-white/80">Dedicated to improving children's lives since 2015</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="text-5xl font-bold mb-2">{animatedStats.children}+</div>
              <div className="text-2xl font-medium text-white">Children Helped</div>
              <p className="mt-3 text-white/80">Providing education, shelter, and healthcare</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="text-5xl font-bold mb-2">{animatedStats.volunteers}+</div>
              <div className="text-2xl font-medium text-white">Volunteers Worldwide</div>
              <p className="mt-3 text-white/80">Dedicated individuals making a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center gradient-text">Outreach to Schools</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Supporting education and providing essential scholastic materials to children in Buyende district schools.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-white to-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 border border-[#e74c3c]/10">
              <div className="h-48 relative">
                <Image 
                  src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/003.jpeg" 
                  alt="School Outreach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c0392b]">School Visits</h3>
                <p className="text-gray-600 mb-4">Regular visits to schools to assess needs and provide support to students.</p>
                <Link href="/our-work#outreach" className="text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 border border-[#e74c3c]/10">
              <div className="h-48 relative">
                <Image 
                  src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/006.jpeg" 
                  alt="Material Distribution" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c0392b]">Material Distribution</h3>
                <p className="text-gray-600 mb-4">Providing essential scholastic materials to support learning and education.</p>
                <Link href="/our-work#materials" className="text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 border border-[#e74c3c]/10">
              <div className="h-48 relative">
                <Image 
                  src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/004.jpeg" 
                  alt="Student Support" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c0392b]">Student Support</h3>
                <p className="text-gray-600 mb-4">Mentoring and supporting students to achieve their educational goals.</p>
                <Link href="/our-work#support" className="text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 border border-[#e74c3c]/10">
              <div className="h-48 relative">
                <Image 
                  src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/001.jpeg" 
                  alt="Community Engagement" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#c0392b]">Community Engagement</h3>
                <p className="text-gray-600 mb-4">Working with local communities to strengthen educational support systems.</p>
                <Link href="/our-work#community" className="text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Highlight */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-[#c0392b]">Meet Our Volunteers</h2>
          
          {/* Individual volunteer */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-[#c0392b]/20">
                <Image
                  src="/volunteerone.jpeg"
                  alt="One of our dedicated volunteers"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg mb-4 text-gray-700">
                Our volunteers are the heart of our mission. Their compassion, dedication, and hands-on support make it possible to reach and transform the lives of vulnerable children every day.
              </p>
              <p className="text-base text-gray-600">
                Interested in joining our team? <Link href="/get-involved" className="text-[#e74c3c] font-medium hover:text-[#c0392b] transition-colors">Learn how you can help →</Link>
              </p>
            </div>
          </div>
          
          {/* Volunteer team */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/volunteers.jpeg"
                alt="Our volunteer team at work"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#c0392b]">Working Together to Make a Difference</h3>
              <p className="text-base mb-4 text-gray-700">
                Whether providing educational support, organizing community events, or offering emotional care, our volunteers work as a team to create lasting positive change in children's lives.
              </p>
              <p className="text-base text-gray-700">
                Each volunteer brings unique skills and perspectives, but they all share a common commitment to improving the welfare of vulnerable children in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <WhatPeopleSay />

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#c0392b] to-[#e74c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-white">Join Our Community</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter to stay updated with our work, events, and ways you can help.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-5 py-3 rounded-full text-gray-900 flex-grow max-w-sm shadow-md"
                required
              />
              <button 
                type="submit" 
                className="bg-[#962d22] hover:bg-[#7d261c] px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 gradient-text">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Your support can help us transform more children's lives. Join us in our mission to create a brighter future for vulnerable children.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
              Donate Now
            </Link>
            <Link href="/get-involved" className="bg-[#f8f3eb] hover:bg-[#e9e9e9] text-[#c0392b] px-6 py-3 rounded-full font-medium transition-colors border border-[#e74c3c] shadow-md">
              Get Involved
            </Link>
          </div>
    </div>
      </section>
    </>
  );
}
