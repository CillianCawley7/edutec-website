'use client';

import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


import * as React from 'react';

export default function Home() {
  return (
    <>
    {/* Navbar */}
    <Navbar />
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="px-8 py-20 text-center" style={{backgroundColor: '#e6f7ff'}}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Careers Start Here</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover graduate journeys, explore career paths, and unlock opportunities across Ireland’s tech sector.
        </p>
        <a
          href="/careers"
          className="inline-block text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          style={{backgroundColor: '#00b2e3'}}
        >
          Explore Careers
        </a>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Graduate Stories</h3>
          <p className="text-gray-600">Watch interviews from real graduates working in tech today.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Qualification Guide</h3>
          <p className="text-gray-600">Learn what qualifications lead to what roles, and where to study them.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <p className="text-gray-600">Exclusive tools and documents for teachers and tech companies.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
    </>
  );
}
