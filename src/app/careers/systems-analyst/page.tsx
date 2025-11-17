'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function SystemsAnalystPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Systems Analyst</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Analyze and improve IT systems. Bridge the gap between business needs and technology solutions to optimize organizational processes.
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
                Systems Analysts evaluate IT systems and business processes to identify improvements and technology solutions. They gather requirements, design system specifications, and ensure technology meets business objectives. This role requires both technical knowledge and business understanding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish organizations across all sectors employ systems analysts to optimize operations and digital transformation. The role offers excellent opportunities to work with diverse technologies and business functions.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Analyze business requirements and processes</li>
                <li>Design system specifications and solutions</li>
                <li>Evaluate existing IT systems</li>
                <li>Recommend system improvements</li>
                <li>Create process documentation</li>
                <li>Coordinate between stakeholders and IT teams</li>
                <li>Test and validate system changes</li>
                <li>Support system implementations</li>
                <li>Conduct cost-benefit analyses</li>
                <li>Train users on new systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Analysis Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Requirements gathering</li>
                  <li>• Process modeling</li>
                  <li>• System design</li>
                  <li>• Data analysis</li>
                  <li>• Problem identification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IT systems understanding</li>
                  <li>• Database concepts</li>
                  <li>• Software development lifecycle</li>
                  <li>• Modeling tools (UML, BPMN)</li>
                  <li>• Testing methodologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication</li>
                  <li>• Stakeholder management</li>
                  <li>• Documentation</li>
                  <li>• Critical thinking</li>
                  <li>• Business acumen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€35,000 - €60,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior systems analysts earn €35,000-€42,000, mid-level analysts earn €45,000-€55,000, while senior analysts command €58,000-€70,000.
            </p>
            <p className="text-lg text-gray-700">
              Good career progression opportunities. Benefits include health insurance, pension contributions, professional development, and hybrid working arrangements increasingly common in Irish companies.
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
                  Steady demand across Irish organizations. Over 500 systems analyst positions advertised annually. Digital transformation initiatives drive continued need.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital transformation projects</li>
                  <li>• Process optimization needs</li>
                  <li>• System modernization</li>
                  <li>• Business-IT alignment</li>
                  <li>• Cloud migration projects</li>
                  <li>• Legacy system replacement</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 7/8 Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Business Information Systems, or IT from Irish universities/TUs. Business and technical combination valued.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Business Analysis Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    BCS Business Analysis certification or IIBA CBAP enhance career prospects. Many Irish employers support certification.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Requirements gathering techniques</li>
                  <li>• Process modeling (BPMN, UML)</li>
                  <li>• System analysis methodologies</li>
                  <li>• SQL and databases</li>
                  <li>• Documentation skills</li>
                  <li>• Stakeholder communication</li>
                  <li>• Business process improvement</li>
                  <li>• Testing and validation</li>
                  <li>• Project management basics</li>
                  <li>• Change management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Analyze Systems?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for systems analyst careers.
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

