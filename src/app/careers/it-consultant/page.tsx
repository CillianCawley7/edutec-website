'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ITConsultantPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Consultant</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Advise organizations on technology strategies and solutions. Help businesses improve IT infrastructure, processes, and achieve digital transformation goals.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Business & Management</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IT Consultants advise organizations on technology strategy, implementation, and optimization. They assess business needs, recommend solutions, manage projects, and help clients maximize technology value. This role combines technical expertise with business acumen and client relationship management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's consulting sector employs thousands across firms like Accenture, Deloitte, PwC, and specialized boutique consultancies. Irish IT consultants work with diverse clients solving complex technology challenges.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Assess client technology needs</li>
                <li>Recommend IT solutions and strategies</li>
                <li>Manage implementation projects</li>
                <li>Conduct technology audits</li>
                <li>Develop business cases</li>
                <li>Facilitate workshops with stakeholders</li>
                <li>Create technical proposals</li>
                <li>Manage client relationships</li>
                <li>Stay current with technology trends</li>
                <li>Mentor junior consultants</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Consulting Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Strategic thinking</li>
                  <li>• Problem-solving</li>
                  <li>• Client management</li>
                  <li>• Business analysis</li>
                  <li>• Change management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IT infrastructure</li>
                  <li>• Cloud technologies</li>
                  <li>• Digital transformation</li>
                  <li>• Enterprise systems</li>
                  <li>• Technology trends</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Excellent communication</li>
                  <li>• Presentation skills</li>
                  <li>• Project management</li>
                  <li>• Business acumen</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€38,000 - €75,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Graduate consultants earn €38,000-€45,000, consultants earn €50,000-€65,000, while senior consultants command €70,000-€90,000. Managers and partners earn significantly more plus performance bonuses.
            </p>
            <p className="text-lg text-gray-700">
              Consulting offers strong earning potential. Benefits include performance bonuses (15-25%), health insurance, pension contributions, professional development, international travel opportunities, and clear progression to manager and partner levels.
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
                  Strong demand for IT consultants in Ireland. Over 1,200 consulting positions advertised annually. Digital transformation drives continued growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital transformation initiatives</li>
                  <li>• Cloud migration projects</li>
                  <li>• Technology strategy needs</li>
                  <li>• System modernization</li>
                  <li>• Specialized expertise demand</li>
                  <li>• Business-IT alignment</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Business & IT, or Management Information Systems from Irish universities. Combination of technical and business knowledge valued.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">MBA or Business Qualifications</h4>
                  <p className="text-gray-700 mt-2">
                    MBA or professional qualifications enhance career progression. Many consultants pursue these part-time while working.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Technical Background + Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Many consultants transition from technical roles (development, systems administration) into consulting, bringing valuable practical experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Technology strategy development</li>
                  <li>• Business case creation</li>
                  <li>• Stakeholder management</li>
                  <li>• Presentation and facilitation</li>
                  <li>• Project management</li>
                  <li>• Solution architecture</li>
                  <li>• Change management</li>
                  <li>• Vendor assessment</li>
                  <li>• Business process analysis</li>
                  <li>• Client relationship building</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Become an IT Consultant?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for IT consulting careers.
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

