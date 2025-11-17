'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ElectricalEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Electrical Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design and test electrical systems and equipment. Work on power systems, electronics, electrical infrastructure, and energy distribution.
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
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Electrical Engineers design, develop, and test electrical equipment and systems. They work on power generation and distribution, building electrical systems, renewable energy, control systems, and industrial automation. This foundational engineering discipline underpins modern infrastructure and technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's renewable energy sector, utilities, manufacturing, and data centers employ electrical engineers. Growing focus on sustainable energy creates excellent opportunities in wind, solar, and smart grid technologies.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design electrical systems and equipment</li>
                <li>Develop power distribution systems</li>
                <li>Work on renewable energy projects</li>
                <li>Design control and automation systems</li>
                <li>Test electrical equipment</li>
                <li>Ensure compliance with regulations</li>
                <li>Use CAD tools for design</li>
                <li>Troubleshoot electrical systems</li>
                <li>Project management</li>
                <li>Collaborate with multidisciplinary teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Electrical Systems</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Power systems engineering</li>
                  <li>• Circuit analysis</li>
                  <li>• Electrical design</li>
                  <li>• Control systems</li>
                  <li>• Power electronics</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Tools & Standards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• CAD tools (AutoCAD Electrical)</li>
                  <li>• Simulation software (MATLAB)</li>
                  <li>• Testing equipment</li>
                  <li>• Electrical codes and standards</li>
                  <li>• Project management tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Safety awareness</li>
                  <li>• Teamwork</li>
                  <li>• Project management</li>
                  <li>• Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€36,000 - €68,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Graduate electrical engineers earn €36,000-€43,000, mid-level engineers earn €46,000-€60,000, while senior/chartered engineers command €62,000-€78,000.
            </p>
            <p className="text-lg text-gray-700">
              Renewable energy sector offers premium salaries. Benefits include health insurance, pension contributions, professional development towards Chartered Engineer status, company vehicles for site roles, and career stability in essential infrastructure sector.
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
                  Growing demand driven by renewable energy expansion. Over 600 electrical engineer positions advertised annually in Ireland. Excellent career stability in essential sector.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Renewable energy expansion</li>
                  <li>• Smart grid development</li>
                  <li>• Data center construction</li>
                  <li>• Electric vehicle infrastructure</li>
                  <li>• Building electrification</li>
                  <li>• Infrastructure upgrades</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Engineering Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Electrical Engineering or Electronic & Electrical Engineering from Irish universities (UCD, UCC, UL, TCD). 4-year accredited programs.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Chartered Engineer (CEng)</h4>
                  <p className="text-gray-700 mt-2">
                    Professional registration through Engineers Ireland after degree plus 4-5 years experience. Essential for senior roles and consulting.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Electrical circuit theory</li>
                  <li>• Power systems</li>
                  <li>• Control systems</li>
                  <li>• Renewable energy systems</li>
                  <li>• Power electronics</li>
                  <li>• Electrical machines</li>
                  <li>• High voltage engineering</li>
                  <li>• Protection and distribution</li>
                  <li>• Electrical design and CAD</li>
                  <li>• Regulations and standards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Power the Future?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for electrical engineering careers.
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

