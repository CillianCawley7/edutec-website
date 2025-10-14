'use client';

import * as React from 'react';
import Link from 'next/link';
import { careerData } from './careerdata';
import CareerCard from '../components/CareerCard';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = ['all', 'Software Development', 'Data & AI', 'Cyber Security', 'Engineering', 'IT & Systems', 'Business & Management'];

  const filteredCareers = careerData.filter((career) => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const careersByCategory = categories
    .filter(cat => cat !== 'all')
    .map(category => ({
      category,
      count: careerData.filter(c => c.category === category).length
    }));

  return (
    <>
      <Navbar />
      
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        
        {/* Hero Section */}
        <section className="text-white py-16" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Tech Careers</h1>
            <p className="text-xl md:text-2xl max-w-4xl text-blue-100">
              Discover exciting career opportunities in Ireland's thriving tech sector. 
              From software development to AI, find your path to success.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{color: '#212721'}}>
                  Your Tech Career Awaits
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ireland's tech industry is one of the fastest-growing in Europe, offering 
                  competitive salaries, innovative work environments, and endless opportunities 
                  for growth and learning.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Explore {careerData.length} career pathways below, each with detailed information 
                  about skills needed, salary ranges, and related qualifications to help you 
                  make informed decisions about your future.
                </p>
                <Link
                  href="/qualifications"
                  className="inline-block text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  View Qualifications
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6" style={{color: '#212721'}}>Career Categories</h3>
                <div className="space-y-3">
                  {careersByCategory.map(({ category, count }) => (
                    <div key={category} className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{category}</span>
                      <span className="px-3 py-1 rounded-full text-sm" style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}>
                        {count} roles
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section id="careers" className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#212721'}}>
              Find Your Perfect Career
            </h2>
            
            {/* Controls */}
            <div className="bg-white p-6 rounded-xl shadow mb-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Careers</label>
                  <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold" style={{color: '#00b2e3'}}>{filteredCareers.length}</span> {filteredCareers.length === 1 ? 'career' : 'careers'}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Career Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No careers found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria or browse all careers.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Tech Career?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Explore our qualifications to find the educational pathway that's right for you, 
              or join us at Pathways 2025 to meet employers and universities in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/qualifications"
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg"
              >
                Browse Qualifications
              </Link>
              <Link
                href="/initiatives/pathways"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition text-lg"
              >
                Attend Pathways 2025
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
