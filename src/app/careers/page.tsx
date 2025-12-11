'use client';

import * as React from 'react';
import Link from 'next/link';
import { careerData } from './careerdata';
import CareerCard from '../components/CareerCard';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';

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
        <section className="text-white py-20 md:py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}} role="banner">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h1 className="heading-1 mb-8 text-white animate-slide-up">Explore Tech Careers</h1>
            <p className="body-large max-w-4xl text-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Discover exciting career opportunities in Ireland's thriving tech sector. 
              From software development to AI, find your path to success.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 bg-gray-50" aria-labelledby="intro-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="intro-heading" className="heading-2 mb-8" style={{color: '#212721'}}>
                  Your Tech Career Awaits
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Ireland's tech industry is one of the fastest-growing in Europe, offering 
                  competitive salaries, innovative work environments, and endless opportunities 
                  for growth and learning.
                </p>
                <p className="body-normal text-gray-700 mb-10">
                  Explore {careerData.length} career pathways below, each with detailed information 
                  about skills needed, salary ranges, and related qualifications to help you 
                  make informed decisions about your future.
                </p>
                <Link
                  href="/qualifications"
                  className="btn-primary"
                  aria-label="View available qualifications and courses"
                >
                  View Qualifications
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-md p-10 border border-gray-100 card-hover">
                <h3 className="heading-3 mb-8" style={{color: '#212721'}}>Career Categories</h3>
                <div className="space-y-4">
                  {careersByCategory.map(({ category, count }) => (
                    <div key={category} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0">
                      <span className="body-normal font-medium text-gray-700">{category}</span>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}>
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
        <section id="careers" className="py-20 px-6 bg-white" aria-labelledby="search-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="search-heading" className="heading-2 mb-12 text-center" style={{color: '#212721'}}>
              Find Your Perfect Career
            </h2>
            
            {/* Controls */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-10 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="career-search" className="block body-normal font-medium text-gray-700 mb-3">
                    Search Careers
                  </label>
                  <input
                    id="career-search"
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    style={{focusRingColor: '#00b2e3'} as React.CSSProperties}
                    aria-label="Search careers by title or description"
                  />
                </div>
                <div>
                  <label htmlFor="category-filter" className="block body-normal font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    style={{focusRingColor: '#00b2e3'} as React.CSSProperties}
                    aria-label="Filter careers by category"
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
            <div className="mb-8" role="status" aria-live="polite">
              <p className="body-normal text-gray-600">
                Showing <span className="font-semibold" style={{color: '#00b2e3'}}>{filteredCareers.length}</span> {filteredCareers.length === 1 ? 'career' : 'careers'}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </p>
            </div>

            {/* Career Grid with staggered animations */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCareers.length > 0 ? (
                filteredCareers.map((career, index) => (
                  <CareerCard
                    key={career.id}
                    title={career.title}
                    description={career.description}
                    imagePlaceholder={career.imagePlaceholder}
                    index={index}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{backgroundColor: '#f3f4f6'}}>
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No careers found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria or browse all careers.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}} aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="heading-2 mb-8 text-white">
              Ready to Start Your Tech Career?
            </h2>
            <p className="body-large mb-12 text-gray-300 max-w-3xl mx-auto">
              Explore our qualifications to find the educational pathway that's right for you, 
              or learn about our Pathways program connecting students with universities and employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Link
                href="/qualifications"
                className="inline-block bg-white text-gray-800 px-10 py-4 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
                aria-label="Browse available qualifications and courses"
              >
                Browse Qualifications
              </Link>
              <Link
                href="/initiatives/pathways"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
                aria-label="Learn about Pathways program"
              >
                Learn About Pathways
              </Link>
            </div>
            <p className="body-normal text-gray-400 mt-8">
              Powered by <strong className="text-white">itag Skillnet Ireland</strong> | Celebrating 25 Years of Tech Excellence
            </p>
          </div>
        </section>

      </main>
      <LogoBar />
      <Footer />

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </>
  );
}
