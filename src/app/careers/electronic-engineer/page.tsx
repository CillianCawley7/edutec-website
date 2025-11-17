'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ElectronicEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Electronic Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design and develop electronic systems and components. Work on circuits, embedded systems, electronic devices, and modern technology products.
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
                Electronic Engineers design and develop electronic systems, circuits, and devices. They work on everything from consumer electronics to medical devices, telecommunications equipment, and IoT systems. This role combines theoretical knowledge with practical problem-solving to create innovative electronic solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's strong manufacturing and medical device sectors employ electronic engineers designing products used globally. Companies like Analog Devices, Intel, and numerous MedTech firms offer excellent opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design electronic circuits and systems</li>
                <li>Develop embedded systems</li>
                <li>Test and debug electronic designs</li>
                <li>Work with PCB design tools</li>
                <li>Program microcontrollers</li>
                <li>Analyze system performance</li>
                <li>Collaborate with other engineers</li>
                <li>Document designs and specifications</li>
                <li>Ensure compliance with standards</li>
                <li>Troubleshoot electronic issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Electronics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Circuit design and analysis</li>
                  <li>• Embedded systems</li>
                  <li>• PCB design (Altium, Eagle)</li>
                  <li>• Analog and digital electronics</li>
                  <li>• Signal processing</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Programming</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• C/C++ for embedded systems</li>
                  <li>• Microcontroller programming</li>
                  <li>• MATLAB/Simulink</li>
                  <li>• FPGA programming (VHDL, Verilog)</li>
                  <li>• Python for automation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Analytical thinking</li>
                  <li>• Attention to detail</li>
                  <li>• Teamwork</li>
                  <li>• Project management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€35,000 - €65,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Graduate electronic engineers earn €35,000-€42,000, mid-level engineers earn €45,000-€58,000, while senior engineers command €60,000-€75,000. Principal engineers can earn €80,000+.
            </p>
            <p className="text-lg text-gray-700">
              MedTech and semiconductor sectors typically pay premium salaries. Benefits include health insurance, pension contributions, professional development, and career progression opportunities in Ireland's strong manufacturing sector.
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
                  Steady demand in Ireland's manufacturing and MedTech sectors. Over 500 electronic engineer positions advertised annually. Strong graduate recruitment programs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• IoT device proliferation</li>
                  <li>• Medical device innovation</li>
                  <li>• Smart technology demand</li>
                  <li>• Semiconductor industry growth</li>
                  <li>• Renewable energy systems</li>
                  <li>• Automotive electronics</li>
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
                    Electronic Engineering or Electronic & Computer Engineering from Irish universities (UL, UCC, UCD, TCD). 4-year programs accredited by Engineers Ireland.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Registration</h4>
                  <p className="text-gray-700 mt-2">
                    Chartered Engineer (CEng) status through Engineers Ireland enhances career prospects. Typically achieved after 4-5 years professional experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Circuit theory and analysis</li>
                  <li>• Digital electronics</li>
                  <li>• Embedded systems</li>
                  <li>• Signal processing</li>
                  <li>• Microprocessors and microcontrollers</li>
                  <li>• PCB design</li>
                  <li>• Control systems</li>
                  <li>• Power electronics</li>
                  <li>• Communications systems</li>
                  <li>• Electronic design automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Design Electronic Systems?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for electronic engineering careers.
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

