'use client';

import * as React from 'react';

import { careerData } from './careerdata';
import CareerCard from '../components/CareerCard';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';   


export default function CareersPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredCareers = careerData.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
    
    <Navbar />
    
    <main className="pt-24 min-h-screen bg-gray-50 text-gray-800 px-6 py-10 font-sans">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Careers in EduTech</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover exciting roles in education technology. Browse our career previews below.
        </p>
      </section>

      {/* Search & Filters */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </section>

      {/* Career Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.length > 0 ? (
          filteredCareers.map((career) => (
            <CareerCard
              key={career.id}
              title={career.title}
              description={career.description}
              imagePlaceholder={career.imagePlaceholder}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No careers found.</p>
        )}
      </section>
    </main>
    {/* Footer */}
    <Footer />
    
    </>

  );
}