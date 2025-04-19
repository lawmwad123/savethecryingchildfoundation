import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Mutambo",
      role: "Founder & Executive Director",
      bio: "With over 20 years of experience in child welfare, John founded Save the Crying Child Foundation in 2015 after witnessing the struggles of street children in Kampala.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Nakato",
      role: "Program Director",
      bio: "Sarah oversees all our programs and ensures they deliver maximum impact. Her background in social work and psychology helps us create child-centered solutions.",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      name: "David Okello",
      role: "Medical Coordinator",
      bio: "As our medical coordinator, David ensures all children receive proper healthcare and nutrition. He's been with the foundation since 2017.",
      image: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
      name: "Lucy Auma",
      role: "Education Manager",
      bio: "Lucy develops our educational programs and works with local schools to ensure our children receive quality education tailored to their needs.",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
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
      <section className="relative bg-[#932327] py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">Learn about our journey, mission, and the team behind Save the Crying Child Foundation.</p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
          <div className="relative h-full w-full">
            <Image 
              src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Children smiling" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-l-3xl opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-6 text-[#932327]">Our Story</h2>
              <p className="mb-4 text-lg">
                Save the Crying Child Foundation began in 2015 when our founder, John Mutambo, encountered a group of hungry children living on the streets of Kampala. Touched by their plight, he started providing them with meals and basic necessities.
              </p>
              <p className="mb-4 text-lg">
                What started as a simple act of kindness soon grew into a structured outreach program. As more volunteers joined the cause, we were able to expand our services to include temporary shelter, medical care, and educational support.
              </p>
              <p className="mb-4 text-lg">
                In 2016, we established our first permanent home for children, offering a safe, nurturing environment where they could heal, learn, and grow. Today, our work spans multiple programs and locations, but our core mission remains unchanged: to create a world where no child is born to cry.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1545483656-1a34ae73add1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Children in our program" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-12 text-[#932327]">Our Mission & Vision</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#932327]">Our Mission</h3>
                <p className="text-gray-700">
                  To rescue, rehabilitate, and empower vulnerable children by providing them with a safe home, quality education, healthcare, and vocational training, enabling them to become self-reliant and productive members of society.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#932327]">Our Vision</h3>
                <p className="text-gray-700">
                  A world where every child has access to basic needs, quality education, healthcare, and a loving home environment, enabling them to reach their full potential regardless of their background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#932327]">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8f3eb] p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#932327]">Compassion</h3>
              <p className="text-gray-700">We approach our work with empathy, respect, and deep care for each child's unique circumstances.</p>
            </div>
            
            <div className="bg-[#f8f3eb] p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#932327]">Community</h3>
              <p className="text-gray-700">We believe in the power of community involvement and collective responsibility for child welfare.</p>
            </div>
            
            <div className="bg-[#f8f3eb] p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#932327]">Integrity</h3>
              <p className="text-gray-700">We are committed to transparency, accountability, and the highest ethical standards in all we do.</p>
            </div>
            
            <div className="bg-[#f8f3eb] p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#c95d63] rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#932327]">Empowerment</h3>
              <p className="text-gray-700">We focus on building capabilities and independence, not just providing immediate relief.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Timeline */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#932327]">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#c95d63]"></div>
              
              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-xl font-bold text-[#c95d63] mb-2">{event.year}</div>
                      <h3 className="text-lg font-semibold mb-2 text-[#932327]">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative flex justify-center items-center">
                    <div className="h-4 w-4 absolute left-[-8px] md:left-auto md:right-[-8px] bg-[#c95d63] rounded-full border-4 border-white z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#932327]">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-[#932327]">{member.name}</h3>
                  <p className="text-[#c95d63] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#c95d63] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Be part of our journey to transform children's lives and create a better future for the most vulnerable.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-[#932327] hover:bg-[#7a1e22] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Support Our Work
            </Link>
            <Link href="/get-involved" className="bg-white hover:bg-[#f8f3eb] text-[#932327] px-6 py-3 rounded-full font-medium transition-colors">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 