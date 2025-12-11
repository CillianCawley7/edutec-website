'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import { LightBulbIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative text-white py-24 overflow-hidden bg-cover bg-center" 
          style={{
            backgroundImage: 'url(/about-hero-backround.jpg)',
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
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                itag EdUTec
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Fostering talent growth and promoting interest in computer science for school students across Ireland
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4" style={{borderColor: '#00b2e3'}}>
            <p className="text-2xl text-gray-800 leading-relaxed text-center font-light">
              The <strong className="font-semibold" style={{color: '#00b2e3'}}>EdUTec forum</strong> brings together tech companies and education professionals 
              to foster talent growth and promote interest in computer science for school students.
            </p>
          </div>
        </section>

        {/* Core Purpose */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bridging the Gap */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl" style={{backgroundColor: '#00b2e3'}}>
                  🌉
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Bridging the Gap
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The forum aims to <strong>bridge the gap between the classroom and the tech industry</strong>. 
                By leveraging the expertise and resources of companies, we provide unique opportunities for school 
                students to cultivate their passion for technology and explore future career paths.
              </p>
            </div>

            {/* Making CS Engaging */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white" style={{backgroundColor: '#00b2e3'}}>
                  <LightBulbIcon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Inspiring Young Minds
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We place a strong emphasis on <strong>promoting interest in computer science</strong> among school students. 
                We organise events, competitions, and interactive sessions that inspire creativity, critical thinking, 
                and problem-solving skills. By making computer science engaging and accessible, we seek to break down 
                barriers and make it an <strong>inclusive field for all young minds</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-16" style={{backgroundColor: '#f8fafc'}}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Three Pillars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EdUTec is built on three core pillars that drive our mission to empower the next generation of tech talent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1: Talent Growth */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl" style={{backgroundColor: '#00b2e3'}}>
                  📈
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Talent Growth
                </h3>
                <ul className="text-left text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Attracting talent to the region</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Advertising career opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Professional development programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Researching skills gaps</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Promoting Computer Science */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl" style={{backgroundColor: '#00b2e3'}}>
                  💻
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Promoting Computer Science
                </h3>
                <ul className="text-left text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>School programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Workshops & competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Skills connect initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Breaking down barriers to inclusivity</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3: Teens in Tech */}
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-3xl" style={{backgroundColor: '#00b2e3'}}>
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Teens in Tech
                </h3>
                <ul className="text-left text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Third-level institute visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>School visits & career guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Online resources & guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>STEAM TechTalks & networking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* itag Partnership Banner */}
        <section className="py-20" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">
                  A Forum of itag
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  <strong>EdUTec</strong> is proudly run as a forum of <strong>itag</strong> (Innovation Technology AtlanTec Gateway), 
                  the West of Ireland's leading technology industry association representing over <strong>150 member companies</strong>.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  Through itag's extensive network, we connect students with industry leaders, create pathways to tech careers, 
                  and provide hands-on experiences that shape the future workforce.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  As part of itag's <strong>25th anniversary celebration</strong>, EdUTec continues to empower Ireland's 
                  next generation of technology talent.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-10 shadow-2xl">
                <div className="space-y-8">
                  <Image
                    src="/itag/itag logo.png"
                    alt="itag - Innovation Technology AtlanTec Gateway"
                    width={280}
                    height={100}
                    className="object-contain mx-auto"
                  />
                  <div className="border-t border-gray-200 pt-6">
                    <Image
                      src="/itag/itag Skillnet-Masthead-Full-colour.png"
                      alt="itag Skillnet Ireland"
                      width={300}
                      height={100}
                      className="object-contain mx-auto"
                    />
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <Image
                      src="/itag/Itag 25 Years Logo Rgb (1).png"
                      alt="Celebrating 25 Years of itag"
                      width={250}
                      height={110}
                      className="object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Whether you're a student exploring tech careers, an educator looking to inspire your students, 
              or a company wanting to give back to the community — there's a place for you in EdUTec.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/careers"
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg"
                style={{backgroundColor: '#00b2e3'}}
              >
                Explore Tech Careers
              </Link>
              <Link
                href="/qualifications"
                className="px-8 py-4 rounded-lg text-gray-800 font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 border-2 border-gray-300"
              >
                View Qualifications
              </Link>
              <Link
                href="/events"
                className="px-8 py-4 rounded-lg text-gray-800 font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 border-2 border-gray-300"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


