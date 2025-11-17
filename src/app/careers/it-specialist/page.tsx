'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ITSpecialistPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Specialist</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Provide technical support and maintain IT infrastructure. Handle hardware, software, and network issues to keep organizations running smoothly.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">Career Cluster: IT & Systems</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IT Specialists provide broad technical support, maintaining IT infrastructure and assisting users with technology issues. They work with hardware, software, networks, and user support, serving as the first line of technical assistance. This versatile role offers excellent entry into IT careers with diverse responsibilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every Irish organization needs IT specialists to maintain technology operations. The role provides practical experience across IT domains, creating pathways to specialized careers in networking, systems administration, or technical support management.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Provide technical support to users</li>
                <li>Install and configure hardware/software</li>
                <li>Troubleshoot IT issues</li>
                <li>Maintain IT equipment</li>
                <li>Manage user accounts</li>
                <li>Perform system updates</li>
                <li>Document technical procedures</li>
                <li>Support network connectivity</li>
                <li>Assist with IT projects</li>
                <li>Train users on technology</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hardware troubleshooting</li>
                  <li>• Windows/Mac OS</li>
                  <li>• Software installation</li>
                  <li>• Basic networking</li>
                  <li>• Office applications</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Support Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem diagnosis</li>
                  <li>• Ticketing systems</li>
                  <li>• Remote support tools</li>
                  <li>• Documentation</li>
                  <li>• User training</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Customer service</li>
                  <li>• Communication</li>
                  <li>• Patience</li>
                  <li>• Teamwork</li>
                  <li>• Time management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€28,000 - €48,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Entry-level IT specialists earn €28,000-€33,000, mid-level specialists earn €35,000-€42,000, while experienced specialists command €44,000-€52,000.
            </p>
            <p className="text-lg text-gray-700">
              Good entry point into IT careers. Benefits include health insurance, pension contributions, professional development support, and clear progression paths to specialized IT roles or management.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Job Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Strong demand across all sectors. Over 1,000 IT specialist positions advertised annually in Ireland. Accessible entry point with good career progression opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Technology dependence increasing</li>
                  <li>• Remote work IT support needs</li>
                  <li>• Growing IT infrastructure</li>
                  <li>• User support demand</li>
                  <li>• Technology complexity</li>
                  <li>• Digital transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What education is required?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Level 5/6 IT Qualification</h4>
                  <p className="text-gray-700 mt-2">
                    QQI Level 5/6 in IT, Computer Systems, or Help Desk Support from Irish FET colleges. Accessible entry qualifications.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    CompTIA A+, Microsoft fundamentals, or IT support certifications. Can enable entry without formal degree with demonstrated skills.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Apprenticeships</h4>
                  <p className="text-gray-700 mt-2">
                    IT apprenticeships available in Ireland combining work and study. Excellent practical training path.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Essential Skills</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Computer hardware basics</li>
                  <li>• Operating systems (Windows, Mac)</li>
                  <li>• Software troubleshooting</li>
                  <li>• Basic networking</li>
                  <li>• Help desk procedures</li>
                  <li>• Customer service skills</li>
                  <li>• Ticketing system usage</li>
                  <li>• Documentation skills</li>
                  <li>• Communication abilities</li>
                  <li>• Problem-solving approach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your IT Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for IT specialist roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qualifications" className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition" style={{color: '#00b2e3'}}>
                View Qualifications
              </Link>
              <Link href="/events" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:opacity-90 transition">
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

