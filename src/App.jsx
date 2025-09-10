import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import MentorsAndTestimonials from './components/MentorsAndTestimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <HowItWorks />
      <Partners />
      <MentorsAndTestimonials />
    </div>
  );
}
