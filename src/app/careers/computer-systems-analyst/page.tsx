'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ComputerSystemsAnalystPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Systems Analyst</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Evaluate computer systems and procedures. Design solutions to help organizations operate more efficiently through technology optimization.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: IT & Systems</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Computer Systems Analysts study an organization's current computer systems and design improvements to increase efficiency. They install new systems, train users, and ensure smooth technology operations. This role combines technical expertise with problem-solving to optimize IT infrastructure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish businesses increasingly rely on computer systems analysts to maintain competitive advantage through technology. The role offers variety, working with different systems and business challenges.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Analyze current computer systems</li>
                <li>Design system improvements</li>
                <li>Evaluate software and hardware</li>
                <li>Implement new systems</li>
                <li>Train staff on new systems</li>
                <li>Create technical specifications</li>
                <li>Coordinate with vendors</li>
                <li>Troubleshoot system issues</li>
                <li>Monitor system performance</li>
                <li>Document system configurations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• System analysis methodologies</li>
                  <li>• IT infrastructure knowledge</li>
                  <li>• Database management</li>
                  <li>• Network fundamentals</li>
                  <li>• Software evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Analysis Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Requirements analysis</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Process improvement</li>
                  <li>• System design</li>
                  <li>• Problem-solving</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication</li>
                  <li>• Project management</li>
                  <li>• Technical writing</li>
                  <li>• Teamwork</li>
                  <li>• Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€36,000 - €62,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior analysts earn €36,000-€43,000, mid-level analysts earn €46,000-€56,000, while senior analysts command €58,000-€72,000.
            </p>
            <p className="text-lg text-gray-700">
              Stable career with good progression. Benefits include health insurance, pension contributions, professional development opportunities, and increasingly common hybrid working arrangements.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Job Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Consistent demand in Ireland with over 450 positions advertised annually. Technology upgrades and digital initiatives ensure continued need.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• System modernization projects</li>
                  <li>• Cloud migrations</li>
                  <li>• Digital transformation</li>
                  <li>• Process automation</li>
                  <li>• Technology integration</li>
                  <li>• Efficiency improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What education is required?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Level 7/8 IT Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Information Systems, or IT from Irish universities. Combination of technical and analytical skills important.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    CompTIA A+, ITIL, or systems analysis certifications enhance employability. Many roles value practical experience alongside qualifications.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• System analysis techniques</li>
                  <li>• IT infrastructure</li>
                  <li>• Database systems</li>
                  <li>• Network architecture</li>
                  <li>• Software lifecycle</li>
                  <li>• Requirements gathering</li>
                  <li>• Technical documentation</li>
                  <li>• Project management</li>
                  <li>• Vendor management</li>
                  <li>• User training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Computer Systems?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for computer systems analyst careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qualifications" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                View Qualifications
              </Link>
              <Link href="/events" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
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

