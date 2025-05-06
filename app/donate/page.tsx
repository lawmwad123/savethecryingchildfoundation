'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time');
  const [donationAmount, setDonationAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('general');
  
  const handleAmountChange = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/WhatPeopleSay/18.jpeg"
            alt="Happy children"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Support Our Mission</h1>
            <p className="text-xl text-white">Your donation helps provide shelter, education, healthcare, and hope to vulnerable children.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#c0392b]">Support Our Mission</h2>
            
            {/* Contact Information Box */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 border-t-4 border-[#c0392b]">
              <h3 className="text-2xl font-semibold mb-6 text-[#c0392b] text-center">Get in Touch to Donate</h3>
              <p className="text-lg text-gray-700 mb-8 text-center">
                To make a donation and support our cause, please reach out to us through any of these channels:
              </p>
              
              <div className="space-y-6">
                {/* WhatsApp Contacts */}
                <div className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-lg">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold mb-2 text-[#1a472a]">WhatsApp</h4>
                    <div className="space-y-2">
                      <a href="https://wa.me/256770610972" target="_blank" rel="noopener noreferrer" 
                         className="block text-[#25D366] hover:text-[#128C7E] transition-colors">
                        +256 770 610972
                      </a>
                      <a href="https://wa.me/256754903778" target="_blank" rel="noopener noreferrer"
                         className="block text-[#25D366] hover:text-[#128C7E] transition-colors">
                        +256 754 903778
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-center gap-4 p-4 bg-[#c0392b]/10 rounded-lg">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold mb-2 text-[#c0392b]">Email</h4>
                    <a href="mailto:Savethecryingchildrenfdn@gmail.com" 
                       className="text-[#e74c3c] hover:text-[#c0392b] transition-colors">
                      Savethecryingchildrenfdn@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Why contact us directly?</span><br/>
                  We prefer direct communication to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Discuss your preferred donation method</li>
                  <li>Provide detailed information about our current needs</li>
                  <li>Answer any questions you may have</li>
                  <li>Ensure your donation makes the maximum impact</li>
                </ul>
              </div>
            </div>

            {/* Impact Section - Keep this from the original */}
            <div className="bg-[#f8f3eb] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#c0392b]">The Impact of Your Gift</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">$25</div>
                    <p className="text-sm text-gray-600">Provides meals for a child for two weeks</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">$50</div>
                    <p className="text-sm text-gray-600">Covers school supplies and uniforms for a semester</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">$100</div>
                    <p className="text-sm text-gray-600">Provides shelter and care for a child for one month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transparency Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#c0392b]">Our Commitment to Transparency</h3>
              <p className="text-gray-700 mb-4">
                When you contact us about making a donation, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide detailed information about our programs and current needs</li>
                <li>Explain how your donation will be used</li>
                <li>Share success stories and impact reports</li>
                <li>Issue proper documentation for tax purposes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
              <svg className="w-10 h-10 mx-auto mb-4 text-[#c0392b] opacity-30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl italic text-gray-700 mb-6">
                "I started donating to Save the Crying Children Foundation three years ago, and it's been incredible to see the direct impact of my contributions. The foundation's transparency and dedication to these children's futures is truly inspiring."
              </p>
              <footer className="text-gray-600">
                <p className="font-semibold text-[#c0392b]">James Wilson</p>
                <p>Monthly Donor since 2021</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* Tax Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#c0392b]">Tax Information</h3>
            <p className="text-gray-700 mb-2">
              Save the Crying Children Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
            </p>
            <p className="text-gray-700">
              Tax ID: 12-3456789
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 