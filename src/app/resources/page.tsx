'use client';

import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import Link from 'next/link';
import * as React from 'react';

export default function ResourcesPage() {
  return (
    <>
    <Navbar />

      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="text-white py-20 md:py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}} role="banner">
          <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h1 className="heading-1 mb-8 text-white animate-slide-up">EdUTec Resources</h1>
            <p className="body-large max-w-4xl text-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Access teaching materials, company toolkits, and inspiring digital resources — all designed to bridge education and industry.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 mb-12 text-center" style={{color: '#212721'}}>
              Resources for Everyone
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Teachers Library */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition card-hover">
                <div className="w-16 h-16 rounded-full mb-6 mx-auto flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-4xl">👨‍🏫</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#212721'}}>Teacher Library</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Curriculum guides, classroom activities, and digital resources tailored for educators promoting tech pathways.
                </p>
                <Link
                  href="mailto:info@edutec.ie?subject=Teacher%20Resources%20Request"
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  Request Access →
                </Link>
              </div>

              {/* Company Library */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition card-hover">
                <div className="w-16 h-16 rounded-full mb-6 mx-auto flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-4xl">🏢</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#212721'}}>Company Toolkit</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access toolkits and best-practice guides for partnering with schools and supporting Ireland's future tech workforce.
                </p>
                <Link
                  href="mailto:info@edutec.ie?subject=Company%20Toolkit%20Request"
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  Get Toolkit →
                </Link>
              </div>

              {/* Student & Career Resources */}
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition card-hover">
                <div className="w-16 h-16 rounded-full mb-6 mx-auto flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#212721'}}>Student Resources</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore career maps, interview prep tips, and digital literacy tools to help students succeed in tech.
                </p>
                <Link
                  href="/careers"
                  className="inline-block px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  Explore Careers →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 mb-12 text-center" style={{color: '#212721'}}>
              External Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4" style={{color: '#00b2e3'}}>
                  Industry Reports & Research
                </h3>
                <p className="text-gray-700 mb-4">
                  Access the latest reports on Ireland's tech sector, skills gap analysis, and workforce development research.
                </p>
                <Link
                  href="mailto:info@edutec.ie?subject=Research%20Access%20Request"
                  className="text-sm font-medium hover:underline"
                  style={{color: '#00b2e3'}}
                >
                  Request Access →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-4" style={{color: '#00b2e3'}}>
                  Online Learning Platforms
                </h3>
                <p className="text-gray-700 mb-4">
                  Discover recommended online learning platforms for developing tech skills at your own pace.
                </p>
                <Link
                  href="mailto:info@edutec.ie?subject=Learning%20Platform%20Recommendations"
                  className="text-sm font-medium hover:underline"
                  style={{color: '#00b2e3'}}
                >
                  Get Recommendations →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Specific Resources?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Can't find what you're looking for? Get in touch and we'll help you find the resources you need.
            </p>
            <Link
              href="mailto:info@edutec.ie"
              className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


    
