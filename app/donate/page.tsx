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
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
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
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Donation Form */}
            <div className="lg:w-7/12">
              <h2 className="text-3xl font-semibold mb-8 text-[#c0392b]">Make a Donation</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 border-t-4 border-[#c0392b]">
                {/* Donation Type Selector */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#c0392b]">Select Donation Type</h3>
                  <div className="flex rounded-md overflow-hidden border border-[#e9d5c2]">
                    <button 
                      onClick={() => setDonationType('one-time')} 
                      className={`py-3 px-5 rounded-full flex-1 transition-colors font-medium ${
                        donationType === 'one-time' 
                          ? 'bg-[#c0392b] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      One-time
                    </button>
                    <button 
                      onClick={() => setDonationType('monthly')} 
                      className={`py-3 px-5 rounded-full flex-1 transition-colors font-medium ${
                        donationType === 'monthly' 
                          ? 'bg-[#c0392b] text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {donationType === 'monthly' 
                      ? 'Your monthly donation provides sustainable support for our ongoing programs.'
                      : 'Your one-time gift makes an immediate impact for children in need.'}
                  </p>
                </div>
                
                {/* Amount Selector */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#c0392b]">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['25', '50', '100', '250', '500', 'custom'].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountChange(amount)}
                        className={`py-3 px-6 flex-1 text-center font-medium ${
                          donationAmount === amount
                            ? 'bg-[#c0392b] text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {amount === 'custom' ? 'Custom' : `$${amount}`}
                      </button>
                    ))}
                  </div>
                  
                  {donationAmount === 'custom' && (
                    <div className="mt-4">
                      <label htmlFor="customAmount" className="sr-only">Custom amount</label>
                      <div className="relative rounded-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="pl-8 block w-full rounded-md border-gray-300 border py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                          placeholder="Enter amount"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Purpose Selector */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#c0392b]">Donation Purpose</h3>
                  <select
                    value={donationPurpose}
                    onChange={(e) => setDonationPurpose(e.target.value)}
                    className="w-full rounded-md border-gray-300 border py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                  >
                    <option value="general">General Fund</option>
                    <option value="education">Education Program</option>
                    <option value="healthcare">Healthcare Services</option>
                    <option value="nutrition">Nutrition Program</option>
                    <option value="shelter">Shelter & Housing</option>
                    <option value="vocational">Vocational Training</option>
                  </select>
                  
                  <div className="mt-4 text-sm text-gray-600">
                    {donationPurpose === 'general' && 'Your gift will be used where it is most needed across all our programs.'}
                    {donationPurpose === 'education' && 'Help provide school fees, books, uniforms, and quality education for children.'}
                    {donationPurpose === 'healthcare' && 'Support medical care, checkups, treatments, and health education.'}
                    {donationPurpose === 'nutrition' && 'Provide nutritious meals, clean water, and nutrition education.'}
                    {donationPurpose === 'shelter' && 'Help maintain and improve our residential facilities for orphaned children.'}
                    {donationPurpose === 'vocational' && 'Support career training, tools, and apprenticeships for older youth.'}
                  </div>
                </div>
                
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#c0392b]">Your Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                      <input 
                        id="firstName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                      <input 
                        id="lastName" 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                      required 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                    />
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-[#c0392b]">Payment Method</h3>
                  
                  <div className="bg-white p-4 rounded-md border border-gray-300 mb-4">
                    <div className="flex items-center mb-4">
                      <input 
                        id="paymentCredit" 
                        name="paymentMethod" 
                        type="radio" 
                        className="h-4 w-4 text-[#c0392b] focus:ring-[#c0392b]" 
                        defaultChecked 
                      />
                      <label htmlFor="paymentCredit" className="ml-3 block text-gray-700">
                        Credit/Debit Card
                      </label>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number *</label>
                      <input 
                        id="cardNumber" 
                        type="text" 
                        placeholder="1234 5678 9012 3456" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date *</label>
                        <input 
                          id="expiryDate" 
                          type="text" 
                          placeholder="MM/YY" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV *</label>
                        <input 
                          id="cvv" 
                          type="text" 
                          placeholder="123" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input 
                        id="paymentPaypal" 
                        name="paymentMethod" 
                        type="radio" 
                        className="h-4 w-4 text-[#c0392b] focus:ring-[#c0392b]" 
                      />
                      <label htmlFor="paymentPaypal" className="ml-3 block text-gray-700">
                        PayPal
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <input 
                        id="paymentMobile" 
                        name="paymentMethod" 
                        type="radio" 
                        className="h-4 w-4 text-[#c0392b] focus:ring-[#c0392b]" 
                      />
                      <label htmlFor="paymentMobile" className="ml-3 block text-gray-700">
                        Mobile Money
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  {donationType === 'monthly' 
                    ? `Donate $${donationAmount === 'custom' ? customAmount : donationAmount} Monthly` 
                    : `Donate $${donationAmount === 'custom' ? customAmount : donationAmount}`}
                </button>
                
                <p className="mt-4 text-sm text-gray-600 text-center">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>
            
            {/* Sidebar Info */}
            <div className="lg:w-5/12">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#c0392b]">Where Your Money Goes</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">Programs & Services</span>
                      <span className="font-medium text-gray-700">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#c0392b] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">Administration</span>
                      <span className="font-medium text-gray-700">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#c0392b] h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">Fundraising</span>
                      <span className="font-medium text-gray-700">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#e9d5c2] h-2.5 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 text-sm">
                  We are committed to financial transparency and ensuring your donation creates maximum impact for the children we serve.
                </p>
              </div>
              
              <div className="bg-[#f8f3eb] rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#c0392b]">The Impact of Your Gift</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">$100</div>
                      <p className="text-sm text-gray-600">Provides shelter and care for a child for one month</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">$250</div>
                      <p className="text-sm text-gray-600">Provides medical care for 5 children for three months</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-[#c0392b] text-white p-2 rounded-md h-min">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">$500</div>
                      <p className="text-sm text-gray-600">Funds vocational training for one youth</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#c0392b]">Other Ways to Give</h3>
                
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="bg-[#e9d5c2] text-[#c0392b] p-2 rounded-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="/get-involved" className="font-medium text-[#c0392b] hover:underline">Sponsor a Child</Link>
                      <p className="text-sm text-gray-600">Make a lasting impact through our child sponsorship program.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3 items-start">
                    <div className="bg-[#e9d5c2] text-[#c0392b] p-2 rounded-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="/get-involved" className="font-medium text-[#c0392b] hover:underline">Legacy Giving</Link>
                      <p className="text-sm text-gray-600">Leave a lasting impact through your will or estate planning.</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3 items-start">
                    <div className="bg-[#e9d5c2] text-[#c0392b] p-2 rounded-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <Link href="/get-involved" className="font-medium text-[#c0392b] hover:underline">Stock Donations</Link>
                      <p className="text-sm text-gray-600">Donate appreciated securities for tax benefits and impact.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <p className="text-gray-600 text-sm">
                    For more information on these options, please <Link href="/contact" className="text-[#c0392b] hover:underline">contact us</Link>.
                  </p>
                </div>
              </div>
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
                "I started donating to Save the Crying Child Foundation three years ago, and it's been incredible to see the direct impact of my contributions. The foundation's transparency and dedication to these children's futures is truly inspiring."
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
              Save the Crying Child Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
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