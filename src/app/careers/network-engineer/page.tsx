'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function NetworkEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Network Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design, implement, and maintain computer networks. Ensure network performance, reliability, and security for organizational connectivity and communications.
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
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Network Engineers design and manage the networks that connect computers, systems, and devices. They configure routers and switches, troubleshoot connectivity issues, optimize network performance, and ensure reliable communications. With cloud computing and hybrid work, network engineering skills are more critical than ever.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech sector employs thousands of network engineers supporting infrastructure for global operations. From multinational data centers to enterprise networks, Irish network engineers keep organizations connected and running efficiently.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design network architecture and topologies</li>
                <li>Configure routers, switches, and network devices</li>
                <li>Monitor network performance and availability</li>
                <li>Troubleshoot network issues</li>
                <li>Implement network security measures</li>
                <li>Manage network documentation</li>
                <li>Plan network capacity and upgrades</li>
                <li>Configure VPNs and remote access</li>
                <li>Work with cloud networking (AWS, Azure)</li>
                <li>Collaborate with security and systems teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Networking</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TCP/IP protocols</li>
                  <li>• Routing (OSPF, BGP, EIGRP)</li>
                  <li>• Switching and VLANs</li>
                  <li>• Network design principles</li>
                  <li>• Wireless networking</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cisco/Juniper equipment</li>
                  <li>• Cloud networking (AWS, Azure)</li>
                  <li>• VPNs and remote access</li>
                  <li>• Network monitoring tools</li>
                  <li>• SD-WAN technologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Analytical thinking</li>
                  <li>• Documentation</li>
                  <li>• Communication</li>
                  <li>• Project planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€38,000 - €70,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior network engineers earn €38,000-€45,000, mid-level engineers earn €48,000-€62,000, while senior engineers command €65,000-€80,000. Network architects can earn €85,000-€100,000+.
            </p>
            <p className="text-lg text-gray-700">
              Solid career with steady demand. Benefits include certification funding (CCNA, CCNP), professional development, health insurance, pension contributions, and on-call compensation where applicable.
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
                  Consistent demand for network engineers in Ireland with over 800 positions advertised annually. Cloud and hybrid work create new networking challenges and opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Cloud networking adoption</li>
                  <li>• Remote work infrastructure</li>
                  <li>• Network modernization projects</li>
                  <li>• SD-WAN implementations</li>
                  <li>• 5G and WiFi 6 deployments</li>
                  <li>• IoT device proliferation</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Network Engineering Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Level 7/8 in Network Engineering, Computer Networks, or IT from Irish Technological Universities. Practical skills often more important than degree level.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Cisco Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    CCNA (Cisco Certified Network Associate) highly valued and can enable entry without degree. CCNP for career advancement. Many Irish employers prioritize certifications.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Apprenticeship Route</h4>
                  <p className="text-gray-700 mt-2">
                    Network apprenticeships available in Ireland combining work experience with study. Excellent practical training path.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• TCP/IP and OSI model</li>
                  <li>• Routing protocols</li>
                  <li>• Switching and VLANs</li>
                  <li>• Network security basics</li>
                  <li>• Cisco/Juniper CLI</li>
                  <li>• Network monitoring</li>
                  <li>• Troubleshooting methodology</li>
                  <li>• Cloud networking</li>
                  <li>• Documentation skills</li>
                  <li>• VPN configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Networks?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for network engineering careers.
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

