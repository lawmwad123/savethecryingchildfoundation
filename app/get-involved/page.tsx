'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState('volunteer');
  
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Volunteers"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get Involved</h1>
            <p className="text-xl text-white">There are many ways to support our mission and make a difference in the lives of vulnerable children.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#c0392b]">Join Our Community</h2>
            <p className="text-lg mb-8">
              Whether you can offer time, skills, resources, or financial support, there's a place for you in our mission. Together, we can create lasting change for children in need.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#f8f3eb] pt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center border-b border-[#e9d5c2]">
            <button 
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === 'volunteer' 
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b]' 
                  : 'text-gray-500 hover:text-[#e74c3c]'
              }`}
            >
              Volunteer
            </button>
            <button 
              onClick={() => setActiveTab('sponsor')}
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === 'sponsor' 
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b]' 
                  : 'text-gray-500 hover:text-[#e74c3c]'
              }`}
            >
              Sponsor a Child
            </button>
            <button 
              onClick={() => setActiveTab('fundraise')}
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === 'fundraise' 
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b]' 
                  : 'text-gray-500 hover:text-[#e74c3c]'
              }`}
            >
              Fundraise
            </button>
            <button 
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === 'partner' 
                  ? 'text-[#c0392b] border-b-2 border-[#c0392b]' 
                  : 'text-gray-500 hover:text-[#e74c3c]'
              }`}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="bg-[#f8f3eb] py-16">
        <div className="container mx-auto px-4">
          {/* Volunteer Tab */}
          {activeTab === 'volunteer' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-[#c0392b]">Volunteer Opportunities</h3>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-[200px] w-full">
                      <Image 
                        src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                        alt="Local Volunteers" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-3 text-[#c0392b]">Local Volunteers</h4>
                    <p className="mb-4">
                      If you're based in Uganda, we welcome volunteers who can commit to regular hours at our facilities or in our community programs. Areas where we need support include:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Tutoring and educational support</li>
                      <li>Recreational activities and sports</li>
                      <li>Administration and logistics</li>
                      <li>Medical and healthcare services</li>
                      <li>Cooking and nutrition</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-[200px] w-full">
                      <Image 
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                        alt="International Volunteers" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-3 text-[#c0392b]">International Volunteers</h4>
                    <p className="mb-4">
                      We offer structured volunteer programs for international supporters. These typically run for 1-6 months and include:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Teaching and skills training</li>
                      <li>Construction and maintenance projects</li>
                      <li>Professional services (medical, legal, business)</li>
                      <li>Documentation and communications</li>
                    </ul>
                    <p>
                      International volunteers are responsible for their travel and accommodation costs, but we provide local support and orientation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-[200px] w-full">
                      <Image 
                        src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3" 
                        alt="Remote Volunteers" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-3 text-[#c0392b]">Remote Volunteers</h4>
                    <p className="mb-4">
                      Can't travel to Uganda? You can still contribute your skills remotely:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Grant writing and fundraising</li>
                      <li>Graphic design and content creation</li>
                      <li>Social media management</li>
                      <li>Website development and maintenance</li>
                      <li>Translation services</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Volunteer Form */}
              <div className="bg-white p-8 rounded-lg shadow-md mt-12">
                <h4 className="text-xl font-semibold mb-6 text-[#c0392b]">Volunteer Application</h4>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        id="firstName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        id="lastName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="volunteerType" className="block text-gray-700 mb-2">How would you like to volunteer?</label>
                    <select 
                      id="volunteerType" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="local">Local Volunteer</option>
                      <option value="international">International Volunteer</option>
                      <option value="remote">Remote Volunteer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="skills" className="block text-gray-700 mb-2">Skills & Experience</label>
                    <textarea 
                      id="skills" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      placeholder="Tell us about your relevant skills, experience, and why you want to volunteer with us."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-gray-700 mb-2">Availability</label>
                    <textarea 
                      id="availability" 
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      placeholder="When are you available? How many hours per week can you commit?"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          )}
          
          {/* Sponsor a Child Tab */}
          {activeTab === 'sponsor' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-[#c0392b]">Child Sponsorship Program</h3>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-[250px] w-full">
                      <Image 
                        src="https://images.unsplash.com/photo-1591909238130-b8d3757855c1?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3" 
                        alt="Child Sponsorship" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="mb-4">
                      Child sponsorship creates a personal connection between you and a child in our care. Your monthly contribution of $40 helps provide:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li>Education and school supplies</li>
                      <li>Nutritious meals and clean water</li>
                      <li>Healthcare and medical treatment</li>
                      <li>Safe accommodation</li>
                      <li>Clothing and personal items</li>
                    </ul>
                    <p className="mb-4">
                      As a sponsor, you'll receive regular updates about your child's progress, photos, and letters. Many sponsors develop meaningful relationships with their sponsored children through correspondence.
                    </p>
                    <Link href="/donate" className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-5 py-2 rounded-full font-medium text-sm inline-block transition-colors">
                      Sponsor a Child Today
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e74c3c] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#c0392b]">Choose a Child</h4>
                  <p className="text-gray-600">
                    Browse profiles of children awaiting sponsorship and select a child who resonates with you.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e74c3c] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#c0392b]">Set Up Payment</h4>
                  <p className="text-gray-600">
                    Complete a simple form to set up your monthly contribution of $40 through secure payment.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e74c3c] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#c0392b]">Connect</h4>
                  <p className="text-gray-600">
                    Receive updates and correspond with your sponsored child, fostering a meaningful relationship.
                  </p>
                </div>
              </div>
              
              <div className="bg-[#f8f3eb] border border-[#e9d5c2] p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-[#c0392b]">Frequently Asked Questions</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-[#c0392b]">How long does sponsorship last?</h5>
                    <p className="text-gray-700">
                      Sponsorship ideally continues until a child completes their education or becomes self-sufficient, but you can discontinue at any time with 30 days' notice.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-[#c0392b]">Can I visit my sponsored child?</h5>
                    <p className="text-gray-700">
                      Yes, sponsors are welcome to visit. We organize annual sponsor trips, or you can arrange an individual visit through our office.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-[#c0392b]">How is my money used?</h5>
                    <p className="text-gray-700">
                      Approximately 85% of sponsorship funds directly support the children's needs, with 15% going to administrative costs of the program.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-[#c0392b]">Can I send gifts to my sponsored child?</h5>
                    <p className="text-gray-700">
                      Yes, you can send small gifts, letters, and photos. We provide guidelines to ensure appropriateness and fairness among children.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Fundraise Tab */}
          {activeTab === 'fundraise' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-[#c0392b]">Fundraise For Us</h3>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg mb-6">
                  Hosting a fundraiser is a powerful way to multiply your impact. Whether it's a simple online campaign or an elaborate event, your efforts can raise crucial funds for our programs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">Fundraising Ideas</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Birthday or holiday fundraisers</li>
                      <li>Sponsored runs, walks, or challenges</li>
                      <li>Bake sales or craft markets</li>
                      <li>Charity dinners or auctions</li>
                      <li>School or workplace giving campaigns</li>
                      <li>Concerts or performance events</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">How We'll Support You</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fundraising toolkit with graphics and templates</li>
                      <li>Dedicated staff member to answer questions</li>
                      <li>Social media promotion of your campaign</li>
                      <li>Official donation receipts for contributors</li>
                      <li>Impact reports showing the results of funds raised</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link href="/contact" className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Start Your Fundraiser
                  </Link>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-6 text-[#c0392b]">Fundraising Success Stories</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="relative h-[200px] w-full mb-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Marathon Fundraiser" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-[#c0392b]">London Marathon Team</h5>
                  <p className="text-gray-700 mb-2">
                    A team of 5 runners raised over $15,000 by participating in the London Marathon. Their dedicated training and fundraising efforts helped fund our new medical clinic.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="relative h-[200px] w-full mb-4">
                    <Image 
                      src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="School Fundraiser" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-[#c0392b]">Westlake High School</h5>
                  <p className="text-gray-700 mb-2">
                    Students organized a "Change for Change" campaign, collecting coins for a month. They raised $8,700, enough to fund a year of education for 20 children.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Partner With Us Tab */}
          {activeTab === 'partner' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-[#c0392b]">Partner With Us</h3>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg mb-6">
                  Partnerships with businesses, foundations, schools, and other organizations are vital to our work. We offer various partnership opportunities that align with your organization's values and goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">Corporate Partnerships</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Corporate social responsibility (CSR) programs</li>
                      <li>Employee matching gift programs</li>
                      <li>Cause marketing campaigns</li>
                      <li>Product donations and in-kind support</li>
                      <li>Corporate volunteering opportunities</li>
                    </ul>
                    <p className="text-gray-700">
                      We work with companies of all sizes to create meaningful partnerships that benefit children while meeting business objectives.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">Foundation & Grant Partnerships</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Program funding opportunities</li>
                      <li>Capital project investments</li>
                      <li>Multi-year partnership agreements</li>
                      <li>Capacity building support</li>
                    </ul>
                    <p className="text-gray-700">
                      We collaborate with foundations that share our commitment to child welfare, providing detailed reporting and impact measurement.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">Schools & Universities</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Service learning partnerships</li>
                      <li>Student volunteer programs</li>
                      <li>Cultural exchange initiatives</li>
                      <li>Fundraising collaborations</li>
                    </ul>
                    <p className="text-gray-700">
                      Educational institutions can engage students in meaningful service while supporting our children's needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#c0392b]">NGO & Community Partnerships</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Resource sharing</li>
                      <li>Joint program implementation</li>
                      <li>Advocacy partnerships</li>
                      <li>Knowledge exchange</li>
                    </ul>
                    <p className="text-gray-700">
                      We believe in collaboration with other organizations for greater collective impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f8f3eb] p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-6 text-[#c0392b]">Interested in Partnering?</h4>
                <p className="mb-6">
                  Please fill out this brief form and our partnerships team will contact you to discuss possibilities.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="orgName" className="block text-gray-700 mb-2">Organization Name</label>
                      <input 
                        id="orgName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-gray-700 mb-2">Contact Person</label>
                      <input 
                        id="contactName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="partnerEmail" className="block text-gray-700 mb-2">Email</label>
                      <input 
                        id="partnerEmail" 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="partnerPhone" className="block text-gray-700 mb-2">Phone</label>
                      <input 
                        id="partnerPhone" 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="partnershipType" className="block text-gray-700 mb-2">Type of Partnership Interest</label>
                    <select 
                      id="partnershipType" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="foundation">Foundation/Grant Partnership</option>
                      <option value="school">School/University Partnership</option>
                      <option value="ngo">NGO/Community Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="partnershipIdea" className="block text-gray-700 mb-2">Partnership Ideas</label>
                    <textarea 
                      id="partnershipIdea" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      placeholder="Briefly describe your organization and how you envision partnering with us."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
} 