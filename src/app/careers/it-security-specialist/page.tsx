'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ITSecuritySpecialistPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Security Specialist</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Implement and maintain security policies and procedures. Conduct security audits, manage access controls, ensure compliance, and protect organizational IT assets.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Cyber Security</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IT Security Specialists implement and maintain security measures across organizational IT systems. They conduct audits, manage security policies, ensure regulatory compliance (GDPR, ISO 27001), and coordinate security awareness training. This role bridges technical security and organizational governance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish organizations across all sectors employ IT Security Specialists to ensure compliance with GDPR and protect against threats. The role offers good entry into security careers with clear progression paths.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Implement security policies and standards</li>
                <li>Conduct security audits and assessments</li>
                <li>Manage user access controls</li>
                <li>Monitor security compliance</li>
                <li>Coordinate security awareness training</li>
                <li>Perform risk assessments</li>
                <li>Document security procedures</li>
                <li>Manage security tools and software</li>
                <li>Respond to security incidents</li>
                <li>Liaise with compliance teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security policy development</li>
                  <li>• Risk assessment</li>
                  <li>• Access control management</li>
                  <li>• Security auditing</li>
                  <li>• Compliance frameworks (ISO 27001)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IT systems and infrastructure</li>
                  <li>• Security tools</li>
                  <li>• GDPR requirements</li>
                  <li>• Identity management</li>
                  <li>• Vulnerability assessment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication</li>
                  <li>• Documentation</li>
                  <li>• Organizational skills</li>
                  <li>• Policy enforcement</li>
                  <li>• Training delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€36,000 - €65,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior specialists earn €36,000-€42,000, mid-level specialists earn €45,000-€58,000, while senior specialists command €60,000-€75,000.
            </p>
            <p className="text-lg text-gray-700">
              Accessible entry point into security careers with good progression. Benefits include certification funding, professional development, health insurance, and flexible working arrangements.
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
                  Growing demand across all sectors in Ireland. Over 600 positions advertised annually. Good entry-level opportunities with clear career progression.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• GDPR compliance requirements</li>
                  <li>• Increasing security awareness</li>
                  <li>• Regulatory pressures</li>
                  <li>• Risk management needs</li>
                  <li>• Audit requirements</li>
                  <li>• Security governance</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">IT/Security Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Level 7/8 in IT, Cyber Security, or Business IT from Irish universities. Level 7 often sufficient for entry-level roles.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    CompTIA Security+, CISM, or ISO 27001 certifications valued. Can enable career entry or transition from IT support/admin roles.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Security policy development</li>
                  <li>• Compliance frameworks (ISO 27001, GDPR)</li>
                  <li>• Risk assessment methodologies</li>
                  <li>• Access control systems</li>
                  <li>• Security auditing</li>
                  <li>• Documentation skills</li>
                  <li>• Training delivery</li>
                  <li>• IT systems knowledge</li>
                  <li>• Communication skills</li>
                  <li>• Organizational awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start in IT Security?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover IT security specialist roles.
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

