'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import { qualifications } from '../data';

export default function QualificationDetailPage() {
  const params = useParams();
  const id = String(params?.id || '');
  const q = qualifications.find((x) => x.id === id);

  if (!q) {
    return (
      <>
        <Navbar />
        <div className="pt-24 px-6 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Programme not found</h1>
            <Link href="/qualifications" className="text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block" style={{backgroundColor: '#00b2e3'}}>
              Back to Qualifications
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero Section with Brand Colors */}
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <Link href="/qualifications" className="text-blue-100 hover:text-white inline-flex items-center gap-2 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Qualifications
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">{q.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl text-blue-100">{q.provider}</p>
              {q.providerLogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={q.providerLogo} alt={`${q.provider} logo`} className="h-12 w-auto bg-white rounded p-1" />
              )}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {q.nfqLevel && <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold">NFQ Level {q.nfqLevel}</span>}
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold">{q.pathway}</span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold">{q.delivery}</span>
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold">{q.duration}</span>
              {q.location && <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm font-semibold">📍 {q.location}</span>}
            </div>
          </div>
        </section>

        {/* Important Notice - Visit Official Page */}
        <section className="py-6 px-6" style={{backgroundColor: '#fff3cd', borderBottom: '3px solid #00b2e3'}}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-bold text-lg mb-2" style={{color: '#212721'}}>Full Programme Details on Official Course Page</h3>
                <p className="text-gray-700 mb-3">
                  This page provides a brief overview. For complete programme information, entry requirements, fees, application deadlines, and to apply, please visit the official course page at {q.provider}.
                </p>
                <a 
                  href={q.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  View Official Course Page
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Programme Overview */}
            {q.summary && (
              <div className="bg-gray-50 p-6 rounded-xl border-l-4" style={{borderColor: '#00b2e3'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#00b2e3'}}>Programme Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{q.summary}</p>
              </div>
            )}

            {/* What You'll Learn */}
            {q.modules && q.modules.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#00b2e3'}}>What You'll Learn</h2>
                <p className="text-gray-600 mb-4 italic">Sample topics covered in this programme:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {q.modules.map((m, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Entry Requirements */}
            {q.entryRequirements && q.entryRequirements.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#00b2e3'}}>Entry Requirements</h2>
                <p className="text-gray-600 mb-4 italic">Typical entry requirements (check official page for complete details):</p>
                <ul className="space-y-3">
                  {q.entryRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA to visit official page */}
            <div className="bg-gradient-to-r p-8 rounded-xl text-white shadow-lg" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
              <h3 className="text-2xl font-bold mb-3">Ready to Learn More?</h3>
              <p className="text-blue-50 mb-6">
                Visit the official {q.provider} course page for complete programme details, application information, and to get started on your tech education journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={q.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition text-lg"
                  style={{color: '#00b2e3'}}
                >
                  View Full Course Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                {q.applyUrl && (
                  <a 
                    href={q.applyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:shadow-xl transition text-lg"
                    style={{'--hover-color': '#00b2e3'} as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00b2e3'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4" style={{borderColor: '#00b2e3'}}>
              <h3 className="font-bold text-xl mb-4" style={{color: '#212721'}}>Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Provider</p>
                  <p className="font-semibold text-gray-800">{q.provider}</p>
                </div>
                {q.location && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="font-semibold text-gray-800">{q.location}</p>
                  </div>
                )}
                {q.caoCode && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">CAO Code</p>
                    <p className="font-semibold text-xl" style={{color: '#00b2e3'}}>{q.caoCode}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                  <p className="font-semibold text-gray-800">{q.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Delivery Mode</p>
                  <p className="font-semibold text-gray-800">{q.delivery}</p>
                </div>
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4" style={{borderColor: '#00b2e3'}}>
              <h3 className="font-bold text-xl mb-4" style={{color: '#212721'}}>Career Opportunities</h3>
              <p className="text-sm text-gray-600 mb-4">Graduates may pursue careers such as:</p>
              <div className="space-y-3">
                {q.outcomes.map((o, i) => (
                  <Link 
                    key={i} 
                    href="/careers"
                    className="flex items-center gap-2 p-3 rounded-lg hover:shadow-md transition bg-gray-50 hover:bg-blue-50 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{o}</span>
                  </Link>
                ))}
              </div>
              <Link 
                href="/careers" 
                className="block text-center mt-4 px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}
              >
                Explore All Careers
              </Link>
            </div>

            {/* Important Links */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg mb-4" style={{color: '#212721'}}>Important Links</h3>
              <div className="space-y-3">
                <a 
                  href={q.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between p-3 rounded-lg hover:shadow-md transition group"
                  style={{backgroundColor: '#00b2e3', color: 'white'}}
                >
                  <span className="font-semibold">Official Course Page</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {q.applyUrl && (
                  <a 
                    href={q.applyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3 rounded-lg hover:shadow-md transition group border-2"
                    style={{borderColor: '#00b2e3', color: '#00b2e3'}}
                  >
                    <span className="font-semibold">Apply Online</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
                <Link 
                  href="/qualifications" 
                  className="flex items-center justify-center p-3 rounded-lg hover:shadow-md transition text-gray-700 border border-gray-300 hover:border-gray-400 font-medium"
                >
                  Browse More Courses
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


