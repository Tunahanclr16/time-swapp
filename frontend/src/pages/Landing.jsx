import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Testimonials from '../components/landing/Testimonials';
import Stats from '../components/landing/Stats';
import CTASection from '../components/landing/CTASection';

export default function Landing() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
}