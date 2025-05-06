'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
};

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Success Story: Tonny's Journey from Street to Skilled Welder",
    date: "June 2024",
    author: "Program Director",
    authorRole: "Program Director",
    excerpt: "From a challenging past to becoming a skilled welder at age 20, Tonny's story exemplifies the transformative power of vocational training and support.",
    image: "/tonny.jpeg",
    category: "Success Stories",
    featured: true
  },
  {
    id: 2,
    title: "Educational Support Transforms Lives in Buyende District",
    date: "May 2024",
    author: "Education Coordinator",
    authorRole: "Education Coordinator",
    excerpt: "Our recent outreach program in Buyende district has provided essential scholastic materials and support to children in need.",
    image: "/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/003.jpeg",
    category: "Programs",
    featured: true
  },
  {
    id: 3,
    title: "Meet Tonny: A Story of Determination",
    date: "April 2024",
    author: "Youth Program Coordinator",
    authorRole: "Youth Program Coordinator",
    excerpt: "Discover how vocational training changed Tonny's life, providing him with skills and opportunities for a brighter future.",
    image: "/alumni.jpeg",
    category: "Alumni Stories",
    featured: false
  },
  {
    id: 4,
    title: "Empowering Girls Through Education",
    date: "April 2024",
    author: "Girls Program Coordinator",
    authorRole: "Program Coordinator",
    excerpt: "Our girls' education initiative continues to break barriers and create opportunities for young women in our community.",
    image: "/somegirls.jpeg",
    category: "Programs",
    featured: true
  }
];

// Sample upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Vocational Skills Training Workshop",
    date: "July 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Training Center, Kampala",
    description: "Join us for a hands-on workshop where successful alumni like Tonny will share their experiences and inspire the next generation of skilled workers.",
    image: "/tonny.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Community Outreach Day",
    date: "August 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Buyende District",
    description: "Help us distribute scholastic materials and support children in the Buyende district schools.",
    image: "/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials/001.jpeg",
    featured: true
  }
];

const categories = ["All", "Success Stories", "Programs", "Alumni Stories"];

export default function NewsPage() {
  return (
    <>
      {/* Hero Banner */}
      <motion.section 
        className="relative h-[80vh] min-h-[600px] flex items-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/OutreachetoschoolinBuyendedistrictchildrenwereabletorecievescholasticmaterials.jpeg"
            alt="Children at an event"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/80 to-black/40"></div>
        </div>
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">News & Events</h1>
            <p className="text-xl text-white">Stay updated with our latest news, success stories, and upcoming events. Join us in making a difference in the lives of vulnerable children.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Posts */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold mb-12 text-center text-[#c0392b]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Stories
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div 
                key={post.id} 
                className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[300px]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    className="hover:scale-105 transition-transform duration-300"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section 
        className="py-16 bg-[#f8f3eb]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-center text-[#c0392b]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us at these upcoming events to support our cause, meet our team, and connect with our community.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <motion.div 
                key={event.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="md:w-2/5 relative h-[200px] md:h-auto">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
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
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/events" className="inline-block border-2 border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white px-5 py-2 rounded-md font-medium transition-colors">
              View All Events
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* All Blog Posts */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-center text-[#c0392b]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest News & Updates
          </motion.h2>
          
          {/* Category Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0 ? 'bg-[#c0392b] text-white' : 'bg-[#f8f3eb] text-[#c0392b] hover:bg-[#e6dfd3]'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id} 
                className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md flex flex-col h-full"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[200px]">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
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
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex space-x-2">
              <motion.button 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c0392b] text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                1
              </motion.button>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                2
              </motion.button>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                3
              </motion.button>
              <motion.button 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c0392b] text-[#c0392b] hover:bg-[#c0392b] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* More Events */}
      <motion.section 
        className="py-16 bg-[#f8f3eb]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-semibold mb-12 text-center text-[#c0392b]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            More Upcoming Events
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <motion.div 
                key={event.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section 
        className="py-16 bg-[#c0392b] text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sign up for our newsletter to receive updates on our work, success stories, and upcoming events.
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap md:flex-nowrap gap-2">
              <motion.input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 w-full md:w-auto"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button 
                className="bg-[#e74c3c] hover:bg-[#962d22] text-white px-6 py-3 rounded-md font-medium transition-colors w-full md:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <motion.p 
              className="text-sm mt-3 text-[#f8f3eb]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
} 