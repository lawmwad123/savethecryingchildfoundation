'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: '/WhatPeopleSay/1.jpeg',
    name: 'Blessing',
    age: 8,
    quote: 'I love going to school now. The teachers are nice and I have many friends to play with.'
  },
  {
    id: 2,
    image: '/WhatPeopleSay/2.jpeg',
    name: 'Godfrey',
    age: 11,
    quote: 'I want to be a doctor when I grow up. The foundation helped me believe in my dreams.'
  },
  {
    id: 3,
    image: '/WhatPeopleSay/3.jpeg',
    name: 'Anitah',
    age: 14,
    quote: 'I never thought I could go to school. Now I\'m learning every day and making my family proud.'
  },
  {
    id: 4,
    image: '/WhatPeopleSay/4.jpeg',
    name: 'Petra',
    age: 16,
    quote: 'The foundation gave me a chance to study nursing. I want to help others like they helped me.'
  },
  {
    id: 5,
    image: '/WhatPeopleSay/5.jpeg',
    name: 'David',
    age: 9,
    quote: 'I have a family now. We eat together, play together, and they help me with my homework.'
  },
  {
    id: 6,
    image: '/WhatPeopleSay/6.jpeg',
    name: 'Sarah',
    age: 12,
    quote: 'I love art class the most. The teachers say I\'m very good at drawing.'
  },
  {
    id: 7,
    image: '/WhatPeopleSay/7.jpeg',
    name: 'Michael',
    age: 10,
    quote: 'I used to be scared all the time. Now I feel safe and happy every day.'
  },
  {
    id: 8,
    image: '/WhatPeopleSay/8.jpeg',
    name: 'Grace',
    age: 13,
    quote: 'I want to be a teacher one day. I want to help other children learn and grow.'
  },
  {
    id: 9,
    image: '/WhatPeopleSay/9.jpeg',
    name: 'Joseph',
    age: 7,
    quote: 'I love playing football with my friends. We practice every day after school.'
  },
  {
    id: 10,
    image: '/WhatPeopleSay/10.jpeg',
    name: 'Mary',
    age: 15,
    quote: 'The foundation helped me find my passion for music. I\'m learning to play the piano.'
  }
];

export default function WhatPeopleSay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure testimonials array is not empty
    if (testimonials.length > 0) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && testimonials.length > 0) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (isLoading || testimonials.length === 0) {
    return (
      <section className="py-16 bg-[#f8f3eb]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <div className="animate-pulse flex items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gray-200"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-[#f8f3eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center text-[#c0392b]">Voices of Our Children</h2>
        
        <div className="relative max-w-4xl mx-auto h-[200px]">
          <AnimatePresence initial={false} custom={direction}>
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
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                },
                opacity: { 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                },
                scale: {
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  setDirection(1);
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                } else if (swipe > swipeConfidenceThreshold) {
                  setDirection(-1);
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
                }
              }}
              className="absolute top-0 left-0 w-full flex items-center gap-8 p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full border-4 border-[#c0392b]/20"
                />
              </div>
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 w-8 h-8 text-[#c0392b]/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 016 6v-6a6 6 0 01-6-6h6zm12 0v6a6 6 0 01-6 6h4a6 6 0 016 6v-6a6 6 0 01-6-6h6z" />
                  </svg>
                  <blockquote className="text-lg italic mb-4 text-gray-700 pl-8">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold text-[#c0392b]">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-500">
                    Age {currentTestimonial.age}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 