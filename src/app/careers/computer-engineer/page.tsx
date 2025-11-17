'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ComputerEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Combine electrical engineering and computer science. Design computer hardware, embedded systems, IoT devices, and the intersection of hardware and software.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Engineering</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Computer Engineers bridge hardware and software, designing computer systems from processors to embedded devices. They work on computer architecture, hardware-software integration, IoT systems, and computing infrastructure. This interdisciplinary role requires expertise in both electrical engineering and computer science.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech sector employs computer engineers at companies like Intel, IBM, and innovative startups developing next-generation computing systems. The role offers diverse opportunities from chip design to IoT innovation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design computer hardware systems</li>
                <li>Develop embedded systems</li>
                <li>Program firmware and low-level software</li>
                <li>Work on IoT device development</li>
                <li>Design processor architectures</li>
                <li>Optimize hardware-software integration</li>
                <li>Test and debug hardware systems</li>
                <li>Develop FPGA designs</li>
                <li>Work with real-time systems</li>
                <li>Collaborate across engineering teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Hardware</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Computer architecture</li>
                  <li>• Digital logic design</li>
                  <li>• Embedded systems</li>
                  <li>• FPGA programming</li>
                  <li>• Hardware description languages</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Software</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• C/C++ programming</li>
                  <li>• Assembly language</li>
                  <li>• Operating systems</li>
                  <li>• Real-time systems</li>
                  <li>• Device drivers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Systems thinking</li>
                  <li>• Debugging skills</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€38,000 - €70,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Graduate computer engineers earn €38,000-€45,000, mid-level engineers earn €48,000-€62,000, while senior engineers command €65,000-€80,000. Specialists at semiconductor companies can earn €85,000+.
            </p>
            <p className="text-lg text-gray-700">
              Interdisciplinary skills command good salaries. Benefits include health insurance, pension contributions, professional development, and opportunities at globally recognized tech companies in Ireland.
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
                  Growing demand in Ireland's tech sector. Over 400 computer engineer positions advertised annually. Strong opportunities in semiconductor, IoT, and embedded systems companies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• IoT explosion</li>
                  <li>• Edge computing growth</li>
                  <li>• Smart device proliferation</li>
                  <li>• Automotive computing</li>
                  <li>• Next-generation processors</li>
                  <li>• Embedded AI systems</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Engineering Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Engineering or Electronic & Computer Engineering from Irish universities (UCD, UCC, TCD). 4-year programs combining electrical engineering and computer science.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Master's Specialization</h4>
                  <p className="text-gray-700 mt-2">
                    MSc in Embedded Systems or Computer Engineering for advanced roles. Many pursue part-time while working.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Computer architecture</li>
                  <li>• Digital logic design</li>
                  <li>• Embedded systems programming</li>
                  <li>• Microprocessors and microcontrollers</li>
                  <li>• Operating systems</li>
                  <li>• FPGA design (VHDL, Verilog)</li>
                  <li>• Computer networks</li>
                  <li>• Real-time systems</li>
                  <li>• Hardware-software co-design</li>
                  <li>• IoT systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Computing Systems?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for computer engineering careers.
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

