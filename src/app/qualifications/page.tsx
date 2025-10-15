
'use client';

import * as React from 'react';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import QualificationCard from '../components/QualificationCard';
import Footer from '../components/Footer';
import { qualifications, type Qualification } from './data';

type Filters = {
  q: string;
  level: string; // 'all' | '6' | '7' | '8' | '9'
  pathway: string; // 'all' | 'University' | 'Apprenticeship' | 'Further Education' | 'Bootcamp'
  delivery: string; // 'all' | 'On-campus' | 'Online' | 'Hybrid'
  category: string; // 'all' | 'Computer Science' | 'Engineering' | 'Information Science' | 'Data Science' | 'AI' | 'Software Development' | 'Cyber Security'
};

function filterQualifications(items: Qualification[], filters: Filters) {
  return items.filter((item) => {
    const matchesQuery = filters.q
      ? [item.title, item.provider, ...(item.outcomes || [])]
          .join(' ')
          .toLowerCase()
          .includes(filters.q.toLowerCase())
      : true;
    const matchesLevel = filters.level === 'all' ? true : String(item.nfqLevel || '') === filters.level;
    const matchesPathway = filters.pathway === 'all' ? true : item.pathway === (filters.pathway as any);
    const matchesDelivery = filters.delivery === 'all' ? true : item.delivery === (filters.delivery as any);
    const matchesCategory = filters.category === 'all' ? true : item.category === (filters.category as any);
    return matchesQuery && matchesLevel && matchesPathway && matchesDelivery && matchesCategory;
  });
}

export default function QualificationsPage() {
  const [filters, setFilters] = React.useState<Filters>({
    q: '',
    level: 'all',
    pathway: 'all',
    delivery: 'all',
    category: 'all',
  });

  const filtered = React.useMemo(() => filterQualifications(qualifications, filters), [filters]);

  return (
    <>
    <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        
        {/* Hero Section */}
        <section className="text-white py-20 md:py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}} role="banner">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h1 className="heading-1 mb-8 text-white animate-slide-up">Tech Qualifications</h1>
            <p className="body-large max-w-4xl text-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Discover comprehensive tech education pathways across Ireland's leading universities and institutions. 
              From Computer Science to AI, find the perfect qualification to launch your tech career.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-6 bg-gray-50" aria-labelledby="intro-heading">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                <h2 id="intro-heading" className="heading-2 mb-8" style={{color: '#212721'}}>
                  Your Tech Education Journey Starts Here
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Ireland's tech sector is booming, and our universities offer world-class qualifications 
                  that prepare you for exciting careers in technology. Whether you're interested in 
                  software development, data science, cybersecurity, or AI, there's a pathway for you.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our comprehensive database includes courses from leading institutions like University of Galway, 
                  University of Limerick, ATU, and many more. Each qualification is designed to give you the 
                  skills and knowledge needed to succeed in today's digital economy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#courses"
                    className="inline-block text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                    style={{backgroundColor: '#00b2e3'}}
                  >
                    Browse Courses
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-block px-6 py-3 rounded-full font-semibold hover:opacity-90 transition border-2"
                    style={{color: '#00b2e3', borderColor: '#00b2e3'}}
                  >
                    Explore Careers
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4" style={{color: '#212721'}}>Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: '#00b2e3'}}>50+</div>
                    <div className="text-sm text-gray-600">Courses Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: '#00b2e3'}}>15+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: '#00b2e3'}}>7</div>
                    <div className="text-sm text-gray-600">Career Pathways</div>
                    </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: '#00b2e3'}}>NFQ 6-9</div>
                    <div className="text-sm text-gray-600">Levels Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Pathways */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{color: '#212721'}}>
              Explore Career Pathways
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Computer Science</h3>
                <p className="text-gray-600 mb-4">Core programming, algorithms, and computer systems fundamentals.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Engineering</h3>
                <p className="text-gray-600 mb-4">Electronic, computer, and software engineering specializations.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Data Science</h3>
                <p className="text-gray-600 mb-4">Data analysis, machine learning, and statistical modeling.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Artificial Intelligence</h3>
                <p className="text-gray-600 mb-4">AI systems, machine learning, and intelligent automation.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Software Development</h3>
                <p className="text-gray-600 mb-4">Programming, web development, and software engineering.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#212721'}}>Cyber Security</h3>
                <p className="text-gray-600 mb-4">Digital forensics, network security, and threat protection.</p>
                <Link href="#courses" className="text-sm font-medium" style={{color: '#00b2e3'}}>View Courses →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section id="courses" className="py-20 px-6 bg-gray-50" aria-labelledby="search-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="search-heading" className="heading-2 mb-12 text-center" style={{color: '#212721'}}>
              Find Your Perfect Course
            </h2>
            
            {/* Controls */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2">
                  <label htmlFor="course-search" className="block body-normal font-medium text-gray-700 mb-3">
                    Search Courses
                  </label>
                  <input
                    id="course-search"
                    value={filters.q}
                    onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
                    placeholder="Search by title, provider, or career..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    aria-label="Search qualifications by title, provider, or career"
                  />
                </div>
                <div>
                  <label htmlFor="category-filter" className="block body-normal font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={filters.category}
                    onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    aria-label="Filter by category"
                  >
                    <option value="all">All Categories</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Information Science">Information Science</option>
                    <option value="Data Science">Data Science</option>
                    <option value="AI">Artificial Intelligence</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Cyber Security">Cyber Security</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="level-filter" className="block body-normal font-medium text-gray-700 mb-3">
                    NFQ Level
                  </label>
                  <select
                    id="level-filter"
                    value={filters.level}
                    onChange={(e) => setFilters((f) => ({ ...f, level: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    aria-label="Filter by NFQ level"
                  >
                    <option value="all">All Levels</option>
                    <option value="6">Level 6</option>
                    <option value="7">Level 7</option>
                    <option value="8">Level 8</option>
                    <option value="9">Level 9</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="delivery-filter" className="block body-normal font-medium text-gray-700 mb-3">
                    Delivery
                  </label>
                  <select
                    id="delivery-filter"
                    value={filters.delivery}
                    onChange={(e) => setFilters((f) => ({ ...f, delivery: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:border-blue-500 transition-all duration-200"
                    aria-label="Filter by delivery method"
                  >
                    <option value="all">All Delivery</option>
                    <option value="On-campus">On-campus</option>
                    <option value="Online">Online</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results with staggered animations */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((q, index) => (
                <QualificationCard key={q.id} qualification={q} index={index} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria or browse all courses.</p>
                </div>
              )}
            </div>
            </div>
          </section>

        {/* Call to Action */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Connect with our team to learn more about these qualifications and get guidance 
              on choosing the right path for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="mailto:info@edutec.ie"
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg"
              >
                Get Guidance
              </Link>
              <Link
                href="/initiatives/pathways"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition text-lg"
              >
                Attend Pathways 2025
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Powered by <strong className="text-white">itag Skillnet Ireland</strong> | Celebrating 25 Years of Tech Excellence
            </p>
      </div>
        </section>

    </main>
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
