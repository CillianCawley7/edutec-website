'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';

export default function PathwaysPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section 
          className="text-white py-16 md:py-20 relative bg-cover bg-center" 
          style={{
            backgroundImage: 'url(/pathways-hero-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Blue gradient overlay */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(135deg, rgba(0, 178, 227, 0.9) 0%, rgba(0, 153, 199, 0.9) 100%)'
            }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Pathways 2025 - Thank You!</h1>
            <p className="text-xl md:text-2xl font-semibold mb-3">A Resounding Success</p>
            <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
              Thank you to everyone who made Pathways 2025 an incredible event on November 6th at the Galmont Hotel, Galway.
            </p>
          </div>
        </section>

        {/* Thank You Message */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border-l-4" style={{borderColor: '#00b2e3'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: '#00b2e3'}}>
              A Huge Thank You
            </h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-700">
              <p>
                A huge thank you to the <strong>students</strong>, <strong>teachers</strong>, <strong>parents</strong>, and all the <strong>exhibitors</strong> and <strong>speakers</strong> who joined us on the 6th of November in the Galmont Hotel, Galway, for Pathways 2025.
              </p>
              <p>
                Pathways 2025 offered students the opportunity to meet with and attend talks from experts across both the education and industry sectors.
              </p>
              <p>
                This year's exhibitors included <strong>University of Galway</strong>, <strong>University of Limerick</strong>, <strong>ATU</strong>, <strong>Mary Immaculate College</strong>, <strong>Imperial College London</strong>, <strong>Scotland's Rural College</strong>, <strong>University of Nicosia</strong>, <strong>An Garda Síochána</strong>, the <strong>Defence Forces</strong>, <strong>Nursing and Midwifery Board of Ireland</strong>, <strong>National Learning Network</strong>, and many more.
              </p>
              <p>
                With the comprehensive range of exhibitors, and expert advice from speakers, Pathways 2025 proved to be a resounding success. We are looking forward to emulating this success in our 2026 event, details of which will be announced shortly.
              </p>
            </div>
          </div>
        </section>

        {/* What Pathways Offers */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#00b2e3'}}>What Pathways Offers</h2>
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

        {/* Pathways 2026 - Coming Soon */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 text-center border-2" style={{borderColor: '#00b2e3'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#00b2e3'}}>Looking Ahead to Pathways 2026</h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                Following the success of Pathways 2025, we're excited to announce that planning is underway for Pathways 2026. Details will be announced shortly.
              </p>
              <div className="space-y-4 text-gray-800 mb-8">
                <p className="text-lg font-semibold">
                  To book an exhibition space at Pathways 2026:
                </p>
                <div className="space-y-2">
                  <p className="text-lg">
                    Contact <strong>Máire</strong>
                  </p>
                  <p className="text-xl">
                    <a href="tel:+35391530951" className="font-semibold hover:underline transition-all" style={{color: '#00b2e3'}}>091 530 951</a>
                  </p>
                  <p className="text-xl">
                    <a href="mailto:mmccarthy@galwayadvertiser.ie" className="font-semibold hover:underline transition-all" style={{color: '#00b2e3'}}>mmccarthy@galwayadvertiser.ie</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


