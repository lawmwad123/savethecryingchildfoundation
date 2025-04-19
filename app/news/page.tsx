import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "New Children's Center Opens in Eastern Uganda",
      date: "June 15, 2024",
      author: "Sarah Nakato",
      authorRole: "Program Director",
      excerpt: "We're thrilled to announce the opening of our newest children's center in Jinja, which will serve over 100 vulnerable children in the region.",
      image: "https://images.unsplash.com/photo-1564008157072-89db086fb034?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Announcements",
      featured: true
    },
    {
      id: 2,
      title: "Annual School Supplies Drive Exceeds Target",
      date: "May 23, 2024",
      author: "Daniel Ochen",
      authorRole: "Community Outreach Coordinator",
      excerpt: "Thanks to our generous donors, we collected over 5,000 notebooks, 3,000 textbooks, and countless other school supplies for children in our programs.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Success Stories",
      featured: false
    },
    {
      id: 3,
      title: "Healthcare Partnership Brings Medical Care to Remote Villages",
      date: "April 30, 2024",
      author: "Dr. Grace Mutumba",
      authorRole: "Health Programs Coordinator",
      excerpt: "Our new partnership with Doctors Without Borders will bring regular medical clinics to children in remote areas who previously had no access to healthcare.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Partnerships",
      featured: false
    },
    {
      id: 4,
      title: "Alumni Success: Former Beneficiary Graduates Medical School",
      date: "April 12, 2024",
      author: "James Tumusiime",
      authorRole: "Alumni Relations",
      excerpt: "We're proud to celebrate Peter Okello, who came through our program as a child and has now graduated as a doctor, fulfilling his dream to give back to his community.",
      image: "https://images.unsplash.com/photo-1627916607164-7b20241db935?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Success Stories",
      featured: true
    },
    {
      id: 5,
      title: "Educational Workshop Series for Caregivers Launches Next Month",
      date: "March 28, 2024",
      author: "Elizabeth Nambi",
      authorRole: "Education Coordinator",
      excerpt: "Our new workshop series will provide foster parents and caregivers with resources and strategies to support children who have experienced trauma.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Programs",
      featured: false
    },
    {
      id: 6,
      title: "Corporate Partner Funds New Vocational Training Center",
      date: "March 10, 2024",
      author: "Robert Kyagulanyi",
      authorRole: "Partnerships Director",
      excerpt: "Thanks to a generous donation from Kampala Tech Solutions, we're building a new vocational training center that will teach marketable skills to older youth.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Partnerships",
      featured: false
    }
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "August 20, 2024",
      time: "7:00 PM",
      location: "Serena Hotel, Kampala",
      description: "Join us for an evening of celebration and fundraising as we honor our supporters and share stories of impact. Dinner, entertainment, and silent auction included.",
      image: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: true
    },
    {
      id: 2,
      title: "Community Volunteer Day",
      date: "July 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Main Children's Home, Kampala",
      description: "Help us beautify our main campus with gardening, painting, and playground improvements. Lunch provided for all volunteers.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    },
    {
      id: 3,
      title: "Children's Art Exhibition & Fundraiser",
      date: "July 28, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "National Art Gallery, Kampala",
      description: "View and purchase artwork created by children in our programs. All proceeds go directly to our art therapy and educational programs.",
      image: "https://images.unsplash.com/photo-1607688387751-c1d1b35faac4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: true
    },
    {
      id: 4,
      title: "Back-to-School Drive",
      date: "January 5-20, 2025",
      time: "Drop-off hours: 9:00 AM - 5:00 PM",
      location: "Multiple Locations",
      description: "Help us collect school supplies, uniforms, and backpacks for children starting the new school year. See website for drop-off locations.",
      image: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      featured: false
    }
  ];

  const categories = ["All", "Announcements", "Success Stories", "Partnerships", "Programs"];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#c0392b] py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl">Stay updated with our latest news, success stories, and upcoming events. Join us in making a difference in the lives of vulnerable children.</p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
          <div className="relative h-full w-full">
            <Image 
              src="https://images.unsplash.com/photo-1560523159-6b681a1e1852?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Children at an event" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-l-3xl opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Featured Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[300px]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#e74c3c] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-[#c0392b]">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  
                  <Link href={`/news/${post.id}`} className="inline-block font-medium text-[#e74c3c] hover:text-[#c0392b] transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#c0392b]">Upcoming Events</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Join us at these upcoming events to support our cause, meet our team, and connect with our community.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-[200px] md:h-auto">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#c0392b]">{event.title}</h3>
                  
                  <div className="mb-3">
                    <div className="flex items-center text-gray-700 mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-1">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  
                  <Link href={`/events/${event.id}`} className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Learn More & Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/events" className="inline-block border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white px-5 py-2 rounded-md font-medium transition-colors">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#c0392b]">Latest News & Updates</h2>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0 ? 'bg-[#c0392b] text-white' : 'bg-[#f8f3eb] text-[#c0392b] hover:bg-[#e6dfd3]'}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="relative h-[200px]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 left-4 bg-[#e74c3c] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-[#c0392b]">{post.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      By <span className="font-medium">{post.author}</span>
                    </div>
                    <Link href={`/news/${post.id}`} className="inline-block font-medium text-[#e74c3c] hover:text-[#c0392b] transition-colors">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c0392b] text-white">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Events */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">More Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[200px]">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[#c0392b]">{event.title}</h3>
                  
                  <div className="mb-3">
                    <div className="flex items-center text-gray-700 mb-1 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700 mb-1 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Link href={`/events/${event.id}`} className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors mt-2">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#c0392b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive updates on our work, success stories, and upcoming events.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 w-full md:w-auto"
              />
              <button className="bg-[#e74c3c] hover:bg-[#962d22] text-white px-6 py-3 rounded-md font-medium transition-colors w-full md:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-3 text-[#f8f3eb]">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 