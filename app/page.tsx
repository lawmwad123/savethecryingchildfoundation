'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Happy children"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">No Child Is Born to Cry</h1>
            <p className="text-xl md:text-2xl mb-8">Join us in creating a world where every child can smile, learn, and thrive.</p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="bg-[#c95d63] hover:bg-[#932327] text-white px-6 py-3 rounded-full font-medium text-lg transition-colors">
                Donate Now
              </Link>
              <Link href="/get-involved" className="bg-white hover:bg-[#f8f3eb] text-[#932327] px-6 py-3 rounded-full font-medium text-lg transition-colors">
                Sponsor a Child
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image 
                src="https://static.vecteezy.com/system/resources/thumbnails/043/993/668/small/ai-generated-group-of-happy-friendly-children-having-fun-together-for-children-s-day-holiday-photo.jpg" 
                alt="Children playing" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-[#932327]">Our Mission</h2>
              <p className="text-lg mb-6">
                Since 2015, Save the Crying Child Foundation has been committed to rescuing, nurturing, and empowering vulnerable children across Uganda. We believe in creating sustainable solutions that transform lives and communities.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
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
      <section className="py-20 bg-[#932327] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-2xl font-medium text-[#f8f3eb]">Years of Impact</div>
              <p className="mt-3 text-[#e9d5c2]">Dedicated to improving children's lives since 2015</p>
            </div>
            
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-2xl font-medium text-[#f8f3eb]">Children Helped</div>
              <p className="mt-3 text-[#e9d5c2]">Providing education, shelter, and healthcare</p>
            </div>
            
            <div className="p-6 rounded-lg">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-2xl font-medium text-[#f8f3eb]">Volunteers Worldwide</div>
              <p className="mt-3 text-[#e9d5c2]">Dedicated individuals making a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#333333]">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Street Outreach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#932327]">Street Outreach</h3>
                <p className="text-gray-600 mb-4">Providing food, hygiene kits, and immediate care to street children.</p>
                <Link href="/our-work#street-outreach" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1594708767771-a5e9d3c154cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Orphanage Program" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#932327]">Orphanage Program</h3>
                <p className="text-gray-600 mb-4">Creating a loving home environment with education and healthcare.</p>
                <Link href="/our-work#orphanage" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Community Outreach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#932327]">Community Outreach</h3>
                <p className="text-gray-600 mb-4">Supporting local families with nutrition and child welfare services.</p>
                <Link href="/our-work#community" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Vocational Training" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#932327]">Vocational Training</h3>
                <p className="text-gray-600 mb-4">Teaching valuable skills in tailoring, carpentry, and computing.</p>
                <Link href="/our-work#vocational" className="text-[#c95d63] font-medium hover:text-[#932327] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#333333]">What People Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden">
                  <Image 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].name} 
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <svg className="w-10 h-10 text-[#c95d63] opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 016 6v-6a6 6 0 01-6-6h6zm12 0v6a6 6 0 01-6 6h4a6 6 0 016 6v-6a6 6 0 01-6-6h6z" />
                  </svg>
                  <p className="text-lg mb-6 italic text-gray-700">{testimonials[activeTestimonial].quote}</p>
                  <div>
                    <div className="font-semibold text-[#932327]">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-500">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-[#932327]' : 'bg-[#e9d5c2]'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#c95d63] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-white">Join Our Community</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter to stay updated with our work, events, and ways you can help.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-5 py-3 rounded-full text-gray-900 flex-grow max-w-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-[#932327] hover:bg-[#7a1e22] px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
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
          <h2 className="text-3xl font-semibold mb-6 text-[#333333]">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Your support can help us transform more children's lives. Join us in our mission to create a brighter future for vulnerable children.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-[#c95d63] hover:bg-[#932327] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Donate Now
            </Link>
            <Link href="/get-involved" className="bg-[#f8f3eb] hover:bg-[#e9d5c2] text-[#932327] px-6 py-3 rounded-full font-medium transition-colors border border-[#c95d63]">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
