'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PathwaysPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="text-white py-16 md:py-20" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Pathways</h1>
            <p className="text-xl md:text-2xl font-semibold mb-3">Careers & Higher Education Conference</p>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
              Explore routes into tech and education: meet with experts from Third Level colleges, Universities, ETBs, and leading employers in the West of Ireland.
            </p>
          </div>
        </section>

        {/* Pathways 2025 - Event Overview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4" style={{borderColor: '#00b2e3'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#00b2e3'}}>
              Calling all 5th Year and Leaving Cert Students
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
              Join us on the <strong>6th of November 2025</strong> at the <strong>Galmont Hotel, Galway</strong>, before making any final decisions on your future
              education, training and employment options.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Pathways 2025, hosted by <strong>The Galway Advertiser</strong> in partnership with <strong>iTAG</strong> and <strong>iTAG Skillnet</strong>, gives you a chance to meet with experts from Third Level colleges, Universities,
              ETBs, and some of the largest employers in the West of Ireland — all under one roof.
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#00b2e3'}}>What to Expect</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Pathways connects students with real-world career guidance, industry insights, and educational opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Meet Industry Professionals</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Hear from tech professionals sharing their career journeys and insights into Ireland's digital sector.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Explore Education Options</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Connect with representatives from universities, colleges, and training providers to discover your path forward.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Get Career Guidance</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Receive expert career advice from guidance counselors and professionals to help shape your future decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways 2024 Highlights */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#00b2e3'}}>Pathways 2024 Highlights</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Last year's event saw inspiring professionals from leading tech companies share their career journeys with students across the West of Ireland.
              </p>
            </div>

            {/* Speaker Spotlight Section */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Speaker Spotlight</h3>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Brie Staunton */}
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#00b2e3'}}>
                      <span className="text-white font-bold text-xl">BS</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Brie Staunton</h4>
                      <p className="text-gray-600">Cyber Security Automation Engineer</p>
                      <p className="text-sm" style={{color: '#00b2e3'}}>Hewlett Packard Enterprise (HPE)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Brie began her career with HPE six years ago after earning her <strong>BSc in Computer Science and Software Engineering</strong>. She shared insights into cybersecurity automation and the diverse career pathways available in technology with 5th Year and Leaving Certificate students.
                  </p>
                </div>

                {/* Nia Northime */}
                <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#00b2e3'}}>
                      <span className="text-white font-bold text-xl">NN</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Nia Northime</h4>
                      <p className="text-gray-600">Cybersecurity Analyst</p>
                      <p className="text-sm" style={{color: '#00b2e3'}}>Hewlett Packard Enterprise (HPE)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Nia started her journey with HPE in 2021 as an intern. Following an 11-month placement, she was offered a full-time position. Nia holds a <strong>BA in Geography and Information Technology</strong> and completed an <strong>MSc in Computer Science at UCD</strong>, demonstrating that diverse educational backgrounds can lead to exciting tech careers.
                  </p>
                </div>
              </div>

              {/* Impact Quote */}
              <div className="mt-10 max-w-4xl mx-auto">
                <blockquote className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4" style={{borderColor: '#00b2e3'}}>
                  <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-4">
                    "Sharing career experiences and advice with students who are beginning to make decisions about their futures is invaluable. Professionals like Brie and Nia play a key role in inspiring and supporting the next generation of tech talent."
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    By sharing real experiences and career insights, contributors help bridge the gap between education and employment—supporting iTAG's mission to strengthen digital skills and inspire the next generation of technology talent across the West of Ireland.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways 2025 Details */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            {/* Exhibitors */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#00b2e3'}}>Pathways 2025 Exhibitors</h3>
              <p className="text-gray-700 mb-4">This year's exhibitors include:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'University of Galway',
                  'University of Limerick',
                  'Maynooth University',
                  'Mary Immaculate College',
                  'Imperial College London',
                  "Scotland's Rural College",
                  'An Garda Síochána',
                  'NMBI',
                  'Romero Games',
                  'NLN',
                  'and many more',
                ].map((name) => (
                  <span key={name} className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm md:text-base hover:bg-gray-200 transition-colors">{name}</span>
                ))}
              </div>
            </div>

            {/* Speakers & Planning */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#00b2e3'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Industry Speakers</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Galway Advertiser</strong>, in partnership with <strong>iTAG</strong>, is lining up exciting speakers from both the education and industry
                  sectors, including career guidance advice from <strong>Brian Mooney</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>This year</strong>, member company employees from <strong style={{color: '#00b2e3'}}>Fidelity Investments</strong> will be speaking at the conference, sharing their insights and career journeys with students.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#00b2e3'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Plan Your Day</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  An extensive <strong>Careers and Colleges Supplement</strong> will be published to help you plan your day in advance. Pick up your copy on
                  <strong> 30th October 2025</strong> in your local store, or read it online at
                  {" "}
                  <a href="https://www.advertiser.ie" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline transition-all" style={{color: '#00b2e3'}}>www.advertiser.ie</a>
                  {" "}(epaper).
                </p>
              </div>
            </div>

            {/* Registration & Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-center border-2" style={{borderColor: '#00b2e3'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#00b2e3'}}>Register for Pathways 2025</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Interested in attending? <strong>Tickets €5</strong> per student.
              </p>
              <div className="space-y-3 text-gray-800">
                <p className="text-lg">
                  Contact <strong>Shannon</strong> or <strong>Máire</strong>
                </p>
                <p className="text-xl">
                  <a href="tel:+35391530951" className="font-semibold hover:underline transition-all" style={{color: '#00b2e3'}}>091 530 951</a>
                </p>
                <p className="text-xl">
                  <a href="mailto:pathways@advertiser.ie" className="font-semibold hover:underline transition-all" style={{color: '#00b2e3'}}>pathways@advertiser.ie</a>
                </p>
              </div>
            </div>

            {/* Past Events */}
            <div className="bg-gray-100 rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Previous Events</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Want to see what Pathways is all about? Learn more about our previous successful events and what to expect.
              </p>
              <a 
                href="mailto:pathways@advertiser.ie?subject=Pathways%20Event%20Information" 
                className="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#00b2e3'}}
              >
                Get Event Information
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


