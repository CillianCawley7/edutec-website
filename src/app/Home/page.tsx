'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import * as React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section */}
        <section className="px-8 py-20 text-center" style={{background: 'linear-gradient(135deg, #e6f7ff 0%, #f0f9ff 100%)'}}>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{color: '#212721'}}>
              Tech Careers Start Here
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-700">
              Empowering Ireland's next generation of tech talent through hands-on STEAM experiences, 
              industry partnerships, and real career pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/careers"
                className="inline-block text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg"
                style={{backgroundColor: '#00b2e3'}}
              >
                Explore Careers
              </Link>
              <Link
                href="/initiatives/pathways"
                className="inline-block px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg border-2"
                style={{color: '#00b2e3', borderColor: '#00b2e3'}}
              >
                Pathways 2025
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 px-6" style={{backgroundColor: '#212721'}}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#00b2e3'}}>25</div>
                <div className="text-white">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#00b2e3'}}>500+</div>
                <div className="text-white">Students Reached</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#00b2e3'}}>50+</div>
                <div className="text-white">Industry Partners</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#00b2e3'}}>15</div>
                <div className="text-white">Schools Adopted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Initiatives */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{color: '#212721'}}>
              Empowering Through Action
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#212721'}}>Pathways 2025</h3>
                <p className="text-gray-600 mb-6">
                  Join us on November 6th in Galway for Ireland's premier tech career event. 
                  Meet universities, employers, and discover your future.
                </p>
                <Link
                  href="/initiatives/pathways"
                  className="inline-block px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3', color: 'white'}}
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#212721'}}>Adopt a School</h3>
                <p className="text-gray-600 mb-6">
                  Tech companies partner with schools to provide equipment, mentorship, 
                  and real-world learning experiences.
                </p>
                <Link
                  href="/initiatives/adopt-a-school"
                  className="inline-block px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3', color: 'white'}}
                >
                  Get Involved
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#212721'}}>Mentoring for Success</h3>
                <p className="text-gray-600 mb-6">
                  Free structured mentoring programme connecting tech professionals 
                  with emerging talent for career growth.
                </p>
                <Link
                  href="/initiatives/mentoring"
                  className="inline-block px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                  style={{backgroundColor: '#00b2e3', color: 'white'}}
                >
                  Join Programme
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* University Partners */}
        <section className="py-16 px-6" style={{backgroundColor: '#f8fafc'}}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{color: '#212721'}}>
              Trusted by Leading Institutions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <div className="text-lg font-semibold text-gray-600">University of Galway</div>
              <div className="text-lg font-semibold text-gray-600">University of Limerick</div>
              <div className="text-lg font-semibold text-gray-600">ATU</div>
              <div className="text-lg font-semibold text-gray-600">TUS</div>
              <div className="text-lg font-semibold text-gray-600">Skillnet Ireland</div>
            </div>
          </div>
        </section>

        {/* itag Partnership Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#212721'}}>
                    Powered by itag Skillnet
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    EdUTec Careers is proudly supported by itag (Irish Technology Association Galway) 
                    and itag Skillnet Ireland, bringing together industry expertise, educational institutions, 
                    and emerging talent to shape Ireland's tech future.
                  </p>
                  <p className="text-gray-600 mb-6">
                    As part of itag's 25th anniversary celebration, we're committed to empowering the next 
                    generation of tech professionals through innovative programmes, industry partnerships, 
                    and real career pathways.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                    style={{backgroundColor: '#00b2e3'}}
                  >
                    Learn More About Us
                  </Link>
                </div>
                <div className="flex flex-col gap-6 items-center">
                  <Image
                    src="/itag/itag Skillnet-Masthead-Full-colour.png"
                    alt="itag Skillnet Ireland"
                    width={300}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/itag/Itag 25 Years Logo Rgb (1).png"
                    alt="itag 25 Years Celebration"
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape Ireland's Tech Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're a student exploring careers, an educator seeking resources, 
              or a company looking to make an impact - we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg"
              >
                Learn About Us
              </Link>
              <Link
                href="mailto:info@edutec.ie"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
