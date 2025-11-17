'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function CyberSecurityTechnicianPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security Technician</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Support security operations through monitoring, maintenance, and technical support. Entry to mid-level security role providing foundation for career growth in cybersecurity.
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
                Cyber Security Technicians provide hands-on technical support for security operations. They monitor security systems, assist with implementations, maintain security tools, and support incident response. This entry to mid-level role offers excellent pathway into cyber security careers with structured learning and mentorship opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish organizations actively recruit security technicians to support growing security teams. The role provides practical experience across security technologies while building skills for advancement to analyst, engineer, or specialist roles.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Monitor security dashboards and alerts</li>
                <li>Assist with security tool deployment</li>
                <li>Maintain security systems</li>
                <li>Document security procedures</li>
                <li>Support incident response activities</li>
                <li>Perform basic security assessments</li>
                <li>Manage user access requests</li>
                <li>Update security software</li>
                <li>Assist with security audits</li>
                <li>Provide technical security support</li>
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
                  <li>• Basic networking knowledge</li>
                  <li>• Operating systems (Windows, Linux)</li>
                  <li>• Security tools basics</li>
                  <li>• IT troubleshooting</li>
                  <li>• Basic scripting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security fundamentals</li>
                  <li>• Threat awareness</li>
                  <li>• Security policies</li>
                  <li>• Incident handling basics</li>
                  <li>• Access control concepts</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Attention to detail</li>
                  <li>• Willingness to learn</li>
                  <li>• Communication skills</li>
                  <li>• Teamwork</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€28,000 - €45,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Entry-level security technicians in Ireland earn €28,000-€33,000, while experienced technicians earn €35,000-€45,000. After 2-3 years, progression to analyst roles offers €45,000-€55,000.
            </p>
            <p className="text-lg text-gray-700">
              Excellent entry point into cybersecurity with clear progression path. Benefits include certification funding (CompTIA Security+, Network+), professional development, health insurance, and structured career advancement opportunities.
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
                  Strong entry-level demand as organizations build security teams. Over 400 technician positions advertised annually in Ireland. Excellent career progression opportunities to analyst, engineer, or specialist roles within 2-4 years.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why good entry point?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Accessible entry requirements</li>
                  <li>• Structured learning environment</li>
                  <li>• Clear career progression</li>
                  <li>• Growing security teams</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Hands-on experience</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 6/7 Qualification</h4>
                  <p className="text-gray-700 mt-2">
                    Higher Certificate or Ordinary Degree in IT, Cyber Security, or Computer Science from Irish Technological Universities. Level 6 often sufficient for entry roles.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Certifications Path</h4>
                  <p className="text-gray-700 mt-2">
                    CompTIA A+, Network+, or Security+ certifications can enable entry. Many Irish employers hire based on certifications plus enthusiasm to learn.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">IT Background Transition</h4>
                  <p className="text-gray-700 mt-2">
                    Common transition from IT support or helpdesk roles. Security interest plus foundational knowledge opens doors.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Basic networking (TCP/IP, DNS, DHCP)</li>
                  <li>• Windows and Linux basics</li>
                  <li>• Security concepts and terminology</li>
                  <li>• Antivirus and endpoint security</li>
                  <li>• Basic firewall concepts</li>
                  <li>• Incident documentation</li>
                  <li>• Ticketing systems</li>
                  <li>• Communication skills</li>
                  <li>• Troubleshooting methodology</li>
                  <li>• Willingness to learn new technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start in Cyber Security?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover security technician opportunities.
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

