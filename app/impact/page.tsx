'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ImpactPage() {
  const successStories = [
    {
      id: 1,
      name: "Amina",
      age: 12,
      image: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3",
      beforeStory: "Amina lost both parents at the age of 5 and spent two years living on the streets of Kampala, where she faced hunger, illness, and danger every day.",
      afterStory: "Today, Amina lives in our children's home where she has access to education, healthcare, and a loving environment. She's one of the top students in her class and dreams of becoming a doctor to help other children in need.",
      quote: "I feel safe now. I have food every day, friends to play with, and teachers who believe in me. I want to study hard so I can help other children like me someday."
    },
    {
      id: 2,
      name: "David",
      age: 16,
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      beforeStory: "David was abandoned as a baby and grew up in overcrowded orphanages without proper care or education. When he came to us at age 10, he couldn't read or write and struggled with trust issues.",
      afterStory: "Through dedicated tutoring and counseling, David has caught up with his peers academically. He discovered a talent for carpentry in our vocational program and is now creating beautiful furniture while mentoring younger boys.",
      quote: "I never thought I could be good at anything. Now I make things with my hands that people want to buy. I'm proud of myself for the first time in my life."
    },
    {
      id: 3,
      name: "Grace",
      age: 14,
      image: "https://blog.marketingwords.com/wp-content/uploads/2020/11/success-stories.jpg",
      beforeStory: "Grace lived in extreme poverty with her grandmother who was too elderly to provide proper care. They often went days without food, and Grace had never attended school.",
      afterStory: "Since joining our program, Grace has shown exceptional talent in mathematics and science. She represents our foundation in national competitions and mentors younger children in our after-school programs.",
      quote: "I used to think girls like me couldn't go to school or have dreams. Now I know I can be anything I want to be if I work hard enough."
    },
    {
      id: 4,
      name: "Samuel",
      age: 18,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      beforeStory: "Samuel lost his family during civil conflict and was recruited as a child soldier at age 9. He escaped after two years but was traumatized and struggled with anger and nightmares.",
      afterStory: "Through trauma therapy and consistent support, Samuel has transformed his life. He recently graduated from secondary school and received a scholarship to study engineering at university. He leads peace education workshops for other youth.",
      quote: "The foundation gave me back my childhood and showed me a different path. Now I want to help build things instead of destroying them."
    }
  ];

  const impactMetrics = [
    {
      number: "456",
      label: "Children Rescued",
      description: "Children removed from dangerous situations and provided with safe housing"
    },
    {
      number: "95%",
      label: "School Attendance",
      description: "Of children in our programs regularly attending school"
    },
    {
      number: "83%",
      label: "Health Improvement",
      description: "Reduction in preventable illnesses among program participants"
    },
    {
      number: "124",
      label: "Family Reunifications",
      description: "Children successfully reunited with rehabilitated families"
    },
    {
      number: "92%",
      label: "Youth Employment",
      description: "Graduates of our vocational programs securing stable employment"
    },
    {
      number: "38",
      label: "Community Centers",
      description: "Facilities providing support to vulnerable children nationwide"
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Children smiling"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0392b]/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Impact</h1>
            <p className="text-xl text-white">Real stories of transformation and the measurable difference we're making in children's lives.</p>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-2 text-center text-[#c0392b]">Blessing's Transformation</h2>
            <p className="text-lg text-gray-600 text-center mb-8">From being abandoned to finding hope and healing</p>
            
            <div className="relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Image */}
                <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src="/Thesetwoimagescanbecomparedtoshowhowthischildtransformed/Before.jpeg"
                      alt="Blessing before transformation"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Before</h3>
                      <p className="text-white/90">When Blessing was first brought to our orphanage</p>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-[500px] w-full">
                    <Image
                      src="/Thesetwoimagescanbecomparedtoshowhowthischildtransformed/After1.jpeg"
                      alt="Blessing after transformation"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">After</h3>
                      <p className="text-white/90">Blessing now, thriving and full of life</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  "Blessing was abandoned at our orphanage in a state of severe malnutrition and emotional distress. Through our comprehensive care program, including proper nutrition, medical attention, and emotional support, Blessing has made an incredible transformation. Today, she is a vibrant, healthy child who loves to learn and play."
                </p>
                <p className="text-[#c0392b] font-semibold">- Save the Crying Children Foundation Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Our Impact By The Numbers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-[#f8f3eb] rounded-lg p-6 text-center shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-[#e74c3c] mb-2">{metric.number}</div>
                <div className="text-xl font-semibold text-[#c0392b] mb-2">{metric.label}</div>
                <p className="text-gray-700">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Featured Story</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Amina's success story" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-[#e74c3c] font-bold text-lg mr-2">Amina's Journey</div>
                    <div className="text-gray-600 text-sm">Age 12</div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#c0392b]">Where She Started</h3>
                    <p className="text-gray-700 mb-4">
                      Amina lost both parents at the age of 5 and spent two years living on the streets of Kampala, where she faced hunger, illness, and danger every day. She would often go days without a proper meal and had no access to education or healthcare.
                    </p>
                    
                    <h3 className="text-lg font-semibold mb-2 text-[#c0392b]">Where She Is Now</h3>
                    <p className="text-gray-700 mb-4">
                      Today, Amina lives in our children's home where she has access to education, healthcare, and a loving environment. She's one of the top students in her class, particularly excelling in science and mathematics. With proper nutrition and medical care, her health has improved dramatically. She dreams of becoming a doctor to help other children in need.
                    </p>
                  </div>
                  
                  <blockquote className="italic text-gray-600 border-l-4 border-[#e74c3c] pl-4 mb-6">
                    "I feel safe now. I have food every day, friends to play with, and teachers who believe in me. I want to study hard so I can help other children like me someday."
                  </blockquote>
                  
                  <Link href="/donate" className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white px-4 py-2 rounded-full font-medium transition-colors">
                    Help Children Like Amina
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Transformation Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.slice(1).map((story) => (
              <div key={story.id} className="bg-[#f8f3eb] rounded-lg overflow-hidden shadow-md">
                <div className="relative h-[300px]">
                  <Image 
                    src={story.image} 
                    alt={`${story.name}'s success story`} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-semibold text-[#c0392b] mr-2">{story.name}</h3>
                    <div className="text-gray-600 text-sm">Age {story.age}</div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-md font-semibold mb-1 text-[#e74c3c]">Before</h4>
                    <p className="text-gray-700 mb-3">{story.beforeStory}</p>
                    
                    <h4 className="text-md font-semibold mb-1 text-[#e74c3c]">After</h4>
                    <p className="text-gray-700">{story.afterStory}</p>
                  </div>
                  
                  <blockquote className="italic text-gray-600 border-l-4 border-[#e74c3c] pl-4 mt-4">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters from Children */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Letters From Our Children</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1">
              <div className="mb-4 text-right">
                <span className="text-sm text-gray-600">March 15, 2023</span>
              </div>
              <p className="text-gray-700 mb-4 handwriting">
                Dear Sponsors,<br /><br />
                Thank you for helping me go to school. Before I came here, I never had books or nice clothes. Now I have my own uniform and I'm learning to read! My favorite subject is art. I drew a picture of a bird for you. When I grow up I want to be a teacher.<br /><br />
                With love,<br />
                Sarah (age 8)
              </p>
              <div className="flex justify-center">
                <div className="relative h-[100px] w-[150px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1551972873-b7e8754e8e26?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Child's drawing" 
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1">
              <div className="mb-4 text-right">
                <span className="text-sm text-gray-600">November 2, 2023</span>
              </div>
              <p className="text-gray-700 mb-4 handwriting">
                Dear Foundation,<br /><br />
                I'm writing to say thank you for giving me a home and family. Yesterday we celebrated my birthday with cake. It was the first time anyone remembered my birthday. I am doing well in mathematics and the teacher says I am very smart. I hope to make you proud.<br /><br />
                Thank you,<br />
                John (age 11)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1">
              <div className="mb-4 text-right">
                <span className="text-sm text-gray-600">January 10, 2024</span>
              </div>
              <p className="text-gray-700 mb-4 handwriting">
                Dear Friends,<br /><br />
                I passed my exams and will be going to secondary school next term! I never thought this would be possible. My dream is to become a nurse so I can help sick children. Thank you for believing in me even when I didn't believe in myself. I promise to study hard.<br /><br />
                With gratitude,<br />
                Mary (age 14)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#c0392b]">Our Reach</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our programs now span 12 districts throughout Uganda, with satellite centers in remote areas to reach the most vulnerable children.
          </p>
          
          <div className="max-w-4xl mx-auto bg-[#f8f3eb] rounded-lg p-6 md:p-10 shadow-lg">
            <div className="aspect-[16/9] relative">
              <Image 
                src="https://images.unsplash.com/photo-1552838354-5bf906956c81?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Map of Uganda showing program locations" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Northern Region</div>
                <p className="text-sm text-gray-700">8 centers, 120+ children</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Central Region</div>
                <p className="text-sm text-gray-700">12 centers, 200+ children</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Eastern Region</div>
                <p className="text-sm text-gray-700">10 centers, 160+ children</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Western Region</div>
                <p className="text-sm text-gray-700">8 centers, 130+ children</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Rural Outreach</div>
                <p className="text-sm text-gray-700">15 satellite programs</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-[#c0392b]">Total Reach</div>
                <p className="text-sm text-gray-700">38 centers, 600+ children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Report */}
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#c0392b]">Annual Impact Report</h2>
            <p className="text-gray-700 mb-8">
              For a complete overview of our programs, finances, and measurable impact, download our latest annual report.
            </p>
            
            <div className="flex justify-center">
              <a href="#" className="inline-flex items-center bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 py-3 rounded-md font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download 2023 Annual Report (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#e74c3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Help Us Create More Success Stories</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support enables us to rescue more children from desperate situations and provide them with the care, education, and opportunities they deserve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-[#c0392b] hover:bg-[#962d22] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Donate Now
            </Link>
            <Link href="/get-involved" className="bg-white hover:bg-[#f8f3eb] text-[#c0392b] px-6 py-3 rounded-full font-medium transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .handwriting {
          font-family: "Comic Sans MS", cursive, sans-serif;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
} 