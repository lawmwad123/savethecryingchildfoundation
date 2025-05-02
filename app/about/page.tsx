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

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mukisa Hellen",
      role: "Founder & Executive Director",
      bio: "With over 20 years of experience in child welfare, John founded Save the Crying Children Foundation in 2015 after witnessing the struggles of street children in Kampala.",
      image: "/Mukisahellenfounderanddirector.jpeg"
    },
    {
      name: "Dr. Kasule Joseph",
      role: "Secretary & Director",
      bio: "Dr. Kasule Joseph serves as the Secretary and Director of Save the Crying Child Foundation, leading our mission to support vulnerable children in Uganda.",
      image: "/DrKasuleJosephsecretary.jpeg"
    }
  ];

  const timelineEvents = [
    {
      year: 2015,
      title: "Foundation Established",
      description: "Started as a small street outreach program in Kampala"
    },
    {
      year: 2016,
      title: "First Home Opened",
      description: "Established our first residential facility for 12 children"
    },
    {
      year: 2018,
      title: "Education Program Launched",
      description: "Started our formal education and scholarship program"
    },
    {
      year: 2020,
      title: "Vocational Training Center",
      description: "Opened our first vocational training center for older children"
    },
    {
      year: 2021,
      title: "Community Outreach Expansion",
      description: "Extended services to rural communities in Eastern Uganda"
    },
    {
      year: 2023,
      title: "Medical Clinic Established",
      description: "Added healthcare services for children and community members"
    }
  ];

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
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Children in classroom"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            <p className="text-xl text-white">Learn about our mission, vision, and the dedicated team working to make a difference in the lives of vulnerable children.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-semibold mb-6 text-center text-[#c0392b]"
              variants={fadeInUp}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-center"
              variants={fadeInUp}
            >
              Founded in 2010, Save the Crying Children Foundation began as a small community initiative in Kampala, Uganda. What started as a group of concerned citizens providing meals to street children has grown into a comprehensive organization serving hundreds of children annually.
            </motion.p>
            <motion.div 
              className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8"
              variants={fadeInUp}
            >
                <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Our early days"
                  fill
                  style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <motion.p 
              className="text-lg mb-8"
              variants={fadeInUp}
            >
              Our journey began when our founder, Sarah Nakato, encountered a group of children living on the streets of Kampala. Moved by their plight, she started by providing basic necessities and soon realized the need for a more comprehensive approach to address the root causes of child vulnerability.
            </motion.p>
            <motion.p 
              className="text-lg"
              variants={fadeInUp}
            >
              Today, we operate multiple programs across Uganda, from street outreach to residential care, education, and vocational training. Our holistic approach ensures that every child in our care receives the support they need to thrive and build a better future.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16 bg-[#f8f3eb]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#c0392b]">Our Mission</h2>
              <p className="text-lg">
                To provide vulnerable children with the care, education, and opportunities they need to break the cycle of poverty and build a brighter future. We are committed to creating safe spaces where children can heal, learn, and grow.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#c0392b]">Our Vision</h2>
              <p className="text-lg">
                A world where every child has access to quality education, healthcare, and a loving environment. We envision communities where children are protected, valued, and empowered to reach their full potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
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
            variants={fadeInUp}
          >
            Our Values
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Compassion",
                description: "We approach every child with empathy and understanding, recognizing their unique needs and potential."
              },
              {
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our operations and interactions."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in all our programs, continuously improving to better serve our children."
              },
              {
                title: "Respect",
                description: "We honor the dignity and rights of every child, treating them with the respect they deserve."
              },
              {
                title: "Collaboration",
                description: "We work together with communities, partners, and stakeholders to create lasting impact."
              },
              {
                title: "Innovation",
                description: "We embrace creative solutions to address the complex challenges facing vulnerable children."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-[#f8f3eb] p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#c0392b]">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Timeline */}
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
            variants={fadeInUp}
          >
            Our Journey
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#e74c3c]"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={event.year} 
                  className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="md:w-1/2 p-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="text-xl font-bold text-[#e74c3c] mb-2"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        {event.year}
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-semibold mb-2 text-[#c0392b]"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      >
                        {event.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-700"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      >
                        {event.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 relative flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="h-4 w-4 absolute left-[-8px] md:left-auto md:right-[-8px] bg-[#e74c3c] rounded-full border-4 border-white z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team */}
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
            variants={fadeInUp}
          >
            Our Team
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[400px] w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#c0392b]">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
              </div>
      </motion.section>

      {/* Our Impact */}
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
            variants={fadeInUp}
          >
            Our Impact
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                number: "500+",
                label: "Children Supported"
              },
              {
                number: "100%",
                label: "School Enrollment"
              },
              {
                number: "85%",
                label: "Employment Rate"
              },
              {
                number: "10+",
                label: "Years of Service"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-[#f8f3eb] p-6 rounded-lg text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#e74c3c] mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-[#c0392b] to-[#e74c3c] text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-6 text-white"
            variants={fadeInUp}
          >
            Join Us in Making a Difference
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Your support can help us continue our work and reach more children in need. Together, we can create lasting change.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/donate" className="bg-[#c0392b] hover:bg-[#962d22] text-white px-6 py-3 rounded-full font-medium transition-colors">
                Donate Now
            </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
            <Link href="/get-involved" className="bg-white hover:bg-[#f8f3eb] text-[#c0392b] px-6 py-3 rounded-full font-medium transition-colors">
                Get Involved
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
} 