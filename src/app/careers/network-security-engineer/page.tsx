'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function NetworkSecurityEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Network Security Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Secure network infrastructure and communications. Design firewalls, VPNs, intrusion detection systems, and protect organizational networks from cyber threats.
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
                Network Security Engineers protect organizational networks from intrusions, attacks, and unauthorized access. They design and implement network security architectures, configure firewalls and VPNs, monitor network traffic for threats, and ensure secure communications. This role requires deep understanding of both networking and security principles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech sector relies heavily on network security engineers to protect infrastructure for companies serving European markets. With hybrid and remote work proliferation, securing network access has become increasingly critical.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design secure network architectures</li>
                <li>Configure and maintain firewalls</li>
                <li>Implement VPN solutions</li>
                <li>Deploy IDS/IPS systems</li>
                <li>Monitor network traffic for threats</li>
                <li>Perform security assessments</li>
                <li>Respond to network security incidents</li>
                <li>Implement network segmentation</li>
                <li>Manage security policies</li>
                <li>Document network security configurations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Network Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Firewalls (Palo Alto, Cisco ASA)</li>
                  <li>• VPN technologies</li>
                  <li>• IDS/IPS (Snort, Suricata)</li>
                  <li>• Network segmentation</li>
                  <li>• Zero Trust architecture</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Networking</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TCP/IP protocols</li>
                  <li>• Routing and switching</li>
                  <li>• Network design</li>
                  <li>• Cisco/Juniper equipment</li>
                  <li>• WiFi security</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Analytical thinking</li>
                  <li>• Documentation</li>
                  <li>• Communication</li>
                  <li>• Attention to detail</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€40,000 - €75,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior network security engineers earn €40,000-€50,000, mid-level engineers earn €55,000-€68,000, while senior engineers command €70,000-€85,000.
            </p>
            <p className="text-lg text-gray-700">
              Salaries reflect strong demand for network security expertise. Benefits include certification funding (CCNP Security, CISSP), professional development, health insurance, and flexible working arrangements.
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
                  Strong demand for network security engineers in Ireland with over 500 positions advertised annually. Hybrid work and cloud adoption drive need for secure network access solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Remote work security needs</li>
                  <li>• Cloud network security</li>
                  <li>• Zero Trust adoption</li>
                  <li>• Increasing network attacks</li>
                  <li>• Regulatory compliance</li>
                  <li>• SD-WAN security</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Network + Security Background</h4>
                  <p className="text-gray-700 mt-2">
                    Networking degree/certification plus security training. CCNA Security or CompTIA Security+ plus networking experience common path.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Cyber Security Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Cyber Security degree with networking focus from Irish universities. Professional certifications enhance employability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Network protocols (TCP/IP)</li>
                  <li>• Firewall configuration</li>
                  <li>• VPN implementation</li>
                  <li>• IDS/IPS deployment</li>
                  <li>• Network monitoring</li>
                  <li>• Security architecture</li>
                  <li>• Cisco/Palo Alto technologies</li>
                  <li>• Network troubleshooting</li>
                  <li>• Security policy development</li>
                  <li>• Incident response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Networks?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover network security engineering.
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

