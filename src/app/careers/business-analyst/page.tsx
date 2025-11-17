'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function BusinessAnalystPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Analyst</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Analyze business processes and identify technology solutions. Bridge business stakeholders and technical teams to drive organizational improvement.
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
                Business Analysts identify business needs and determine solutions to business problems. They gather requirements, analyze processes, document specifications, and ensure technology solutions meet business objectives. This role requires understanding both business operations and technology capabilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish organizations across all sectors employ business analysts to optimize operations and drive digital initiatives. The role offers excellent career progression towards product management, project management, or senior business roles.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Gather and document business requirements</li>
                <li>Analyze business processes</li>
                <li>Create functional specifications</li>
                <li>Facilitate stakeholder workshops</li>
                <li>Model business processes</li>
                <li>Bridge business and technical teams</li>
                <li>Support system implementations</li>
                <li>Conduct gap analysis</li>
                <li>Create business cases</li>
                <li>Test and validate solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Analysis Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Requirements elicitation</li>
                  <li>• Process analysis</li>
                  <li>• Business modeling</li>
                  <li>• Gap analysis</li>
                  <li>• Data analysis</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modeling tools (UML, BPMN)</li>
                  <li>• SQL basics</li>
                  <li>• Requirements management tools</li>
                  <li>• Data visualization</li>
                  <li>• Agile methodologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication</li>
                  <li>• Stakeholder management</li>
                  <li>• Documentation</li>
                  <li>• Facilitation</li>
                  <li>• Critical thinking</li>
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
              Junior business analysts earn €35,000-€42,000, mid-level analysts earn €45,000-€58,000, while senior analysts command €60,000-€75,000.
            </p>
            <p className="text-lg text-gray-700">
              Good career progression opportunities. Benefits include health insurance, pension contributions, professional development (BCS, IIBA certifications), and increasingly common hybrid working arrangements in Irish companies.
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
                  Strong demand across Irish organizations. Over 700 business analyst positions advertised annually. Digital transformation and process improvement drive continued growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital transformation projects</li>
                  <li>• Process optimization needs</li>
                  <li>• Agile adoption</li>
                  <li>• System implementations</li>
                  <li>• Business-IT alignment</li>
                  <li>• Data-driven decision making</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 7/8 Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Business, Business Information Systems, Computer Science, or related fields from Irish universities. Blend of business and technical understanding valued.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    BCS Business Analysis certification, IIBA CBAP, or Agile BA certifications enhance career prospects. Many Irish employers support certification.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Career Transition</h4>
                  <p className="text-gray-700 mt-2">
                    Common transitions from business roles (operations, finance) or technical roles (testing, support) into business analysis with relevant experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Requirements gathering techniques</li>
                  <li>• Process modeling (BPMN)</li>
                  <li>• Use case development</li>
                  <li>• User story writing</li>
                  <li>• Stakeholder engagement</li>
                  <li>• Business case development</li>
                  <li>• SQL and data analysis</li>
                  <li>• Agile methodologies</li>
                  <li>• Documentation skills</li>
                  <li>• Facilitation techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Business Analyst?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for business analyst careers.
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

