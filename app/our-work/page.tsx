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

export default function OurWorkPage() {
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
            src="https://static.vecteezy.com/system/resources/thumbnails/043/993/668/small/ai-generated-group-of-happy-friendly-children-having-fun-together-for-children-s-day-holiday-photo.jpg"
            alt="Children playing"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Work</h1>
            <p className="text-xl text-white">Discover the impact we're making through our various programs and initiatives.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-[#c0392b]">Transforming Lives</h2>
            <p className="text-lg mb-8">
              Our comprehensive approach addresses the complex needs of vulnerable children. From immediate rescue and rehabilitation to long-term education and skills development, we create pathways for children to thrive.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Street Outreach */}
      <motion.section 
        id="street-outreach" 
        className="py-16 bg-[#f8f3eb]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Street Outreach" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#c0392b]">Street Outreach</h2>
              <p className="mb-4 text-lg">
                Our street outreach team works directly with children living on the streets of Kampala. We provide immediate relief in the form of:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                <li>Nutritious meals and clean water</li>
                <li>Basic healthcare and first aid</li>
                <li>Hygiene kits and clean clothing</li>
                <li>Safe spaces for rest and recreation</li>
                <li>Trust building and counseling</li>
              </ul>
              <p className="mb-4 text-lg">
                Through consistent engagement, we build trust with children and introduce them to our rehabilitation programs, offering pathways off the street and into safety.
              </p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">50+</div>
                  <div className="text-gray-600">Children reached weekly</div>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">1,000+</div>
                  <div className="text-gray-600">Meals distributed monthly</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Orphanage Program */}
      <motion.section 
        id="orphanage" 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://www.volunteerfdip.org/img/article/south-africa-orphanage-child-care-volunteer-program.jpg" 
                  alt="Orphanage Program" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#c0392b]">Orphanage Program</h2>
              <p className="mb-4 text-lg">
                Our residential care program provides a loving home environment for children who have been abandoned, orphaned, or rescued from dangerous situations. We focus on:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                <li>Safe, family-style housing with dedicated caregivers</li>
                <li>Comprehensive healthcare and psychological support</li>
                <li>Quality education in partner schools</li>
                <li>Life skills development and social integration</li>
                <li>Pathways to family reunification when possible</li>
              </ul>
              <p className="mb-4 text-lg">
                Our homes are designed to feel like family units, not institutions. Children receive individualized care and attention to heal from past trauma and develop healthy relationships.
              </p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="bg-[#f8f3eb] p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">32</div>
                  <div className="text-gray-600">Children in our care</div>
                </motion.div>
                <motion.div 
                  className="bg-[#f8f3eb] p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">100%</div>
                  <div className="text-gray-600">School enrollment</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Outreach */}
      <motion.section 
        id="community" 
        className="py-16 bg-[#f8f3eb]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Community Outreach" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#c0392b]">Community Outreach</h2>
              <p className="mb-4 text-lg">
                We believe in addressing the root causes of child vulnerability. Our community programs support families to prevent child abandonment and strengthen local support systems through:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                <li>Family support and parenting education</li>
                <li>Nutrition programs for vulnerable households</li>
                <li>Child protection awareness and education</li>
                <li>Micro-grants for family income generation</li>
                <li>Community resource centers and safe spaces</li>
              </ul>
              <p className="mb-4 text-lg">
                By strengthening families and communities, we create sustainable solutions that keep children safe in family-based care whenever possible.
              </p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">75+</div>
                  <div className="text-gray-600">Families supported</div>
                </motion.div>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">3</div>
                  <div className="text-gray-600">Community centers</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vocational Training */}
      <motion.section 
        id="vocational" 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Vocational Training" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#c0392b]">Vocational Training</h2>
              <p className="mb-4 text-lg">
                For older youth in our programs, we provide practical skills training to ensure economic independence and a sustainable future. Our vocational training includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-lg">
                <li>Tailoring and fashion design</li>
                <li>Carpentry and woodworking</li>
                <li>Computer skills and digital literacy</li>
                <li>Agriculture and sustainable farming</li>
                <li>Small business management and entrepreneurship</li>
              </ul>
              <p className="mb-4 text-lg">
                Training is complemented with mentorship, job placement assistance, and small business startup support to ensure successful transitions to independent adulthood.
              </p>
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="bg-[#f8f3eb] p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">45</div>
                  <div className="text-gray-600">Youth trained annually</div>
                </motion.div>
                <motion.div 
                  className="bg-[#f8f3eb] p-4 rounded-lg shadow-md"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-[#e74c3c]">85%</div>
                  <div className="text-gray-600">Employment rate</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Success Story */}
      <motion.section 
        className="py-16 bg-[#f8f3eb]"
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
              className="text-3xl font-semibold mb-8 text-center text-[#c0392b]"
              variants={fadeInUp}
            >
              Success Story
            </motion.h2>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div 
                  className="md:w-1/3"
                  variants={fadeInUp}
                >
                  <div className="relative h-[250px] w-full rounded-lg overflow-hidden">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/42.jpg" 
                      alt="David's Story" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-2/3"
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#c0392b]">David's Journey</h3>
                  <p className="italic text-gray-600 mb-6">
                    "I was 12 years old when I first came to the foundation. I had been living on the streets for two years after losing my parents. I was hungry, scared, and had lost all hope."
                  </p>
                  <p className="mb-4">
                    Through our comprehensive care program, David received shelter, education, and vocational training in carpentry. Today, at 23, he runs his own small furniture workshop and mentors other youth in our program.
                  </p>
                  <p className="font-semibold text-[#e74c3c]">
                    "The foundation didn't just give me food and shelter – they gave me a future."
                  </p>
                </motion.div>
              </div>
            </motion.div>
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
            Help Us Continue This Work
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Your support enables us to expand our programs and reach more vulnerable children. Join us in creating lasting change.
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