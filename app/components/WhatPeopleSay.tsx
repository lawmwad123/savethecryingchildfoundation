'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: '/WhatPeopleSay/1.jpeg',
    name: 'Barbra',
    age: 11,
    quote: 'I love going to school now. The teachers are nice and I have many friends to play with.'
  },
  {
    id: 2,
    image: '/WhatPeopleSay/2.jpeg',
    name: 'Ivan',
    age: 16,
    quote: 'I want to be a doctor when I grow up. The foundation helped me believe in my dreams.'
  },
  {
    id: 3,
    image: '/WhatPeopleSay/3.jpeg',
    name: 'Godfrey',
    age: 12,
    quote: 'I never thought I could go to school. Now I\'m learning every day and making my family proud.'
  },
  {
    id: 4,
    image: '/WhatPeopleSay/4.jpeg',
    name: 'Hasifah',
    age: 17,
    quote: 'The foundation gave me a chance to study nursing. I want to help others like they helped me.'
  },
  {
    id: 5,
    image: '/WhatPeopleSay/5.jpeg',
    name: 'Faith',
    age: 12,
    quote: 'I have a family now. We eat together, play together, and they help me with my homework.'
  },
  {
    id: 6,
    image: '/WhatPeopleSay/9.jpeg',
    name: 'Petra',
    age: 20,
    quote: 'I love art class the most. The teachers say I\'m very good at drawing.'
  },
  {
    id: 7,
    image: '/WhatPeopleSay/7.jpeg',
    name: 'Stuart',
    age: 16,
    quote: 'I used to be scared all the time. Now I feel safe and happy every day.'
  },
  {
    id: 8,
    image: '/WhatPeopleSay/16.jpeg',
    name: 'Dorah',
    age: 15,
    quote: 'I want to be a teacher one day. I want to help other children learn and grow.'
  }
];

export default function WhatPeopleSay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const previousTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 8000); // Increased time to 8 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, nextTestimonial]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <section className="py-8 md:py-16 bg-[#f8f3eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 text-center text-[#c0392b]">Voices of Our Children</h2>
        
        <div className="relative max-w-4xl mx-auto h-[280px] md:h-[200px] overflow-hidden">
          {/* Previous button */}
          <button 
            onClick={previousTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button 
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-[#c0392b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { 
                  type: "tween",
                  duration: 0.8,
                  ease: "easeInOut"
                },
                opacity: { 
                  duration: 0.5
                }
              }}
              className="absolute top-0 left-0 right-0 w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-6 bg-white rounded-xl shadow-lg"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div 
                className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 cursor-pointer"
                onClick={() => setIsPaused(!isPaused)}
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full border-4 border-[#c0392b]/20"
                  priority
                />
                {isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 w-6 h-6 md:w-8 md:h-8 text-[#c0392b]/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 016 6v-6a6 6 0 01-6-6h6zm12 0v6a6 6 0 01-6 6h4a6 6 0 016 6v-6a6 6 0 01-6-6h6z" />
                  </svg>
                  <blockquote className="text-base md:text-lg italic mb-2 md:mb-4 text-gray-700 pl-4 md:pl-8">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="text-base md:text-lg font-semibold text-[#c0392b]">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm md:text-base text-gray-500">
                    Age {testimonials[currentIndex].age}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#c0392b]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 